// 15. 传媒娱乐
import type { TemplateOptions } from "~/types/template"

export const entertainment : TemplateOptions[] = [
{
    meta: {
      id: 'media',
      name: '传媒娱乐',
      type: 'creative',
      description: '动感时尚的传媒娱乐行业简历',
      premium: true,
      rating: 4.8,
      downloads: 9400,
      industries: ['传媒', '娱乐', '影视', '新媒体', '内容创作'],
      tags: ['创意', '时尚', '动感', '娱乐'],
      date: '2024-02-16',
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
        background: 'gradient',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '2rem',
        divider: {
          enabled: true,
          // style: 'creative',
          position: 'left'
        }
      },
      item: {
        // style: 'media',
        // datePosition: 'bottom',
        // tagStyle: 'colorful',
        bullet: {
          // style: 'star',
          color: '#f59e0b'
        }
      },
      skill: {
        // display: 'creative',
        columns: 3,
        showLevel: true,
        levelStyle: 'stars'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#f59e0b',
          secondary: '#d97706',
          accent: '#fef3c7',
          bg: '#fffbeb',
          text: '#78350f',
          border: '#fde68a',
          muted: '#fbbf24'
        },
        fonts: {
          family: "'Poppins', 'Quicksand', 'Microsoft YaHei', sans-serif",
          size: {
            title: '2.25rem',
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
          },
          lineHeight: {
            tight: 1.3,
            normal: 1.6,
            relaxed: 1.8
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.5rem'
        },
        borders: {
          radius: '16px',
          width: '2px',
          style: 'solid',
          color: '#fde68a'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#ffffff'
          },
          title: {
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#fef3c7'
          },
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          padding: '3rem 2rem'
        },
        section: {
          title: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#d97706',
            dividerColor: '#f59e0b',
            dividerWidth: '4px'
          }
        },
        item: {
          title: {
            fontSize: '1rem',
            fontWeight: 600,
            color: '#78350f'
          },
          subtitle: {
            fontSize: '0.875rem',
            color: '#d97706',
            fontWeight: 500
          },
          background: '#ffffff',
          padding: '1.25rem',
          border: {
            radius: '12px',
            width: '2px',
            color: '#fde68a'
          }
        },
        tag: {
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600,
          border: 'none'
        }
      }
    },
    preview: {
      thumbnail: '/templates/media.jpg'
    }
  }
]