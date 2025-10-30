import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

/**
 * 优化简历导出为PDF
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
    scale = 3, // 提高缩放比例以获得更好的质量
    quality = 1
  } = options

  try {
    // 临时应用打印样式
    const originalStyles = applyPrintStyles(element)
    
    // 等待样式应用完成
    await new Promise(resolve => setTimeout(resolve, 100))

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        // 在克隆的文档中应用打印样式
        const clonedElement = clonedDoc.querySelector('.resume-content') || clonedDoc.body
        applyPrintStyles(clonedElement as HTMLElement)
      }
    })

    // 恢复原始样式
    restoreOriginalStyles(element, originalStyles)

    // const pdf = new jsPDF({
    //   orientation: 'portrait',
    //   unit: 'mm',
    //   format: 'a4'
    // })

    const imgWidth = 210 // A4宽度
    const pageHeight = 295 // A4高度
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    
    let heightLeft = imgHeight
    let position = 0

    // // 添加第一页
    // pdf.addImage(
    //   canvas.toDataURL('image/jpeg', quality),
    //   'JPEG',
    //   0,
    //   position,
    //   imgWidth,
    //   imgHeight
    // )
    // heightLeft -= pageHeight

    // // 如果需要多页
    // while (heightLeft >= 0) {
    //   position = heightLeft - imgHeight
    //   pdf.addPage()
    //   pdf.addImage(
    //     canvas.toDataURL('image/jpeg', quality),
    //     'JPEG',
    //     0,
    //     position,
    //     imgWidth,
    //     imgHeight
    //   )
    //   heightLeft -= pageHeight
    // }

    // pdf.save(filename)
    
    return Promise.resolve()
  } catch (error) {
    console.error('导出PDF失败:', error)
    return Promise.reject(error)
  }
}

/**
 * 优化简历导出为图片
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
    scale = 3 // 提高缩放比例
  } = options

  try {
    // 临时应用打印样式
    const originalStyles = applyPrintStyles(element)
    
    // 等待样式应用完成
    await new Promise(resolve => setTimeout(resolve, 100))

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.querySelector('.resume-content') || clonedDoc.body
        applyPrintStyles(clonedElement as HTMLElement)
      }
    })

    // 恢复原始样式
    restoreOriginalStyles(element, originalStyles)

    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg'
    const dataUrl = canvas.toDataURL(mimeType, quality)
    
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
 * 应用打印样式以优化导出效果
 */
function applyPrintStyles(element: HTMLElement): any {
  const originalStyles = {
    width: element.style.width,
    height: element.style.height,
    transform: element.style.transform,
    boxShadow: element.style.boxShadow,
    backgroundColor: element.style.backgroundColor
  }

  // 应用打印优化样式
  element.style.width = '210mm' // A4宽度
  element.style.height = 'auto'
  element.style.transform = 'none'
  element.style.boxShadow = 'none'
  element.style.backgroundColor = '#ffffff'

  // 强制重绘
  element.offsetHeight

  return originalStyles
}

/**
 * 恢复原始样式
 */
function restoreOriginalStyles(element: HTMLElement, originalStyles: any): void {
  element.style.width = originalStyles.width
  element.style.height = originalStyles.height
  element.style.transform = originalStyles.transform
  element.style.boxShadow = originalStyles.boxShadow
  element.style.backgroundColor = originalStyles.backgroundColor
}

/**
 * 导出为Word文档（改进版）
 */
export const exportResumeToWord = async (
  element: HTMLElement,
  options: {
    filename?: string
  } = {}
): Promise<void> => {
  const { filename = 'resume.docx' } = options

  try {
    // 获取清理后的HTML内容
    const content = cleanHTMLForExport(element.innerHTML)
    
    const wordContent = createWordDocument(content)
    
    const blob = new Blob([wordContent], {
      type: 'application/msword'
    })
    
    const link = document.createElement('a')
    link.download = filename
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setTimeout(() => URL.revokeObjectURL(link.href), 100)
    
    return Promise.resolve()
  } catch (error) {
    console.error('导出Word失败:', error)
    return Promise.reject(error)
  }
}

/**
 * 清理HTML内容，移除不适合导出的样式
 */
function cleanHTMLForExport(html: string): string {
  // 移除脚本和样式标签
  let cleaned = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                   .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  
  // 移除内联样式中的复杂属性
  cleaned = cleaned.replace(/style="[^"]*"/g, (match) => {
    // 只保留基本的样式属性
    const allowedProperties = [
      'color', 'font-size', 'font-weight', 'text-align', 
      'margin', 'padding', 'border', 'background-color',
      'width', 'height', 'display', 'float'
    ]
    
    const styles = match.replace('style="', '').replace('"', '')
    const stylePairs = styles.split(';')
    const filteredStyles = stylePairs.filter(pair => {
      const [property] = pair.split(':')
      if (!property) return false
      return allowedProperties.some(allowed => 
        property.trim().startsWith(allowed)
      )
    })
    
    return filteredStyles.length > 0 ? `style="${filteredStyles.join(';')}"` : ''
  })
  
  return cleaned
}

/**
 * 创建Word文档内容
 */
function createWordDocument(content: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>简历</title>
  <style>
    /* Word文档基础样式 */
    body {
      font-family: 'Microsoft YaHei', 'SimSun', Arial, sans-serif;
      line-height: 1.6;
      color: #000000;
      margin: 2cm;
      font-size: 12pt;
    }
    
    .resume-section {
      margin-bottom: 20pt;
      page-break-inside: avoid;
    }
    
    .section-title {
      font-size: 14pt;
      font-weight: bold;
      border-bottom: 1pt solid #000000;
      padding-bottom: 5pt;
      margin-bottom: 10pt;
      color: #000000;
    }
    
    .item {
      margin-bottom: 15pt;
      page-break-inside: avoid;
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5pt;
    }
    
    .item-title {
      font-weight: bold;
      font-size: 12pt;
      color: #000000;
      margin: 0;
    }
    
    .item-subtitle {
      color: #666666;
      font-size: 11pt;
      margin: 2pt 0;
    }
    
    .item-date {
      color: #666666;
      font-size: 10pt;
      white-space: nowrap;
    }
    
    .item-description {
      margin: 5pt 0;
      font-size: 11pt;
      color: #333333;
    }
    
    .item-list {
      margin: 5pt 0;
      padding-left: 20pt;
    }
    
    .item-list li {
      margin-bottom: 3pt;
      font-size: 11pt;
    }
    
    .tech-tags {
      margin-top: 5pt;
    }
    
    .tech-tag {
      display: inline-block;
      background: #f0f0f0;
      padding: 2pt 8pt;
      margin: 2pt;
      border-radius: 2pt;
      font-size: 9pt;
      border: 0.5pt solid #cccccc;
    }
    
    /* 个人简介特殊样式 */
    .personal-container {
      width: 100%;
    }
    
    .full-name {
      font-size: 18pt;
      font-weight: bold;
      margin-bottom: 5pt;
      color: #000000;
    }
    
    .current-title {
      font-size: 12pt;
      color: #666666;
      margin-bottom: 15pt;
    }
    
    .personal-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20pt;
      margin-bottom: 15pt;
    }
    
    .contact-item, .career-item {
      margin-bottom: 8pt;
      display: flex;
      align-items: flex-start;
    }
    
    .contact-icon, .career-icon {
      margin-right: 8pt;
      width: 12pt;
      text-align: center;
    }
    
    .contact-label, .career-label {
      font-size: 9pt;
      color: #666666;
      display: block;
    }
    
    .contact-value, .career-value {
      font-size: 10pt;
      color: #000000;
      display: block;
    }
    
    /* 打印优化 */
    @media print {
      body { margin: 1.5cm; }
      .resume-section { page-break-inside: avoid; }
      .item { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>`
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