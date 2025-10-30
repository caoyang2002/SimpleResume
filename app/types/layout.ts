// 布局配置类型 - 主要处理结构、排列、间距等
/**
 * @file layout.ts
 * 
 */
export interface LayoutConfig {
  // 页面布局
  page: {
    width: string | number
    height?: string | number
    padding: number
    margin: number
    columns?: 1 | 2 // 单栏或双栏布局
    columnGap?: number
  }

  // 各部分排列顺序
  sectionOrder: {
    personalInfo: number
    summary: number
    workExperience: number
    projectExperience: number
    education: number
    skills: number
    honors: number
    certificates: number
    languages: number
    publications: number
    hobbies: number
    customSections: { [key: string]: number }
  }

  // 个人信息布局
  personalInfo: {
    layout: 'horizontal' | 'vertical' | 'centered'
    photoPosition: 'left' | 'right' | 'top' | 'none'
    contactLayout: 'inline' | 'stacked' | 'grid'
    nameDisplay: 'inline' | 'stacked'
  }

  // 工作经历布局
  workExperience: {
    layout: 'chronological' | 'functional' | 'combined'
    itemLayout: 'stacked' | 'inline-header'
    datePosition: 'right' | 'below' | 'left'
    achievementsLayout: 'list' | 'tags' | 'paragraph'
    technologiesPosition: 'inline' | 'below'
  }

  // 项目经历布局
  projectExperience: {
    layout: 'grid' | 'list'
    columns?: number
    itemLayout: 'card' | 'compact'
    technologiesPosition: 'header' | 'footer'
  }

  // 教育背景布局
  education: {
    layout: 'list' | 'grid'
    columns?: number
    showGPA: boolean
    showHonors: boolean
  }

  // 技能布局
  skills: {
    layout: 'grid' | 'list' | 'categories'
    columns: number
    groupByCategory: boolean
    showLevel: boolean
    showYears: boolean
  }

  // 荣誉奖项布局
  honors: {
    layout: 'list' | 'grid'
    columns: number
    showLevel: boolean
    showDate: boolean
  }

  // 证书布局
  certificates: {
    layout: 'list' | 'grid'
    columns: number
    showDate: boolean
    showExpiry: boolean
  }

  // 语言能力布局
  languages: {
    layout: 'inline' | 'list' | 'progress'
    showProficiency: boolean
  }

  // 出版物布局
  publications: {
    layout: 'list' | 'citations'
    showAuthors: boolean
    showPublisher: boolean
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
    padding: 20,
    margin: 10,
    columns: 1
  },
  sectionOrder: {
    personalInfo: 1,
    summary: 2,
    workExperience: 3,
    projectExperience: 4,
    education: 5,
    skills: 6,
    honors: 7,
    certificates: 8,
    languages: 9,
    publications: 10,
    hobbies: 11,
    customSections: {}
  },
  personalInfo: {
    layout: 'horizontal',
    photoPosition: 'left',
    contactLayout: 'inline',
    nameDisplay: 'inline'
  },
  workExperience: {
    layout: 'chronological',
    itemLayout: 'stacked',
    datePosition: 'right',
    achievementsLayout: 'list',
    technologiesPosition: 'below'
  },
  projectExperience: {
    layout: 'list',
    itemLayout: 'compact',
    technologiesPosition: 'footer'
  },
  education: {
    layout: 'list',
    showGPA: true,
    showHonors: true
  },
  skills: {
    layout: 'grid',
    columns: 3,
    groupByCategory: false,
    showLevel: true,
    showYears: false
  },
  honors: {
    layout: 'list',
    columns: 1,
    showLevel: true,
    showDate: true
  },
  certificates: {
    layout: 'list',
    columns: 1,
    showDate: true,
    showExpiry: true
  },
  languages: {
    layout: 'inline',
    showProficiency: true
  },
  publications: {
    layout: 'list',
    showAuthors: true,
    showPublisher: true
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