// /**
//  * @file style.ts
//  * @brief 基础样式
//  */
// import type { LayoutConfig } from "./layout"

// /**
//  * @interface TextStyle
//  * @brief 文本样式
//  */
// export interface TextStyle {
//   fontSize: number
//   fontFamily: string
//   fontWeight: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
//   fontStyle: 'normal' | 'italic'
//   color: string
//   lineHeight: number
//   letterSpacing: number
//   textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
//   textDecoration: 'none' | 'underline' | 'line-through'
// }

// export interface SpacingStyle {
//   marginTop: number
//   marginRight: number
//   marginBottom: number
//   marginLeft: number
//   paddingTop: number
//   paddingRight: number
//   paddingBottom: number
//   paddingLeft: number
// }

// export interface BorderStyle {
//   width: number
//   style: 'solid' | 'dashed' | 'dotted' | 'double'
//   color: string
//   radius: number
// }

// export interface BackgroundStyle {
//   color: string
//   image?: string
//   size?: 'cover' | 'contain' | 'auto'
//   position?: string
//   repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
// }

// export interface ColorPalette {
//   primary: string
//   secondary: string
//   accent: string
//   success: string
//   warning: string
//   error: string
//   background: {
//     primary: string
//     secondary: string
//     accent: string
//   }
//   text: {
//     primary: string
//     secondary: string
//     muted: string
//     inverted: string
//   }
//   border: string
// }

// // 主题定义
// export interface Theme {
//   name: string
//   colors: ColorPalette
//   typography: {
//     fontFamily: {
//       heading: string
//       body: string
//       monospace: string
//     }
//     fontSize: {
//       xs: number
//       sm: number
//       base: number
//       lg: number
//       xl: number
//       '2xl': number
//       '3xl': number
//       '4xl': number
//     }
//     fontWeight: {
//       light: number
//       normal: number
//       medium: number
//       semibold: number
//       bold: number
//     }
//     lineHeight: {
//       tight: number
//       normal: number
//       relaxed: number
//     }
//   }
//   spacing: {
//     xs: number
//     sm: number
//     md: number
//     lg: number
//     xl: number
//     '2xl': number
//   }
//   borderRadius: {
//     sm: number
//     md: number
//     lg: number
//     xl: number
//   }
//   shadows: {
//     sm: string
//     md: string
//     lg: string
//     xl: string
//   }
// }

// // 样式配置
// export interface StyleConfig {
//   // 主题
//   theme: Theme

//   // 页面样式
//   page: {
//     background: BackgroundStyle
//     shadow: string
//   }

//   // 个人信息样式
//   personalInfo: {
//     container: SpacingStyle & BackgroundStyle
//     name: {
//       firstName: TextStyle
//       lastName: TextStyle
//     }
//     photo: {
//       size: number
//       border: BorderStyle
//       shadow: string
//     }
//     contact: {
//       container: SpacingStyle
//       item: TextStyle
//       icon: {
//         size: number
//         color: string
//       }
//     }
//     jobInfo: {
//       currentTitle: TextStyle
//       jobExpectation: TextStyle
//       base: TextStyle
//     }
//     summary: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       text: TextStyle
//     }
//   }

//   // 章节标题样式
//   section: {
//     title: TextStyle & {
//       divider: {
//         enabled: boolean
//         color: string
//         thickness: number
//         style: 'solid' | 'dashed' | 'dotted'
//       }
//     }
//     container: SpacingStyle
//   }

//   // 工作经历样式
//   workExperience: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       header: {
//         company: TextStyle
//         position: TextStyle
//         location: TextStyle
//         date: TextStyle & {
//           current: TextStyle
//         }
//       }
//       description: TextStyle
//       achievements: {
//         list: TextStyle
//         item: TextStyle & {
//           bullet: {
//             character: string
//             color: string
//             size: number
//           }
//         }
//       }
//       technologies: {
//         container: SpacingStyle
//         tag: TextStyle & BackgroundStyle & BorderStyle
//       }
//     }
//   }

//   // 项目经历样式
//   projectExperience: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       header: {
//         name: TextStyle
//         role: TextStyle
//         url: TextStyle
//         date: TextStyle
//       }
//       description: TextStyle
//       achievements: {
//         list: TextStyle
//         item: TextStyle & {
//           bullet: {
//             character: string
//             color: string
//             size: number
//           }
//         }
//       }
//       technologies: {
//         container: SpacingStyle
//         tag: TextStyle & BackgroundStyle & BorderStyle
//       }
//     }
//   }

//   // 教育背景样式
//   education: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       header: {
//         school: TextStyle
//         major: TextStyle
//         degree: TextStyle
//       }
//       details: {
//         date: TextStyle
//         gpa: TextStyle
//         honors: {
//           list: TextStyle
//           item: TextStyle
//         }
//       }
//       description: TextStyle
//     }
//   }

//   // 技能样式
//   skills: {
//     category: TextStyle
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       name: TextStyle
//       level: {
//         container: SpacingStyle
//         bar: BackgroundStyle & {
//           height: number
//           borderRadius: number
//         }
//         text: TextStyle
//         variants: {
//           beginner: { color: string; background: string }
//           intermediate: { color: string; background: string }
//           advanced: { color: string; background: string }
//           expert: { color: string; background: string }
//         }
//       }
//       years: TextStyle
//     }
//   }

//   // 荣誉奖项样式
//   honors: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       name: TextStyle
//       level: TextStyle & BackgroundStyle & BorderStyle
//       issuer: TextStyle
//       date: TextStyle
//       description: TextStyle
//     }
//   }

//   // 证书样式
//   certificates: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       name: TextStyle
//       issuer: TextStyle
//       date: TextStyle
//       expiryDate: TextStyle
//       number: TextStyle
//     }
//   }

//   // 语言能力样式
//   languages: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       name: TextStyle
//       proficiency: {
//         text: TextStyle
//         variants: {
//           basic: TextStyle
//           conversational: TextStyle
//           professional: TextStyle
//           native: TextStyle
//         }
//       }
//     }
//   }

//   // 出版物样式
//   publications: {
//     item: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       title: TextStyle
//       publisher: TextStyle
//       date: TextStyle
//       authors: {
//         list: TextStyle
//         item: TextStyle
//       }
//     }
//   }

//   // 其他信息样式
//   additionalInfo: {
//     references: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       text: TextStyle
//     }
//     hobbies: {
//       container: SpacingStyle
//       tag: TextStyle & BackgroundStyle & BorderStyle
//     }
//     customSections: {
//       container: SpacingStyle & BackgroundStyle & BorderStyle
//       title: TextStyle
//       content: TextStyle
//     }
//   }
// }

// // 默认主题
// export const defaultTheme: Theme = {
//   name: 'default',
//   colors: {
//     primary: '#2563eb',
//     secondary: '#64748b',
//     accent: '#f59e0b',
//     success: '#10b981',
//     warning: '#f59e0b',
//     error: '#ef4444',
//     background: {
//       primary: '#ffffff',
//       secondary: '#f8fafc',
//       accent: '#eff6ff'
//     },
//     text: {
//       primary: '#1e293b',
//       secondary: '#64748b',
//       muted: '#94a3b8',
//       inverted: '#ffffff'
//     },
//     border: '#e2e8f0'
//   },
//   typography: {
//     fontFamily: {
//       heading: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
//       body: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
//       monospace: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace"
//     },
//     fontSize: {
//       xs: 12,
//       sm: 14,
//       base: 16,
//       lg: 18,
//       xl: 20,
//       '2xl': 24,
//       '3xl': 30,
//       '4xl': 36
//     },
//     fontWeight: {
//       light: 300,
//       normal: 400,
//       medium: 500,
//       semibold: 600,
//       bold: 700
//     },
//     lineHeight: {
//       tight: 1.25,
//       normal: 1.5,
//       relaxed: 1.75
//     }
//   },
//   spacing: {
//     xs: 4,
//     sm: 8,
//     md: 16,
//     lg: 24,
//     xl: 32,
//     '2xl': 48
//   },
//   borderRadius: {
//     sm: 4,
//     md: 8,
//     lg: 12,
//     xl: 16
//   },
//   shadows: {
//     sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
//     md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
//     lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
//     xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
//   }
// }

// // 完整的简历配置
// export interface ResumeConfig {
//   data: any // 使用您的 ResumeData 类型
//   layout: LayoutConfig
//   style: StyleConfig
// }