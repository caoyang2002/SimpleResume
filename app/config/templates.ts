/**
 * @file templates.ts
 * @description 预定义的简历模板配置
 */

import type { Template, TemplateOptions, DeepPartial } from '~/types/template'
import {templates as templatesExample} from "~/templates/template"

/**
 * 默认配置
 */
const defaultConfig: DeepPartial<Template> = {
  layout: {
    page: {
      width: '210mm',
      maxWidth: '800px',
      columns: 1,
      padding: '2rem',
      margin: '0 auto'
    },
    header: {
      align: 'center',
      direction: 'vertical',
      spacing: '1rem',
      background: 'filled',
      divider: true
    },
    section: {
      titlePosition: 'top',
      contentAlign: 'left',
      spacing: '1.5rem',
      divider: {
        enabled: true,
        style: 'line',
        position: 'bottom'
      }
    },
    item: {
      style: 'stacked',
      datePosition: 'right',
      tagStyle: 'pill',
      bullet: {
        style: 'disc',
        color: 'currentColor'
      }
    },
    skill: {
      display: 'grid',
      columns: 2,
      showLevel: true,
      levelStyle: 'bar'
    }
  },
  
  style: {
    global: {
      fonts: {
        family: 'Inter, sans-serif',
        size: {
          title: '28px',
          heading: '18px',
          body: '14px',
          small: '12px'
        },
        weight: {
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700
        },
        lineHeight: {
          tight: 1.2,
          normal: 1.5,
          relaxed: 1.8
        }
      },
      spacing: {
        section: '2rem',
        item: '1rem',
        padding: {
          page: '2rem',
          section: '1rem',
          item: '0.75rem'
        },
        margin: {
          section: '2rem',
          item: '1rem'
        }
      },
      borders: {
        radius: '0.5rem',
        width: '2px',
        style: 'solid',
        color: '#e5e7eb'
      }
    },
    components: {
      header: {
        name: {
          fontSize: '28px',
          fontWeight: 700,
          color: '#ffffff'
        },
        title: {
          fontSize: '16px',
          fontWeight: 500,
          color: '#ffffff'
        },
        contact: {
          fontSize: '13px',
          color: '#ffffff',
          iconSize: '14px',
          gap: '1rem'
        },
        background: '#2563eb',
        padding: '2rem'
      },
      section: {
        title: {
          fontSize: '18px',
          fontWeight: 600,
          color: '#2563eb',
          iconSize: '18px',
          iconColor: '#2563eb',
          dividerColor: '#2563eb',
          dividerWidth: '2px'
        },
        content: {
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.6
        },
        marginBottom: '2rem'
      },
      item: {
        title: {
          fontSize: '15px',
          fontWeight: 600,
          color: '#1f2937'
        },
        subtitle: {
          fontSize: '14px',
          color: '#6b7280'
        },
        date: {
          fontSize: '13px',
          color: '#9ca3af',
          fontWeight: 500
        },
        description: {
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.6
        },
        padding: '0',
        marginBottom: '1rem'
      },
      tag: {
        background: '#eff6ff',
        color: '#2563eb',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 500
      },
      skill: {
        item: {
          fontSize: '14px',
          color: '#374151',
          gap: '0.5rem'
        },
        levelBar: {
          height: '4px',
          background: '#e5e7eb',
          fillColor: '#2563eb',
          borderRadius: '2px'
        },
        levelText: {
          fontSize: '12px',
          color: '#6b7280',
          fontWeight: 500
        }
      }
    }
  }
}

/**
 * 创建模板的工厂函数
 */
export function createTemplate(options: TemplateOptions): Template {
  const { meta, layout, style, preview, custom } = options

  return {
    meta: {
      id: meta.id,
      name: meta.name,
      type: meta.type,
      description: meta.description,
      featured: meta.featured || false,
      premium: meta.premium || false,
      rating: meta.rating || 4.5,
      downloads: meta.downloads || 0,
      industries: meta.industries || [],
      tags: meta.tags || [],
      date: meta.date || new Date().toISOString(),
      author: meta.author,
      version: meta.version || '1.0.0'
    },
    layout: {
      page: { ...defaultConfig.layout!.page!, ...layout?.page },
      header: { ...defaultConfig.layout!.header!, ...layout?.header },
      section: {
        ...defaultConfig.layout!.section!,
        ...layout?.section,
        divider: {
          ...defaultConfig.layout!.section!.divider!,
          ...layout?.section?.divider
        }
      },
      item: {
        ...defaultConfig.layout!.item!,
        ...layout?.item,
        bullet: {
          ...defaultConfig.layout!.item!.bullet!,
          ...layout?.item?.bullet
        }
      },
      skill: { ...defaultConfig.layout!.skill!, ...layout?.skill }
    },
    style: {
      global: {
        colors: {
          primary: style?.global?.colors?.primary || '#2563eb',
          secondary: style?.global?.colors?.secondary || '#1f2937',
          accent: style?.global?.colors?.accent || '#eff6ff',
          bg: style?.global?.colors?.bg || '#ffffff',
          text: style?.global?.colors?.text || '#1f2937',
          border: style?.global?.colors?.border || '#e5e7eb',
          ...style?.global?.colors
        },
        fonts: {
          ...defaultConfig.style!.global!.fonts!,
          ...style?.global?.fonts,
          size: {
            ...defaultConfig.style!.global!.fonts!.size!,
            ...style?.global?.fonts?.size
          },
          weight: {
            ...defaultConfig.style!.global!.fonts!.weight!,
            ...style?.global?.fonts?.weight
          },
          lineHeight: {
            ...defaultConfig.style!.global!.fonts!.lineHeight!,
            ...style?.global?.fonts?.lineHeight
          }
        },
        spacing: {
          ...defaultConfig.style!.global!.spacing!,
          ...style?.global?.spacing,
          padding: {
            ...defaultConfig.style!.global!.spacing!.padding!,
            ...style?.global?.spacing?.padding
          },
          margin: {
            ...defaultConfig.style!.global!.spacing!.margin!,
            ...style?.global?.spacing?.margin
          }
        },
        borders: {
          ...defaultConfig.style!.global!.borders!,
          ...style?.global?.borders
        }
      },
      components: {
        header: {
          ...defaultConfig.style!.components!.header!,
          ...style?.components?.header,
          name: {
            ...defaultConfig.style!.components!.header!.name!,
            ...style?.components?.header?.name
          },
          title: {
            ...defaultConfig.style!.components!.header!.title!,
            ...style?.components?.header?.title
          },
          contact: {
            ...defaultConfig.style!.components!.header!.contact!,
            ...style?.components?.header?.contact
          }
        },
        section: {
          ...defaultConfig.style!.components!.section!,
          ...style?.components?.section,
          title: {
            ...defaultConfig.style!.components!.section!.title!,
            ...style?.components?.section?.title
          },
          content: {
            ...defaultConfig.style!.components!.section!.content!,
            ...style?.components?.section?.content
          }
        },
        item: {
          ...defaultConfig.style!.components!.item!,
          ...style?.components?.item,
          title: {
            ...defaultConfig.style!.components!.item!.title!,
            ...style?.components?.item?.title
          },
          subtitle: {
            ...defaultConfig.style!.components!.item!.subtitle!,
            ...style?.components?.item?.subtitle
          },
          date: {
            ...defaultConfig.style!.components!.item!.date!,
            ...style?.components?.item?.date
          },
          description: {
            ...defaultConfig.style!.components!.item!.description!,
            ...style?.components?.item?.description
          }
        },
        tag: {
          ...defaultConfig.style!.components!.tag!,
          ...style?.components?.tag
        },
        skill: {
          ...defaultConfig.style!.components!.skill!,
          ...style?.components?.skill,
          item: {
            ...defaultConfig.style!.components!.skill!.item!,
            ...style?.components?.skill?.item
          },
          levelBar: {
            ...defaultConfig.style!.components!.skill!.levelBar!,
            ...style?.components?.skill?.levelBar
          },
          levelText: {
            ...defaultConfig.style!.components!.skill!.levelText!,
            ...style?.components?.skill?.levelText
          }
        }
      }
    },
    preview: preview || { thumbnail: '' },
    custom
  } as Template
}

/**
 * 预定义模板列表
 */

export const templates: Template[] = (() => {
  const result: Template[] = [];
  for (const template of templatesExample) {
    result.push(createTemplate(template));
  }
  return result;
})();  
// export const templates: Template[] = [
//   // 1. 专业蓝 - 经典商务风格
//   createTemplate({
//     meta: {
//       id: 'professional-blue',
//       name: '专业蓝',
//       type: 'professional',
//       description: '简洁专业的蓝色主题，适合商务和技术岗位',
//       featured: true,
//       rating: 4.8,
//       downloads: 15420,
//       industries: ['技术', '金融', '咨询', '管理'],
//       tags: ['专业', '简洁', '商务', '经典']
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#2563eb',
//           secondary: '#1e293b',
//           accent: '#dbeafe',
//           bg: '#ffffff',
//           text: '#1f2937',
//           border: '#cbd5e1'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/professional-blue.jpg' }
//   }),

//   // 2. 现代绿 - 清新自然风格
//   createTemplate({
//     meta: {
//       id: 'modern-green',
//       name: '现代绿',
//       type: 'modern',
//       description: '清新的绿色主题，展现活力和创新',
//       featured: true,
//       rating: 4.7,
//       downloads: 12350,
//       industries: ['设计', '创业', '市场', '教育'],
//       tags: ['现代', '清新', '创新', '环保']
//     },
//     layout: {
//       header: {
//         background: 'gradient'
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#059669',
//           secondary: '#047857',
//           accent: '#d1fae5',
//           bg: '#ffffff',
//           text: '#064e3b',
//           border: '#a7f3d0'
//         },
//         fonts: {
//           family: 'Poppins, sans-serif'
//         }
//       },
//       components: {
//         header: {
//           background: { type: 'gradient', colors: ['#059669', '#047857'] }
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/modern-green.jpg' }
//   }),

//   // 3. 创意紫 - 艺术设计风格
//   createTemplate({
//     meta: {
//       id: 'creative-purple',
//       name: '创意紫',
//       type: 'creative',
//       description: '富有创意的紫色主题，适合设计和艺术岗位',
//       premium: true,
//       rating: 4.9,
//       downloads: 8920,
//       industries: ['设计', '艺术', '媒体', '广告'],
//       tags: ['创意', '艺术', '独特', '个性']
//     },
//     layout: {
//       header: {
//         align: 'left',
//         background: 'gradient'
//       },
//       section: {
//         divider: {
//           enabled: true,
//           style: 'double',
//           position: 'left'
//         }
//       },
//       skill: {
//         display: 'bars',
//         columns: 1
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#7c3aed',
//           secondary: '#6d28d9',
//           accent: '#ede9fe',
//           bg: '#faf5ff',
//           text: '#5b21b6',
//           border: '#c4b5fd'
//         },
//         fonts: {
//           family: 'Montserrat, sans-serif',
//           size: {
//             title: '32px',
//             heading: '20px',
//             body: '14px',
//             small: '12px'
//           }
//         },
//         borders: {
//           radius: '1rem'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/creative-purple.jpg' }
//   }),

//   // 4. 经典黑白 - 传统正式风格
//   createTemplate({
//     meta: {
//       id: 'classic-bw',
//       name: '经典黑白',
//       type: 'classic',
//       description: '永恒的黑白配色，专业而经典',
//       featured: true,
//       rating: 4.6,
//       downloads: 18750,
//       industries: ['法律', '学术', '政府', '传统行业'],
//       tags: ['经典', '正式', '传统', '专业']
//     },
//     layout: {
//       header: {
//         background: 'filled',
//         divider: true
//       },
//       section: {
//         divider: {
//           enabled: true,
//           style: 'line',
//           position: 'bottom'
//         }
//       },
//       item: {
//         bullet: {
//           style: 'square',
//           color: '#1f2937'
//         }
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#1f2937',
//           secondary: '#4b5563',
//           accent: '#f3f4f6',
//           bg: '#ffffff',
//           text: '#111827',
//           border: '#d1d5db'
//         },
//         fonts: {
//           family: 'Georgia, serif',
//           size: {
//             title: '26px',
//             heading: '17px',
//             body: '14px',
//             small: '12px'
//           }
//         },
//         borders: {
//           radius: '0.25rem'
//         }
//       },
//       components: {
//         header: {
//           background: '#1f2937'
//         },
//         tag: {
//           background: '#f3f4f6',
//           color: '#1f2937',
//           borderRadius: '0.25rem'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/classic-bw.jpg' }
//   }),

//   // 5. 极简灰 - 简约现代风格
//   createTemplate({
//     meta: {
//       id: 'minimal-gray',
//       name: '极简灰',
//       type: 'minimal',
//       description: '极简主义设计，突出内容本身',
//       rating: 4.5,
//       downloads: 10200,
//       industries: ['科技', '设计', '建筑', '研究'],
//       tags: ['极简', '简约', '现代', '优雅']
//     },
//     layout: {
//       header: {
//         align: 'left',
//         background: 'none',
//         divider: true
//       },
//       section: {
//         titlePosition: 'left',
//         divider: {
//           enabled: true,
//           style: 'line',
//           position: 'left'
//         }
//       },
//       item: {
//         style: 'inline',
//         bullet: {
//           style: 'dash',
//           color: '#6b7280'
//         }
//       },
//       skill: {
//         display: 'list',
//         columns: 1,
//         levelStyle: 'text'
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#6b7280',
//           secondary: '#374151',
//           accent: '#f9fafb',
//           bg: '#ffffff',
//           text: '#1f2937',
//           border: '#e5e7eb'
//         },
//         fonts: {
//           family: 'Helvetica Neue, sans-serif',
//           size: {
//             title: '24px',
//             heading: '16px',
//             body: '13px',
//             small: '11px'
//           }
//         },
//         spacing: {
//           section: '1.5rem',
//           item: '0.75rem',
//           padding: {
//             page: '1.5rem',
//             section: '0.5rem',
//             item: '0.5rem'
//           },
//           margin: {
//             section: '1.5rem',
//             item: '0.75rem'
//           }
//         },
//         borders: {
//           radius: '0',
//           style: 'solid'
//         }
//       },
//       components: {
//         header: {
//           background: 'transparent',
//           name: {
//             fontSize: '24px',
//             fontWeight: 600,
//             color: '#1f2937'
//           },
//           title: {
//             fontSize: '16px',
//             fontWeight: 400,
//             color: '#6b7280'
//           },
//           contact: {
//             fontSize: '13px',
//             color: '#6b7280',
//             iconSize: '13px',
//             gap: '1rem'
//           },
//           padding: '1rem 0'
//         },
//         section: {
//           title: {
//             fontSize: '16px',
//             fontWeight: 600,
//             color: '#374151',
//             dividerColor: '#e5e7eb',
//             dividerWidth: '1px'
//           }
//         },
//         tag: {
//           background: 'transparent',
//           color: '#6b7280',
//           padding: '0',
//           border: 'none',
//           borderRadius: '0'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/minimal-gray.jpg' }
//   }),

//   // 6. 活力橙 - 热情动感风格
//   createTemplate({
//     meta: {
//       id: 'energetic-orange',
//       name: '活力橙',
//       type: 'modern',
//       description: '充满活力的橙色主题，展现热情和创造力',
//       rating: 4.6,
//       downloads: 9500,
//       industries: ['市场', '销售', '创意', '体育'],
//       tags: ['活力', '热情', '创意', '动感']
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#ea580c',
//           secondary: '#9a3412',
//           accent: '#fed7aa',
//           bg: '#ffffff',
//           text: '#7c2d12',
//           border: '#fdba74'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/energetic-orange.jpg' }
//   }),

//   // 7. 深蓝商务 - 高端专业风格
//   createTemplate({
//     meta: {
//       id: 'professional-navy',
//       name: '深蓝商务',
//       type: 'professional',
//       description: '沉稳的深蓝主题，适合高级管理岗位',
//       premium: true,
//       rating: 4.8,
//       downloads: 7800,
//       industries: ['管理', '金融', '咨询', '高管'],
//       tags: ['高端', '专业', '沉稳', '商务']
//     },
//     layout: {
//       page: {
//         columns: 2,
//         columnGap: '2rem'
//       },
//       header: {
//         align: 'center'
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#1e40af',
//           secondary: '#1e3a8a',
//           accent: '#dbeafe',
//           bg: '#f8fafc',
//           text: '#1e293b',
//           border: '#94a3b8'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/professional-navy.jpg' }
//   }),

//   // 8. 清新青 - 科技创新风格
//   createTemplate({
//     meta: {
//       id: 'tech-cyan',
//       name: '科技青',
//       type: 'modern',
//       description: '清新的青色主题，展现科技创新',
//       rating: 4.7,
//       downloads: 8300,
//       industries: ['科技', '互联网', '创新', '研发'],
//       tags: ['科技', '创新', '现代', '清新']
//     },
//     layout: {
//       skill: {
//         display: 'bars',
//         levelStyle: 'percentage'
//       }
//     },
//     style: {
//       global: {
//         colors: {
//           primary: '#0891b2',
//           secondary: '#155e75',
//           accent: '#cffafe',
//           bg: '#ffffff',
//           text: '#164e63',
//           border: '#67e8f9'
//         }
//       }
//     },
//     preview: { thumbnail: '/templates/tech-cyan.jpg' }
//   })
// ]

/**
 * 根据ID获取模板
 */
export function getTemplateById(id: string): Template | undefined {
  return templates.find(t => t.meta.id === id)
}

/**
 * 根据类型获取模板
 */
export function getTemplatesByType(
  type: Template['meta']['type'] | 'all'
): Template[] {
  if (type === 'all') return templates
  return templates.filter(t => t.meta.type === type)
}

/**
 * 根据行业推荐模板
 */
export function getRecommendedTemplates(industry: string): Template[] {
  return templates
    .filter(t => t.meta.industries.includes(industry))
    .sort((a, b) => b.meta.rating - a.meta.rating)
}

/**
 * 获取精选模板
 */
export function getFeaturedTemplates(): Template[] {
  return templates.filter(t => t.meta.featured)
}

/**
 * 获取高级模板
 */
export function getPremiumTemplates(): Template[] {
  return templates.filter(t => t.meta.premium)
}