// 物流
import type { TemplateOptions } from "~/types/template"

export const logistics: TemplateOptions[] = [
      // 17. 物流供应链
  {
    meta: {
      id: 'logistics',
      name: '物流供应链',
      type: 'professional',
      description: '高效专业的物流供应链简历',
      rating: 4.5,
      downloads: 7100,
      industries: ['物流', '供应链', '运输', '仓储', '配送'],
      tags: ['专业', '高效', '物流', '系统化'],
      date: '2024-02-20',
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
        spacing: '0.75rem',
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
        // style: 'systematic',
        datePosition: 'right',
        tagStyle: 'box',
        bullet: {
          style: 'arrow',
          color: '#0369a1'
        }
      },
      skill: {
        display: 'bars',
        columns: 1,
        showLevel: true,
        levelStyle: 'percentage'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#0369a1',
          secondary: '#075985',
          accent: '#e0f2fe',
          bg: '#ffffff',
          text: '#0c4a6e',
          border: '#bae6fd',
          muted: '#0284c7'
        },
        fonts: {
          family: "'Roboto', 'Arial', 'Microsoft YaHei', sans-serif",
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
          section: '2rem',
          item: '1rem'
        },
        borders: {
          radius: '4px',
          width: '2px',
          style: 'solid',
          color: '#bae6fd'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '24px',
            fontWeight: 700,
            color: '#0369a1'
          },
          title: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#075985'
          },
          background: 'transparent',
          padding: '0 0 1.5rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 700,
            color: '#0369a1',
            textTransform: 'uppercase',
            dividerColor: '#0369a1',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#e0f2fe',
          color: '#075985',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 600,
          border: '1px solid #bae6fd'
        }
      }
    },
    preview: {
      thumbnail: '/templates/logistics.jpg'
    }
  },

]
