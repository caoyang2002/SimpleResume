import type { 
  ResumeData, 
  PersonalInfo, 
  WorkExperience, 
  ProjectExperience, 
  Education, 
  Skill, 
  Honor, 
  Certificate, 
  Language, 
  Publication,
  CustomSection 
} from '~/types/person';

export const mockResumeData: ResumeData = {
  // 个人信息
  firstName: '张',
  lastName: '明',
  email: 'zhang.ming@email.com',
  phone: '+86 138-0013-8000',
  wechat: 'zhangming2024',
  website: 'https://caoyan2002.xyz',
  photoUrl: 'https://ohohresume.vercel.app/face.jpg',
  birthDate: '1995-08-15',
  gender: 'male' as const,
  jobStatus: '在职，考虑新机会',
  jobExpectation: '高级全栈开发工程师',
  base: '上海',
  currentTitle: '高级前端开发工程师',
  summary: '5年全栈开发经验，专注于React、Node.js和云原生技术。在大型分布式系统架构和性能优化方面有丰富经验，热衷于技术创新和团队协作。',
  linkedin: 'https://linkedin.com/in/zhangming',
  github: 'https://github.com/zhangming',

  // 工作经历
  works: [
    {
      id: 'work-1',
      company: '字节跳动',
      position: '高级前端开发工程师',
      location: '上海',
      startDate: '2021-03',
      endDate: '2024-01',
      current: false,
      description: '负责抖音电商平台前端架构设计和核心功能开发，主导技术选型和团队代码规范制定。',
      achievements: [
        '主导重构商品详情页，首屏加载时间从3.2s优化至1.8s，提升用户体验',
        '设计并实现微前端架构，支持多个业务团队并行开发，提升开发效率40%',
        '建立前端监控体系，错误捕获率达到98%，快速定位线上问题',
        '带领5人前端团队，完成新人培养和技术分享体系建设'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Webpack', 'Docker', 'Kubernetes']
    },
    {
      id: 'work-2',
      company: '阿里巴巴集团',
      position: '前端开发工程师',
      location: '杭州',
      startDate: '2019-07',
      endDate: '2021-02',
      current: false,
      description: '参与淘宝移动端核心业务开发，负责用户增长和营销活动相关功能。',
      achievements: [
        '开发双11大促活动页面，支撑千万级用户并发访问',
        '实现组件库的搭建和维护，被10+业务线采用',
        '优化构建流程，打包时间从15分钟减少到3分钟',
        '参与技术分享，获得部门优秀新人奖'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Webpack', 'Sass', 'Jest']
    },
    {
      id: 'work-3',
      company: '腾讯科技',
      position: '全栈开发工程师',
      location: '深圳',
      startDate: '2024-02',
      endDate: undefined,
      current: true,
      description: '负责微信生态相关产品开发，包括小程序、公众号和企业微信应用。',
      achievements: [
        '主导开发企业微信SCRM系统，服务5000+企业客户',
        '构建微服务架构，支持系统水平扩展和高可用',
        '引入CI/CD流程，自动化部署效率提升60%'
      ],
      technologies: ['React', 'Nest.js', 'MySQL', 'Redis', 'Docker', 'AWS']
    }
  ],

  // 项目经历
  projects: [
    {
      id: 'project-1',
      name: '智能客服系统',
      role: '项目负责人 & 全栈开发',
      url: 'https://github.com/zhangming/smart-customer-service',
      startDate: '2023-01',
      endDate: '2023-06',
      description: '基于AI的智能客服解决方案，集成自然语言处理和机器学习算法，提供24/7客户服务支持。',
      achievements: [
        '设计并实现实时对话系统，支持多轮对话和上下文理解',
        '集成GPT-3.5模型，提升智能回复准确率至85%',
        '实现多租户架构，支持企业个性化配置',
        '系统日均处理咨询量10万+，客户满意度提升30%'
      ],
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'WebSocket', 'MongoDB']
    },
    {
      id: 'project-2',
      name: '数据可视化平台',
      role: '前端架构师',
      url: 'https://github.com/zhangming/data-vis-platform',
      startDate: '2022-03',
      endDate: '2022-09',
      description: '为企业提供大数据可视化分析平台，支持实时数据监控和多维度数据分析。',
      achievements: [
        '基于ECharts开发自定义图表组件库',
        '实现实时数据流处理，延迟低于100ms',
        '支持PB级数据快速渲染和交互',
        '获得公司技术创新奖'
      ],
      technologies: ['Vue 3', 'TypeScript', 'ECharts', 'WebGL', 'WebSocket', 'IndexedDB']
    }
  ],

  // 教育背景
  educations: [
    {
      id: 'edu-1',
      school: '上海交通大学',
      major: '计算机科学与技术',
      degree: 'bachelor' as const,
      startDate: '2015-09',
      endDate: '2019-06',
      gpa: '3.8/4.0',
      honors: [
        '国家奖学金 (2018)',
        '优秀毕业生',
        'ACM程序设计竞赛华东赛区一等奖'
      ],
      description: '主修课程：数据结构、算法设计、操作系统、计算机网络、数据库系统、软件工程等。'
    },
    {
      id: 'edu-2',
      school: '复旦大学',
      major: '软件工程',
      degree: 'master' as const,
      startDate: '2022-09',
      endDate: '2024-06',
      gpa: '3.9/4.0',
      honors: [
        '研究生一等奖学金',
        '优秀研究生干部'
      ],
      description: '研究方向：分布式系统与云计算，毕业论文《基于微服务架构的高可用电商平台设计与实现》'
    }
  ],

  // 技能
  skills: [
    {
      id: 'skill-1',
      name: 'React',
      level: 'expert' as const,
      category: '前端框架',
      yearsOfExperience: 5
    },
    {
      id: 'skill-2',
      name: 'TypeScript',
      level: 'expert' as const,
      category: '编程语言',
      yearsOfExperience: 4
    },
    {
      id: 'skill-3',
      name: 'Node.js',
      level: 'advanced' as const,
      category: '后端技术',
      yearsOfExperience: 4
    },
    {
      id: 'skill-4',
      name: 'Python',
      level: 'intermediate' as const,
      category: '编程语言',
      yearsOfExperience: 3
    },
    {
      id: 'skill-5',
      name: 'Docker',
      level: 'advanced' as const,
      category: '运维部署',
      yearsOfExperience: 3
    },
    {
      id: 'skill-6',
      name: 'AWS',
      level: 'intermediate' as const,
      category: '云计算',
      yearsOfExperience: 2
    },
    {
      id: 'skill-7',
      name: 'MySQL',
      level: 'advanced' as const,
      category: '数据库',
      yearsOfExperience: 4
    },
    {
      id: 'skill-8',
      name: 'MongoDB',
      level: 'intermediate' as const,
      category: '数据库',
      yearsOfExperience: 2
    }
  ],

  // 荣誉奖项
  honors: [
    {
      id: 'honor-1',
      name: '优秀员工',
      level: '公司级',
      issuer: '字节跳动',
      date: '2023-12',
      description: '年度优秀员工，表彰在技术架构优化和团队建设方面的突出贡献'
    },
    {
      id: 'honor-2',
      name: '技术创新奖',
      level: '部门级',
      issuer: '阿里巴巴-前端工程部',
      date: '2020-11',
      description: '双11大促技术创新，实现高并发场景下的极致性能优化'
    },
    {
      id: 'honor-3',
      name: 'Hackathon冠军',
      level: '公司级',
      issuer: '腾讯',
      date: '2024-05',
      description: '48小时编程马拉松比赛冠军，作品"智能代码审查助手"'
    }
  ],

  // 证书
  certificates: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2023-03',
      expiryDate: '2026-03',
      number: 'AWS-ASA-123456',
      url: 'https://aws.amazon.com/certification'
    },
    {
      id: 'cert-2',
      name: 'PMP项目管理专业人士资格认证',
      issuer: 'Project Management Institute',
      date: '2022-08',
      expiryDate: '2025-08',
      number: 'PMP-789012',
      url: 'https://www.pmi.org/certifications'
    },
    {
      id: 'cert-3',
      name: 'Scrum Master认证',
      issuer: 'Scrum Alliance',
      date: '2021-05',
      number: 'CSM-345678'
    }
  ],

  // 语言能力
  languages: [
    {
      id: 'lang-1',
      name: '中文',
      proficiency: 'native' as const
    },
    {
      id: 'lang-2',
      name: '英语',
      proficiency: 'professional' as const
    },
    {
      id: 'lang-3',
      name: '日语',
      proficiency: 'conversational' as const
    }
  ],

  // 出版物
  publications: [
    {
      id: 'pub-1',
      title: '基于React Hooks的前端状态管理最佳实践',
      publisher: '《前端开发》期刊',
      date: '2023-07',
      url: 'https://example.com/article-1',
      authors: ['张明', '李华', '王芳']
    },
    {
      id: 'pub-2',
      title: '微前端架构在大型电商平台的应用与挑战',
      publisher: '中国软件工程大会',
      date: '2022-11',
      url: 'https://example.com/article-2',
      authors: ['张明', '赵伟']
    }
  ],

  // 其他信息
  references: '可根据要求提供前雇主和同事的联系方式及推荐信。',
  hobbies: ['开源贡献', '技术博客写作', '登山', '摄影', '围棋'],
  
  // 自定义版块
  customSections: [
    {
      id: 'custom-1',
      title: '开源贡献',
      content: '活跃的开源贡献者，在GitHub上有50+个star的项目。主要贡献领域：React生态、构建工具、开发者工具。',
      order: 1
    },
    {
      id: 'custom-2',
      title: '技术社区活动',
      content: '定期在技术社区分享，曾在北京、上海、深圳等地技术大会担任演讲嘉宾。组织本地前端技术Meetup。',
      order: 2
    }
  ]
};

// 导出各个部分的独立mock数据，便于测试使用
export const mockPersonalInfo: PersonalInfo = {
  firstName: '张',
  lastName: '明',
  email: 'zhang.ming@email.com',
  phone: '+86 138-0013-8000',
  wechat: 'zhangming2024',
  website: 'https://zhangming.dev',
  currentTitle: '高级前端开发工程师',
  summary: '5年全栈开发经验，专注于React、Node.js和云原生技术...'
};

export const mockWorkExperiences: WorkExperience[] = mockResumeData.works || [];
export const mockProjectExperiences: ProjectExperience[] = mockResumeData.projects || [];
export const mockEducations: Education[] = mockResumeData.educations || [];
export const mockSkills: Skill[] = mockResumeData.skills || [];
export const mockHonors: Honor[] = mockResumeData.honors || [];
export const mockCertificates: Certificate[] = mockResumeData.certificates || [];
export const mockLanguages: Language[] = mockResumeData.languages || [];
export const mockPublications: Publication[] = mockResumeData.publications || [];

// 简化的mock数据，用于测试和开发
export const minimalMockResumeData: ResumeData = {
  firstName: '李',
  lastName: '华',
  email: 'li.hua@example.com',
  phone: '+86 139-0013-9000',
  currentTitle: '前端开发工程师',
  summary: '3年前端开发经验，精通Vue.js和React框架。',
  works: [
    {
      company: '某科技公司',
      position: '前端开发工程师',
      startDate: '2021-07',
      endDate: '2024-01',
      description: '负责公司核心产品的前端开发工作。',
      achievements: ['优化页面性能', '开发可复用组件'],
      technologies: ['Vue.js', 'JavaScript', 'CSS']
    }
  ],
  educations: [
    {
      school: '某大学',
      major: '软件工程',
      degree: 'bachelor',
      startDate: '2017-09',
      endDate: '2021-06'
    }
  ],
  skills: [
    {
      name: 'Vue.js',
      level: 'advanced',
      yearsOfExperience: 3
    }
  ]
};

export default mockResumeData;