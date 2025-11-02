// 市场营销

import type { TemplateOptions } from "~/types/template"

export const marketing: TemplateOptions[] = [
      // 市场营销风
  {
    meta: {
      id: 'marketing',
      name: '市场营销',
      type: 'creative',
      description: '适合销售、市场营销人员的活力简历',
      industries: ['销售', '市场', '商务'],
      tags: ['活力', '专业', '营销']
    },
     layout: {
      page: {
        decorative:'circle',
         width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        columnGap: '0',
        padding: '2.5rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
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
        style: 'line',
          position: 'left'
        }
      },
      item: {
        style: 'stacked',
        datePosition: 'right',
        tagStyle: 'pill',
        bullet: {
          style: 'circle',
           color: '#db2777'
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
          primary: '#dc2626',
          secondary: '#ea580c',
          accent: '#fecaca',
          bg: '#ffffff',
          text: '#431407',
          border: '#fed7aa',
          muted: '#fb923c'
        },
        fonts: {
          family: "'Montserrat', 'Microsoft YaHei', sans-serif",
          size: {
            title: '24px',
            heading: '17px',
            body: '13px',
            small: '11px'
          }
        }
      },
      components: {
        header: {
          name: {
            fontSize: '24px',
            fontWeight: 700,
            color: '#dc2626'
          },
          title: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#ea580c'
          },
          background: 'linear-gradient(90deg, #fef2f2, #ffffff)'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 600,
            color: '#dc2626',

          }
        }
      }
    }
  },
 // 11. 市场营销
  {
    meta: {
      id: 'marketing',
      name: '市场营销',
      type: 'creative',
      description: '充满活力的营销风格，适合销售和市场人员',
      featured: true,
      rating: 4.8,
      downloads: 11200,
      industries: ['销售', '市场', '商务拓展', '品牌', '运营'],
      tags: ['活力', '专业', '营销', '动态'],
      date: '2024-02-07',
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
        direction: 'horizontal',
        spacing: '2rem',
        background: 'gradient',
        divider: false
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '1.75rem',
        divider: {
          enabled: true,
          style: 'bold',
          position: 'left'
        }
      },
      item: {
        style: 'dynamic',
        datePosition: 'right',
        tagStyle: 'badge',
        bullet: {
          style: 'arrow',
          color: '#dc2626'
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
          primary: '#dc2626',
          secondary: '#ea580c',
          accent: '#fecaca',
          bg: '#ffffff',
          text: '#7c2d12',
          border: '#fed7aa',
          muted: '#fb923c'
        },
        fonts: {
          family: "'Montserrat', 'Roboto', 'Microsoft YaHei', sans-serif",
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
          },
          lineHeight: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.7
          }
        },
        spacing: {
          section: '2rem',
          item: '1.125rem'
        },
        borders: {
          radius: '8px',
          width: '2px',
          style: 'solid',
          color: '#fed7aa'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '26px',
            fontWeight: 700,
            color: '#dc2626'
          },
          title: {
            fontSize: '17px',
            fontWeight: 500,
            color: '#ea580c'
          },
          background: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)',
          padding: '2rem'
        },
        section: {
          title: {
            fontSize: '18px',
            fontWeight: 700,
            color: '#dc2626',
            dividerColor: '#dc2626',
            dividerWidth: '4px'
          }
        },
        item: {
          title: {
            fontSize: '15px',
            fontWeight: 600,
            color: '#7c2d12'
          },
          subtitle: {
            fontSize: '14px',
            color: '#ea580c',
            fontWeight: 500
          }
        },
        tag: {
          background: 'linear-gradient(135deg, #dc2626, #ea580c)',
          color: '#ffffff',
          padding: '0.375rem 0.875rem',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          border: 'none'
        }
      }
    },
    preview: {
      thumbnail: '/templates/marketing.jpg'
    }
  },

]
