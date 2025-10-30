import { ref, computed, watch } from 'vue'
import type { 
  ResumeData, 
  WorkExperience, 
  ProjectExperience,
  Education, 
  Skill, 
  Honor, 
  Certificate, 
  Language,

} from '~/types/template'
import type {  PersonalInfo} from '../types/person'
const STORAGE_KEY = 'resume_draft'
const AUTO_SAVE_DELAY = 1000 // 1秒防抖

/**
 * 简历数据管理组合式函数
 * 
 * 提供简历数据的响应式状态管理、自动保存和加载功能
 * 
 * @returns 返回简历状态和相关操作方法
 */
export const useResume = () => {
  // 初始化空表单数据
  const formData = ref<ResumeData>({
   personal:{
     firstName: '',
    lastName: '',
    email: '',
    phone: '',
    wechat: '',
    website: '',
    github: '',
    linkedin: '',
    avatar: '',
    address: '',
    jobExpectation: '',
    currentTitle: '',
    summary: '',
   },
    works: [],
    projects: [],
    educations: [],
    skills: [],
    honors: [],
    certificates: [],
    languages: [],
    publications: [],
    hobbies: [],
    customSections: []
  })

  // 当前步骤（用于多步骤表单）
  const currentStep = ref(0)
  
  // 选中的模板ID
  const selectedTemplate = ref('modern-1')
  
  // 导出状态
  const isExporting = ref(false)
  
  // 数据是否已修改
  const isDirty = ref(false)
  
  // 自动保存定时器
  let autoSaveTimer: ReturnType<typeof setTimeout> | null = null

  // ==================== 数据持久化 ====================
  
  /**
   * 从本地存储加载草稿
   */
  const loadDraft = () => {
    if (process.client) {
      try {
        const savedDraft = localStorage.getItem(STORAGE_KEY)
        if (savedDraft) {
          const parsed = JSON.parse(savedDraft)
          // 合并加载的数据，保留默认值
          formData.value = { ...formData.value, ...parsed }
          console.log('✅ 已加载草稿数据')
          return true
        }
      } catch (e) {
        console.error('❌ 加载草稿失败:', e)
      }
    }
    return false
  }

  /**
   * 保存草稿到本地存储
   */
  const saveDraft = () => {
    if (process.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData.value))
        isDirty.value = false
        console.log('💾 草稿已自动保存')
      } catch (e) {
        console.error('❌ 保存草稿失败:', e)
      }
    }
  }

  /**
   * 清除本地存储的草稿
   */
  const clearDraft = () => {
    if (process.client) {
      localStorage.removeItem(STORAGE_KEY)
      isDirty.value = false
      console.log('🗑️ 草稿已清除')
    }
  }

  // 自动保存 - 带防抖
  if (process.client) {
    watch(formData, () => {
      isDirty.value = true
      
      // 清除之前的定时器
      if (autoSaveTimer) {
        clearTimeout(autoSaveTimer)
      }
      
      // 设置新的定时器
      autoSaveTimer = setTimeout(() => {
        saveDraft()
      }, AUTO_SAVE_DELAY)
    }, { deep: true })
  }

  // 页面加载时加载草稿
  if (process.client) {
    loadDraft()
  }

  // ==================== 完成度计算 ====================
  
  /**
   * 计算简历完成度百分比
   */
const completionRate = computed(() => {
  let total = 0
  let filled = 0

  // 基本信息 (40分) - 使用 Object.keys 遍历
  const basicInfoFields = Object.keys(formData.value.personal) as (keyof PersonalInfo)[]
  
  // 定义必填字段和权重
  const requiredFields: (keyof PersonalInfo)[] = ['firstName', 'lastName', 'email', 'jobExpectation']
  const optionalFields: (keyof PersonalInfo)[] = ['phone', 'wechat', 'summary', 'avatar', 'address', 'base']
  
  // 计算必填字段完成度
  total += requiredFields.length
  filled += requiredFields.filter(field => {
    const value = formData.value.personal[field]
    return value && value.toString().trim() !== ''
  }).length

  // 计算可选字段完成度 (按比例计算)
  total += optionalFields.length * 0.5 // 可选字段权重减半
  filled += optionalFields.filter(field => {
    const value = formData.value.personal[field]
    return value && value.toString().trim() !== ''
  }).length * 0.5

  // 调试信息
  console.log('=== 基本信息完成度 ===')
  basicInfoFields.forEach(key => {
    const value = formData.value.personal[key]
    const isFilled = value && value.toString().trim() !== ''
    console.log(`${key}: ${value} | 已填写: ${isFilled}`)
  })
  console.log(`必填字段: ${filled}/${total}`)

  // 工作经历 (20分)
  total += 1
  if (formData.value.works && formData.value.works.length > 0) {
    // 检查工作经历是否完整
    const validWorks = formData.value.works.filter(work => 
      work.company && work.position && work.startDate
    )
    if (validWorks.length > 0) {
      filled += 1
    }
  }

  // 教育经历 (20分)
  total += 1
  if (formData.value.educations && formData.value.educations.length > 0) {
    // 检查教育经历是否完整
    const validEducations = formData.value.educations.filter(edu => 
      edu.school && edu.degree && edu.startDate
    )
    if (validEducations.length > 0) {
      filled += 1
    }
  }

  // 技能 (10分)
  total += 1
  if (formData.value.skills && formData.value.skills.length >= 3) {
    // 检查技能是否有效
    const validSkills = formData.value.skills.filter(skill => 
      skill.name && skill.name.trim() !== ''
    )
    if (validSkills.length >= 3) {
      filled += 1
    }
  }

  // 项目经历 (10分) - 加分项
  if (formData.value.projects && formData.value.projects.length > 0) {
    const validProjects = formData.value.projects.filter(project => 
      project.name && project.description
    )
    if (validProjects.length > 0) {
      filled += 0.5
      total += 0.5
    }
  }

  // 荣誉奖项 (额外加分)
  if (formData.value.honors && formData.value.honors.length > 0) {
    filled += 0.2
    total += 0.2
  }

  const rate = Math.min(Math.round((filled / total) * 100), 100)
  console.log(`总完成度: ${filled}/${total} = ${rate}%`)
  return rate
})
  // ==================== 表单验证 ====================
  
  /**
   * 验证基本信息
   */
  const validateBasicInfo = () => {
    const errors: string[] = []
    
    if (!formData.value.personal.firstName?.trim()) {
      errors.push('请输入姓氏')
    }
    if (!formData.value.personal.lastName?.trim()) {
      errors.push('请输入名字')
    }
    if (!formData.value.personal.email?.trim()) {
      errors.push('请输入邮箱')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.personal.email)) {
      errors.push('请输入有效的邮箱地址')
    }
    if (!formData.value.personal.jobExpectation?.trim()) {
      errors.push('请输入求职期望')
    }
    
    return errors
  }

  /**
   * 验证整个简历
   */
  const validateResume = () => {
    const errors: string[] = []
    
    // 基本信息验证
    errors.push(...validateBasicInfo())
    
    // 至少要有一项工作或教育经历
    if ((!formData.value.works || formData.value.works.length === 0) &&
        (!formData.value.educations || formData.value.educations.length === 0)) {
      errors.push('请至少添加一项工作经历或教育经历')
    }
    
    return errors
  }

  // ==================== 工作经历管理 ====================
  
  /**
   * 添加工作经历
   */
  const addWork = () => {
    const newWork: WorkExperience = {
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [],
      technologies: []
    }
    formData.value.works = [...(formData.value.works || []), newWork]
    console.log('➕ 已添加工作经历')
  }

  /**
   * 删除工作经历
   */
  const removeWork = (index: number) => {
    if (formData.value.works && index >= 0 && index < formData.value.works.length) {
      formData.value.works.splice(index, 1)
      console.log('🗑️ 已删除工作经历')
    }
  }

  /**
   * 更新工作经历
   */
  const updateWork = (index: number, data: Partial<WorkExperience>) => {
    if (formData.value.works && formData.value.works[index]) {
      formData.value.works[index] = { ...formData.value.works[index], ...data }
    }
  }

  // ==================== 项目经历管理 ====================
  
  /**
   * 添加项目经历
   */
  const addProject = () => {
    const newProject: ProjectExperience = {
      name: '',
      role: '',
      url: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: [],
      technologies: []
    }
    formData.value.projects = [...(formData.value.projects || []), newProject]
    console.log('➕ 已添加项目经历')
  }

  /**
   * 删除项目经历
   */
  const removeProject = (index: number) => {
    if (formData.value.projects && index >= 0 && index < formData.value.projects.length) {
      formData.value.projects.splice(index, 1)
      console.log('🗑️ 已删除项目经历')
    }
  }

  /**
   * 更新项目经历
   */
  const updateProject = (index: number, data: Partial<ProjectExperience>) => {
    if (formData.value.projects && formData.value.projects[index]) {
      formData.value.projects[index] = { ...formData.value.projects[index], ...data }
    }
  }

  // ==================== 教育经历管理 ====================
  
  /**
   * 添加教育经历
   */
  const addEducation = () => {
    const newEducation: Education = {
      school: '',
      major: '',
      degree: 'bachelor',
      startDate: '',
      endDate: '',
      gpa: '',
      honors: [],
      courses: []
    }
    formData.value.educations = [...(formData.value.educations || []), newEducation]
    console.log('➕ 已添加教育经历')
  }

  /**
   * 删除教育经历
   */
  const removeEducation = (index: number) => {
    if (formData.value.educations && index >= 0 && index < formData.value.educations.length) {
      formData.value.educations.splice(index, 1)
      console.log('🗑️ 已删除教育经历')
    }
  }

  /**
   * 更新教育经历
   */
  const updateEducation = (index: number, data: Partial<Education>) => {
    if (formData.value.educations && formData.value.educations[index]) {
      formData.value.educations[index] = { ...formData.value.educations[index], ...data }
    }
  }

  // ==================== 技能管理 ====================
  
  /**
   * 添加技能
   */
  const addSkill = () => {
    const newSkill: Skill = {
      name: '',
      level: 'intermediate',
      years: 0,
      category: ''
    }
    formData.value.skills = [...(formData.value.skills || []), newSkill]
    console.log('➕ 已添加技能')
  }

  /**
   * 删除技能
   */
  const removeSkill = (index: number) => {
    if (formData.value.skills && index >= 0 && index < formData.value.skills.length) {
      formData.value.skills.splice(index, 1)
      console.log('🗑️ 已删除技能')
    }
  }

  /**
   * 更新技能
   */
  const updateSkill = (index: number, data: Partial<Skill>) => {
    if (formData.value.skills && formData.value.skills[index]) {
      formData.value.skills[index] = { ...formData.value.skills[index], ...data }
    }
  }

  // ==================== 荣誉奖项管理 ====================
  
  /**
   * 添加荣誉
   */
  const addHonor = () => {
    const newHonor: Honor = {
      name: '',
      issuer: '',
      date: '',
      level: '',
      description: ''
    }
    formData.value.honors = [...(formData.value.honors || []), newHonor]
    console.log('➕ 已添加荣誉')
  }

  /**
   * 删除荣誉
   */
  const removeHonor = (index: number) => {
    if (formData.value.honors && index >= 0 && index < formData.value.honors.length) {
      formData.value.honors.splice(index, 1)
      console.log('🗑️ 已删除荣誉')
    }
  }

  /**
   * 更新荣誉
   */
  const updateHonor = (index: number, data: Partial<Honor>) => {
    if (formData.value.honors && formData.value.honors[index]) {
      formData.value.honors[index] = { ...formData.value.honors[index], ...data }
    }
  }

  // ==================== 证书管理 ====================
  
  /**
   * 添加证书
   */
  const addCertificate = () => {
    const newCert: Certificate = {
      name: '',
      issuer: '',
      date: '',
      expiryDate: '',
      credentialId: '',
      url: ''
    }
    formData.value.certificates = [...(formData.value.certificates || []), newCert]
    console.log('➕ 已添加证书')
  }

  /**
   * 删除证书
   */
  const removeCertificate = (index: number) => {
    if (formData.value.certificates && index >= 0 && index < formData.value.certificates.length) {
      formData.value.certificates.splice(index, 1)
      console.log('🗑️ 已删除证书')
    }
  }

  /**
   * 更新证书
   */
  const updateCertificate = (index: number, data: Partial<Certificate>) => {
    if (formData.value.certificates && formData.value.certificates[index]) {
      formData.value.certificates[index] = { ...formData.value.certificates[index], ...data }
    }
  }

  // ==================== 语言能力管理 ====================
  
  /**
   * 添加语言
   */
  const addLanguage = () => {
    const newLang: Language = {
      name: '',
      proficiency: 'professional'
    }
    formData.value.languages = [...(formData.value.languages || []), newLang]
    console.log('➕ 已添加语言')
  }

  /**
   * 删除语言
   */
  const removeLanguage = (index: number) => {
    if (formData.value.languages && index >= 0 && index < formData.value.languages.length) {
      formData.value.languages.splice(index, 1)
      console.log('🗑️ 已删除语言')
    }
  }

  /**
   * 更新语言
   */
  const updateLanguage = (index: number, data: Partial<Language>) => {
    if (formData.value.languages && formData.value.languages[index]) {
      formData.value.languages[index] = { ...formData.value.languages[index], ...data }
    }
  }

  // ==================== 步骤控制 ====================
  
  /**
   * 下一步
   */
  const nextStep = () => {
    if (currentStep.value < 2) {
      currentStep.value++
      console.log('➡️ 进入下一步:', currentStep.value)
    }
  }

  /**
   * 上一步
   */
  const prevStep = () => {
    if (currentStep.value > 0) {
      currentStep.value--
      console.log('⬅️ 返回上一步:', currentStep.value)
    }
  }

  /**
   * 跳转到指定步骤
   */
  const goToStep = (step: number) => {
    if (step >= 0 && step <= 2) {
      currentStep.value = step
      console.log('🎯 跳转到步骤:', step)
    }
  }

  // ==================== 表单操作 ====================
  
  /**
   * 重置表单（清空所有数据）
   */
  const resetForm = () => {
    formData.value = {
      personal:{ 
        firstName: '',
    lastName: '',
    email: '',
    phone: '',
    wechat: '',
    website: '',
    github: '',
    linkedin: '',
    avatar: '',
    address: '',
    jobExpectation: '',
    currentTitle: '',
    summary: '',
  },
      works: [],
      projects: [],
      educations: [],
      skills: [],
      honors: [],
      certificates: [],
      languages: [],
      publications: [],
      hobbies: [],
      customSections: []
    }
    currentStep.value = 0
    clearDraft()
    console.log('🔄 表单已重置')
  }

  /**
   * 导入简历数据
   */
  const importData = (data: Partial<ResumeData>) => {
    formData.value = { ...formData.value, ...data }
    console.log('📥 已导入数据')
  }

  /**
   * 导出简历数据
   */
  const exportData = () => {
    return { ...formData.value }
  }

  // ==================== 返回值 ====================
  
  return {
    // 状态
    formData,
    currentStep,
    selectedTemplate,
    isExporting,
    isDirty,
    completionRate,
    
    // 验证
    validateBasicInfo,
    validateResume,
    
    // 工作经历
    addWork,
    removeWork,
    updateWork,
    
    // 项目经历
    addProject,
    removeProject,
    updateProject,
    
    // 教育经历
    addEducation,
    removeEducation,
    updateEducation,
    
    // 技能
    addSkill,
    removeSkill,
    updateSkill,
    
    // 荣誉
    addHonor,
    removeHonor,
    updateHonor,
    
    // 证书
    addCertificate,
    removeCertificate,
    updateCertificate,
    
    // 语言
    addLanguage,
    removeLanguage,
    updateLanguage,
    
    // 步骤控制
    nextStep,
    prevStep,
    goToStep,
    
    // 数据操作
    resetForm,
    importData,
    exportData,
    saveDraft,
    loadDraft,
    clearDraft
  }
}