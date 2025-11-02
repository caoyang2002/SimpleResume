// 人力资源
import type { TemplateOptions } from "~/types/template"

export const human_resources: TemplateOptions[] = [
      // 14. 人力资源
  {
    meta: {
      id: 'hr',
      name: '人力资源',
      type: 'professional',
      description: '温暖专业的人力资源行业简历',
      rating: 4.7,
      downloads: 8900,
      industries: ['人力资源', 'HR', '招聘', '培训', '组织发展'],
      tags: ['专业', '温暖', '人性化', 'HR'],
      date: '2024-02-14',
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
        background: 'subtle',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.75rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'left'
        }
      },
      item: {
        style: 'friendly',
        datePosition: 'right',
        tagStyle: 'rounded',
        bullet: {
          style: 'circle',
          color: '#ec4899'
        }
      },
      skill: {
        display: 'pills',
        columns: 3,
        showLevel: false,
        levelStyle: 'none'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#ec4899',
          secondary: '#db2777',
          accent: '#fce7f3',
          bg: '#ffffff',
          text: '#831843',
          border: '#fbcfe8',
          muted: '#f472b6'
        },
        fonts: {
          family: "'Lato', 'Open Sans', 'Microsoft YaHei', sans-serif",
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
          radius: '12px',
          width: '1px',
          style: 'solid',
          color: '#fbcfe8'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '26px',
            fontWeight: 700,
            color: '#ec4899'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#db2777'
          },
          background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)',
          padding: '2.5rem 2rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 600,
            color: '#ec4899',
            dividerColor: '#ec4899',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#fce7f3',
          color: '#db2777',
          padding: '0.375rem 0.875rem',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 500,
          border: '1px solid #fbcfe8'
        }
      }
    },
    preview: {
      thumbnail: '/templates/hr.jpg'
    }
  },

]
