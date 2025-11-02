// 极简 
import type { TemplateOptions } from "~/types/template"

export const simple: TemplateOptions[] = [
     // 8. 极简设计
  {
    meta: {
      id: 'design-minimal',
      name: '极简设计',
      type: 'minimal',
      description: '极简主义风格，突出内容的本质',
      rating: 4.7,
      downloads: 12600,
      industries: ['设计', 'UI/UX', '产品', '建筑', '摄影'],
      tags: ['极简', '设计感', '干净', '优雅'],
      date: '2024-02-01',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        padding: '3rem 4rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
        direction: 'vertical',
        spacing: '0.5rem',
        background: 'none',
        divider: false
      },
      section: {
        titlePosition: 'left',
        contentAlign: 'left',
        spacing: '2rem',
        divider: {
          enabled: true,
          style: 'minimal',
          position: 'left'
        }
      },
      item: {
        style: 'minimal',
        datePosition: 'inline',
        tagStyle: 'text',
        bullet: {
          style: 'dash',
          color: '#000000'
        }
      },
      skill: {
        display: 'text',
        columns: 1,
        showLevel: false,
        levelStyle: 'none'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#000000',
          secondary: '#666666',
          accent: '#f5f5f5',
          bg: '#ffffff',
          text: '#333333',
          border: '#e0e0e0',
          muted: '#999999'
        },
        fonts: {
          family: "'Helvetica Neue', 'Arial', 'PingFang SC', sans-serif",
          size: {
            title: '1.75rem',
            heading: '1rem',
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
            tight: 1.2,
            normal: 1.7,
            relaxed: 2
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.25rem'
        },
        borders: {
          radius: '0',
          width: '1px',
          style: 'solid',
          color: '#e0e0e0'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '1.75rem',
            fontWeight: 300,
            color: '#000000',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          },
          title: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#666666',
            letterSpacing: '0.1em'
          },
          background: 'transparent',
          padding: '0 0 3rem'
        },
        section: {
          title: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#000000',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            dividerColor: '#000000',
            dividerWidth: '2px'
          }
        },
        item: {
          title: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#000000'
          },
          subtitle: {
            fontSize: '0.875rem',
            color: '#666666',
            fontWeight: 400
          },
          background: 'transparent',
          padding: '0',
          border: {
            width: '0'
          }
        },
        tag: {
          background: 'transparent',
          color: '#666666',
          padding: '0',
          border: 'none',
          fontSize: '0.75rem'
        }
      }
    },
    preview: {
      thumbnail: '/templates/design-minimal.jpg'
    }
  },

  // 5. 极简灰 - 简约现代风格
  {
    meta: {
      id: 'minimal-gray',
      name: '极简灰',
      type: 'minimal',
      description: '极简主义设计，突出内容本身',
      rating: 4.5,
      downloads: 10200,
      industries: ['科技', '设计', '建筑', '研究'],
      tags: ['极简', '简约', '现代', '优雅']
    },
    layout: {
      header: {
        align: 'left',
        background: 'none',
        divider: true
      },
      section: {
        titlePosition: 'left',
        divider: {
          enabled: true,
          style: 'line',
          position: 'left'
        }
      },
      item: {
        style: 'inline',
        bullet: {
          style: 'dash',
          color: '#6b7280'
        }
      },
      skill: {
        display: 'list',
        columns: 1,
        levelStyle: 'text'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#6b7280',
          secondary: '#374151',
          accent: '#f9fafb',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#e5e7eb'
        },
        fonts: {
          family: 'Helvetica Neue, sans-serif',
          size: {
            title: '24px',
            heading: '16px',
            body: '13px',
            small: '11px'
          }
        },
        spacing: {
          section: '1.5rem',
          item: '0.75rem',
          padding: {
            page: '1.5rem',
            section: '0.5rem',
            item: '0.5rem'
          },
          margin: {
            section: '1.5rem',
            item: '0.75rem'
          }
        },
        borders: {
          radius: '0',
          style: 'solid'
        }
      },
      components: {
        header: {
          background: 'transparent',
          name: {
            fontSize: '24px',
            fontWeight: 600,
            color: '#1f2937'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#6b7280'
          },
          contact: {
            fontSize: '13px',
            color: '#6b7280',
            iconSize: '13px',
            gap: '1rem'
          },
          padding: '1rem 0'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#374151',
            dividerColor: '#e5e7eb',
            dividerWidth: '1px'
          }
        },
        tag: {
          background: 'transparent',
          color: '#6b7280',
          padding: '0',
          border: 'none',
          borderRadius: '0'
        }
      }
    },
    preview: { thumbnail: '/templates/minimal-gray.jpg' }
  },
 // 极简设计风
  {
    meta: {
      id: 'design-minimal',
      name: '极简设计',
      type: 'minimal',
      description: '极简主义的设计师简历',
      industries: ['设计', 'UI/UX', '产品'],
      tags: ['极简', '设计感', '干净']
    },
    style: {
      global: {
        colors: {
          primary: '#000000',
          secondary: '#666666',
          accent: '#f5f5f5',
          bg: '#ffffff',
          text: '#333333',
          border: '#e0e0e0',
          muted: '#999999'
        },
        fonts: {
          family: "'Helvetica Neue', Arial, sans-serif",
          size: {
            title: '1.5rem',
            heading: '1rem',
            body: '0.875rem',
            small: '0.75rem'
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
        }
      },
      components: {
        header: {
          name: {
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#000000',
            letterSpacing: '0.1em'
          },
          title: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#666666'
          },
          background: 'none',
          padding: '2rem 0'
        },
        section: {
          title: {
            fontSize: '1rem',
            fontWeight: 500,
            color: '#000000',
            borderBottom: '1px solid #000000'
          }
        },
        item: {
          title: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#000000'
          },
          background: 'transparent',

        }
      }
    }
  },
    // 2. 现代绿 - 清新自然风格
  {
    meta: {
      id: 'modern-green',
      name: '现代绿',
      type: 'modern',
      description: '清新的绿色主题，展现活力和创新',
      featured: true,
      rating: 4.7,
      downloads: 12350,
      industries: ['设计', '创业', '市场', '教育'],
      tags: ['现代', '清新', '创新', '环保']
    },
    layout: {
      header: {
        background: 'gradient'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#059669',
          secondary: '#047857',
          accent: '#d1fae5',
          bg: '#ffffff',
          text: '#064e3b',
          border: '#a7f3d0'
        },
        fonts: {
          family: 'Poppins, sans-serif'
        }
      },
      components: {
        header: {
          background: { type: 'gradient', colors: ['#059669', '#047857'] }
        }
      }
    },
    preview: { thumbnail: '/templates/modern-green.jpg' }
  },
    // 21. 经典黑白
  {
    meta: {
      id: 'classic-bw',
      name: '经典黑白',
      type: 'classic',
      description: '永恒的黑白配色，专业而经典',
      featured: true,
      rating: 4.6,
      downloads: 18750,
      industries: ['法律', '学术', '政府', '传统行业', '通用'],
      tags: ['经典', '正式', '传统', '专业'],
      date: '2024-02-28',
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
        spacing: '1rem',
        background: 'filled',
        divider: true
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'justify',
        spacing: '1.75rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'bottom'
        }
      },
      item: {
        // style: 'traditional',
        datePosition: 'inline',
        tagStyle: 'none',
        bullet: {
          style: 'square',
          color: '#1f2937'
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
          primary: '#1f2937',
          secondary: '#4b5563',
          accent: '#f3f4f6',
          bg: '#ffffff',
          text: '#111827',
          border: '#d1d5db',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Georgia', 'Times New Roman', 'Noto Serif SC', serif",
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
          },
          lineHeight: {
            tight: 1.2,
            normal: 1.6,
            relaxed: 1.8
          }
        },
        spacing: {
          section: '1.75rem',
          item: '0.875rem'
        },
        borders: {
          radius: '0.25rem',
          width: '1px',
          style: 'solid',
          color: '#d1d5db'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '26px',
            fontWeight: 700,
            color: '#ffffff'
          },
          title: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#f3f4f6'
          },
          background: '#1f2937',
          padding: '2.5rem 2rem'
        },
        section: {
          title: {
            fontSize: '17px',
            fontWeight: 700,
            color: '#1f2937',
            textTransform: 'uppercase',
            dividerColor: '#1f2937',
            dividerWidth: '2px'
          }
        },
        tag: {
          background: '#f3f4f6',
          color: '#1f2937',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          fontSize: '12px',
          border: '1px solid #d1d5db'
        }
      }
    },
    preview: {
      thumbnail: '/templates/classic-bw.jpg'
    }
  },

  // 22. 极简灰
  {
    meta: {
      id: 'minimal-gray',
      name: '极简灰',
      type: 'minimal',
      description: '极简主义设计，突出内容本身',
      featured: true,
      rating: 4.5,
      downloads: 10200,
      industries: ['科技', '设计', '建筑', '研究', '通用'],
      tags: ['极简', '简约', '现代', '优雅'],
      date: '2024-03-01',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
        width: '210mm',
        maxWidth: '210mm',
        columns: 1,
        padding: '3rem 4rem',
        margin: '0 auto'
      },
      header: {
        align: 'left',
        direction: 'vertical',
        spacing: '0.5rem',
        background: 'none',
        divider: true
      },
      section: {
        titlePosition: 'left',
        contentAlign: 'left',
        spacing: '2rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'left'
        }
      },
      item: {
        style: 'inline',
        datePosition: 'inline',
        tagStyle: 'text',
        bullet: {
          style: 'dash',
          color: '#6b7280'
        }
      },
      skill: {
        display: 'list',
        columns: 1,
        showLevel: false,
        levelStyle: 'text'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#6b7280',
          secondary: '#374151',
          accent: '#f9fafb',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#f9fafb',
          // bold: 700
        },
        // lineHeight: {
        //   tight: 1.2,
        //   normal: 1.5,
        //   relaxed: 1.8
        // }
        spacing: {
          section: '2rem',
          item: '1rem',
          padding: {
            page: '2.5rem',
            section: '1rem',
            item: '0.75rem'
          },
          margin: {
            section: '1.5rem',
            item: '0.5rem'
          }
        },
        borders: {
          radius: '6px',
          width: '1px',
          style: 'solid',
          color: '#cbd5e1'
        }
      },


      components: {
        header: {
          name: {
            fontSize: '28px',
            fontWeight: 700,
            color: '#1e293b',
            letterSpacing: '-0.025em',
            textTransform: 'none'
          },
          title: {
            fontSize: '18px',
            fontWeight: 500,
            color: '#2563eb'
          },
          contact: {
            fontSize: '14px',
            color: '#64748b',
            iconSize: '16px',
            gap: '0.75rem'
          },
          background: 'transparent',
          padding: '0 0 2rem'
        },
        section: {
          title: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#1e293b',
            iconSize: '18px',
            iconColor: '#2563eb',
            dividerColor: '#2563eb',
            dividerWidth: '2px'
          },
          content: {
            fontSize: '14px',
            color: '#374151',
            lineHeight: 1.6
          },
          marginBottom: '2rem'
        },
        item: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#1e293b'
          },
          subtitle: {
            fontSize: '14px',
            color: '#2563eb'
          },
          date: {
            fontSize: '13px',
            color: '#64748b',
            fontWeight: 500
          },
          description: {
            fontSize: '14px',
            color: '#374151',
            lineHeight: 1.6
          },
          background: 'transparent',
          border: {
            radius: '0',
            width: '0',
            style: 'none',
            color: 'transparent'
          },
          padding: '0',
          marginBottom: '1.25rem'
        },
        tag: {
          background: '#dbeafe',
          color: '#1e40af',
          padding: '0.25rem 0.75rem',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 500,
          border: '1px solid #bfdbfe'
        },
        skill: {
          item: {
            fontSize: '14px',
            color: '#374151',
            gap: '0.5rem'
          },
          levelBar: {
            height: '8px',
            background: '#e2e8f0',
            fillColor: '#2563eb',
            borderRadius: '4px'
          },
          levelText: {
            fontSize: '12px',
            color: '#64748b',
            fontWeight: 500
          }
        }
      }
    },
  },

  
]