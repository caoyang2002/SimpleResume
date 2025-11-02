// 教育学术
import type { TemplateOptions } from "~/types/template"

export const academic: TemplateOptions[] = [
      // 学术专业风
  {
    meta: {
      id: 'academic',
      name: '学术专业',
      type: 'classic',
      description: '适合教育、研究机构的学术简历',
      industries: ['教育', '研究', '学术'],
      tags: ['学术', '专业', '传统']
    },
    style: {
      global: {
        colors: {
          primary: '#1a56db',
          secondary: '#6b7280',
          accent: '#e0f2fe',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#d1d5db',
          muted: '#9ca3af'
        },
        fonts: {
          family: "'Garamond', 'STZhongsong', serif",
          size: {
            title: '20px',
            heading: '16px',
            body: '12px',
            small: '10px'
          }
        }
      },
      components: {
        header: {
          name: {
            fontSize: '20px',
            fontWeight: 700,
            color: '#1a56db'
          },
          title: {
            fontSize: '14px',
            fontWeight: 400,
            color: '#6b7280'
          },
          background: 'none'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#1a56db',

          }
        }
      }
    }
  },
    // 9. 学术专业
  {
    meta: {
      id: 'academic',
      name: '学术专业',
      type: 'classic',
      description: '严谨的学术风格，适合教育研究领域',
      featured: true,
      rating: 4.6,
      downloads: 9800,
      industries: ['教育', '研究', '学术', '科研', '高校'],
      tags: ['学术', '专业', '传统', '严谨'],
      date: '2024-02-03',
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
        align: 'center',
        direction: 'vertical',
        spacing: '0.75rem',
        background: 'none',
        divider: true
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'justify',
        spacing: '1.5rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'bottom'
        }
      },
      item: {
        style: 'academic',
        datePosition: 'inline',
        tagStyle: 'none',
        bullet: {
          style: 'circle',
          color: '#1a56db'
        }
      },
      skill: {
        display: 'list',
        columns: 2,
        showLevel: false,
        levelStyle: 'none'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#1a56db',
          secondary: '#6b7280',
          accent: '#e0f2fe',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#d1d5db',
          muted: '#9ca3af'
        },
        fonts: {
          family: "'Garamond', 'Noto Serif SC', 'STZhongsong', serif",
          size: {
            title: '22px',
            heading: '16px',
            body: '13px',
            small: '11px'
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
            normal: 1.7,
            relaxed: 2
          }
        },
        spacing: {
          section: '1.75rem',
          item: '0.875rem'
        },
        borders: {
          radius: '0',
          width: '1px',
          style: 'solid',
          color: '#d1d5db'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '22px',
            fontWeight: 700,
            color: '#1a56db'
          },
          title: {
            fontSize: '15px',
            fontWeight: 400,
            color: '#6b7280',
            fontStyle: 'italic'
          },
          background: 'transparent',
          padding: '0 0 1.5rem'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#1a56db',
            dividerColor: '#d1d5db',
            dividerWidth: '1px'
          }
        },
        item: {
          title: {
            fontSize: '14px',
            fontWeight: 600,
            color: '#1f2937'
          },
          subtitle: {
            fontSize: '13px',
            color: '#6b7280',
            fontStyle: 'italic'
          }
        }
      }
    },
    preview: {
      thumbnail: '/templates/academic.jpg'
    }
  },
]