<!-- 简历渲染组件 -->
<template>
  <div 
    ref="resumeContentRef" 
    class="resume-renderer" 
    :style="containerStyles"
  >
    <!-- 一栏布局 -->
    <template v-if="template.layout.page.columns === 1">
      <!-- 头部 -->
      <header class="resume-header" :style="headerStyles">
        <div class="personal-info" :style="personalInfoStyles">
          <h1 class="name" :style="nameStyles">
            {{ formData.personal.firstName }} {{ formData.personal.lastName }}
          </h1>
          <p v-if="formData.personal.jobExpectation" class="job-title" :style="jobTitleStyles">
            {{ formData.personal.jobExpectation }}
          </p>
          
          <div class="contact-info" :style="contactStyles">
            <span v-if="formData.personal.email" class="contact-item">
              <i class="fas fa-envelope" :style="contactIconStyles"></i> {{ formData.personal.email }}
            </span>
            <span v-if="formData.personal.phone" class="contact-item">
              <i class="fas fa-phone" :style="contactIconStyles"></i> {{ formData.personal.phone }}
            </span>
            <span v-if="formData.personal.wechat" class="contact-item">
              <i class="fab fa-weixin" :style="contactIconStyles"></i> {{ formData.personal.wechat }}
            </span>
            <span v-if="formData.personal.address" class="contact-item">
              <i class="fas fa-map-marker-alt" :style="contactIconStyles"></i> {{ formData.personal.address }}
            </span>
          </div>
        </div>
      </header>

      <!-- 主体内容 -->
      <main class="resume-content" :style="contentStyles">
        <RendererSection
          v-for="section in visibleSections"
          :key="section.key"
          :section="section"
          :template="template"
          :formData="formData"
        />
      </main>
    </template>

    <!-- 两栏布局 -->
    <template v-else>
      <div class="two-column-layout" :style="twoColumnLayoutStyles">
        <!-- 左侧栏 -->
        <aside class="sidebar" :style="sidebarStyles">
          <!-- 头部信息（左侧） -->
          <div class="sidebar-header" :style="sidebarHeaderStyles">
            <div v-if="formData.personal.avatar" class="avatar-wrapper" :style="avatarWrapperStyles">
              <img 
                :src="formData.personal.avatar" 
                alt="头像" 
                class="avatar" 
                :style="avatarStyles"
                crossorigin="anonymous"
              />
            </div>
            <h1 class="name" :style="nameStyles">
              {{ formData.personal.firstName }}<br/>{{ formData.personal.lastName }}
            </h1>
            <p v-if="formData.personal.jobExpectation" class="job-title" :style="jobTitleStyles">
              {{ formData.personal.jobExpectation }}
            </p>
          </div>

          <!-- 左侧栏内容 -->
          <div class="sidebar-content" :style="sidebarContentStyles">
            <RendererSection
              v-for="section in leftSections"
              :key="section.key"
              :section="section"
              :template="template"
              :formData="formData"
              :compact="true"
            />
          </div>
        </aside>

        <!-- 右侧主内容区 -->
        <main class="main-content" :style="mainContentStyles">
          <RendererSection
            v-for="section in rightSections"
            :key="section.key"
            :section="section"
            :template="template"
            :formData="formData"
          />
        </main>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import type { Template, ResumeData } from '~/types/template'
import type { CSSProperties } from 'vue'
import RendererSection from './RendererSection.vue'

interface Props {
  formData: ResumeData
  template: Template
}

const props = defineProps<Props>()

// 简历内容
const resumeContentRef = ref<HTMLElement | null>(null);

// 注册到 PDF 导出
onMounted(() => {
  if (resumeContentRef.value) {
    const { setExportElement } = pdfExportState;
    setExportElement(resumeContentRef.value);
  }
});

// 暴露 ref 给父组件
defineExpose({
  resumeContentRef
});

// 类型安全辅助函数
const toCSSProperties = <T extends Record<string, any>>(styles: T): CSSProperties => {
  return styles as CSSProperties
}

// 定义章节配置
interface SectionConfig {
  key: string
  title: string
  icon: string
  position?: 'left' | 'right'
}

const sectionConfigs: SectionConfig[] = [
  { key: 'summary', title: '个人简介', icon: 'fa-user-circle', position: 'left' },
  { key: 'skills', title: '专业技能', icon: 'fa-code', position: 'left' },
  { key: 'languages', title: '语言能力', icon: 'fa-language', position: 'left' },
  { key: 'certificates', title: '证书', icon: 'fa-certificate', position: 'left' },
  { key: 'works', title: '工作经历', icon: 'fa-briefcase', position: 'right' },
  { key: 'projects', title: '项目经历', icon: 'fa-project-diagram', position: 'right' },
  { key: 'educations', title: '教育经历', icon: 'fa-graduation-cap', position: 'right' },
  { key: 'honors', title: '荣誉奖励', icon: 'fa-graduation-cap', position: 'right' }
]

// 获取可见的章节
const visibleSections = computed(() => {
  return sectionConfigs.filter(section => {
    const data = props.formData[section.key as keyof ResumeData]
    return data && (Array.isArray(data) ? data.length > 0 : !!data)
  })
})

// 两栏布局的左侧章节
const leftSections = computed(() => {
  return visibleSections.value.filter(s => s.position === 'left')
})

// 两栏布局的右侧章节
const rightSections = computed(() => {
  return visibleSections.value.filter(s => s.position === 'right')
})

// ==================== 容器样式 ====================
const containerStyles = computed(() => 
  toCSSProperties({
    backgroundColor: props.template.style.global.colors.bg,
    fontFamily: props.template.style.global.fonts.family,
    color: props.template.style.global.colors.text,
    fontSize: props.template.style.global.fonts.size.body,
    lineHeight: props.template.style.global.fonts.lineHeight.normal,
    maxWidth: props.template.layout.page.maxWidth,
    width: props.template.layout.page.width,
    margin: props.template.layout.page.margin,
    padding: props.template.layout.page.padding,
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  })
)

// ==================== 头部样式 ====================
const headerStyles = computed(() => {
  const bg = props.template.style.components.header.background
  const hasDivider = props.template.layout.header.divider
  
  return toCSSProperties({
    backgroundColor: typeof bg === 'string' ? bg : 'transparent',
    backgroundImage: typeof bg === 'object' && bg.type === 'gradient' 
      ? `linear-gradient(135deg, ${bg.colors.join(', ')})` 
      : 'none',
    padding: props.template.style.components.header.padding,
    borderRadius: hasDivider 
      ? `${props.template.style.global.borders.radius} ${props.template.style.global.borders.radius} 0 0`
      : props.template.style.global.borders.radius,
    marginBottom: hasDivider ? '0' : props.template.style.global.spacing.section,
    borderBottom: hasDivider 
      ? `3px solid ${props.template.style.global.colors.primary}`
      : 'none'
  })
})

const personalInfoStyles = computed(() => {
  const { align, direction, spacing } = props.template.layout.header
  
  const directionMap = {
    horizontal: 'row' as const,
    vertical: 'column' as const
  }
  
  const alignMap = {
    left: 'flex-start' as const,
    center: 'center' as const,
    right: 'flex-end' as const
  }
  
  return toCSSProperties({
    textAlign: align,
    display: 'flex',
    flexDirection: directionMap[direction],
    gap: spacing,
    alignItems: alignMap[align]
  })
})

const nameStyles = computed(() => 
  toCSSProperties({
    fontSize: props.template.style.components.header.name.fontSize,
    fontWeight: props.template.style.components.header.name.fontWeight,
    color: props.template.style.components.header.name.color,
    letterSpacing: props.template.style.components.header.name.letterSpacing,
    textTransform: props.template.style.components.header.name.textTransform,
    margin: '0 0 0.5rem 0',
    lineHeight: props.template.style.global.fonts.lineHeight.tight
  })
)

const jobTitleStyles = computed(() => 
  toCSSProperties({
    fontSize: props.template.style.components.header.title.fontSize,
    fontWeight: props.template.style.components.header.title.fontWeight,
    color: props.template.style.components.header.title.color,
    margin: '0 0 1rem 0'
  })
)

const contactStyles = computed(() => 
  toCSSProperties({
    display: 'flex',
    flexWrap: 'wrap',
    gap: props.template.style.components.header.contact.gap,
    fontSize: props.template.style.components.header.contact.fontSize,
    color: props.template.style.components.header.contact.color,
    justifyContent: props.template.layout.header.align === 'center' ? 'center' : 'flex-start'
  })
)

const contactIconStyles = computed(() => 
  toCSSProperties({
    fontSize: props.template.style.components.header.contact.iconSize,
    marginRight: '0.25rem'
  })
)

// ==================== 内容区样式 ====================
const contentStyles = computed(() => 
  toCSSProperties({
    padding: props.template.style.global.spacing.padding.page
  })
)

// ==================== 两栏布局样式 ====================
const twoColumnLayoutStyles = computed(() => 
  toCSSProperties({
    display: 'grid',
    gridTemplateColumns: '35% 1fr',
    gap: props.template.layout.page.columnGap || '0',
    minHeight: '100%'
  })
)

const sidebarStyles = computed(() => {
  const bg = props.template.style.components.header.background
  
  return toCSSProperties({
    backgroundColor: typeof bg === 'string' ? bg : props.template.style.global.colors.primary,
    backgroundImage: typeof bg === 'object' && bg.type === 'gradient' 
      ? `linear-gradient(135deg, ${bg.colors.join(', ')})` 
      : 'none',
    padding: '2rem 1.5rem',
    color: '#ffffff'
  })
})

const sidebarHeaderStyles = computed(() => 
  toCSSProperties({
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '2px solid rgba(255,255,255,0.3)'
  })
)

const avatarWrapperStyles = computed(() => 
  toCSSProperties({
    width: '120px',
    height: '120px',
    margin: '0 auto 1rem',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid rgba(255,255,255,0.3)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  })
)

const avatarStyles = computed(() => 
  toCSSProperties({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  })
)

const sidebarContentStyles = computed(() => 
  toCSSProperties({
    fontSize: props.template.style.global.fonts.size.small
  })
)

const mainContentStyles = computed(() => 
  toCSSProperties({
    padding: '2rem',
    backgroundColor: props.template.style.global.colors.bg
  })
)
</script>

<style scoped>
.resume-renderer {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.resume-header {
  position: relative;
}

.personal-info {
  max-width: 100%;
}

.name {
  line-height: 1.2;
}

.contact-info {
  flex-wrap: wrap;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

.resume-content {
  background: inherit;
}

.two-column-layout {
  width: 100%;
}

.sidebar {
  position: relative;
}

.sidebar-header .name {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.sidebar-header .job-title {
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
}

.avatar-wrapper {
  display: block;
}

.avatar {
  display: block;
}

.sidebar-content {
  color: #ffffff;
}

.main-content {
  min-height: 100%;
}

@media print {
  .resume-renderer {
    font-size: 11px;
    box-shadow: none;
  }
  
  .two-column-layout {
    break-inside: avoid;
  }
}

@media (max-width: 768px) {
  .two-column-layout {
    grid-template-columns: 1fr !important;
  }
  
  .contact-info {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>