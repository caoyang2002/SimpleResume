// 金融
import type { TemplateOptions } from "~/types/template"

export const financial: TemplateOptions[] = [
      // 6. 现代金融
  {
    meta: {
      id: 'finance-modern',
      name: '现代金融',
      type: 'professional',
      description: '现代化的金融行业简历风格',
      premium: true,
      rating: 4.8,
      downloads: 9500,
      industries: ['金融', '投资', '银行', '资产管理', '风险管理'],
      tags: ['现代', '专业', '精致', '金融'],
      date: '2024-01-25',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 2,
        columnGap: '2rem',
        padding: '2.5rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
        direction: 'vertical',
        spacing: '1rem',
        background: 'gradient',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.5rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'left'
        }
      },
      item: {
        // style: 'elegant',
        datePosition: 'right',
        tagStyle: 'minimal',
        bullet: {
          style: 'square',
          color: '#059669'
        }
      },
      skill: {
        display: 'bars',
        columns: 1,
        showLevel: true,
        levelStyle: 'bar'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#059669',
          secondary: '#047857',
          accent: '#d1fae5',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#a7f3d0',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Georgia', 'Noto Serif SC', 'Songti SC', serif",
          size: {
            title: '26px',
            heading: '17px',
            body: '14px',
            small: '12px'
          },
          weight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700
          }
        },
        spacing: {
          section: '2rem',
          item: '1rem'
        },
        borders: {
          radius: '4px',
          width: '1px',
          style: 'solid',
          color: '#a7f3d0'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '26px',
            fontWeight: 600,
            color: '#065f46'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#059669'
          },
          background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)',
          padding: '2rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 600,
            color: '#065f46',
            dividerColor: '#059669',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#d1fae5',
          color: '#065f46',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '12px',
          border: '1px solid #a7f3d0'
        }
      }
    },
    preview: {
      thumbnail: '/templates/finance-modern.jpg'
    }
  },
  
  // 现代金融风
  {
    meta: {
      id: 'finance-modern',
      name: '现代金融',
      type: 'professional',
      description: '现代感强的金融行业简历',
      industries: ['金融', '投资', '银行'],
      tags: ['现代', '专业', '精致']
    },
    style: {
      global: {
        colors: {
          primary: '#059669',
          secondary: '#0f766e',
          accent: '#d1fae5',
          bg: '#fefefe',
          text: '#1f2937',
          border: '#e5e7eb',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Georgia', 'Songti SC', serif",
          size: {
            title: '24px',
            heading: '16px',
            body: '13px',
            small: '11px'
          }
        }
      },
      components: {
        header: {
          name: {
            fontSize: '24px',
            fontWeight: 600,
            color: '#065f46'
          },
          title: {
            fontSize: '15px',
            fontWeight: 400,
            color: '#059669'
          },
          background: 'linear-gradient(90deg, #f0fdf4, #ffffff)'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#065f46',
            borderBottom: '2px solid #059669'
          }
        }
      }
    }
  },


 

  
]