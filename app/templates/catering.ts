// 餐饮

import type { TemplateOptions } from "~/types/template"

export const catering: TemplateOptions[] = [
      // 16. 餐饮酒店
  {
    meta: {
      id: 'hospitality',
      name: '餐饮酒店',
      type: 'professional',
      description: '优雅的餐饮酒店行业简历',
      rating: 4.6,
      downloads: 6500,
      industries: ['餐饮', '酒店', '旅游', '服务业', '客户服务'],
      tags: ['优雅', '服务', '专业', '热情'],
      date: '2024-02-18',
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
        spacing: '1rem',
        // background: 'elegant',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.75rem',
        divider: {
          enabled: true,
          // style: 'elegant',
          // position: 'center'
        }
      },
      item: {
        // style: 'elegant',
        datePosition: 'right',
        // tagStyle: 'subtle',
        bullet: {
          style: 'circle',
          color: '#b45309'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        // levelStyle: 'elegant'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#b45309',
          secondary: '#92400e',
          accent: '#fef3c7',
          bg: '#fffbeb',
          text: '#451a03',
          border: '#fcd34d',
          muted: '#d97706'
        },
        fonts: {
          family: "'Cormorant Garamond', 'Noto Serif SC', serif",
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
          }
        },
        spacing: {
          section: '2rem',
          item: '1rem'
        },
        borders: {
          radius: '8px',
          width: '1px',
          style: 'solid',
          color: '#fcd34d'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '28px',
            fontWeight: 600,
            color: '#ffffff'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#fef3c7',
            fontStyle: 'italic'
          },
          background: 'linear-gradient(135deg, #b45309 0%, #92400e 100%)',
          padding: '2.5rem 2rem'
        },
        section: {
          title: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#b45309',
            dividerColor: '#fcd34d',
            dividerWidth: '2px'
          }
        },
        tag: {
          background: '#fef3c7',
          color: '#92400e',
          padding: '0.25rem 0.75rem',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 500,
          border: '1px solid #fcd34d'
        }
      }
    },
    preview: {
      thumbnail: '/templates/hospitality.jpg'
    }
  },
]