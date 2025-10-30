<template>
  <div class="template-selector">
    <!-- 头部筛选区域 -->
    <header class="selector-header">
      <div class="header-content">
        <div class="title-section">
          <h1 class="title">选择简历模板</h1>
          <p class="subtitle">{{ filteredTemplates.length }} 个模板符合条件</p>
        </div>
        
        <div class="filter-section">
          <!-- 分类筛选 -->
          <div class="category-tabs">
            <button
              v-for="category in categories"
              :key="category.id"
              class="category-tab"
              :class="{ active: selectedCategory === category.id }"
              @click="selectedCategory = category.id"
            >
              <i :class="category.icon"></i>
              <span>{{ category.name }}</span>
            </button>
          </div>

          <!-- 搜索和排序 -->
          <div class="filter-controls">
            <div class="search-box">
              <i class="fas fa-search"></i>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="搜索模板..."
                class="search-input"
              >
            </div>
            
            <select v-model="sortBy" class="sort-select">
              <option value="featured">推荐</option>
              <option value="popular">热门</option>
              <option value="rating">评分</option>
              <option value="newest">最新</option>
            </select>
          </div>
        </div>
      </div>
    </header>

    <!-- 模板网格 -->
    <div class="templates-grid">
      <div 
        v-for="template in paginatedTemplates" 
        :key="template.meta.id" 
        class="template-card"
        :class="{ 
          selected: modelValue === template.meta.id,
          featured: template.meta.featured,
          premium: template.meta.premium
        }"
        @click="selectTemplate(template)"
      >
        <!-- 模板预览 -->
        <div class="template-preview">
          <ResumeRenderer
            :form-data="sampleData"
            :template="template"
            class="preview-renderer"
          />
          
          <div class="preview-overlay">
            <button class="preview-btn" @click.stop="previewTemplate(template)">
              <i class="fas fa-eye"></i>
              预览
            </button>
          </div>

          <!-- 标签 -->
          <div class="badges">
            <span v-if="template.meta.featured" class="badge featured">
              <i class="fas fa-star"></i> 精选
            </span>
            <span v-if="template.meta.premium" class="badge premium">
              <i class="fas fa-crown"></i> Premium
            </span>
          </div>
        </div>

        <!-- 模板信息 -->
        <div class="template-info">
          <h3 class="template-name">{{ template.meta.name }}</h3>
          <p class="template-desc">{{ template.meta.description }}</p>
          
          <div class="template-meta">
            <div class="rating">
              <i class="fas fa-star"></i>
              <span>{{ template.meta.rating.toFixed(1) }}</span>
            </div>
            <div class="downloads">
              <i class="fas fa-download"></i>
              <span>{{ formatNumber(template.meta.downloads) }}</span>
            </div>
          </div>

          <div class="industries">
            <span 
              v-for="industry in template.meta.industries.slice(0, 2)" 
              :key="industry"
              class="industry-tag"
            >
              {{ industry }}
            </span>
            <span v-if="template.meta.industries.length > 2" class="industry-tag">
              +{{ template.meta.industries.length - 2 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载更多 -->
    <div v-if="hasMore" class="load-more">
      <button @click="loadMore" class="load-more-btn">
        <i class="fas fa-plus"></i>
        加载更多
      </button>
    </div>

    <!-- 空状态 -->
    <div v-if="filteredTemplates.length === 0" class="empty-state">
      <i class="fas fa-search"></i>
      <p>未找到匹配的模板</p>
      <button @click="resetFilters" class="reset-btn">重置筛选</button>
    </div>

    <!-- 预览模态框 -->
    <Teleport to="body">
      <div v-if="previewData" class="preview-modal" @click="previewData = null">
        <div class="modal-content" @click.stop>
          <header class="modal-header">
            <h3>{{ previewData.meta.name }}</h3>
            <button @click="previewData = null" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </header>
          
          <div class="modal-body">
            <ResumeRenderer
              :form-data="sampleData"
              :template="previewData"
              class="preview-full"
            />
          </div>

          <footer class="modal-footer">
            <button @click="selectTemplate(previewData); previewData = null" class="btn-primary">
              选择此模板
            </button>
            <button @click="previewData = null" class="btn-secondary">
              取消
            </button>
          </footer>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Template } from '~/types/template'
import { templates, getTemplatesByType } from '~/config/templates'

interface Props {
  modelValue?: string
  sampleData: any // 用于预览的示例数据
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
  'select': [template: Template]
}>()

// 状态
const selectedCategory = ref('all')
const searchQuery = ref('')
const sortBy = ref('featured')
const previewData = ref<Template | null>(null)
const currentPage = ref(1)
const pageSize = 12

// 分类配置
const categories = [
  { id: 'all', name: '全部', icon: 'fas fa-th' },
  { id: 'professional', name: '专业', icon: 'fas fa-briefcase' },
  { id: 'creative', name: '创意', icon: 'fas fa-palette' },
  { id: 'modern', name: '现代', icon: 'fas fa-leaf' },
  { id: 'classic', name: '经典', icon: 'fas fa-gem' },
  { id: 'minimal', name: '极简', icon: 'fas fa-minimize' }
]

// 计算属性
const filteredTemplates = computed(() => {
  let result = [...templates]
  
  // 分类过滤
  if (selectedCategory.value !== 'all') {
    result = result.filter(t => t.meta.type === selectedCategory.value)
  }
  
  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(t => 
      t.meta.name.toLowerCase().includes(query) ||
      t.meta.description.toLowerCase().includes(query) ||
      t.meta.industries.some(i => i.toLowerCase().includes(query))
    )
  }
  
  // 排序
  result.sort((a, b) => {
    switch (sortBy.value) {
      case 'popular':
        return b.meta.downloads - a.meta.downloads
      case 'rating':
        return b.meta.rating - a.meta.rating
      case 'newest':
        return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
      default: // featured
        if (a.meta.featured && !b.meta.featured) return -1
        if (!a.meta.featured && b.meta.featured) return 1
        return b.meta.rating - a.meta.rating
    }
  })
  
  return result
})

const paginatedTemplates = computed(() => {
  return filteredTemplates.value.slice(0, currentPage.value * pageSize)
})

const hasMore = computed(() => {
  return paginatedTemplates.value.length < filteredTemplates.value.length
})

// 方法
const selectTemplate = (template: Template) => {
  emit('update:modelValue', template.meta.id)
  emit('select', template)
}

const previewTemplate = (template: Template) => {
  previewData.value = template
}

const loadMore = () => {
  currentPage.value++
}

const resetFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'featured'
  currentPage.value = 1
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toString()
}
</script>

<style scoped>
.template-selector {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* 头部 */
.selector-header {
  margin-bottom: 2rem;
}

.title-section {
  margin-bottom: 1.5rem;
}

.title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #6b7280;
  font-size: 0.875rem;
}

/* 筛选区域 */
.category-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #6b7280;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.category-tab:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.category-tab.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.filter-controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-box {
  flex: 1;
  min-width: 200px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-box i {
  position: absolute;
  left: 0.75rem;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

.search-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.sort-select {
  padding: 0.625rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
}

/* 模板网格 */
.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.template-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.template-card:hover {
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.template-card.selected {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.template-card.featured {
  border-color: #f59e0b;
}

/* 预览区域 */
.template-preview {
  position: relative;
  height: 300px;
  background: #f9fafb;
  overflow: hidden;
}

.preview-renderer {
  width: 100%;
  height: 100%;
  transform: scale(0.35);
  transform-origin: top left;
  pointer-events: none;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.template-card:hover .preview-overlay {
  opacity: 1;
}

.preview-btn {
  padding: 0.625rem 1.25rem;
  background: white;
  color: #1f2937;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-btn:hover {
  background: #f3f4f6;
}

/* 标签 */
.badges {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.badge {
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.badge.featured {
  background: #fef3c7;
  color: #f59e0b;
}

.badge.premium {
  background: #fce7f3;
  color: #ec4899;
}

/* 模板信息 */
.template-info {
  padding: 1rem;
}

.template-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.375rem;
}

.template-desc {
  font-size: 0.8125rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.template-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.8125rem;
  color: #6b7280;
}

.rating,
.downloads {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.rating i {
  color: #f59e0b;
}

.industries {
  display: flex;
  gap: 0.375rem;
  flex-wrap: wrap;
}

.industry-tag {
  padding: 0.1875rem 0.5rem;
  background: #f3f4f6;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  color: #6b7280;
}

/* 加载更多 */
.load-more {
  text-align: center;
  margin: 2rem 0;
}

.load-more-btn {
  padding: 0.75rem 2rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.load-more-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 4rem 1rem;
  color: #9ca3af;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-state p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.reset-btn {
  padding: 0.625rem 1.5rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
}

/* 预览模态框 */
.preview-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
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
}

.close-btn:hover {
  background: #f3f4f6;
}

.modal-body {
  flex: 1;
  overflow: auto;
  padding: 1.5rem;
}

.preview-full {
  max-width: 800px;
  margin: 0 auto;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  justify-content: flex-end;
}

.btn-primary,
.btn-secondary {
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #2563eb;
  color: white;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  background: white;
  color: #6b7280;
  border: 1px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #f9fafb;
}

/* 响应式 */
@media (max-width: 768px) {
  .template-selector {
    padding: 1rem;
  }

  .templates-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .category-tabs {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
  }
}
</style>