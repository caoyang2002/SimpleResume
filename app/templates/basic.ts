import type { TemplateOptions } from "~/types/template"
import { academic } from "./academic"
import { business } from "./business"
import { catering } from "./catering"
import { construction_engineering } from "./construction_engineering"
import { creativity } from "./creativity"
import { engrgy } from "./energy"
import { entertainment } from "./entertainment"
import { fashion } from "./fashion"
import { financial } from "./financial"
import { human_resources } from "./human_resources"
import { logistics } from "./logistics"
import { management } from "./management"
import { manufacturing } from "./manufacturing"
import { marketing } from "./marketing"
import { medical } from "./medical"
import { simple } from "./simple"
import { sports } from "./sports"
import { technology } from "./technology"


export const templates: TemplateOptions[] = [
  ...academic,
  ...business,
  ...catering,
  ...construction_engineering,
  ...creativity,
  ...engrgy,
  ...entertainment,
  ...fashion,
  ...financial,
  ...human_resources,
  ...logistics,
  ...management,
  ...manufacturing,
  ...marketing,
  ...medical,
  ...simple,
  ...sports,
  ...technology,



]

const test_template: TemplateOptions[] = [{
  meta: {
    id: 'test',
    name: '测试模板',
    type: 'professional',
    description: '完整的测试模板，展示所有配置项',
    featured: true,
    premium: false,
    rating: 4.8,
    downloads: 15420,
    industries: ['技术', '金融', '咨询', '管理'],
    tags: ['专业', '简洁', '商务', '经典'],
    date: '2024-01-15',
    author: 'Resume Builder',
    version: '1.0.0'
  },

  layout: {
    page: {
      width: '50vw',
      maxWidth: '70vw',
      columns: 2,
      columnGap: '1rem',
      padding: '2rem',
      margin: '0.5rem'
    },
    header: {
      align: 'left',
      direction: 'horizontal',
      spacing: '1rem',
      background: 'gradient',
      divider: true
    },
    section: {
      titlePosition: 'top',
      contentAlign: 'justify',
      spacing: '1rem',
      divider: {
        enabled: true,
        style: 'double',
        position: 'bottom'
      }
    },
    item: {
      style: 'stacked',
      datePosition: 'right',
      tagStyle: 'pill',
      bullet: {
        style: 'circle',
        color: '#232323'
      }
    },
    skill: {
      display: 'bars',
      columns: 3,
      showLevel: true,
      levelStyle: 'bar'
    }
  },

  style: {
    global: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e293b',
        accent: '#dbeafe',
        bg: '#ffffff',
        text: '#1f2937',
        border: '#cbd5e1',
        muted: '#64748b',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
      },
      fonts: {
        family: "'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif",
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
          section: '1.5rem',
          item: '0.5rem'
        }
      },
      borders: {
        radius: '8px',
        width: '1px',
        style: 'solid',
        color: '#cbd5e1'
      }
    },

    components: {
      header: {
        name: {
          fontSize: '28px',
          fontWeight: 700,
          color: '#1e293b',
          letterSpacing: '-0.025em',
          textTransform: 'none'
        },
        title: {
          fontSize: '18px',
          fontWeight: 500,
          color: '#2563eb'
        },
        contact: {
          fontSize: '14px',
          color: '#64748b',
          iconSize: '16px',
          gap: '0.5rem'
        },
        background: {
          type: 'gradient',
          colors: ['#0051ffff', '#417dffff']
        },
        padding: '2rem 0'
      },

      section: {
        title: {
          fontSize: '18px',
          fontWeight: 600,
          color: '#1e293b',
          iconSize: '16px',
          iconColor: '#2563eb',
          dividerColor: '#2563eb',
          dividerWidth: '3px'
        },
        content: {
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.5
        },
        marginBottom: '2rem'
      },

      item: {
        title: {
          fontSize: '16px',
          fontWeight: 600,
          color: '#1e293b'
        },
        subtitle: {
          fontSize: '14px',
          color: '#2563eb'
        },
        date: {
          fontSize: '12px',
          color: '#64748b',
          fontWeight: 500
        },
        description: {
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.5
        },
        background: '#f8fafc',
        border: {
          radius: '6px',
          width: '1px',
          style: 'solid',
          color: '#e2e8f0'
        },
        padding: '1rem',
        marginBottom: '1rem'
      },

      tag: {
        background: '#dbeafe',
        color: '#1e40af',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 500,
        border: '1px solid #bfdbfe'
      },

      skill: {
        item: {
          fontSize: '14px',
          color: '#374151',
          gap: '0.5rem'
        },
        levelBar: {
          height: '8px',
          background: '#e2e8f0',
          fillColor: '#2563eb',
          borderRadius: '4px'
        },
        levelText: {
          fontSize: '12px',
          color: '#64748b',
          fontWeight: 500
        }
      }
    }
  },

  preview: {
    thumbnail: '/templates/professional-blue.jpg',
    images: [
      '/templates/professional-blue-preview1.jpg',
      '/templates/professional-blue-preview2.jpg'
    ]
  },

  custom: {
    watermark: {
      enabled: false,
      text: 'RESUME',
      opacity: 0.1
    },
    print: {
      margins: '0.5in',
      header: true,
      footer: true
    }
  }
}]