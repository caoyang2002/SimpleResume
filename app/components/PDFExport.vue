<!-- components/PDFExport.vue -->
<template>
  <div class="pdf-exporter">
    <!-- 方案1：直接打印（最简单） -->
    <button 
      @click="handlePrint"
      class="export-btn export-btn-primary"
      title="使用浏览器打印功能"
    >
      <i class="fas fa-print"></i>
      浏览器打印
    </button>
    
    <!-- 方案2：打印窗口（推荐） -->
    <button 
      @click="handlePrintWindow"
      class="export-btn export-btn-success"
      title="推荐：样式完美保留"
    >
      <i class="fas fa-file-pdf"></i>
      导出 PDF（推荐）
    </button>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { pdfExportState } from '~/composables/usePDFExport';

const {  exportViaPrint, exportViaPrintWindow } = pdfExportState;
const loading = ref(false);

// 方案1：浏览器原生打印
const handlePrint = () => {
  try {
    exportViaPrint();
  } catch (error) {
    alert('打印失败: ' + (error as Error).message);
  }
};

// 方案2：打印窗口（推荐）
const handlePrintWindow = () => {
  try {
    exportViaPrintWindow();
  } catch (error) {
    alert('导出失败: ' + (error as Error).message);
  }
};

</script>

<style scoped>
.pdf-exporter {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.export-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.export-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.export-btn:active:not(:disabled) {
  transform: translateY(0);
}

.export-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.export-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.export-btn-primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #5568d3 0%, #63408a 100%);
}

.export-btn-success {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.export-btn-success:hover:not(:disabled) {
  background: linear-gradient(135deg, #e080e8 0%, #dc4a5c 100%);
}

.export-btn-secondary {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.export-btn-secondary:hover:not(:disabled) {
  background: linear-gradient(135deg, #3d9ae5 0%, #00d9e5 100%);
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 打印时隐藏导出按钮 */
@media print {
  .pdf-exporter {
    display: none !important;
  }
}
</style>