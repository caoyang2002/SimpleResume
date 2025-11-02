// 制造业
import type { TemplateOptions } from "~/types/template"

export const manufacturing: TemplateOptions[] = [
      // 13. 制造业
  {
    meta: {
      id: 'manufacturing',
      name: '制造工业',
      type: 'professional',
      description: '务实的制造业行业简历',
      rating: 4.5,
      downloads: 6800,
      industries: ['制造', '工业', '生产管理', '供应链', '质量控制'],
      tags: ['务实', '专业', '工业', '制造'],
      date: '2024-02-12',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        padding: '2.5rem 3rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
        direction: 'vertical',
        spacing: '0.75rem',
        background: 'solid',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.5rem',
        divider: {
          enabled: true,
          style: 'thick',
          position: 'bottom'
        }
      },
      item: {
        style: 'industrial',
        datePosition: 'inline',
        tagStyle: 'box',
        bullet: {
          style: 'square',
          color: '#1f2937'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        levelStyle: 'percentage'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#1f2937',
          secondary: '#4b5563',
          accent: '#f3f4f6',
          bg: '#ffffff',
          text: '#111827',
          border: '#d1d5db',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Arial', 'Helvetica', 'Microsoft YaHei', sans-serif",
          size: {
            title: '24px',
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
          section: '1.75rem',
          item: '0.875rem'
        },
        borders: {
          radius: '2px',
          width: '2px',
          style: 'solid',
          color: '#d1d5db'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '24px',
            fontWeight: 700,
            color: '#ffffff'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#f3f4f6'
          },
          background: '#1f2937',
          padding: '2rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 700,
            color: '#1f2937',
            textTransform: 'uppercase',
            dividerColor: '#1f2937',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#f3f4f6',
          color: '#1f2937',
          padding: '0.25rem 0.75rem',
          borderRadius: '2px',
          fontSize: '12px',
          fontWeight: 600,
          border: '1px solid #d1d5db'
        }
      }
    },
    preview: {
      thumbnail: '/templates/manufacturing.jpg'
    }
  },
]
