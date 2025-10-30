import { image } from "html2canvas/dist/types/css/types/image"

// 基础样式类型 - 主要处理视觉外观
export interface TextStyle {
  fontSize: number
  fontFamily: string
  fontWeight: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontStyle: 'normal' | 'italic'
  color: string
  lineHeight: number
  letterSpacing: number
  textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  textDecoration: 'none' | 'underline' | 'line-through'
  background?: BackgroundStyle
  border?: BorderStyle
}

export interface SpacingStyle {
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
  paddingTop: number
  paddingRight: number
  paddingBottom: number
  paddingLeft: number
  background?: BackgroundStyle; 
  border?: BorderStyle
}

export interface BorderStyle {
  width: number
  style: 'solid' | 'dashed' | 'dotted' | 'double'
  color: string
  radius: number
}

export interface BackgroundStyle {
  color: string
  image?: string
  size?: 'cover' | 'contain' | 'auto'
  position?: string
  repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
}

// 扩展类型定义，解决交叉类型问题
// export type SpacingWithBackgroundStyle = SpacingStyle & {  }
// export type SpacingStyle =  & {  }

export interface ColorPalette {
  primary: string
  secondary: string
  accent: string
  success: string
  warning: string
  error: string
  background: {
    primary: string
    secondary: string
    accent: string
  }
  text: {
    primary: string
    secondary: string
    muted: string
    inverted: string
  }
  border: string
}

// 主题定义
export interface Theme {
  name: string
  colors: ColorPalette
  typography: {
    fontFamily: {
      heading: string
      body: string
      monospace: string
    }
    fontSize: {
      xs: number
      sm: number
      base: number
      lg: number
      xl: number
      '2xl': number
      '3xl': number
      '4xl': number
    }
    fontWeight: {
      light: 300
      normal: 400
      medium: 500
      semibold: 600
      bold: 700
    }
    lineHeight: {
      tight: number
      normal: number
      relaxed: number
    }
  }
  spacing: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    '2xl': number
  }
  borderRadius: {
    sm: number
    md: number
    lg: number
    xl: number
  }
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

// 样式配置
export interface StyleConfig {
  // 主题
  theme: Theme

  // 页面样式
  page: {
    background: BackgroundStyle
    shadow: string
  }

  // 个人信息样式
  personalInfo: {
    container: SpacingStyle
    name: {
      firstName: TextStyle
      lastName: TextStyle
    }
    photo: {
      size: number
      border: BorderStyle
      shadow: string
    }
    contact: {
      container: SpacingStyle
      item: TextStyle
      icon: {
        size: number
        color: string
      }
    }
    jobInfo: {
      currentTitle: TextStyle
      jobExpectation: TextStyle
      base: TextStyle
    }
    summary: {
      container: SpacingStyle
      text: TextStyle
    }
  }

  // 章节标题样式
  section: {
    title: TextStyle & {
      divider: {
        enabled: boolean
        color: string
        thickness: number
        style: 'solid' | 'dashed' | 'dotted'
      }
    }
    container: SpacingStyle
  }

  // 工作经历样式
  workExperience: {
    item: {
      container: SpacingStyle
      header: {
        company: TextStyle
        position: TextStyle
        location: TextStyle
        date: TextStyle & {
          current: Partial<TextStyle>
        }
      }
      description: TextStyle
      achievements: {
        list: TextStyle
        item: TextStyle & {
          bullet: {
            character: string
            color: string
            size: number
          }
        }
      }
      technologies: {
        container: SpacingStyle
        tag: TextStyle 
      }
    }
  }

  // 项目经历样式
  projectExperience: {
    item: {
      container: SpacingStyle
      header: {
        name: TextStyle
        role: TextStyle
        url: TextStyle
        date: TextStyle
      }
      description: TextStyle
      achievements: {
        list: TextStyle
        item: TextStyle & {
          bullet: {
            character: string
            color: string
            size: number
          }
        }
      }
      technologies: {
        container: SpacingStyle
        tag: TextStyle 
      }
    }
  }

  // 教育背景样式
  education: {
    item: {
      container: SpacingStyle
      header: {
        school: TextStyle
        major: TextStyle
        degree: TextStyle
      }
      details: {
        date: TextStyle
        gpa: TextStyle
        honors: {
          list: TextStyle
          item: TextStyle
        }
      }
      description: TextStyle
    }
  }

  // 技能样式
  skills: {
    category: TextStyle
    item: {
      container: SpacingStyle
      name: TextStyle
      level: {
        container: SpacingStyle
        bar: BackgroundStyle & {
          height: number
          borderRadius: number
        }
        text: TextStyle
        variants: {
          beginner: { color: string; background: string }
          intermediate: { color: string; background: string }
          advanced: { color: string; background: string }
          expert: { color: string; background: string }
        }
      }
      years: TextStyle
    }
  }

  // 荣誉奖项样式
  honors: {
    item: {
      container: SpacingStyle
      name: TextStyle
      level: TextStyle
      issuer: TextStyle
      date: TextStyle
      description: TextStyle
    }
  }

  // 证书样式
  certificates: {
    item: {
      container: SpacingStyle
      name: TextStyle
      issuer: TextStyle
      date: TextStyle
      expiryDate: TextStyle
      number: TextStyle
    }
  }

  // 语言能力样式
  languages: {
    item: {
      container: SpacingStyle
      name: TextStyle
      proficiency: {
        text: TextStyle
        variants: {
          basic: TextStyle
          conversational: TextStyle
          professional: TextStyle
          native: TextStyle
        }
      }
    }
  }

  // 出版物样式
  publications: {
    item: {
      container: SpacingStyle
      title: TextStyle
      publisher: TextStyle
      date: TextStyle
      authors: {
        list: TextStyle
        item: TextStyle
      }
    }
  }

  // 其他信息样式
  additionalInfo: {
    references: {
      container: SpacingStyle
      text: TextStyle
    }
    hobbies: {
      container: SpacingStyle
      tag: TextStyle 
    }
    customSections: {
      container: SpacingStyle
      title: TextStyle
      content: TextStyle
    }
  }
}

// 专业主题
export const professionalTheme: Theme = {
  name: 'professional',
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#f59e0b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      accent: '#eff6ff'
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      muted: '#64748b',
      inverted: '#ffffff'
    },
    border: '#e2e8f0'
  },
  typography: {
    fontFamily: {
      heading: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      body: "'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      monospace: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace"
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  }
}

// 创建样式配置的辅助函数
const createTextStyle = (
  fontSize: number,
  fontWeight: TextStyle['fontWeight'],
  color: string,
  lineHeight: number = 1.5
): TextStyle => ({
  fontSize,
  fontFamily: professionalTheme.typography.fontFamily.body,
  fontWeight,
  fontStyle: 'normal',
  color,
  lineHeight,
  letterSpacing: 0,
  textTransform: 'none' as const,
  textDecoration: 'none' as const
})

const createSpacing = (
  marginTop: number = 0,
  marginRight: number = 0,
  marginBottom: number = 0,
  marginLeft: number = 0,
  paddingTop: number = 0,
  paddingRight: number = 0,
  paddingBottom: number = 0,
  paddingLeft: number = 0
): SpacingStyle => ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
})

// Mock 样式配置
export const mockStyleConfig: StyleConfig = {
  theme: professionalTheme,

  page: {
    background: {
      color: professionalTheme.colors.background.primary
    },
    shadow: professionalTheme.shadows.md
  },

  personalInfo: {
    container: {
      ...createSpacing(0, 0, professionalTheme.spacing.xl, 0, professionalTheme.spacing.xl, 0, professionalTheme.spacing.xl, 0),
      background: {
        color: professionalTheme.colors.background.accent
      }
    },
    name: {
      firstName: createTextStyle(professionalTheme.typography.fontSize['3xl'], 700, professionalTheme.colors.text.primary, 1.25),
      lastName: createTextStyle(professionalTheme.typography.fontSize['3xl'], 700, professionalTheme.colors.primary, 1.25)
    },
    photo: {
      size: 120,
      border: {
        width: 4,
        style: 'solid',
        color: professionalTheme.colors.primary,
        radius: professionalTheme.borderRadius.lg
      },
      shadow: professionalTheme.shadows.lg
    },
    contact: {
      container: createSpacing(professionalTheme.spacing.sm, 0, 0, 0),
      item: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary),
      icon: {
        size: 16,
        color: professionalTheme.colors.primary
      }
    },
    jobInfo: {
      currentTitle: createTextStyle(professionalTheme.typography.fontSize.lg, 500, professionalTheme.colors.primary),
      jobExpectation: createTextStyle(professionalTheme.typography.fontSize.base, 400, professionalTheme.colors.text.secondary),
      base: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.muted)
    },
    summary: {
      container: {
        ...createSpacing(professionalTheme.spacing.md, 0, 0, 0, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      text: createTextStyle(professionalTheme.typography.fontSize.base, 400, professionalTheme.colors.text.secondary, 1.75)
    }
  },

  section: {
    title: {
      ...createTextStyle(professionalTheme.typography.fontSize.xl, 600, professionalTheme.colors.text.primary, 1.25),
      textTransform: 'uppercase',
      divider: {
        enabled: true,
        color: professionalTheme.colors.primary,
        thickness: 2,
        style: 'solid'
      }
    },
    container: createSpacing(0, 0, professionalTheme.spacing.lg, 0)
  },

  workExperience: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.lg, 0, professionalTheme.spacing.lg, professionalTheme.spacing.lg, professionalTheme.spacing.lg, professionalTheme.spacing.lg),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      header: {
        company: createTextStyle(professionalTheme.typography.fontSize.lg, 600, professionalTheme.colors.text.primary),
        position: createTextStyle(professionalTheme.typography.fontSize.base, 500, professionalTheme.colors.primary),
        location: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.muted),
        date: {
          ...createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.secondary),
          current: {
            color: professionalTheme.colors.success,
            fontWeight: 600
          }
        }
      },
      description: createTextStyle(professionalTheme.typography.fontSize.base, 400, professionalTheme.colors.text.secondary, 1.75),
      achievements: {
        list: createTextStyle(professionalTheme.typography.fontSize.base, 400, professionalTheme.colors.text.secondary, 1.75),
        item: {
          ...createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75),
          bullet: {
            character: '•',
            color: professionalTheme.colors.primary,
            size: 8
          }
        }
      },
      technologies: {
        container: createSpacing(professionalTheme.spacing.sm, 0, 0, 0),
        tag: {
          ...createTextStyle(professionalTheme.typography.fontSize.xs, 500, professionalTheme.colors.primary, 1.25),
          fontFamily: professionalTheme.typography.fontFamily.monospace,
          background: {
            color: professionalTheme.colors.background.accent,
           
          },
          border: {
            width: 1,
            style: 'solid',
            color: professionalTheme.colors.primary,
            radius: professionalTheme.borderRadius.sm
          }
        }
      }
    }
  },

  projectExperience: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.md, 0, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      header: {
        name: createTextStyle(professionalTheme.typography.fontSize.base, 600, professionalTheme.colors.text.primary),
        role: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.primary),
        url: {
          ...createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
          textDecoration: 'underline'
        },
        date: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted)
      },
      description: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75),
      achievements: {
        list: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75),
        item: {
          ...createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary, 1.75),
          bullet: {
            character: '•',
            color: professionalTheme.colors.accent,
            size: 6
          }
        }
      },
      technologies: {
        container: createSpacing(professionalTheme.spacing.xs, 0, 0, 0),
        tag: {
          ...createTextStyle(professionalTheme.typography.fontSize.xs, 500, professionalTheme.colors.accent, 1.25),
          fontFamily: professionalTheme.typography.fontFamily.monospace,
          background: {
            color: professionalTheme.colors.background.accent
          },
          border: {
            width: 1,
            style: 'solid',
            color: professionalTheme.colors.accent,
            radius: professionalTheme.borderRadius.sm
          }
        }
      }
    }
  },

  education: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.md, 0, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      header: {
        school: createTextStyle(professionalTheme.typography.fontSize.base, 600, professionalTheme.colors.text.primary),
        major: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.primary),
        degree: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary)
      },
      details: {
        date: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
        gpa: {
          ...createTextStyle(professionalTheme.typography.fontSize.xs, 500, professionalTheme.colors.success),
          fontStyle: 'normal'
        },
        honors: {
          list: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
          item: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary)
        }
      },
      description: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75)
    }
  },

  skills: {
    category: createTextStyle(professionalTheme.typography.fontSize.base, 600, professionalTheme.colors.text.primary),
    item: {
      container: {
        ...createSpacing(0, professionalTheme.spacing.xs, professionalTheme.spacing.xs, 0, professionalTheme.spacing.xs, professionalTheme.spacing.sm, professionalTheme.spacing.xs, professionalTheme.spacing.sm),
        background: {
          color: professionalTheme.colors.background.accent
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.sm
        }
      },
      name: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.primary),
      level: {
        container: createSpacing(professionalTheme.spacing.xs, 0, 0, 0),
        bar: {
          color: professionalTheme.colors.background.secondary,
          height: 4,
          borderRadius: professionalTheme.borderRadius.sm
        },
        text: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
        variants: {
          beginner: {
            color: professionalTheme.colors.warning,
            background: professionalTheme.colors.warning
          },
          intermediate: {
            color: professionalTheme.colors.accent,
            background: professionalTheme.colors.accent
          },
          advanced: {
            color: professionalTheme.colors.primary,
            background: professionalTheme.colors.primary
          },
          expert: {
            color: professionalTheme.colors.success,
            background: professionalTheme.colors.success
          }
        }
      },
      years: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted)
    }
  },

  // 其他部分的样式配置类似，这里简化处理...
  honors: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.sm, 0, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      name: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.primary),
      level: {
        ...createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.primary),
        background: {
          color: professionalTheme.colors.background.accent
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.primary,
          radius: professionalTheme.borderRadius.sm
        }
      },
      issuer: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
      date: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
      description: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary, 1.75)
    }
  },

  certificates: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.sm, 0, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      name: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.primary),
      issuer: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
      date: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
      expiryDate: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.warning),
      number: {
        ...createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
        fontFamily: professionalTheme.typography.fontFamily.monospace
      }
    }
  },

  languages: {
    item: {
      container: {
        ...createSpacing(0, professionalTheme.spacing.xs, professionalTheme.spacing.xs, 0, professionalTheme.spacing.xs, professionalTheme.spacing.sm, professionalTheme.spacing.xs, professionalTheme.spacing.sm),
        background: {
          color: professionalTheme.colors.background.accent
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.sm
        }
      },
      name: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.primary),
      proficiency: {
        text: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
        variants: {
          basic: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
          conversational: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
          professional: createTextStyle(professionalTheme.typography.fontSize.xs, 500, professionalTheme.colors.primary),
          native: createTextStyle(professionalTheme.typography.fontSize.xs, 600, professionalTheme.colors.success)
        }
      }
    }
  },

  publications: {
    item: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.sm, 0, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm, professionalTheme.spacing.sm),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      title: createTextStyle(professionalTheme.typography.fontSize.sm, 500, professionalTheme.colors.text.primary),
      publisher: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
      date: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.muted),
      authors: {
        list: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary),
        item: createTextStyle(professionalTheme.typography.fontSize.xs, 400, professionalTheme.colors.text.secondary)
      }
    }
  },

  additionalInfo: {
    references: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.md, 0, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      text: {
        ...createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75),
        fontStyle: 'italic'
      }
    },
    hobbies: {
      container: createSpacing(0, 0, professionalTheme.spacing.md, 0),
      tag: {
        ...createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary),
        background: {
          color: professionalTheme.colors.background.accent
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.sm
        }
      }
    },
    customSections: {
      container: {
        ...createSpacing(0, 0, professionalTheme.spacing.md, 0, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md, professionalTheme.spacing.md),
        background: {
          color: professionalTheme.colors.background.primary
        },
        border: {
          width: 1,
          style: 'solid',
          color: professionalTheme.colors.border,
          radius: professionalTheme.borderRadius.md
        }
      },
      title: createTextStyle(professionalTheme.typography.fontSize.base, 600, professionalTheme.colors.text.primary),
      content: createTextStyle(professionalTheme.typography.fontSize.sm, 400, professionalTheme.colors.text.secondary, 1.75)
    }
  }
}