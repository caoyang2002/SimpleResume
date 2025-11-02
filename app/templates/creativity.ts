// 创意
import type { TemplateOptions } from "~/types/template"


export const  creativity :TemplateOptions[] = [
{
    meta: {
      id: 'creative-art',
      name: '艺术创意',
      type: 'creative',
      description: '富有艺术感的创意简历，适合设计师和艺术家',
      featured: true,
      premium: true,
      rating: 4.9,
      downloads: 10800,
      industries: ['设计', '艺术', '广告', '媒体', '创意'],
      tags: ['创意', '艺术', '个性', '独特'],
      date: '2024-01-28',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        decorative:'circle',
         width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        columnGap: '0',
        padding: '0',
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
          primary: '#7c3aed',
          secondary: '#db2777',
          accent: '#f0abfc',
         bg: '#ffffff',

          text: '#581c87',
          border: '#e9d5ff',
          muted: '#a855f7',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444'
        },
        fonts: {
          family: "'Playfair Display', 'Noto Serif SC', 'STKaiti', serif",
          size: {
            title: '2.5rem',
            heading: '1.5rem',
            body: '1rem',
            small: '0.875rem'
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
            relaxed: 1.8
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.5rem',
          padding: {
            page: '3rem',
            section: '1.5rem',
            item: '1.25rem'
          },
          margin: {
            section: '2rem',
            item: '1rem'
          }
        },
        borders: {
          radius: '16px',
          width: '2px',
          style: 'solid',
          color: '#e9d5ff'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#7c3aed',
            letterSpacing: '-0.02em',
            textTransform: 'none'
          },
          title: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#db2777',
            fontStyle: 'italic'
          },
          contact: {
            fontSize: '1rem',
            fontColor:'#a855f7',
           iconSize: '18px',
            iconColor: '#a855f7',
            
            
            gap: '1rem'
          },
          background: {
            type: 'gradient',
            colors: ['#f0abfc', '#c4b5fd', '#a5b4fc']
          },
          padding: '3rem 2rem 2rem'
        },
        section: {
          title: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#7c3aed',
            iconSize: '20px',
            iconColor: '#db2777',
            dividerColor: 'linear-gradient(90deg, #7c3aed, #db2777)',
            dividerWidth: '4px'
          },
          content: {
            fontSize: '1rem',
            color: '#581c87',
            lineHeight: 1.6
          },
          marginBottom: '2.5rem'
        },
        item: {
          title: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#7c3aed'
          },
          subtitle: {
            fontSize: '1rem',
            color: '#db2777',
            fontStyle: 'italic'
          },
          date: {
            fontSize: '0.875rem',
            color: '#a855f7',
            fontWeight: 500
          },
          description: {
            fontSize: '1rem',
            color: '#581c87',
            lineHeight: 1.6
          },
          background: 'rgba(255, 255, 255, 0.7)',
          border: {
            radius: '12px',
            width: '1px',
            style: 'solid',
            color: '#f0abfc'
          },
          padding: '1.5rem',
          marginBottom: '1.25rem'
        },
        tag: {
          background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: '25px',
          fontSize: '0.875rem',
          fontWeight: 500,
          border: 'none'
        },
        skill: {
          item: {
            fontSize: '1rem',
            color: '#581c87',
            gap: '0.75rem'
          },
          levelBar: {
            height: '8px',
            background: 'rgba(168, 85, 247, 0.2)',
            fillColor: 'linear-gradient(90deg, #7c3aed, #db2777)',
            borderRadius: '10px'
          },
          levelText: {
            fontSize: '0.875rem',
            color: '#a855f7',
            fontWeight: 500
          }
        }
      }
    },
    preview: {
      thumbnail: '/templates/creative-art-thumb.jpg',
      images: [
        '/templates/creative-art-preview1.jpg',
        '/templates/creative-art-preview2.jpg',
        '/templates/creative-art-preview3.jpg'
      ]
    },
    custom: {
      artisticElements: {
        enabled: true,
        decorativeBorders: true,
        gradientAccents: true,
        customBullets: true,
        shadowEffects: 'soft'
      },
      printSettings: {
        bleed: '3mm',
        quality: 'high',
        colorProfile: 'CMYK'
      },
      animations: {
        hoverEffects: true,
        scrollReveal: false,
        transition: 'fade'
      }
    }
  },

  // 3. 创意紫 - 艺术设计风格
  {
    meta: {
      id: 'creative-purple',
      name: '创意紫',
      type: 'creative',
      description: '富有创意的紫色主题，适合设计和艺术岗位',
      premium: true,
      rating: 4.9,
      downloads: 8920,
      industries: ['设计', '艺术', '媒体', '广告'],
      tags: ['创意', '艺术', '独特', '个性']
    },
    layout: {
      header: {
        align: 'left',
        background: 'gradient'
      },
      section: {
        divider: {
          enabled: true,
          style: 'double',
          position: 'left'
        }
      },
      skill: {
        display: 'bars',
        columns: 1
      }
    },
    style: {
      global: {
        colors: {
          primary: '#7c3aed',
          secondary: '#6d28d9',
          accent: '#ede9fe',
          bg: '#faf5ff',
          text: '#5b21b6',
          border: '#c4b5fd'
        },
        fonts: {
          family: 'Montserrat, sans-serif',
          size: {
            title: '32px',
            heading: '20px',
            body: '14px',
            small: '12px'
          }
        },
        borders: {
          radius: '1rem'
        }
      }
    },
    preview: { thumbnail: '/templates/creative-purple.jpg' }
  },
  // 艺术创意风
  {
    meta: {
      id: 'creative-art',
      name: '艺术创意',
      type: 'creative',
      description: '适合设计师、艺术家的创意简历',
      industries: ['设计', '艺术', '广告', '媒体'],
      tags: ['创意', '艺术', '个性']
    },
    style: {
      global: {
        colors: {
          primary: '#7c3aed',
          secondary: '#db2777',
          accent: '#f0abfc',
          bg: 'linear-gradient(135deg, #fdf4ff 0%, #faf5ff 100%)',
          text: '#581c87',
          border: '#e9d5ff',
          muted: '#a855f7'
        },
        fonts: {
          family: "'Playfair Display', 'STKaiti', serif",
          size: {
            title: '2.25rem',
            heading: '1.5rem',
            body: '1rem',
            small: '0.875rem'
          },
          weight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700
          }
        },
        borders: {
          radius: '16px',
          width: '2px',
          style: 'solid',
          color: '#e9d5ff'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#7c3aed',
            fontStyle: 'italic'
          },
          title: {
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#db2777'
          },
          background: 'linear-gradient(135deg, #f0abfc 0%, #c4b5fd 100%)',
          padding: '3rem 2rem'
        },
        section: {
          title: {
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#7c3aed',
            borderLeft: '4px solid #db2777'
          }
        },
        item: {
          background: 'rgba(255, 255, 255, 0.7)',
          border: {
            radius: '12px',
            width: '1px',
            style: 'solid',
            color: '#f0abfc'
          }
        },
        tag: {
          background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          color: 'white',
          borderRadius: '20px',
          padding: '0.5rem 1rem'
        }
      }
    }
  },

]