// composables/usePDFExport.ts
export const usePDFExport = () => {
  const exportElement = ref<HTMLElement | null>(null);
  
  const setExportElement = (element: HTMLElement) => {
    exportElement.value = element;
  };
  
  /**
   * 方案A：使用浏览器原生打印功能（最简单、最可靠）
   */
  const exportViaPrint = () => {
    window.print();
  };
  
  /**
   * 方案B：创建打印预览窗口（推荐方案）
   */
  const exportViaPrintWindow = () => {
    if (!exportElement.value) {
      throw new Error('请先注册导出元素');
    }
    
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
      throw new Error('无法打开打印窗口，请检查浏览器弹窗设置');
    }
    
    // 收集所有样式
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          console.warn('无法读取某些外部样式表');
          return '';
        }
      })
      .join('\n');
    
    // 收集内联样式
    const inlineStyles = Array.from(document.querySelectorAll('style'))
      .map(style => style.innerHTML)
      .join('\n');
    
    // 构建完整的 HTML
    const content = `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>简历导出</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <style>
          /* 收集的样式 */
          ${styles}
          ${inlineStyles}
          
          /* 打印优化 */
          @page {
            size: A4;
            margin: 0;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          /* 确保所有元素可见 */
          .resume-renderer,
          .resume-renderer * {
            visibility: visible !important;
            display: block !important;
          }
          
          .resume-renderer .contact-item,
          .resume-renderer span {
            display: inline-flex !important;
          }
        </style>
      </head>
      <body>
        ${exportElement.value.outerHTML}
        <script>
          window.onload = function() {
            // 等待资源加载
            setTimeout(function() {
              window.print();
              // 可选：打印后关闭窗口
              // window.onafterprint = function() { 
              //   setTimeout(() => window.close(), 100); 
              // };
            }, 500);
          };
        </script>
      </body>
      </html>
    `;
    
    printWindow.document.write(content);
    printWindow.document.close();
  };
  
  
  
  return {
    exportElement,
    setExportElement,
    exportViaPrint,
    exportViaPrintWindow
  };
};

// 创建全局状态
export const pdfExportState = usePDFExport();