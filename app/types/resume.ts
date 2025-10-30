// resume.ts 定义简历程序的类型
import type { ResumeData } from "./person"

export interface ColorTheme {
  primary: string
  secondary: string
  accent?: string
  bg: string
  text?: string
}


// 表单验证规则
export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  message?: string
}

export interface ValidationRules {
  [key: string]: ValidationRule
}

// 导出配置
export interface ExportOptions {
  format: 'pdf' | 'png' | 'docx'
  quality?: number
  scale?: number
  fileName?: string
}

// 应用状态
export interface AppState {
  currentStep: number
  selectedTemplate: string
  formData: ResumeData
  isExporting: boolean
  isDirty: boolean
}
