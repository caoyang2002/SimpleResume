// 建筑工程
import type { TemplateOptions } from "~/types/template"

export const construction_engineering: TemplateOptions[] = [
    // 12. 建筑工程
  {
    meta: {
      id: 'architecture',
      name: '建筑工程',
      type: 'professional',
      description: '结构化的建筑工程行业简历',
      rating: 4.7,
      downloads: 7200,
      industries: ['建筑', '工程', '房地产', '城市规划', '施工管理'],
      tags: ['专业', '结构化', '工程', '建筑'],
      date: '2024-02-10',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 2,
        columnGap: '1.5rem',
        padding: '2.5rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
        direction: 'vertical',
        spacing: '1rem',
        background: 'none',
        divider: true
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.5rem',
        divider: {
          enabled: true,
          style: 'solid',
          position: 'left'
        }
      },
      item: {
        style: 'structured',
        datePosition: 'right',
        tagStyle: 'square',
        bullet: {
          style: 'square',
          color: '#78350f'
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
        colors: {
          primary: '#78350f',
          secondary: '#92400e',
          accent: '#fef3c7',
          bg: '#ffffff',
          text: '#1c1917',
          border: '#fde68a',
          muted: '#a16207'
        },
        fonts: {
          family: "'Roboto', 'Arial', 'Microsoft YaHei', sans-serif",
          size: {
            title: '25px',
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
          width: '2px',
          style: 'solid',
          color: '#fde68a'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '25px',
            fontWeight: 700,
            color: '#78350f'
          },
          title: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#92400e'
          },
          background: 'transparent',
          padding: '0 0 1.5rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 700,
            color: '#78350f',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            dividerColor: '#78350f',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#fef3c7',
          color: '#78350f',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 500,
          border: '1px solid #fde68a'
        }
      }
    },
    preview: {
      thumbnail: '/templates/architecture.jpg'
    }
  },
]