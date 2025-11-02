// 教育学术
import type { TemplateOptions } from "~/types/template"

export const business: TemplateOptions[] = [
      // 5. 经典商务
  {
    meta: {
      id: 'finance-classic',
      name: '经典商务',
      type: 'classic',
      description: '传统正式的商务风格，适合金融咨询行业',
      featured: true,
      rating: 4.6,
      downloads: 14800,
      industries: ['金融', '咨询', '法律', '会计', '审计'],
      tags: ['经典', '商务', '专业', '正式'],
      date: '2024-01-10',
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
        spacing: '0.5rem',
        background: 'none',
        divider: true
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'justify',
        spacing: '1.5rem',
        divider: {
          enabled: true,
          style: 'double',
          position: 'bottom'
        }
      },
      item: {
        // style: 'traditional',
        datePosition: 'inline',
        tagStyle: 'none',
        bullet: {
          style: 'circle',
          color: '#1e3a8a'
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
          primary: '#1e3a8a',
          secondary: '#374151',
          accent: '#f3f4f6',
          bg: '#ffffff',
          text: '#111827',
          border: '#d1d5db',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Times New Roman', 'Noto Serif SC', 'SimSun', serif",
          size: {
            title: '24px',
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
            normal: 1.6,
            relaxed: 1.8
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
            fontSize: '24px',
            fontWeight: 700,
            color: '#1e3a8a',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          },
          title: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151'
          },
          background: 'transparent',
          padding: '0 0 1.5rem'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 700,
            color: '#1e3a8a',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            dividerColor: '#1e3a8a',
            dividerWidth: '2px'
          }
        },
        item: {
          title: {
            fontSize: '14px',
            fontWeight: 600,
            color: '#111827'
          },
          subtitle: {
            fontSize: '13px',
            color: '#374151',
            fontStyle: 'italic'
          }
        }
      }
    },
    preview: {
      thumbnail: '/templates/finance-classic.jpg'
    }
  },
  // 7. 深蓝商务 - 高端专业风格
  {
    meta: {
      id: 'professional-navy',
      name: '深蓝商务',
      type: 'professional',
      description: '沉稳的深蓝主题，适合高级管理岗位',
      premium: true,
      rating: 4.8,
      downloads: 7800,
      industries: ['管理', '金融', '咨询', '高管'],
      tags: ['高端', '专业', '沉稳', '商务']
    },
    layout: {
      page: {
        columns: 2,
        columnGap: '2rem'
      },
      header: {
        align: 'center'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#1e40af',
          secondary: '#1e3a8a',
          accent: '#dbeafe',
          bg: '#f8fafc',
          text: '#1e293b',
          border: '#94a3b8'
        }
      }
    },
    preview: { thumbnail: '/templates/professional-navy.jpg' }
  },
    // 1. 经典商务蓝
  {
    meta: {
      id: 'professional-blue',
      name: '经典商务蓝',
      type: 'professional',
      description: '简洁专业的蓝色主题，适合商务和技术岗位',
      featured: true,
      premium: false,
      rating: 4.8,
      downloads: 15420,
      industries: ['技术', '金融', '咨询', '管理', '互联网'],
      tags: ['专业', '简洁', '商务', '经典'],
      date: '2024-01-15',
      author: 'Resume Builder',
      version: '1.0.0'
    },
    layout: {
      page: {
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
          style: 'line',
          position: 'bottom'
        }
      },
      item: {
        style: 'stacked',
        datePosition: 'right',
        tagStyle: 'pill',
        bullet: {
          style: 'circle',
          color: '#2563eb'
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
          primary: '#2563eb',
          secondary: '#1e293b',
          accent: '#dbeafe',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#cbd5e1',
          muted: '#64748b',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444'
        },
        fonts: {
          family: "'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif",
          size: {
            title: '28px',
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
            tight: 1.3,
            normal: 1.6,
            relaxed: 1.9
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
          color: '#e9d5ff'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.5rem',
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
            dividerColor: '#db2777',
            dividerWidth: '4px'
          }
        },
        item: {
          title: {
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#581c87'
          },
          subtitle: {
            fontSize: '1rem',
            color: '#db2777',
            fontStyle: 'italic'
          },
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '1.5rem',
          border: {
            radius: '12px',
            width: '2px',
            color: '#f0abfc'
          }
        },
        tag: {
          background: 'linear-gradient(135deg, #7c3aed, #db2777)',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 500,
          border: 'none'
        }
      }
    },
    preview: {
      thumbnail: '/templates/creative-art.jpg'
    }
  },
   // 1. 专业蓝 
  {
    meta: {
      id: 'professional-blue',
      name: '专业蓝',
      type: 'professional',
      description: '简洁专业的蓝色主题，适合商务和技术岗位',
      featured: true,
      rating: 4.8,
      downloads: 15420,
      industries: ['技术', '金融', '咨询', '管理'],
      tags: ['专业', '简洁', '商务', '经典']
    },
    style: {
      global: {
        colors: {
          primary: '#2563eb',
          secondary: '#1e293b',
          accent: '#dbeafe',
          bg: '#ffffff',
          text: '#1f2937',
          border: '#cbd5e1'
        }
      }
    },
    preview: { thumbnail: '/templates/professional-blue.jpg' }
  },
    // 经典商务风
  {
    meta: {
      id: 'finance-classic',
      name: '经典商务',
      type: 'classic',
      description: '适合金融、咨询行业的传统商务简历',
      industries: ['金融', '咨询', '法律', '管理'],
      tags: ['经典', '商务', '专业']
    },
    style: {
      global: {
        colors: {
          primary: '#1e3a8a',
          secondary: '#374151',
          accent: '#f3f4f6',
          bg: '#ffffff',
          text: '#111827',
          border: '#d1d5db',
          muted: '#6b7280'
        },
        fonts: {
          family: "'Times New Roman', 'SimSun', serif",
          size: {
            title: '22px',
            heading: '16px',
            body: '12px',
            small: '10px'
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
          section: '1.5rem',
          item: '0.75rem'
        },
        borders: {
          radius: '2px',
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
            color: '#1e3a8a',
            textTransform: 'uppercase'
          },
          title: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#374151'
          },
          background: 'none',
          padding: '1.5rem 0'
        },
        section: {
          title: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#1e3a8a',
            textTransform: 'uppercase'
          }
        },
        item: {
          title: {
            fontSize: '13px',
            fontWeight: 600,
            color: '#111827'
          },
          background: '#fafafa',
          border: {
            radius: '2px',
            width: '1px',
            style: 'solid',
            color: '#e5e7eb'
          }
        }
      }
    }
  },
]