/**
 * @file templates.ts
 * @description 预定义的简历模板配置
 */

import type { Template, TemplateOptions, DeepPartial } from '~/types/template'
import {templates as templatesExample} from "~/templates/basic"

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