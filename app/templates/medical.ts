// 医学

import type { TemplateOptions } from "~/types/template"

export const medical: TemplateOptions[] = [
     // 医疗专业风
  {
    meta: {
      id: 'medical',
      name: '医疗专业',
      type: 'professional',
      description: '适合医疗健康行业的专业简历',
      industries: ['医疗', '健康', '护理'],
      tags: ['专业', '可信', '清洁']
    },
    style: {
      global: {
        colors: {
          primary: '#0e7490',
          secondary: '#155e75',
          accent: '#cffafe',
          bg: '#ffffff',
          text: '#164e63',
          border: '#a5f3fc',
          muted: '#67e8f9'
        },
        fonts: {
          family: "'Arial', 'Microsoft YaHei', sans-serif",
          size: {
            title: '22px',
            heading: '16px',
            body: '13px',
            small: '11px'
          }
        }
      },
      components: {
        header: {
          name: {
            fontSize: '22px',
            fontWeight: 600,
            color: '#0e7490'
          },
          title: {
            fontSize: '15px',
            fontWeight: 400,
            color: '#155e75'
          },
          background: 'linear-gradient(90deg, #ecfeff, #ffffff)'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#0e7490',
            borderLeft: '4px solid #06b6d4'
          }
        }
      }
    }
  },
  // 10. 医疗专业
  {
    meta: {
      id: 'medical',
      name: '医疗专业',
      type: 'professional',
      description: '清洁专业的医疗行业风格',
      rating: 4.7,
      downloads: 8600,
      industries: ['医疗', '健康', '护理', '制药', '生物科技'],
      tags: ['专业', '可信', '清洁', '医疗'],
      date: '2024-02-05',
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
        background: 'subtle',
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
        style: 'clean',
        datePosition: 'right',
        tagStyle: 'medical',
        bullet: {
          style: 'plus',
          color: '#0e7490'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        levelStyle: 'bar'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#0e7490',
          secondary: '#155e75',
          accent: '#cffafe',
          bg: '#ffffff',
          text: '#164e63',
          border: '#a5f3fc',
          muted: '#67e8f9'
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
          },
          lineHeight: {
            tight: 1.2,
            normal: 1.6,
            relaxed: 1.8
          }
        },
        spacing: {
          section: '2rem',
          item: '1rem'
        },
        borders: {
          radius: '6px',
          width: '1px',
          style: 'solid',
          color: '#a5f3fc'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '24px',
            fontWeight: 600,
            color: '#0e7490'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#155e75'
          },
          background: 'linear-gradient(90deg, #ecfeff 0%, #ffffff 100%)',
          padding: '2rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 600,
            color: '#0e7490',
            dividerColor: '#06b6d4',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#cffafe',
          color: '#155e75',
          padding: '0.25rem 0.75rem',
          borderRadius: '6px',
          fontSize: '12px',
          border: '1px solid #a5f3fc'
        }
      }
    },
    preview: {
      thumbnail: '/templates/medical.jpg'
    }
  },


]
