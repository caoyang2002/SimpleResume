<!-- PrintPreview.vue -->
<template>
  <div class="print-preview">
    <!-- 打印预览头部 -->
    <div class="print-preview-header">
      <button @click="closePreview" class="close-button">
        <i class="fas fa-times"></i> 关闭
      </button>
      <button @click="printResume" class="print-button">
        <i class="fas fa-print"></i> 打印简历
      </button>
    </div>

    <!-- 简历内容 -->
    <div class="preview-content">
      <ResumeRenderer
        :form-data="formData"
        :template="template"
        :hide-print-button="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { Template, ResumeData } from '~/types/template'

interface Props {
  formData: ResumeData
   template: Template
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// 打印功能
const printResume = () => {
  // 添加打印样式
  const printStyle = document.createElement('style')
  printStyle.innerHTML = `
    @media print {
      .print-preview-header {
        display: none !important;
      }
      body {
        margin: 0 !important;
        padding: 0 !important;
      }
      .print-preview {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .preview-content {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    }
    
    @page {
      margin: 0.5in;
      size: A4;
    }
  `
  document.head.appendChild(printStyle)

  // 直接打印
  window.print()

  // 打印完成后移除样式
  setTimeout(() => {
    document.head.removeChild(printStyle)
  }, 1000)
}

// 关闭预览
const closePreview = () => {
  emit('close')
}

// 键盘事件监听
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closePreview()
  }
  if (event.ctrlKey && event.key === 'p') {
    event.preventDefault()
    printResume()
  }
}

// 添加键盘事件监听
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  // 防止背景滚动
  document.body.style.overflow = 'hidden'
})

// 清理
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.print-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.print-preview-header {
  background: #fff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10001;
}

.close-button,
.print-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.close-button {
  background: #f44336;
  color: white;
}

.close-button:hover {
  background: #d32f2f;
}

.print-button {
  background: #4CAF50;
  color: white;
}

.print-button:hover {
  background: #45a049;
}

.preview-content {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  background: #f5f5f5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .print-preview-header {
    padding: 10px 15px;
    flex-direction: column;
    gap: 10px;
  }
  
  .preview-content {
    padding: 10px;
  }
}

/* 打印样式 */
@media print {
  .print-preview {
    position: static;
    background: transparent;
    width: 100%;
    height: auto;
  }
  
  .print-preview-header {
    display: none;
  }
  
  .preview-content {
    padding: 0;
    background: transparent;
  }
}
</style>