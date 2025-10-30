/**
 * @file person.ts
 * @brief 简历数据管理组合式函数
 * 
 * 提供简历数据的响应式状态管理、保存和加载功能
 * 
 */

/**
 * @interface PersonalInfo
 * @brief 个人信息接口
 * 
 * 定义简历中个人基本信息的数据结构
 */
export interface PersonalInfo {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  wechat?: string
  website?: string
  photoUrl?: string
  birthDate?: string
  gender?: 'male' | 'female' | 'other' | ''
  jobStatus?: string
  jobExpectation?: string
  base?: string
  currentTitle?: string
  summary?: string // 个人简介
  linkedin?: string
  github?: string
  avatar?:string
  address?:string
}

export interface WorkExperience {
  id?: string
  company: string
  position: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
  achievements?: string[] 
  technologies?: string[]
}

export interface ProjectExperience {
  id?: string
  name: string
  role: string
  url?: string
  startDate: string
  endDate?: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export interface Education {
  id?: string
  school: string
  major: string
  degree: 'high-school' | 'associate' | 'bachelor' | 'master' | 'phd' | ''
  startDate: string
  endDate: string
  gpa?: string
  honors?: string[]
  description?: string
}

export interface Skill {
  id?: string
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category?: string
  yearsOfExperience?: number
}

export interface Honor {
  id?: string
  name: string
  level: string
  issuer?: string
  date?: string
  description?: string
}

export interface Certificate {
  id?: string
  name: string
  issuer: string
  date: string
  expiryDate?: string
  number?: string
  url?: string
}

export interface Language {
  id?: string
  name: string
  proficiency: 'basic' | 'conversational' | 'professional' | 'native'
}

export interface Publication {
  id?: string
  title: string
  publisher: string
  date: string
  url?: string
  authors?: string[]
}

export interface ResumeData {
  // 个人信息
  firstName: string
  lastName: string
  email?: string
  phone?: string
  wechat?: string
  website?: string
  photoUrl?: string
  birthDate?: string
  gender?: 'male' | 'female' | 'other' | ''
  jobStatus?: string
  jobExpectation?: string
  base?: string
  currentTitle?: string
  summary?: string
  linkedin?: string
  github?: string
  avatar?:string
  
  // 经历和技能
  works?: WorkExperience[]
  projects?: ProjectExperience[]
  educations?: Education[]
  skills?: Skill[]
  honors?: Honor[]
  certificates?: Certificate[]
  languages?: Language[]
  publications?: Publication[]
  
  // 其他信息
  references?: string // 推荐人信息
  hobbies?: string[] // 兴趣爱好
  customSections?: CustomSection[] // 自定义版块
}

export interface CustomSection {
  id: string
  title: string
  content: string
  order: number
}
