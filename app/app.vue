<template>
  <Tips v-if="!showPreview"/>
  <PrintPreview v-if="showPreview && selectedTemplate" :form-data="formData" :template="selectedTemplate"
              @close="hidePrintPreview" />
  <div class="resume-page" v-if="!showPreview">

    <!-- 步骤 1: 选择模板 -->
    <div v-if="currentStep === 1" class="step-container">
      <TemplateSelector v-model="selectedTemplateId" :sample-data="sampleData" @select="handleTemplateSelect" />

      <div class="action-bar">
        <button @click="goToNextStep" class="btn-primary" :disabled="!selectedTemplateId">
          <i class="fas fa-arrow-right"></i>
          下一步：填写信息
        </button>
      </div>
    </div>

    <!-- 步骤 2: 填写信息 + 实时预览 -->
    <div v-else-if="currentStep === 2" class="step-container" >
      <div class="grid grid-cols-2 gap-4 mb-8">
        <!-- 实时预览 -->
        <div class="preview-section">
          <div class="preview-sticky">
            <div class="preview-header">
              <h3>实时预览（A4）</h3>
              <div class="preview-actions">
                <button @click="zoomOut" class="icon-btn" title="缩小">
                  <i class="fas fa-search-minus"></i>
                </button>
                <span class="zoom-level">{{ Math.round(previewZoom * 100) }}%</span>
                <button @click="zoomIn" class="icon-btn" title="放大">
                  <i class="fas fa-search-plus"></i>
                </button>
                <button @click="resetZoom" class="icon-btn" title="重置缩放">
                  <i class="fas fa-sync-alt"></i>
                </button>
              </div>
            
              <button @click="showPrintPreview" class="preview-print-button">
                <i class="fas fa-print"></i> 打印预览
              </button>
            </div>

          <div class="preview-container">
  <div ref="resumeContent" class="resume-content">
    <div class="resume-scaler" :style="{ transform: `scale(${previewZoom})` }">
      <ResumeRenderer v-if="selectedTemplate" :form-data="formData" :template="selectedTemplate" />
    </div>
  </div>
</div>

          </div>
        </div>

        <!-- 表单编辑 -->
        <div class="form-section" >
          <div class="form-header">
            <h2>编辑简历信息</h2>
            <p>填写您的个人信息，左侧实时预览</p>
          </div>
          <div></div>
          <ResumeForm v-model="formData"  />
          <div class="action-bar">
            <button @click="currentStep = 1" class="btn-secondary">
              <i class="fas fa-arrow-left"></i>
              上一步
            </button>
            <!-- <button @click="handleSaveDraft" class="btn-secondary">
              <i class="fas fa-save"></i>
              保存草稿
            </button> -->
            <!-- <button @click="handleExport" class="btn-primary" :disabled="exporting">
              <i class="fas fa-download"></i>
              {{ exporting ? '导出中...' : '导出简历' }}
            </button> -->
          </div>
        </div>
      </div>
    </div>

    <!-- <Teleport to="body" >
      <div v-if="showExportModal" class="export-modal" @click="showExportModal = false">
        <div class="modal-content" @click.stop>
          <header class="modal-header">
            <h3>导出简历</h3>
            <button @click="showExportModal = false" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <div class="modal-body">
            <div class="export-options">
              <button @click="handleExportPDF" class="export-option" :disabled="exporting">
                <i class="fas fa-file-pdf"></i>
                <div>
                  <h4>导出为 PDF</h4>
                  <p>适合打印和投递</p>
                </div>
                <i v-if="exporting && currentExportType === 'pdf'" class="fas fa-spinner fa-spin"></i>
              </button>

              <button @click="handleExportImage" class="export-option" :disabled="exporting">
                <i class="fas fa-image"></i>
                <div>
                  <h4>导出为图片</h4>
                  <p>适合在线分享</p>
                </div>
                <i v-if="exporting && currentExportType === 'image'" class="fas fa-spinner fa-spin"></i>
              </button>

              <button @click="handleExportToWord" class="export-option" :disabled="exporting">
                <i class="fas fa-file-word"></i>
                <div>
                  <h4>导出为 Word</h4>
                  <p>可继续编辑</p>
                </div>
                <i v-if="exporting && currentExportType === 'word'" class="fas fa-spinner fa-spin"></i>
              </button>
            </div>

            <div v-if="exportError" class="error-message">
              <i class="fas fa-exclamation-triangle"></i>
              {{ exportError }}
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <Teleport to="body" >
      <div v-if="showSuccessToast" class="success-toast">
        <i class="fas fa-check-circle"></i>
        <span>{{ successMessage }}</span>
      </div>
    </Teleport> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import TemplateSelector from '~/components/TemplateSelector.vue'
import ResumeRenderer from '~/components/ResumeRenderer.vue'
import ResumeForm from '~/components/ResumeForm.vue'
import { templates, getTemplateById } from '~/config/templates'
import { getSampleResumeData } from '~/config/exampleTemplate'
import { exportResumeToPDF, exportResumeToImage, exportResumeToWord } from '~/utils/export'
import type { Template, ResumeData } from '~/types/template'
import "./assets/css/main.css"
import PrintPreview from '~/components/PrintPreview.vue'


// 打印预览状态
const showPreview = ref(false)

// 显示打印预览
const showPrintPreview = () => {
  showPreview.value = true
}
// 隐藏打印预览
const hidePrintPreview = () => {
  showPreview.value = false
}


// 状态管理
const currentStep = ref(1)
const selectedTemplateId = ref<string>('')
const sampleData = getSampleResumeData()
const formData = ref<ResumeData>(getSampleResumeData())
const previewZoom = ref(1) // 初始大小
const showExportModal = ref(false)
const exporting = ref(false)
const currentExportType = ref<'pdf' | 'image' | 'word' | null>(null)
const exportError = ref('')
const showSuccessToast = ref(false)
const successMessage = ref('')
const resumeContent = ref<HTMLElement>()

// 计算属性
const selectedTemplate = computed(() => {
  return selectedTemplateId.value ? getTemplateById(selectedTemplateId.value) : null
})

// 方法
const handleTemplateSelect = (template: Template) => {
  console.log('选择了模板:', template.meta.name)
}

const goToNextStep = () => {
  if (selectedTemplateId.value) {
    currentStep.value = 2
  }
}

const zoomIn = () => {
  if (previewZoom.value < 1.5) {
    previewZoom.value += 0.1
  }
}

const zoomOut = () => {
  if (previewZoom.value > 0.3) {
    previewZoom.value -= 0.1
  }
}

const resetZoom = () => {
  previewZoom.value = 1
}

const handleSaveDraft = () => {
  try {
    const draftData = {
      templateId: selectedTemplateId.value,
      formData: formData.value,
      lastSaved: new Date().toISOString()
    }
    localStorage.setItem('resumeDraft', JSON.stringify(draftData))
    showSuccess('草稿保存成功！')
  } catch (error) {
    console.error('保存草稿失败:', error)
    showError('保存草稿失败，请重试')
  }
}

const handleExport = () => {
  showExportModal.value = true
  exportError.value = ''
}

// 添加导出前的优化方法
const optimizeForExport = async (): Promise<void> => {
  if (!resumeContent.value) return

  // 临时移除可能影响导出的样式
  const element = resumeContent.value

  // 保存原始样式
  const originalMaxHeight = element.style.maxHeight
  const originalOverflow = element.style.overflow
  const originalTransform = element.style.transform

  // 应用导出优化样式
  element.style.maxHeight = 'none'
  element.style.overflow = 'visible'
  element.style.transform = 'none'

  // 等待重绘
  await new Promise(resolve => setTimeout(resolve, 200))

  return new Promise((resolve) => {
    // 在下一个动画帧恢复样式
    requestAnimationFrame(() => {
      element.style.maxHeight = originalMaxHeight
      element.style.overflow = originalOverflow
      element.style.transform = originalTransform
      resolve()
    })
  })
}

const handleExportPDF = async () => {
  if (!resumeContent.value) {
    exportError.value = '简历内容未加载完成，请稍后重试'
    return
  }

  exporting.value = true
  currentExportType.value = 'pdf'
  exportError.value = ''

  try {
    await nextTick()

    // 导出前优化
    await optimizeForExport()

    const filename = `简历_${formData.value.personal.firstName}${formData.value.personal.lastName}_${new Date().getTime()}.pdf`

    await exportResumeToPDF(resumeContent.value, {
      filename,
      scale: 3, // 提高质量
      quality: 1
    })

    showSuccess('PDF导出成功！')
    showExportModal.value = false
  } catch (error) {
    console.error('PDF导出失败:', error)
    exportError.value = 'PDF导出失败，请重试'
  } finally {
    exporting.value = false
    currentExportType.value = null
  }
}

const handleExportImage = async () => {
  if (!resumeContent.value) {
    exportError.value = '简历内容未加载完成，请稍后重试'
    return
  }

  exporting.value = true
  currentExportType.value = 'image'
  exportError.value = ''

  try {
    await nextTick()

    // 导出前优化
    await optimizeForExport()

    const filename = `简历_${formData.value.personal.firstName}${formData.value.personal.lastName}_${new Date().getTime()}.png`

    await exportResumeToImage(resumeContent.value, {
      filename,
      format: 'png',
      scale: 3, // 提高质量
      quality: 1
    })

    showSuccess('图片导出成功！')
    showExportModal.value = false
  } catch (error) {
    console.error('图片导出失败:', error)
    exportError.value = '图片导出失败，请重试'
  } finally {
    exporting.value = false
    currentExportType.value = null
  }
}
const handleExportToWord = async () => {
  if (!resumeContent.value) return

  exporting.value = true
  currentExportType.value = 'word'
  exportError.value = ''

  try {
    await nextTick()

    const filename = `简历_${formData.value.personal.firstName}${formData.value.personal.lastName}_${new Date().getTime()}.doc`

    await exportResumeToWord(resumeContent.value, {
      filename
    })

    showSuccess('Word文档导出成功！')
    showExportModal.value = false
  } catch (error) {
    console.error('Word导出失败:', error)
    exportError.value = 'Word导出失败，请重试'
  } finally {
    exporting.value = false
    currentExportType.value = null
  }
}

const showSuccess = (message: string) => {
  successMessage.value = message
  showSuccessToast.value = true
  setTimeout(() => {
    showSuccessToast.value = false
  }, 3000)
}

const showError = (message: string) => {
  exportError.value = message
}

// 加载草稿
const loadDraft = () => {
  try {
    const draft = localStorage.getItem('resumeDraft')
    if (draft) {
      const draftData = JSON.parse(draft)
      selectedTemplateId.value = draftData.templateId
      formData.value = draftData.formData
      showSuccess('草稿加载成功！')
    }
  } catch (error) {
    console.error('加载草稿失败:', error)
  }
}

// 初始化时加载草稿
onMounted(() => {
  loadDraft();
});

</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.step-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.form-section {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.form-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #6b7280;
  font-size: 0.875rem;
}

.preview-section {
  position: relative;
}

.preview-sticky {
  position: sticky;
  top: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.preview-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

.preview-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 0.375rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.icon-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.zoom-level {
  min-width: 3rem;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.preview-container {
  padding: 0rem;
  max-height: calc(100vh - 12rem);
  overflow: auto;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.resume-content {
  padding: 2rem; /* 添加内边距，让缩放后的内容有空间 */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.resume-scaler {
  transform-origin: top center; /* 从顶部中心开始缩放 */
  transition: transform 0.2s ease; /* 平滑过渡 */
  /* 确保缩放容器不会影响布局 */
  display: inline-block;
  width: auto;
  height: auto;
}

.action-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.btn-primary,
.btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.btn-primary:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-secondary {
  background: white;
  color: #6b7280;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.export-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.close-btn {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #6b7280;
  cursor: pointer;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #f3f4f6;
}

.modal-body {
  padding: 1.5rem;
}

.export-options {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

.export-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  position: relative;
}

.export-option:hover:not(:disabled) {
  border-color: #667eea;
  background: #f9fafb;
  transform: translateX(4px);
}

.export-option:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.export-option i:first-child {
  font-size: 2rem;
  color: #667eea;
  width: 3rem;
  text-align: center;
}

.export-option i:last-child {
  margin-left: auto;
  color: #667eea;
}

.export-option h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.export-option p {
  font-size: 0.875rem;
  color: #6b7280;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-size: 0.875rem;
}

.success-toast {
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: #10b981;
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
  z-index: 1001;
  animation: toastSlideIn 0.3s ease-out;
}

@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.success-toast i {
  font-size: 1.25rem;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.preview-print-button {
  background: #2196F3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.preview-print-button:hover {
  background: #1976D2;
}

/* 响应式 */
/* @media (max-width: 1200px) {
  .grid.grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .preview-sticky {
    position: static;
  }

  .preview-container {
    max-height: 600px;
  }
} */

/* @media (max-width: 768px) {
  .resume-page {
    padding: 1rem 0;
  }

  .action-bar {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .success-toast {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
} */

</style>