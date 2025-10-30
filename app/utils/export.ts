import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * 导出简历为PDF
 */
export const exportResumeToPDF = async (
  element: HTMLElement,
  options: {
    filename?: string
    scale?: number
    quality?: number
  } = {}
): Promise<void> => {
  const {
    filename = 'resume.pdf',
    scale = 2,
    quality = 1
  } = options

  try {
    // 创建canvas
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight
    })

    // 创建PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgWidth = 210 // A4宽度
    const pageHeight = 295 // A4高度
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    
    let heightLeft = imgHeight
    let position = 0

    // 添加第一页
    pdf.addImage(
      canvas.toDataURL('image/jpeg', quality),
      'JPEG',
      0,
      position,
      imgWidth,
      imgHeight
    )
    heightLeft -= pageHeight

    // 如果需要多页
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(
        canvas.toDataURL('image/jpeg', quality),
        'JPEG',
        0,
        position,
        imgWidth,
        imgHeight
      )
      heightLeft -= pageHeight
    }

    // 下载PDF
    pdf.save(filename)
    
    return Promise.resolve()
  } catch (error) {
    console.error('导出PDF失败:', error)
    return Promise.reject(error)
  }
}

/**
 * 导出简历为图片
 */
export const exportResumeToImage = async (
  element: HTMLElement,
  options: {
    filename?: string
    format?: 'png' | 'jpeg'
    quality?: number
    scale?: number
  } = {}
): Promise<void> => {
  const {
    filename = 'resume.png',
    format = 'png',
    quality = 1,
    scale = 2
  } = options

  try {
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight
    })

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg'
    const dataUrl = canvas.toDataURL(mimeType, quality)
    
    // 创建下载链接
    const link = document.createElement('a')
    link.download = filename
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    return Promise.resolve()
  } catch (error) {
    console.error('导出图片失败:', error)
    return Promise.reject(error)
  }
}

/**
 * 导出简历为Word文档
 */
export const exportResumeToWord = async (
  element: HTMLElement,
  options: {
    filename?: string
  } = {}
): Promise<void> => {
  const { filename = 'resume.docx' } = options

  try {
    // 获取HTML内容
    const content = element.innerHTML
    
    // 创建Word文档的HTML结构
    const wordContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 2cm;
          }
          .resume-section {
            margin-bottom: 20px;
          }
          .section-title {
            font-size: 16px;
            font-weight: bold;
            border-bottom: 2px solid #333;
            padding-bottom: 5px;
            margin-bottom: 10px;
          }
          .item {
            margin-bottom: 15px;
          }
          .item-title {
            font-weight: bold;
            font-size: 14px;
          }
          .item-subtitle {
            color: #666;
            font-size: 13px;
          }
          .item-date {
            float: right;
            color: #666;
          }
          .item-description {
            margin: 5px 0;
          }
          .item-list {
            margin: 5px 0;
            padding-left: 20px;
          }
          .tech-tags {
            margin-top: 5px;
          }
          .tech-tag {
            display: inline-block;
            background: #f0f0f0;
            padding: 2px 8px;
            margin: 2px;
            border-radius: 3px;
            font-size: 12px;
          }
          @media print {
            body { margin: 1cm; }
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `

    // 创建Blob对象
    const blob = new Blob([wordContent], {
      type: 'application/msword'
    })
    
    // 创建下载链接
    const link = document.createElement('a')
    link.download = filename
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // 清理URL
    setTimeout(() => URL.revokeObjectURL(link.href), 100)
    
    return Promise.resolve()
  } catch (error) {
    console.error('导出Word失败:', error)
    return Promise.reject(error)
  }
}

/**
 * 复制文本到剪贴板
 */
export const copyTextToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // 降级方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      const result = document.execCommand('copy')
      document.body.removeChild(textArea)
      return result
    }
  } catch (error) {
    console.error('复制到剪贴板失败:', error)
    return false
  }
}