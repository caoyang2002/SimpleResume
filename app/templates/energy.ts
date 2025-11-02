// 能源
import type { TemplateOptions } from "~/types/template"

export const engrgy: TemplateOptions[] = [
      // 18. 环保能源
  {
    meta: {
      id: 'environment',
      name: '环保能源',
      type: 'modern',
      description: '绿色环保的能源行业简历',
      rating: 4.7,
      downloads: 6300,
      industries: ['环保', '能源', '新能源', '可持续发展', '环境工程'],
      tags: ['环保', '绿色', '可持续', '现代'],
      date: '2024-02-22',
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
        align: 'left',
        direction: 'vertical',
        spacing: '1rem',
        // background: 'nature',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.75rem',
        divider: {
          enabled: true,
          // style: 'organic',
          position: 'left'
        }
      },
      item: {
        // style: 'eco',
        datePosition: 'right',
        // tagStyle: 'leaf',
        bullet: {
          // style: 'leaf',
          color: '#15803d'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        // levelStyle: 'gradient'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#15803d',
          secondary: '#166534',
          accent: '#dcfce7',
          bg: '#f0fdf4',
          text: '#14532d',
          border: '#bbf7d0',
          muted: '#22c55e'
        },
        fonts: {
          family: "'Nunito', 'Lato', 'Microsoft YaHei', sans-serif",
          size: {
            title: '26px',
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
          radius: '10px',
          width: '1px',
          style: 'solid',
          color: '#bbf7d0'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '26px',
            fontWeight: 700,
            color: '#15803d'
          },
          title: {
            fontSize: '17px',
            fontWeight: 400,
            color: '#166534'
          },
          background: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
          padding: '2rem'
        },
        section: {
          title: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#15803d',
            dividerColor: '#22c55e',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#dcfce7',
          color: '#166534',
          padding: '0.375rem 0.875rem',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 500,
          border: '1px solid #bbf7d0'
        }
      }
    },
    preview: {
      thumbnail: '/templates/environment.jpg'
    }
  },
]