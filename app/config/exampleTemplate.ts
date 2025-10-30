/**
 * @file sampleData.ts
 * @description 示例简历数据，用于模板预览
 */

import type { ResumeData } from '~/types/template'

/**
 * 获取示例简历数据
 */
export function getSampleResumeData(): ResumeData {
  return {
    personal:{
    // 基本信息
    firstName: '张',
    lastName: '三',
    jobExpectation: '高级前端工程师',
    currentTitle: '前端技术专家',
    
    // 联系方式
    email: 'zhangsan@example.com',
    phone: '138-0000-0000',
    wechat: 'zhangsan_wx',
    address: '北京市朝阳区',
    website: 'https://zhangsan.dev',
    github: 'github.com/zhangsan',
    avatar:"https://www.caoyang2002.xyz/about/simons.jpg",
    
    // 个人简介
    summary: '5年前端开发经验，精通Vue、React等主流框架。有大型项目架构经验，擅长性能优化和工程化建设。热爱开源，注重代码质量和用户体验。',
    },
    // 工作经历
    works: [
      {
        position: '高级前端工程师',
        company: '某科技公司',
        location: '北京',
        startDate: '2021-06',
        endDate: '2024-10',
        current: false,
        description: '负责公司核心产品的前端架构设计和开发工作。',
        achievements: [
          '主导重构项目，将首屏加载时间从3.5s优化至1.2s，性能提升65%',
          '建立组件库和设计系统，提高团队开发效率30%，降低代码重复率40%',
          '指导5名初级工程师，负责技术分享和代码审查',
          '推动前端工程化建设，建立CI/CD流程，实现自动化部署'
        ],
        technologies: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Element Plus']
      },
      {
        position: '前端工程师',
        company: '某互联网公司',
        location: '北京',
        startDate: '2019-07',
        endDate: '2021-05',
        current: false,
        description: '负责移动端和PC端多个产品的前端开发工作。',
        achievements: [
          '开发多个核心功能模块，包括用户中心、数据看板等',
          '优化移动端性能，首屏加载时间降低至1.5s以内',
          '参与技术选型和架构设计，推动团队技术栈升级'
        ],
        technologies: ['React', 'Redux', 'Ant Design', 'Less']
      }
    ],
    
    // 项目经历
    projects: [
      {
        name: '企业管理系统',
        role: '前端负责人',
        url: 'https://example.com/project1',
        startDate: '2022-03',
        endDate: '2023-12',
        description: '大型企业级管理系统，包含20+功能模块，支持10万+并发用户。',
        achievements: [
          '设计并实现微前端架构，支持多团队并行开发',
          '建立完善的组件库和开发规范，提升开发效率',
          '实现权限管理系统，支持灵活的角色和权限配置',
          '优化系统性能，页面响应时间<200ms'
        ],
        technologies: ['Vue 3', 'TypeScript', 'Vite', 'qiankun', 'Pinia', 'Element Plus']
      },
      {
        name: '数据可视化平台',
        role: '核心开发',
        startDate: '2020-06',
        endDate: '2021-12',
        description: '实时数据可视化平台，支持多种图表类型和自定义配置。',
        achievements: [
          '使用Canvas和WebGL实现高性能图表渲染',
          '支持百万级数据点实时渲染，帧率保持60FPS',
          '实现拖拽式可视化编辑器，降低使用门槛'
        ],
        technologies: ['React', 'D3.js', 'ECharts', 'Three.js', 'WebSocket']
      }
    ],
    
    // 教育经历
    educations: [
      {
        school: '某大学',
        major: '计算机科学与技术',
        degree: 'bachelor',
        startDate: '2015-09',
        endDate: '2019-06',
        gpa: '3.8/4.0',
        honors: ['优秀毕业生', '国家奖学金', 'ACM程序设计竞赛二等奖'],
        courses: ['数据结构与算法', '操作系统', '计算机网络', '数据库原理']
      }
    ],
    
    // 专业技能
    skills: [
      { name: 'Vue.js', level: 'expert', years: 5, category: '前端框架' },
      { name: 'React', level: 'advanced', years: 4, category: '前端框架' },
      { name: 'TypeScript', level: 'advanced', years: 4, category: '编程语言' },
      { name: 'JavaScript', level: 'expert', years: 6, category: '编程语言' },
      { name: 'Node.js', level: 'intermediate', years: 3, category: '后端技术' },
      { name: 'Webpack/Vite', level: 'advanced', years: 4, category: '工程化' },
      { name: 'Git', level: 'advanced', years: 5, category: '版本控制' },
      { name: 'Docker', level: 'intermediate', years: 2, category: 'DevOps' }
    ],
    
    // 证书
    certificates: [
      {
        name: 'AWS认证开发者 - 助理级',
        issuer: 'Amazon Web Services',
        date: '2023-05',
        credentialId: 'AWS-ASA-12345',
        url: 'https://aws.amazon.com/verification'
      },
      {
        name: 'PMP项目管理专业人士',
        issuer: 'PMI',
        date: '2022-11',
        expiryDate: '2025-11',
        credentialId: 'PMP-67890'
      }
    ],
    
    // 语言能力
    languages: [
      { name: '中文', proficiency: 'native' },
      { name: '英语', proficiency: 'professional' },
      { name: '日语', proficiency: 'conversational' }
    ],
    
    // 荣誉奖项
    honors: [
      {
        name: '年度最佳员工',
        issuer: '某科技公司',
        date: '2023-12',
        level: '公司级',
        description: '在技术创新和团队协作方面表现突出'
      },
      {
        name: '技术创新奖',
        issuer: '某互联网公司',
        date: '2020-08',
        level: '部门级',
        description: '在性能优化方面做出突出贡献'
      }
    ],
    
    // 出版物
    publications: [
      {
        title: '前端性能优化最佳实践',
        publisher: '掘金',
        date: '2023-06',
        authors: ['张三', '李四'],
        url: 'https://juejin.cn/post/example'
      }
    ],
    
    // 兴趣爱好
    hobbies: ['开源贡献', '技术写作', '摄影', '跑步'],
    
    // 推荐人
    references: '如需推荐人信息，请联系我获取。'
  }
}

/**
 * 获取简化版示例数据（用于快速预览）
 */
export function getMinimalSampleData(): ResumeData {
  return {
    personal:{
    firstName: '张',
    lastName: '三',
    jobExpectation: '前端工程师',
    email: 'zhangsan@example.com',
    phone: '138-0000-0000',
    summary: '3年前端开发经验，熟悉Vue和React。',
    avatar:"https://www.caoyang2002.xyz/about/simons.jpg",
    },
    works: [
      {
        position: '前端工程师',
        company: '某科技公司',
        startDate: '2021-06',
        current: true,
        description: '负责公司产品的前端开发工作。',
        achievements: ['开发多个核心功能模块', '优化系统性能']
      }
    ],
    educations: [
      {
        school: '某大学',
        major: '计算机科学与技术',
        degree: 'bachelor',
        startDate: '2017-09',
        endDate: '2021-06'
      }
    ],
    skills: [
      { name: 'Vue.js', level: 'advanced' },
      { name: 'React', level: 'intermediate' },
      { name: 'TypeScript', level: 'intermediate' }
    ]
  }
}

/**
 * 根据岗位类型获取定制化示例数据
 */
export function getSampleDataByJobType(jobType: string): ResumeData {
  const baseData = getSampleResumeData()
  
  switch (jobType) {
    case 'frontend':
      return baseData
      
    case 'backend':
      return {
        ...baseData,
        personal:{
           ...baseData.personal,
        jobExpectation: '高级后端工程师',
        summary: '5年后端开发经验，精通Java、Python等语言。擅长分布式系统设计和高并发优化。'
      },
        skills: [
          { name: 'Java', level: 'expert', category: '编程语言' },
          { name: 'Spring Boot', level: 'advanced', category: '框架' },
          { name: 'MySQL', level: 'advanced', category: '数据库' },
          { name: 'Redis', level: 'advanced', category: '缓存' },
          { name: 'Docker', level: 'intermediate', category: 'DevOps' }
        ]
      }
      
    case 'fullstack':
      return {
        ...baseData,
        personal: {
          ...baseData.personal,
          jobExpectation: '全栈工程师',
          summary: '5年全栈开发经验，精通前后端技术栈。有完整的项目架构和部署经验。'
        },
        skills: [
          { name: 'Vue.js', level: 'expert', category: '前端' },
          { name: 'Node.js', level: 'advanced', category: '后端' },
          { name: 'TypeScript', level: 'advanced', category: '语言' },
          { name: 'MongoDB', level: 'intermediate', category: '数据库' }
        ]
      }
      
    default:
      return baseData
  }
}