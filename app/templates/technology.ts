// 科技 
import type { TemplateOptions } from "~/types/template"

export const technology: TemplateOptions[] = [
      // 3. 科技深色
  {
    meta: {
      id: 'tech-dark',
      name: '科技深色',
      type: 'modern',
      description: '现代感十足的深色主题，适合技术开发者',
      featured: true,
      premium: false,
      rating: 4.8,
      downloads: 13500,
      industries: ['技术', '互联网', '软件开发', 'AI', '数据科学'],
      tags: ['现代', '专业', '技术感', '深色'],
      date: '2024-01-18',
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
          // style: 'glow',
          position: 'bottom'
        }
      },
      item: {
        // style: 'card',
        datePosition: 'right',
        // tagStyle: 'modern',
        bullet: {
          style: 'arrow',
          color: '#00d4ff'
        }
      },
      skill: {
        display: 'bars',
        columns: 2,
        showLevel: true,
        // levelStyle: 'gradient'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#00d4ff',
          secondary: '#00ff88',
          accent: '#0066ff',
          bg: '#0a0a0f',
          text: '#e2e8f0',
          border: '#2d3748',
          muted: '#718096'
        },
        fonts: {
          family: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
          size: {
            title: '2.5rem',
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
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.7
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.25rem'
        },
        borders: {
          radius: '8px',
          width: '1px',
          style: 'solid',
          color: '#2d3748'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#00d4ff',
            letterSpacing: '-0.02em',
            textTransform: 'none'
          },
          title: {
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#00ff88'
          },
          contact: {
            fontSize: '0.875rem',
            color: '#a0aec0',
            iconSize: '16px',
            gap: '1rem'
          },
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a202c 100%)',
          padding: '3rem 0 2rem'
        },
        section: {
          title: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#00d4ff',
            iconSize: '20px',
            iconColor: '#00ff88'
          }
        },
        item: {
          title: {
            fontSize: '1rem',
            fontWeight: 600,
            color: '#00ff88'
          },
          subtitle: {
            fontSize: '0.875rem',
            color: '#00d4ff'
          },
          description: {
            fontSize: '0.875rem',
            color: '#cbd5e0',
            lineHeight: 1.6
          },
          background: 'rgba(45, 55, 72, 0.3)',
          padding: '1.25rem',
          border: {
            radius: '8px',
            width: '1px',
            color: '#2d3748'
          }
        },
        tag: {
          background: 'rgba(0, 212, 255, 0.15)',
          color: '#00d4ff',
          padding: '0.25rem 0.75rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          border: '1px solid rgba(0, 212, 255, 0.3)'
        }
      }
    },
    preview: {
      thumbnail: '/templates/tech-dark.jpg'
    }
  },

  // 4. 清新科技
  {
    meta: {
      id: 'tech-light',
      name: '清新科技',
      type: 'modern',
      description: '清爽简约的浅色科技风格',
      rating: 4.7,
      downloads: 11200,
      industries: ['技术', '互联网', '产品', 'UI/UX'],
      tags: ['简约', '清新', '现代', '科技'],
      date: '2024-01-22',
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
          position: 'left'
        }
      },
      item: {
        style: 'clean',
        datePosition: 'right',
        // tagStyle: 'chip',
        bullet: {
          style: 'circle',
          color: '#2563eb'
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
          primary: '#2563eb',
          secondary: '#1e293b',
          accent: '#f1f5f9',
          bg: '#ffffff',
          text: '#334155',
          border: '#e2e8f0',
          muted: '#64748b'
        },
        fonts: {
          family: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
          size: {
            title: '2rem',
            heading: '1.125rem',
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
            normal: 1.6,
            relaxed: 1.8
          }
        },
        spacing: {
          section: '2rem',
          item: '1rem'
        },
        borders: {
          radius: '8px',
          width: '1px',
          style: 'solid',
          color: '#e2e8f0'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1e293b'
          },
          title: {
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#64748b'
          },
          background: 'transparent',
          padding: '0 0 1.5rem'
        },
        section: {
          title: {
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#1e293b',
            dividerColor: '#2563eb',
            dividerWidth: '3px'
          }
        },
        tag: {
          background: '#f1f5f9',
          color: '#2563eb',
          padding: '0.375rem 0.875rem',
          borderRadius: '6px',
          fontSize: '0.75rem',
          border: '1px solid #e2e8f0'
        }
      }
    },
    preview: {
      thumbnail: '/templates/tech-light.jpg'
    }
  },
    // 现代科技风 - 深色主题
  {
    meta: {
      id: 'tech-dark',
      name: '科技深色',
      type: 'modern',
      description: '适合技术开发者的深色专业简历',
      industries: ['技术', '互联网', '软件开发'],
      tags: ['现代', '专业', '技术感']
    },
    layout: {
      page: {
        columns: 1,
        width: '210mm',
        maxWidth: '210mm',
        padding: '3rem',
        margin: '0 auto'
      },
      header: {
        align: 'center',
        direction: 'vertical',
        spacing: '1.5rem',
        background: 'filled',
        divider: true
      },
      section: {
        titlePosition: 'top',
        contentAlign: 'left',
        spacing: '2rem',
        divider: {
          enabled: true,
          style: 'line',
          position: 'bottom'
        }
      },
      item: {
        style: 'stacked',
        datePosition: 'right',
        tagStyle: 'minimal',
        bullet: {
          style: 'arrow',
          color: '#00d4ff'
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
          primary: '#00d4ff',
          secondary: '#00ff88',
          accent: '#0066ff',
          bg: '#0a0a0f',
          text: '#e2e8f0',
          border: '#2d3748',
          muted: '#718096',
          success: '#00ff88',
          warning: '#ffd600',
          error: '#ff4757'
        },
        fonts: {
          family: "'SF Mono', 'Fira Code', monospace",
          size: {
            title: '2.5rem',
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
            tight: 1.2,
            normal: 1.4,
            relaxed: 1.6
          }
        },
        spacing: {
          section: '2.5rem',
          item: '1.25rem',
          padding: {
            page: '3rem',
            section: '1.5rem',
            item: '1rem'
          },
          margin: {
            section: '2rem',
            item: '0.75rem'
          }
        },
        borders: {
          radius: '12px',
          width: '2px',
          style: 'solid',
          color: '#2d3748'
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#00d4ff',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          },
          title: {
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#00ff88'
          },
          contact: {
            fontSize: '0.875rem',
            color: '#a0aec0',
            iconSize: '16px',
            gap: '1rem'
          },
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a202c 100%)',
          padding: '3rem 0 2rem'
        },
        section: {
          title: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#00d4ff',
            iconSize: '18px',
            iconColor: '#00ff88',
            dividerColor: '#00d4ff',
            dividerWidth: '2px'
          },
          content: {
            fontSize: '0.875rem',
            color: '#cbd5e0',
            lineHeight: 1.5
          },
          marginBottom: '2.5rem'
        },
        item: {
          title: {
            fontSize: '1rem',
            fontWeight: 600,
            color: '#00ff88'
          },
          subtitle: {
            fontSize: '0.875rem',
            color: '#00d4ff'
          },
          date: {
            fontSize: '0.75rem',
            color: '#718096',
            fontWeight: 500
          },
          description: {
            fontSize: '0.875rem',
            color: '#a0aec0',
            lineHeight: 1.5
          },
          background: 'rgba(45, 55, 72, 0.3)',
          border: {
            radius: '8px',
            width: '1px',
            style: 'solid',
            color: '#2d3748'
          },
          padding: '1.25rem',
          marginBottom: '1rem'
        },
        tag: {
          background: 'rgba(0, 212, 255, 0.1)',
          color: '#00d4ff',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 500,
          border: '1px solid rgba(0, 212, 255, 0.3)'
        },
        skill: {
          item: {
            fontSize: '0.875rem',
            color: '#cbd5e0',
            gap: '0.75rem'
          },
          levelBar: {
            height: '6px',
            background: 'rgba(45, 55, 72, 0.5)',
            fillColor: 'linear-gradient(90deg, #00d4ff, #0066ff)',
            borderRadius: '3px'
          },
          levelText: {
            fontSize: '0.75rem',
            color: '#718096',
            fontWeight: 500
          }
        }
      }
    }
  },

  // 简约科技风 - 浅色主题
  {
    meta: {
      id: 'tech-light',
      name: '科技简约',
      type: 'minimal',
      description: '清新简约的技术简历风格',
      industries: ['技术', '设计', '产品'],
      tags: ['简约', '清新', '现代']
    },
    style: {
      global: {
        colors: {
          primary: '#2563eb',
          secondary: '#1e293b',
          accent: '#dbeafe',
          bg: '#ffffff',
          text: '#334155',
          border: '#e2e8f0',
          muted: '#64748b'
        },
        fonts: {
          family: "'Inter', -apple-system, sans-serif",
          size: {
            title: '2rem',
            heading: '1.125rem',
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
            normal: 1.5,
            relaxed: 1.6
          }
        }
      },
      components: {
        header: {
          name: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1e293b'
          },
          title: {
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#64748b'
          },
          background: 'none',
          padding: '2rem 0 1rem'
        },
        section: {
          title: {
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#1e293b'
          }
        }
      }
    }
  },

  // 8. 清新青 - 科技创新风格
  {
    meta: {
      id: 'tech-cyan',
      name: '科技青',
      type: 'modern',
      description: '清新的青色主题，展现科技创新',
      rating: 4.7,
      downloads: 8300,
      industries: ['科技', '互联网', '创新', '研发'],
      tags: ['科技', '创新', '现代', '清新']
    },
    layout: {
      skill: {
        display: 'bars',
        levelStyle: 'percentage'
      }
    },
    style: {
      global: {
        colors: {
          primary: '#0891b2',
          secondary: '#155e75',
          accent: '#cffafe',
          bg: '#ffffff',
          text: '#164e63',
          border: '#67e8f9'
        }
      }
    },
    preview: { thumbnail: '/templates/tech-cyan.jpg' }
  },



]
