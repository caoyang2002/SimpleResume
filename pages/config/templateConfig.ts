// /**
//  * @file templateConfig.ts
//  * @description 模板配置文件，定义各种模板的样式和布局
//  */

// import type { Template } from '~/types/template'

// /**
//  * 创建模板配置的工厂函数
//  */
// export function createTemplate(
//   id: string,
//   name: string,
//   type: string,
//   config: Partial<Template>
// ): Template {
//   return {
//     id,
//     name,
//     type,
    
//     description: config.description || '',
//     featured: config.featured || false,
//     premium: config.premium || false,
//     rating: config.rating || 4.5,
//     downloads: config.downloads || 0,
//     industries: config.industries || [],
//     tags: config.tags || [],
//     date: config.date || new Date().toISOString(),
    
//     // 颜色配置
//     colors: {
//       primary: config.colors?.primary || '#2563eb',
//       secondary: config.colors?.secondary || '#1f2937',
//       accent: config.colors?.accent || '#eff6ff',
//       bg: config.colors?.bg || '#ffffff',
//       text: config.colors?.text || '#1f2937',
//       ...config.colors
//     },
    
//     // 布局配置
//     layout: {
//       container: config.layout?.container || 'max-w-4xl mx-auto',
//       header: config.layout?.header || 'text-center mb-6',
//       sections: config.layout?.sections || 'space-y-6',
//       section: config.layout?.section || 'mb-4',
//       sectionTitle: config.layout?.sectionTitle || 'text-lg font-bold mb-2',
//       sectionContent: config.layout?.sectionContent || 'text-sm',
//       columns: config.layout?.columns || 1,
//       ...config.layout
//     },
    
//     // 样式配置
//     style: {
//       fontFamily: config.style?.fontFamily || 'Inter, sans-serif',
//       fontSize: {
//         title: config.style?.fontSize?.title || '24px',
//         heading: config.style?.fontSize?.heading || '16px',
//         body: config.style?.fontSize?.body || '14px',
//         small: config.style?.fontSize?.small || '12px',
//         ...config.style?.fontSize
//       },
//       borderRadius: config.style?.borderRadius || '0.5rem',
//       spacing: {
//         section: config.style?.spacing?.section || '1.5rem',
//         item: config.style?.spacing?.item || '1rem',
//         ...config.style?.spacing
//       },
//       ...config.style
//     },
    
//     preview: {
//       thumbnail: config.preview?.thumbnail || '',
//       ...config.preview
//     }
//   }
// }

// /**
//  * 预定义的模板配置
//  */
// export const templateConfigs: Template[] = [
//   // 专业风格 - 蓝色主题
//   createTemplate('professional-blue', '专业蓝', 'professional', {
//     description: '简洁专业的蓝色主题，适合商务和技术岗位',
//     featured: true,
//     rating: 4.8,
//     downloads: 15420,
//     industries: ['技术', '金融', '咨询'],
//     tags: ['专业', '简洁', '商务'],
//     colors: {
//       primary: '#2563eb',
//       secondary: '#1e293b',
//       accent: '#dbeafe',
//       bg: '#ffffff',
//       text: '#1f2937'
//     },
//     style: {
//       fontFamily: 'Inter, sans-serif',
//       fontSize: {
//         title: '28px',
//         heading: '18px',
//         body: '14px',
//         small: '12px'
//       },
//       borderRadius: '0.5rem',
//       spacing: {
//         section: '2rem',
//         item: '1rem'
//       }
//     }
//   }),

//   // 现代风格 - 绿色主题
//   createTemplate('modern-green', '现代绿', 'modern', {
//     description: '清新的绿色主题，展现活力和创新',
//     featured: true,
//     rating: 4.7,
//     downloads: 12350,
//     industries: ['设计', '创业', '市场'],
//     tags: ['现代', '清新', '创新'],
//     colors: {
//       primary: '#059669',
//       secondary: '#047857',
//       accent: '#d1fae5',
//       bg: '#ffffff',
//       text: '#064e3b'
//     },
//     style: {
//       fontFamily: 'Poppins, sans-serif',
//       fontSize: {
//         title: '26px',
//         heading: '17px',
//         body: '14px',
//         small: '12px'
//       },
//       borderRadius: '0.75rem'
//     }
//   }),

//   // 创意风格 - 紫色主题
//   createTemplate('creative-purple', '创意紫', 'creative', {
//     description: '富有创意的紫色主题，适合设计和艺术岗位',
//     premium: true,
//     rating: 4.9,
//     downloads: 8920,
//     industries: ['设计', '艺术', '媒体'],
//     tags: ['创意', '艺术', '独特'],
//     colors: {
//       primary: '#7c3aed',
//       secondary: '#6d28d9',
//       accent: '#ede9fe',
//       bg: '#faf5ff',
//       text: '#5b21b6'
//     },
//     style: {
//       fontFamily: 'Montserrat, sans-serif',
//       fontSize: {
//         title: '30px',
//         heading: '18px',
//         body: '14px',
//         small: '12px'
//       },
//       borderRadius: '1rem'
//     }
//   }),

//   // 经典风格 - 黑白主题
//   createTemplate('classic-bw', '经典黑白', 'classic', {
//     description: '永恒的黑白配色，专业而经典',
//     featured: true,
//     rating: 4.6,
//     downloads: 18750,
//     industries: ['法律', '学术', '传统行业'],
//     tags: ['经典', '正式', '传统'],
//     colors: {
//       primary: '#1f2937',
//       secondary: '#4b5563',
//       accent: '#f3f4f6',
//       bg: '#ffffff',
//       text: '#111827'
//     },
//     style: {
//       fontFamily: 'Georgia, serif',
//       fontSize: {
//         title: '26px',
//         heading: '17px',
//         body: '14px',
//         small: '12px'
//       },
//       borderRadius: '0.25rem'
//     }
//   }),

//   // 极简风格 - 灰色主题
//   createTemplate('minimal-gray', '极简灰', 'minimal', {
//     description: '极简主义设计，突出内容本身',
//     rating: 4.5,
//     downloads: 10200,
//     industries: ['科技', '设计', '建筑'],
//     tags: ['极简', '简约', '现代'],
//     colors: {
//       primary: '#6b7280',
//       secondary: '#374151',
//       accent: '#f9fafb',
//       bg: '#ffffff',
//       text: '#1f2937'
//     },
//     style: {
//       fontFamily: 'Helvetica Neue, sans-serif',
//       fontSize: {
//         title: '24px',
//         heading: '16px',
//         body: '13px',
//         small: '11px'
//       },
//       borderRadius: '0'
//     }
//   }),

//   // 现代风格 - 橙色主题
//   createTemplate('modern-orange', '现代橙', 'modern', {
//     description: '充满活力的橙色主题，展现热情和创造力',
//     rating: 4.6,
//     downloads: 9500,
//     industries: ['市场', '销售', '创意'],
//     tags: ['活力', '热情', '创意'],
//     colors: {
//       primary: '#ea580c',
//       secondary: '#9a3412',
//       accent: '#fed7aa',
//       bg: '#ffffff',
//       text: '#7c2d12'
//     }
//   }),

//   // 专业风格 - 深蓝主题
//   createTemplate('professional-navy', '专业深蓝', 'professional', {
//     description: '沉稳的深蓝主题，适合高级管理岗位',
//     premium: true,
//     rating: 4.8,
//     downloads: 7800,
//     industries: ['管理', '金融', '咨询'],
//     tags: ['高端', '专业', '沉稳'],
//     colors: {
//       primary: '#1e40af',
//       secondary: '#1e3a8a',
//       accent: '#dbeafe',
//       bg: '#f8fafc',
//       text: '#1e293b'
//     }
//   }),

//   // 创意风格 - 青色主题
//   createTemplate('creative-cyan', '创意青', 'creative', {
//     description: '清新的青色主题，展现创新思维',
//     rating: 4.7,
//     downloads: 8300,
//     industries: ['科技', '设计', '互联网'],
//     tags: ['创新', '科技', '现代'],
//     colors: {
//       primary: '#0891b2',
//       secondary: '#155e75',
//       accent: '#cffafe',
//       bg: '#ffffff',
//       text: '#164e63'
//     }
//   })
// ]

// /**
//  * 获取示例简历数据（用于预览）
//  */
// export function getSampleResumeData() {
//   return {
//     firstName: '张',
//     lastName: '三',
//     jobExpectation: '高级前端工程师',
//     email: 'zhangsan@example.com',
//     phone: '138-0000-0000',
//     wechat: 'zhangsan_wx',
//     summary: '5年前端开发经验，精通Vue/React等主流框架，有大型项目架构经验。',
    
//     works: [
//       {
//         position: '高级前端工程师',
//         company: '某科技公司',
//         startDate: '2021-06',
//         endDate: '2024-10',
//         current: false,
//         description: '负责公司核心产品的前端架构设计和开发',
//         achievements: [
//           '主导重构项目，性能提升40%',
//           '建立组件库，提高开发效率30%',
//           '指导团队5名成员，提升整体技术水平'
//         ]
//       },
//       {
//         position: '前端工程师',
//         company: '某互联网公司',
//         startDate: '2019-07',
//         endDate: '2021-05',
//         current: false,
//         description: '负责移动端和PC端产品开发',
//         achievements: [
//           '开发多个核心功能模块',
//           '优化首屏加载时间至1.5s内'
//         ]
//       }
//     ],
    
//     projects: [
//       {
//         name: '企业管理系统',
//         role: '前端负责人',
//         startDate: '2022-03',
//         endDate: '2023-12',
//         description: '大型企业级管理系统，包含20+功能模块',
//         achievements: [
//           '设计并实现微前端架构',
//           '建立CI/CD流程，提升部署效率'
//         ],
//         technologies: ['Vue 3', 'TypeScript', 'Vite', 'Pinia']
//       }
//     ],
    
//     educations: [
//       {
//         school: '某大学',
//         major: '计算机科学与技术',
//         degree: 'bachelor',
//         startDate: '2015-09',
//         endDate: '2019-06',
//         gpa: '3.8/4.0'
//       }
//     ],
    
//     skills: [
//       { name: 'Vue.js', level: 'expert' },
//       { name: 'React', level: 'advanced' },
//       { name: 'TypeScript', level: 'advanced' },
//       { name: 'Node.js', level: 'intermediate' },
//       { name: 'Python', level: 'intermediate' }
//     ],
    
//     certificates: [
//       {
//         name: 'AWS认证开发者',
//         issuer: 'Amazon Web Services',
//         date: '2023-05'
//       }
//     ],
    
//     languages: [
//       { name: '中文', proficiency: 'native' },
//       { name: '英语', proficiency: 'professional' }
//     ]
//   }
// }

// /**
//  * 根据行业推荐模板
//  */
// export function getRecommendedTemplates(industry: string): Template[] {
//   return templateConfigs
//     .filter(t => t.industries.includes(industry))
//     .sort((a, b) => b.rating - a.rating)
// }

// /**
//  * 根据风格筛选模板
//  */
// export function getTemplatesByType(type: string): Template[] {
//   if (type === 'all') return templateConfigs
//   return templateConfigs.filter(t => t.type === type)
// }