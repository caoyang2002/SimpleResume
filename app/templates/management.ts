// 管理
import type { TemplateOptions } from "~/types/template"

export const management: TemplateOptions[] = [

  // 2. 深蓝高管风
  {
    meta: {
      id: 'executive-navy',
      name: '深蓝高管',
      type: 'professional',
      description: '沉稳大气的高端商务风格，适合高级管理人员',
      premium: true,
      rating: 4.9,
      downloads: 8200,
      industries: ['管理', '金融', '咨询', '投资', '高管'],
      tags: ['高端', '专业', '沉稳', '权威'],
      date: '2024-01-20',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 2,
        columnGap: '2rem',
        padding: '3rem',
        margin: '0 auto'
      },
      header: {
        align: 'center',
        direction: 'vertical',
        spacing: '1rem',
        background: 'filled',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.5rem',
        divider: {
          enabled: false,
          style: 'none',
          position: 'bottom'
        }
      },
      item: {
        style: 'stacked',
        datePosition: 'right',
        tagStyle: 'minimal',
        bullet: {
          style: 'circle',
          color: '#1e40af'
        }
      },
      skill: {
        display: 'grid',
        columns: 1,
        showLevel: true,
        levelStyle: 'dots'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#1e40af',
          secondary: '#1e3a8a',
          accent: '#dbeafe',
          bg: '#f8fafc',
          text: '#1e293b',
          border: '#94a3b8',
          muted: '#64748b'
        },
        fonts: {
          family: "'Playfair Display', 'Noto Serif SC', serif",
          size: {
            title: '32px',
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
            tight: 1.3,
            normal: 1.6,
            relaxed: 1.8
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.25rem'
        },
        borders: {
          radius: '0',
          width: '1px',
          style: 'solid',
          color: '#94a3b8'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#dbeafe'
          },
          contact: {
            fontSize: '13px',
            color: '#dbeafe',
            iconSize: '14px',
            gap: '1rem'
          },
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          padding: '3rem 2rem'
        },
        section: {
          title: {
            fontSize: '18px',
            fontWeight: 700,
            color: '#1e40af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }
        },
        item: {
          title: {
            fontSize: '15px',
            fontWeight: 600,
            color: '#1e293b'
          },
          subtitle: {
            fontSize: '14px',
            color: '#1e40af',
            fontStyle: 'italic'
          }
        },
        tag: {
          background: 'transparent',
          color: '#1e40af',
          padding: '0',
          border: 'none',
          fontSize: '13px'
        }
      }
    },
    preview: {
      thumbnail: '/templates/executive-navy.jpg'
    }
  },
]
