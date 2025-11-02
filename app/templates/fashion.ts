// 时尚
import type { TemplateOptions } from "~/types/template"

export const fashion: TemplateOptions[] = [
      // 20. 时尚奢侈品
  {
    meta: {
      id: 'fashion',
      name: '时尚奢侈品',
      type: 'creative',
      description: '高端时尚的奢侈品行业简历',
      premium: true,
      rating: 4.9,
      downloads: 7800,
      industries: ['时尚', '奢侈品', '服装', '美妆', '零售'],
      tags: ['时尚', '高端', '奢华', '创意'],
      date: '2024-02-26',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        padding: '3rem',
        margin: '0 auto'
      },
      header: {
        align: 'center',
        direction: 'vertical',
        spacing: '2rem',
        // background: 'luxury',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '2.5rem',
        divider: {
          enabled: true,
          // style: 'elegant',
          // position: 'center'
        }
      },
      item: {
        // style: 'luxury',
        // datePosition: 'bottom',
        // tagStyle: 'fashion',
        bullet: {
          // style: 'diamond',
          color: '#be185d'
        }
      },
      skill: {
        // display: 'elegant',
        columns: 3,
        showLevel: false,
        levelStyle: 'none'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#be185d',
          secondary: '#9f1239',
          accent: '#fce7f3',
          bg: '#fdf2f8',
          text: '#831843',
          border: '#fbcfe8',
          muted: '#ec4899'
        },
        fonts: {
          family: "'Didot', 'Bodoni MT', 'Noto Serif SC', serif",
          size: {
            title: '2.5rem',
            heading: '1.375rem',
            body: '0.9375rem',
            small: '0.8125rem'
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
            normal: 1.7,
            relaxed: 2
          }
        },
        spacing: {
          section: '3rem',
          item: '1.75rem'
        },
        borders: {
          radius: '0',
          width: '1px',
          style: 'solid',
          color: '#fbcfe8'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.5rem',
            fontWeight: 400,
            color: '#be185d',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          },
          title: {
            fontSize: '1.125rem',
            fontWeight: 300,
            color: '#9f1239',
            fontStyle: 'italic'
          },
          background: 'transparent',
          padding: '2rem 0 3rem'
        },
        section: {
          title: {
            fontSize: '1.375rem',
            fontWeight: 400,
            color: '#be185d',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            dividerColor: '#fbcfe8',
            dividerWidth: '1px'
          }
        },
        item: {
          title: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#831843'
          },
          subtitle: {
            fontSize: '0.9375rem',
            color: '#be185d',
            fontStyle: 'italic'
          },
          background: 'transparent',
          padding: '1.5rem 0',
          border: {
            width: '0'
          }
        },
        tag: {
          background: 'transparent',
          color: '#be185d',
          padding: '0 0.5rem',
          borderRadius: '0',
          fontSize: '0.8125rem',
          fontWeight: 400,
          // fontStyle: 'italic',
          border: 'none'
        }
      }
    },
    preview: {
      thumbnail: '/templates/fashion.jpg'
    }
  },

]