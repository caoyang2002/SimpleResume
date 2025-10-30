// 布局配置 - 处理结构、排列、间距等
export interface LayoutConfig {
  // 页面布局
  page: {
    width: string | number
    height?: string | number
    padding: number
    margin: number
    columns: 1 | 2
    columnGap: number
    showPageNumbers: boolean
  }

  // 各部分排列顺序和可见性
  sections: {
    personalInfo: { order: number; visible: boolean }
    summary: { order: number; visible: boolean }
    workExperience: { order: number; visible: boolean }
    projectExperience: { order: number; visible: boolean }
    education: { order: number; visible: boolean }
    skills: { order: number; visible: boolean }
    honors: { order: number; visible: boolean }
    certificates: { order: number; visible: boolean }
    languages: { order: number; visible: boolean }
    publications: { order: number; visible: boolean }
    hobbies: { order: number; visible: boolean }
    references: { order: number; visible: boolean }
    customSections: { [key: string]: { order: number; visible: boolean } }
  }

  // 个人信息布局
  personalInfo: {
    layout: 'horizontal' | 'vertical' | 'centered'
    photoPosition: 'left' | 'right' | 'top' | 'none'
    photoSize: 'small' | 'medium' | 'large'
    contactLayout: 'inline' | 'stacked' | 'grid'
    nameDisplay: 'inline' | 'stacked'
    showJobStatus: boolean
    showJobExpectation: boolean
  }

  // 工作经历布局
  workExperience: {
    layout: 'chronological' | 'functional' | 'combined'
    itemLayout: 'stacked' | 'inline-header'
    datePosition: 'right' | 'below' | 'left'
    achievementsLayout: 'list' | 'tags' | 'paragraph'
    technologiesPosition: 'inline' | 'below'
    showLocation: boolean
    showAchievements: boolean
    showTechnologies: boolean
    maxItems: number
  }

  // 项目经历布局
  projectExperience: {
    layout: 'grid' | 'list'
    columns: number
    itemLayout: 'card' | 'compact'
    technologiesPosition: 'header' | 'footer'
    showRole: boolean
    showUrl: boolean
    showAchievements: boolean
    showTechnologies: boolean
    maxItems: number
  }

  // 教育背景布局
  education: {
    layout: 'list' | 'grid'
    columns: number
    showGPA: boolean
    showHonors: boolean
    showDescription: boolean
    maxItems: number
  }

  // 技能布局
  skills: {
    layout: 'grid' | 'list' | 'categories'
    columns: number
    groupByCategory: boolean
    showLevel: boolean
    showYears: boolean
    maxItems: number
  }

  // 荣誉奖项布局
  honors: {
    layout: 'list' | 'grid'
    columns: number
    showLevel: boolean
    showIssuer: boolean
    showDate: boolean
    showDescription: boolean
    maxItems: number
  }

  // 证书布局
  certificates: {
    layout: 'list' | 'grid'
    columns: number
    showDate: boolean
    showExpiry: boolean
    showNumber: boolean
    maxItems: number
  }

  // 语言能力布局
  languages: {
    layout: 'inline' | 'list' | 'progress'
    showProficiency: boolean
    maxItems: number
  }

  // 出版物布局
  publications: {
    layout: 'list' | 'citations'
    showAuthors: boolean
    showPublisher: boolean
    showDate: boolean
    maxItems: number
  }

  // 其他信息布局
  additionalInfo: {
    hobbiesLayout: 'tags' | 'list'
    referencesLayout: 'inline' | 'block'
    customSectionsLayout: 'list' | 'grid'
  }

  // 响应式断点
  breakpoints: {
    mobile: number
    tablet: number
    desktop: number
  }
}

// 默认布局配置
export const defaultLayout: LayoutConfig = {
  page: {
    width: '210mm',
    height: '297mm',
    padding: 25,
    margin: 10,
    columns: 1,
    columnGap: 20,
    showPageNumbers: true
  },

  sections: {
    personalInfo: { order: 1, visible: true },
    summary: { order: 2, visible: true },
    workExperience: { order: 3, visible: true },
    projectExperience: { order: 4, visible: true },
    education: { order: 5, visible: true },
    skills: { order: 6, visible: true },
    honors: { order: 7, visible: true },
    certificates: { order: 8, visible: true },
    languages: { order: 9, visible: true },
    publications: { order: 10, visible: true },
    hobbies: { order: 11, visible: true },
    references: { order: 12, visible: false },
    customSections: {}
  },

  personalInfo: {
    layout: 'horizontal',
    photoPosition: 'left',
    photoSize: 'medium',
    contactLayout: 'inline',
    nameDisplay: 'inline',
    showJobStatus: true,
    showJobExpectation: true
  },

  workExperience: {
    layout: 'chronological',
    itemLayout: 'stacked',
    datePosition: 'right',
    achievementsLayout: 'list',
    technologiesPosition: 'below',
    showLocation: true,
    showAchievements: true,
    showTechnologies: true,
    maxItems: 10
  },

  projectExperience: {
    layout: 'list',
    columns: 1,
    itemLayout: 'compact',
    technologiesPosition: 'footer',
    showRole: true,
    showUrl: true,
    showAchievements: true,
    showTechnologies: true,
    maxItems: 8
  },

  education: {
    layout: 'list',
    columns: 1,
    showGPA: true,
    showHonors: true,
    showDescription: true,
    maxItems: 5
  },

  skills: {
    layout: 'grid',
    columns: 3,
    groupByCategory: true,
    showLevel: true,
    showYears: false,
    maxItems: 20
  },

  honors: {
    layout: 'list',
    columns: 1,
    showLevel: true,
    showIssuer: true,
    showDate: true,
    showDescription: true,
    maxItems: 10
  },

  certificates: {
    layout: 'list',
    columns: 1,
    showDate: true,
    showExpiry: true,
    showNumber: true,
    maxItems: 10
  },

  languages: {
    layout: 'inline',
    showProficiency: true,
    maxItems: 8
  },

  publications: {
    layout: 'list',
    showAuthors: true,
    showPublisher: true,
    showDate: true,
    maxItems: 10
  },

  additionalInfo: {
    hobbiesLayout: 'tags',
    referencesLayout: 'block',
    customSectionsLayout: 'list'
  },

  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  }
}

// 专业布局配置
export const professionalLayout: LayoutConfig = {
  ...defaultLayout,
  page: {
    ...defaultLayout.page,
    padding: 30,
    columns: 1
  },
  personalInfo: {
    ...defaultLayout.personalInfo,
    layout: 'horizontal',
    photoPosition: 'left',
    contactLayout: 'grid'
  },
  workExperience: {
    ...defaultLayout.workExperience,
    itemLayout: 'stacked',
    datePosition: 'right',
    showTechnologies: true
  },
  skills: {
    ...defaultLayout.skills,
    layout: 'grid',
    columns: 4,
    showLevel: true
  }
}

// 紧凑布局配置
export const compactLayout: LayoutConfig = {
  ...defaultLayout,
  page: {
    ...defaultLayout.page,
    padding: 20
  },
  personalInfo: {
    ...defaultLayout.personalInfo,
    layout: 'vertical',
    photoPosition: 'none'
  },
  workExperience: {
    ...defaultLayout.workExperience,
    itemLayout: 'inline-header',
    showAchievements: false,
    showTechnologies: false
  },
  projectExperience: {
    ...defaultLayout.projectExperience,
    itemLayout: 'compact',
    showAchievements: false
  },
  skills: {
    ...defaultLayout.skills,
    layout: 'list',
    showLevel: false
  }
}

// 创意布局配置
export const creativeLayout: LayoutConfig = {
  ...defaultLayout,
  page: {
    ...defaultLayout.page,
    columns: 2,
    columnGap: 25
  },
  sections: {
    personalInfo: { order: 1, visible: true },
    skills: { order: 2, visible: true },
    workExperience: { order: 3, visible: true },
    projectExperience: { order: 4, visible: true },
    education: { order: 5, visible: true },
    honors: { order: 6, visible: true },
    certificates: { order: 7, visible: true },
    languages: { order: 8, visible: true },
    publications: { order: 9, visible: true },
    hobbies: { order: 10, visible: true },
    summary: { order: 11, visible: true },
    references: { order: 12, visible: false },
    customSections: {}
  },
  personalInfo: {
    ...defaultLayout.personalInfo,
    layout: 'vertical',
    photoPosition: 'top',
    photoSize: 'large'
  },
  skills: {
    ...defaultLayout.skills,
    layout: 'categories',
    groupByCategory: true
  }
}

// 布局工具类型
export interface FlexLayout {
  display: 'flex'
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap: number
}

export interface GridLayout {
  display: 'grid'
  gridTemplateColumns: string
  gridTemplateRows: string
  gap: number
  alignItems: 'start' | 'end' | 'center' | 'stretch'
  justifyItems: 'start' | 'end' | 'center' | 'stretch'
}

export interface SectionLayout {
  marginTop: number
  marginBottom: number
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
}

// Mock 布局配置
export const mockLayoutConfig: LayoutConfig = professionalLayout