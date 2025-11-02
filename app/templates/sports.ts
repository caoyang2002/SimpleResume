// 运动

import type { TemplateOptions } from "~/types/template"

export const sports: TemplateOptions[] = [
      // 19. 体育运动
  {
    meta: {
      id: 'sports',
      name: '体育运动',
      type: 'modern',
      description: '充满活力的体育运动行业简历',
      rating: 4.6,
      downloads: 5900,
      industries: ['体育', '运动', '健身', '体育管理', '教练'],
      tags: ['活力', '运动', '健康', '动感'],
      date: '2024-02-24',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        padding: '2.5rem',
        margin: '0 auto'
      },
      header: {
        align: 'center',
        direction: 'vertical',
        spacing: '1.5rem',
        // background: 'dynamic',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '2rem',
        divider: {
          enabled: true,
          style: 'bold',
          position: 'left'
        }
      },
      item: {
        // style: 'athletic',
        datePosition: 'right',
        // tagStyle: 'sport',
        bullet: {
          style: 'arrow',
          color: '#ea580c'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        // levelStyle: 'dynamic'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#ea580c',
          secondary: '#c2410c',
          accent: '#ffedd5',
          bg: '#ffffff',
          text: '#7c2d12',
          border: '#fed7aa',
          muted: '#fb923c'
        },
        fonts: {
          family: "'Oswald', 'Roboto Condensed', 'Microsoft YaHei', sans-serif",
          size: {
            title: '2rem',
            heading: '1.25rem',
            body: '0.875rem',
            small: '0.75rem'
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
          section: '2.25rem',
          item: '1.25rem'
        },
        borders: {
          radius: '8px',
          width: '2px',
          style: 'solid',
          color: '#fed7aa'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          },
          title: {
            fontSize: '1.125rem',
            fontWeight: 500,
            color: '#ffedd5'
          },
          background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
          padding: '3rem 2rem'
        },
        section: {
          title: {
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#ea580c',
            textTransform: 'uppercase',
            dividerColor: '#ea580c',
            dividerWidth: '4px'
          }
        },
        tag: {
          background: '#fed7aa',
          color: '#c2410c',
          padding: '0.375rem 0.875rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 700,
          // textTransform: 'uppercase',
          border: '2px solid #fb923c'
        }
      }
    },
    preview: {
      thumbnail: '/templates/sports.jpg'
    }
  },
  // 6. 活力橙 - 热情动感风格
  {
    meta: {
      id: 'energetic-orange',
      name: '活力橙',
      type: 'modern',
      description: '充满活力的橙色主题，展现热情和创造力',
      rating: 4.6,
      downloads: 9500,
      industries: ['市场', '销售', '创意', '体育'],
      tags: ['活力', '热情', '创意', '动感']
    },
    style: {
      global: {
        colors: {
          primary: '#ea580c',
          secondary: '#9a3412',
          accent: '#fed7aa',
          bg: '#ffffff',
          text: '#7c2d12',
          border: '#fdba74'
        }
      }
    },
    preview: { thumbnail: '/templates/energetic-orange.jpg' }
  },

  
]
