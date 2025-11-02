/**
 * @file template.ts
 * @description 简历相关的完整类型定义
 */

import type { PersonalInfo } from "./person"

// ==================== 基础样式类型 ====================

/**
 * 颜色配置
 */
export interface ColorConfig {
  // 主色调
  primary: string
  // 次要色
  secondary: string
  // 强调色
  accent: string
  // 背景色
  bg: string
  // 文本色
  text: string
  // 边框色
  border?: string
  // 辅助颜色
  muted?: string
  success?: string
  warning?: string
  error?: string
}

/**
 * 字体配置
 */
export interface FontConfig {
  // 字体族
  family: string
  // 字号
  size: {
    title: string      // 标题字号 (如 28px)
    heading: string    // 章节标题 (如 18px)
    body: string       // 正文 (如 14px)
    small: string      // 小字 (如 12px)
  }
  // 字重
  weight: {
    light: number      // 300
    normal: number     // 400
    medium: number     // 500
    semibold: number   // 600
    bold: number       // 700
  }
  // 行高
  lineHeight: {
    tight: number      // 1.2
    normal: number     // 1.5
    relaxed: number    // 1.8
  }
}

/**
 * 间距配置
 */
export interface SpacingConfig {
  // 章节间距
  section: string
  // 项目间距
  item: string
  // 内边距
  padding: {
    page: string
    section: string
    item: string
  }
  // 外边距
  margin: {
    section: string
    item: string
  }
}

/**
 * 边框配置
 */
export interface BorderConfig {
  // 圆角
  radius: string
  // 边框宽度
  width: string
  // 边框样式
  style: 'solid' | 'dashed' | 'dotted' | 'none'
  // 边框颜色
  color: string
}

// ==================== 布局类型 ====================

/**
 * 页面布局配置
 */
export interface PageLayout {
  // 宽度
  width: string
  // 最大宽度
  maxWidth: string
  // 列数 (1列或2列)
  columns: 1 | 2
  // 列间距
  columnGap?: string
  // 内边距
  padding: string
  // 外边距
  margin: string
}

/**
 * 头部布局配置
 */
export interface HeaderLayout {
  // 对齐方式
  align: 'left' | 'center' | 'right'
  // 布局方向
  direction: 'vertical' | 'horizontal'
  // 间距
  spacing: string
  // 背景样式
  background: 'filled' | 'gradient' |  'subtle' |'none' | 'solid'
  // 分隔线
  divider: boolean
}

/**
 * 章节布局配置
 */
export interface SectionLayout {
  // 标题位置
  titlePosition: 'top' | 'left'
  // 内容对齐
  contentAlign: 'left' | 'justify'
  // 间距
  spacing: string
  // 分隔线
  divider: {
    enabled: boolean
    style: 'line' | 'double' | 'dashed' | 'none' | 'minimal'| 'bold'| 'solid'|'thick'
    position: 'bottom' | 'left' | 'both' 
    border: string
  }
}

/**
 * 列表项布局配置
 */
export interface ItemLayout {
  // 布局样式
  style: 'stacked' | 'inline' | 'grid' | 'minimal' | 'academic' | 'clean' |'dynamic'| 'none'|'structured'| 'industrial'| 'friendly'
  // 日期位置
  datePosition: 'right' | 'below' | 'inline' | 'none'
  // 标签样式
  tagStyle: 'pill' | 'square' | 'minimal' | 'text' |'medical' |'none'| 'badge'|'box'| 'rounded'
  // 项目符号
  bullet: {
    style: 'disc' | 'circle' | 'square' | 'dash' | 'arrow' | 'plus'|'none'
    color: string
  }
}

/**
 * 技能布局配置
 */
export interface SkillLayout {
  
  // 展示方式
  display: 'grid' | 'list' | 'tags' | 'bars' | 'pills'| 'text'
  // 列数
  columns: number
  // 显示等级
  showLevel: boolean
  // 等级样式
  levelStyle: 'bar' | 'dots' | 'text' |"stars"| 'percentage'  | 'none'
}

/**
 * 完整布局配置
 */
export interface LayoutConfig {
  page: PageLayout
  header: HeaderLayout
  section: SectionLayout
  item: ItemLayout
  skill: SkillLayout
}

// ==================== 样式配置类型 ====================

/**
 * 头部样式
 */
export interface HeaderStyle {
  // 名字样式
  name: {
    fontSize: string
    fontWeight: number
    color: string
    letterSpacing?: string
     fontStyle: string
    textTransform?: 'none' | 'uppercase' | 'capitalize'
  }
  // 职位样式
  title: {
    fontSize: string
    fontWeight: number
    color: string
      letterSpacing: string
        fontStyle: string
  }
  // 联系方式样式
  contact: {
    fontSize: string
    color: string
    iconSize: string
    gap: string
  }
  // 背景
  background: string | { type: 'solid' | 'gradient'; colors: string[] }
  // 内边距
  padding: string
}

/**
 * 章节样式
 */
export interface SectionStyle {
  // 标题样式
  title: {
    fontSize: string
    fontWeight: number
    color: string
              textTransform?:string
              borderLeft?:string
                letterSpacing?: string
    iconSize?: string
    iconColor?: string
    dividerColor?: string
    dividerWidth?: string
    borderBottom?:string
  }
  // 内容样式
  content: {
    fontSize: string
    color: string
    lineHeight: number
  }
  // 间距
  marginBottom: string
}

/**
 * 列表项样式
 */
export interface ItemStyle {
  // 标题样式
  title: {
    fontSize: string
    fontWeight: number
    color: string
  }
  // 副标题样式
  subtitle: {
    fontSize: string
    color: string
      fontStyle: string
       fontWeight: 100|200|300|400|500|600|700|800|900
  }
  // 日期样式
  date: {
    fontSize: string
    color: string
    fontWeight: number
  }
  // 描述样式
  description: {
    fontSize: string
    color: string
    lineHeight: number
  }
  // 背景
  background?: string
  
       border?: {
          radius?: string,
          width?: string,
          style?: string,
          color?: string
        }
  // 边框
  // 内边距
  padding: string
  // 外边距
  marginBottom: string
  
}

/**
 * 标签样式
 */
export interface TagStyle {
  // 背景色
  background: string
  // 文字颜色
  color: string
  // 内边距
  padding: string
  // 圆角
  borderRadius: string
  // 字号
  fontSize: string
  // 字重
  fontWeight: number
  // 边框
  border?: string
}

/**
 * 技能样式
 */
export interface SkillStyle {
  // 技能项样式
  item: {
    fontSize: string
    color: string
    gap: string
  }
  // 等级条样式
  levelBar: {
    height: string
    background: string
    fillColor: string
    borderRadius: string
  }
  // 等级文本样式
  levelText: {
    fontSize: string
    color: string
    fontWeight: number
  }
}

/**
 * 完整样式配置
 */
export interface StyleConfig {
  // 全局样式
  global: {
    colors: ColorConfig
    fonts: FontConfig
    spacing: SpacingConfig
    borders: BorderConfig
  }
  // 组件样式
  components: {
    header: HeaderStyle
    section: SectionStyle
    item: ItemStyle
    tag: TagStyle
    skill: SkillStyle
  }
}

// ==================== 模板类型 ====================

/**
 * 模板预览信息
 */
export interface TemplatePreview {
  // 缩略图URL
  thumbnail: string
  // 预览图URL列表
  images?: string[]
}

/**
 * 模板元数据
 */
export interface TemplateMeta {
  // 模板ID
  id: string
  // 模板名称
  name: string
  // 模板类型
  type: 'professional' | 'creative' | 'modern' | 'classic' | 'minimal'
  // 描述
  description: string
  // 是否精选
  featured: boolean
  // 是否高级版
  premium: boolean
  // 评分
  rating: number
  // 下载量
  downloads: number
  // 适用行业
  industries: string[]
  // 标签
  tags: string[]
  // 创建日期
  date: string
  // 作者
  author?: string
  // 版本
  version?: string
}

/**
 * 完整模板定义
 */
export interface Template {
  // 元数据
  meta: TemplateMeta
  
  // 布局配置
  layout: LayoutConfig
  
  // 样式配置
  style: StyleConfig
  
  // 预览信息
  preview: TemplatePreview
  
  // 自定义配置（扩展用）
  custom?: Record<string, any>
}

// ==================== 简历数据类型 ====================

/**
 * 工作经历
 */
export interface WorkExperience {
  position: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current: boolean
  description?: string
  achievements?: string[]
  technologies?: string[]
}

/**
 * 项目经历
 */
export interface ProjectExperience {
  name: string
  role: string
  url?: string
  startDate: string
  endDate?: string
  description?: string
  achievements?: string[]
  technologies?: string[]
}

/**
 * 教育经历
 */
export interface Education {
  school: string
  major: string
  degree: 'high-school' | 'associate' | 'bachelor' | 'master' | 'phd'
  startDate: string
  endDate: string
  gpa?: string
  honors?: string[]
  courses?: string[]
}

/**
 * 技能
 */
export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  years?: number
  category?: string
}

/**
 * 证书
 */
export interface Certificate {
  name: string
  issuer: string
  date: string
  expiryDate?: string
  credentialId?: string
  url?: string
}

/**
 * 语言能力
 */
export interface Language {
  name: string
  proficiency: 'basic' | 'conversational' | 'professional' | 'native'
}

/**
 * 荣誉奖项
 */
export interface Honor {
  name: string
  issuer: string
  date: string
  level?: string
  description?: string
}

/**
 * 出版物
 */
export interface Publication {
  title: string
  publisher: string
  date: string
  authors?: string[]
  url?: string
}

/**
 * 完整简历数据
 */
export interface ResumeData {
  personal:PersonalInfo
  // 各项经历
  works?: WorkExperience[]
  projects?: ProjectExperience[]
  educations?: Education[]
  skills?: Skill[]
  certificates?: Certificate[]
  languages?: Language[]
  honors?: Honor[]
  publications?: Publication[]
  hobbies?: string[]
  
  // 其他信息
  references?: string
  customSections?: {
    title: string
    content: string
  }[]
}

// ==================== 组件Props类型 ====================

/**
 * 模板渲染器Props
 */
export interface TemplateRendererProps {
  formData: ResumeData
  template: Template
}

/**
 * 模板选择器Props
 */
export interface TemplateSelectorProps {
  modelValue?: string
  sampleData: ResumeData
  templates?: Template[]
}

/**
 * 模板选择器事件
 */
export interface TemplateSelectorEmits {
  'update:modelValue': [value: string]
  'select': [template: Template]
}

// ==================== 工具类型 ====================

/**
 * 深度部分类型
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 模板配置选项（用于创建模板）
 */
export type TemplateOptions = DeepPartial<Template> & {
  meta: Pick<TemplateMeta, 'id' | 'name' | 'type' | 'description'>
}