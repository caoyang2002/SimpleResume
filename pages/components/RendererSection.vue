<template>
    <section class="resume-section" :style="sectionStyles">
        <h2 class="section-title" :style="sectionTitleStyles">
            <i :class="`fas ${section.icon}`" :style="sectionIconStyles"></i>
            <span>{{ section.title }}</span>
            <div v-if="showSectionDivider" class="section-divider" :style="sectionDividerStyles"></div>
        </h2>

        <div class="section-content" :style="sectionContentStyles">
            <!-- 个人简介 -->
            <template v-if="section.key === 'personal'">
                      <div class="personal-container" :style="personalContainerStyles">
                    <!-- 姓名和当前职位 -->
                    <template v-if="formData.personal.firstName || formData.personal.lastName">
                        <div class="name-section" :style="nameSectionStyles">
                            <h2 class="full-name" :style="fullNameStyles">
                                {{ formData.personal.firstName }} {{ formData.personal.lastName }}
                            </h2>
                            <p v-if="formData.personal.currentTitle" class="current-title" :style="currentTitleStyles">
                                {{ formData.personal.currentTitle }}
                            </p>
                        </div>
                    </template>

                    <div class="personal-grid" :style="personalGridStyles">
                        <!-- 联系信息 -->
                        <div class="contact-section" :style="contactSectionStyles">
                            <h3 class="subsection-title" :style="subsectionTitleStyles">联系信息</h3>
                            <div class="contact-list" :style="contactListStyles">
                                <div v-if="formData.personal.email" class="contact-item" :style="contactItemStyles">
                                    <i class="contact-icon fas fa-envelope" :style="contactIconStyles"></i>
                                    <div class="contact-content" :style="contactContentStyles">
                                        <span class="contact-label" :style="contactLabelStyles">邮箱</span>
                                        <span class="contact-value" :style="contactValueStyles">{{ formData.personal.email }}</span>
                                    </div>
                                </div>
                                <div v-if="formData.personal.phone" class="contact-item" :style="contactItemStyles">
                                    <i class="contact-icon fas fa-phone" :style="contactIconStyles"></i>
                                    <div class="contact-content" :style="contactContentStyles">
                                        <span class="contact-label" :style="contactLabelStyles">电话</span>
                                        <span class="contact-value" :style="contactValueStyles">{{ formData.personal.phone }}</span>
                                    </div>
                                </div>
                                <div v-if="formData.personal.wechat" class="contact-item" :style="contactItemStyles">
                                    <i class="contact-icon fab fa-weixin" :style="contactIconStyles"></i>
                                    <div class="contact-content" :style="contactContentStyles">
                                        <span class="contact-label" :style="contactLabelStyles">微信</span>
                                        <span class="contact-value" :style="contactValueStyles">{{ formData.personal.wechat }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 职业信息 -->
                        <div class="career-section" :style="careerSectionStyles">
                            <h3 class="subsection-title" :style="subsectionTitleStyles">职业信息</h3>
                            <div class="career-list" :style="careerListStyles">
                                <div v-if="formData.personal.jobExpectation" class="career-item" :style="careerItemStyles">
                                    <i class="career-icon fas fa-briefcase" :style="careerIconStyles"></i>
                                    <div class="career-content" :style="careerContentStyles">
                                        <span class="career-label" :style="careerLabelStyles">期望职位</span>
                                        <span class="career-value" :style="careerValueStyles">{{ formData.personal.jobExpectation }}</span>
                                    </div>
                                </div>
                                <div v-if="formData.personal.jobStatus" class="career-item" :style="careerItemStyles">
                                    <i class="career-icon fas fa-user-clock" :style="careerIconStyles"></i>
                                    <div class="career-content" :style="careerContentStyles">
                                        <span class="career-label" :style="careerLabelStyles">求职状态</span>
                                        <span class="career-value" :style="careerValueStyles">{{ formData.personal.jobStatus }}</span>
                                    </div>
                                </div>
                                <div v-if="formData.personal.address || formData.personal.base" class="career-item" :style="careerItemStyles">
                                    <i class="career-icon fas fa-map-marker-alt" :style="careerIconStyles"></i>
                                    <div class="career-content" :style="careerContentStyles">
                                        <span class="career-label" :style="careerLabelStyles">所在地</span>
                                        <span class="career-value" :style="careerValueStyles">
                                            {{ formData.personal.address }} {{ formData.personal.address && formData.personal.base ? '·' : '' }} {{ formData.personal.base }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 个人简介 -->
                    <div v-if="formData.personal.summary" class="summary-section" :style="summarySectionStyles">
                        <h3 class="subsection-title" :style="subsectionTitleStyles">个人简介</h3>
                        <p class="summary-content" :style="summaryContentStyles">{{ formData.personal.summary }}</p>
                    </div>

                    <!-- 社交链接 -->
                    <div v-if="hasSocialLinks" class="social-section" :style="socialSectionStyles">
                        <h3 class="subsection-title" :style="subsectionTitleStyles">社交链接</h3>
                        <div class="social-links" :style="socialLinksStyles">
                            <a v-if="formData.personal.website" :href="formData.personal.website" target="_blank" class="social-link" :style="socialLinkStyles">
                                <i class="fas fa-globe" :style="socialIconStyles"></i>
                                <span>个人网站</span>
                            </a>
                            <a v-if="formData.personal.linkedin" :href="formData.personal.linkedin" target="_blank" class="social-link" :style="socialLinkStyles">
                                <i class="fab fa-linkedin" :style="socialIconStyles"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a v-if="formData.personal.github" :href="formData.personal.github" target="_blank" class="social-link" :style="socialLinkStyles">
                                <i class="fab fa-github" :style="socialIconStyles"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </template>

            <!-- 工作经历 -->
            <template v-else-if="section.key === 'works'">
                <div v-for="(work, index) in formData.works" :key="index" class="item" :style="itemStyles">
                    <div class="item-header" :style="itemHeaderStyles">
                        <div class="item-main">
                            <h3 class="item-title" :style="itemTitleStyles">{{ work.position }}</h3>
                            <p class="item-subtitle" :style="itemSubtitleStyles">
                                {{ work.company }}
                                <span v-if="work.location" class="location"> · {{ work.location }}</span>
                            </p>
                        </div>
                        <span class="item-date" :style="itemDateStyles">
                            {{ work.startDate }} - {{ work.current ? '至今' : work.endDate }}
                        </span>
                    </div>

                    <p v-if="work.description" class="item-description" :style="itemDescriptionStyles">
                        {{ work.description }}
                    </p>

                    <ul v-if="work.achievements?.length" class="item-list">
                        <li v-for="(achievement, i) in work.achievements" :key="i" :style="listItemStyles">
                            <span class="bullet" :style="bulletStyles">{{ bulletChar }}</span>
                            {{ achievement }}
                        </li>
                    </ul>

                    <div v-if="work.technologies?.length" class="tech-tags">
                        <span v-for="tech in work.technologies" :key="tech" class="tech-tag" :style="tagStyles">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </template>

            <!-- 项目经历 -->
            <template v-else-if="section.key === 'projects'">
                <div v-for="(project, index) in formData.projects" :key="index" class="item" :style="itemStyles">
                    <div class="item-header" :style="itemHeaderStyles">
                        <div class="item-main">
                            <h3 class="item-title" :style="itemTitleStyles">
                                {{ project.name }}
                                <a v-if="project.url" :href="project.url" class="project-link" target="_blank">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </h3>
                            <p class="item-subtitle" :style="itemSubtitleStyles">{{ project.role }}</p>
                        </div>
                        <span class="item-date" :style="itemDateStyles">
                            {{ project.startDate }} - {{ project.endDate }}
                        </span>
                    </div>

                    <p v-if="project.description" class="item-description" :style="itemDescriptionStyles">
                        {{ project.description }}
                    </p>

                    <ul v-if="project.achievements?.length" class="item-list">
                        <li v-for="(achievement, i) in project.achievements" :key="i" :style="listItemStyles">
                            <span class="bullet" :style="bulletStyles">{{ bulletChar }}</span>
                            {{ achievement }}
                        </li>
                    </ul>

                    <div v-if="project.technologies?.length" class="tech-tags">
                        <span v-for="tech in project.technologies" :key="tech" class="tech-tag" :style="tagStyles">
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </template>

            <!-- 教育经历 -->
            <template v-else-if="section.key === 'educations'">
                <div v-for="(edu, index) in formData.educations" :key="index" class="item" :style="itemStyles">
                    <div class="item-header" :style="itemHeaderStyles">
                        <div class="item-main">
                            <h3 class="item-title" :style="itemTitleStyles">{{ edu.major }}</h3>
                            <p class="item-subtitle" :style="itemSubtitleStyles">
                                {{ edu.school }} · {{ getDegreeText(edu.degree) }}
                            </p>
                        </div>
                        <span class="item-date" :style="itemDateStyles">
                            {{ edu.startDate }} - {{ edu.endDate }}
                        </span>
                    </div>

                    <div v-if="edu.gpa || edu.honors?.length" class="edu-details">
                        <p v-if="edu.gpa" class="item-description" :style="itemDescriptionStyles">
                            <strong>GPA:</strong> {{ edu.gpa }}
                        </p>
                        <ul v-if="edu.honors?.length" class="item-list">
                            <li v-for="(honor, i) in edu.honors" :key="i" :style="listItemStyles">
                                <span class="bullet" :style="bulletStyles">{{ bulletChar }}</span>
                                {{ honor }}
                            </li>
                        </ul>
                    </div>
                </div>
            </template>

            <!-- 专业技能 -->
            <template v-else-if="section.key === 'skills'">
                <div class="skills-grid" :style="skillsGridStyles">
                    <div v-for="(skill, index) in formData.skills" :key="index" class="skill-item"
                        :style="skillItemStyles">
                        <div class="skill-header">
                            <span class="skill-name" :style="compact ? compactSkillNameStyles : {}">
                                {{ skill.name }}
                            </span>
                            <span v-if="showSkillLevel && template.layout.skill.levelStyle === 'text'"
                                class="skill-level-text" :style="skillLevelTextStyles">
                                {{ getSkillLevelText(skill.level) }}
                            </span>
                        </div>

                        <!-- 等级条 -->
                        <div v-if="showSkillLevel && template.layout.skill.levelStyle === 'bar'" class="skill-level">
                            <div class="skill-bar-bg" :style="skillBarBgStyles">
                                <div class="skill-bar-fill" :style="getSkillBarFillStyles(skill.level)"></div>
                            </div>
                        </div>

                        <!-- 等级点 -->
                        <div v-if="showSkillLevel && template.layout.skill.levelStyle === 'dots'" class="skill-dots">
                            <span v-for="dot in 5" :key="dot" class="dot"
                                :style="getDotStyles(dot, skill.level)"></span>
                        </div>
                    </div>
                </div>
            </template>

            <!-- 证书 -->
            <template v-else-if="section.key === 'certificates'">
                <div v-for="(cert, index) in formData.certificates" :key="index" class="item"
                    :style="compact ? compactItemStyles : itemStyles">
                    <div class="item-header" :style="itemHeaderStyles">
                        <div class="item-main">
                            <h3 class="item-title" :style="compact ? compactItemTitleStyles : itemTitleStyles">
                                {{ cert.name }}
                            </h3>
                            <p class="item-subtitle" :style="itemSubtitleStyles">{{ cert.issuer }}</p>
                        </div>
                        <span class="item-date" :style="itemDateStyles">{{ cert.date }}</span>
                    </div>
                    <p v-if="cert.credentialId" class="item-description" :style="itemDescriptionStyles">
                        证书编号: {{ cert.credentialId }}
                    </p>
                </div>
            </template>
            <!-- 荣誉 -->
            <template v-else-if="section.key === 'honors'">
                <div v-for="(honor, index) in formData.honors" :key="index" class="item"
                    :style="compact ? compactItemStyles : itemStyles">
                    <div class="item-header" :style="itemHeaderStyles">
                        <div class="item-main">
                            <h3 class="item-title" :style="compact ? compactItemTitleStyles : itemTitleStyles">
                                {{ honor.name }}
                            </h3>
                            <p class="item-subtitle" :style="itemSubtitleStyles">{{ honor.issuer }}</p>
                        </div>
                        <span class="item-date" :style="itemDateStyles">{{ honor.date }}</span>
                    </div>
                    <p v-if="honor.description" class="item-description" :style="itemDescriptionStyles">
                        荣誉等级: {{ honor.level }}
                    </p>
                </div>
            </template>

            <!-- 语言能力 -->
            <template v-else-if="section.key === 'languages'">
                <div class="languages-list" :style="compact ? compactLanguagesStyles : {}">
                    <div v-for="(lang, index) in formData.languages" :key="index" class="language-item"
                        :style="compact ? compactLanguageItemStyles : tagStyles">
                        <span class="lang-name">{{ lang.name }}</span>
                        <span class="lang-level">{{ getProficiencyText(lang.proficiency) }}</span>
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Template, ResumeData } from '~/types/template'
import type { CSSProperties } from 'vue'
import { title } from 'process'

interface Props {
    section: {
        key: string
        title: string
        icon: string
    }
    template: Template
    formData: ResumeData
    compact?: boolean
}

const props = defineProps<Props>()

const toCSSProperties = <T extends Record<string, any>>(styles: T): CSSProperties => {
    return styles as CSSProperties
}


// ==================== 章节样式 ====================
const sectionStyles = computed(() =>
    toCSSProperties({
        marginBottom: props.compact ? '1.5rem' : props.template.style.components.section.marginBottom
    })
)

const sectionTitleStyles = computed(() => {
    const baseColor = props.compact
        ? 'rgba(255,255,255,0.95)'
        : props.template.style.components.section.title.color

    return toCSSProperties({
        fontSize: props.compact
            ? props.template.style.global.fonts.size.heading
            : props.template.style.components.section.title.fontSize,
        fontWeight: props.template.style.components.section.title.fontWeight,
        color: baseColor,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        position: 'relative',
        paddingBottom: showSectionDivider.value ? '0.5rem' : '0',
        borderBottom: showSectionDivider.value && props.template.layout.section.divider.position === 'bottom'
            ? `${props.template.style.components.section.title.dividerWidth} ${props.template.layout.section.divider.style} ${getDividerColor.value}`
            : 'none'
    })
})

const sectionIconStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.section.title.iconSize,
        color: props.compact
            ? 'rgba(255,255,255,0.9)'
            : props.template.style.components.section.title.iconColor || props.template.style.global.colors.primary
    })
)

const getDividerColor = computed(() =>
    props.compact
        ? 'rgba(255,255,255,0.3)'
        : props.template.style.components.section.title.dividerColor || props.template.style.global.colors.primary
)

const sectionDividerStyles = computed(() =>
    toCSSProperties({
        position: 'absolute',
        left: props.template.layout.section.divider.position === 'left' ? '0' : 'auto',
        bottom: '0',
        width: props.template.layout.section.divider.position === 'left'
            ? props.template.style.components.section.title.dividerWidth
            : '100%',
        height: props.template.layout.section.divider.position === 'bottom'
            ? props.template.style.components.section.title.dividerWidth
            : '100%',
        backgroundColor: getDividerColor.value
    })
)

const showSectionDivider = computed(() =>
    props.template.layout.section.divider.enabled && props.template.layout.section.divider.style !== 'none'
)

const sectionContentStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.section.content.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.9)'
            : props.template.style.components.section.content.color,
        lineHeight: props.template.style.components.section.content.lineHeight
    })
)

// ==================== 列表项样式 ====================
const itemStyles = computed(() =>
    toCSSProperties({
        padding: props.template.style.components.item.padding,
        marginBottom: props.template.style.components.item.marginBottom,
        backgroundColor: props.template.style.components.item.background || 'transparent',
        border: props.template.style.components.item.border
            ? `${props.template.style.components.item.border.width} ${props.template.style.components.item.border.style} ${props.template.style.components.item.border.color}`
            : 'none',
        borderRadius: props.template.style.components.item.border?.radius || '0',
        transition: 'all 0.2s ease'
    })
)

const compactItemStyles = computed(() =>
    toCSSProperties({
        ...itemStyles.value,
        padding: '0.75rem 0',
        marginBottom: '1rem'
    })
)

const itemHeaderStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1rem',
        marginBottom: '0.5rem',
        flexDirection: props.template.layout.item.datePosition === 'below' ? 'column' : 'row'
    })
)

const itemTitleStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.title.fontSize,
        fontWeight: props.template.style.components.item.title.fontWeight,
        color: props.template.style.components.item.title.color,
        marginBottom: '0.125rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    })
)

const compactItemTitleStyles = computed(() =>
    toCSSProperties({
        ...itemTitleStyles.value,
        fontSize: props.template.style.global.fonts.size.body,
        color: 'rgba(255,255,255,0.95)'
    })
)

const itemSubtitleStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.subtitle.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.8)'
            : props.template.style.components.item.subtitle.color
    })
)

const itemDateStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.date.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.7)'
            : props.template.style.components.item.date.color,
        fontWeight: props.template.style.components.item.date.fontWeight,
        whiteSpace: 'nowrap'
    })
)

const itemDescriptionStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.description.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.85)'
            : props.template.style.components.item.description.color,
        lineHeight: props.template.style.components.item.description.lineHeight,
        marginBottom: '0.5rem'
    })
)

const listItemStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.description.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.85)'
            : props.template.style.components.item.description.color,
        marginBottom: '0.375rem',
        paddingLeft: '1.5rem',
        position: 'relative',
        lineHeight: '1.6'
    })
)

const bulletStyles = computed(() =>
    toCSSProperties({
        position: 'absolute',
        left: '0',
        color: props.compact
            ? 'rgba(255,255,255,0.6)'
            : props.template.layout.item.bullet.color || props.template.style.global.colors.primary,
        fontWeight: props.template.style.global.fonts.weight.bold
    })
)

const bulletChar = computed(() => {
    const style = props.template.layout.item.bullet.style
    const chars: Record<string, string> = {
        'disc': '•',
        'circle': '◦',
        'square': '▪',
        'dash': '–',
        'arrow': '→',
        'none': ''
    }
    return chars[style] || '•'
})

// ==================== 标签样式 ====================
const tagStyles = computed(() =>
    toCSSProperties({
        display: 'inline-block',
        padding: props.template.style.components.tag.padding,
        backgroundColor: props.compact
            ? 'rgba(255,255,255,0.2)'
            : props.template.style.components.tag.background,
        color: props.compact
            ? 'rgba(255,255,255,0.95)'
            : props.template.style.components.tag.color,
        borderRadius: props.template.style.components.tag.borderRadius,
        fontSize: props.template.style.components.tag.fontSize,
        fontWeight: props.template.style.components.tag.fontWeight,
        border: props.compact
            ? '1px solid rgba(255,255,255,0.3)'
            : props.template.style.components.tag.border || 'none',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        transition: 'all 0.2s ease'
    })
)

// ==================== 技能样式 ====================
const skillsGridStyles = computed(() => {
    const display = props.template.layout.skill.display

    return toCSSProperties({
        display: display === 'grid' ? 'grid' : 'flex',
        gridTemplateColumns: display === 'grid'
            ? `repeat(${props.compact ? 1 : props.template.layout.skill.columns}, 1fr)`
            : 'none',
        flexDirection: display === 'list' ? 'column' : 'row',
        flexWrap: display === 'tags' ? 'wrap' : 'nowrap',
        gap: props.template.style.components.skill.item.gap
    })
})

const skillItemStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.skill.item.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.9)'
            : props.template.style.components.skill.item.color,
        padding: props.compact ? '0.5rem 0' : '0.75rem',
        backgroundColor: props.compact ? 'transparent' : 'transparent'
    })
)

const compactSkillNameStyles = computed(() =>
    toCSSProperties({
        color: 'rgba(255,255,255,0.95)',
        fontWeight: 500
    })
)

const showSkillLevel = computed(() => props.template.layout.skill.showLevel)

const skillBarBgStyles = computed(() =>
    toCSSProperties({
        width: '100%',
        height: props.template.style.components.skill.levelBar.height,
        backgroundColor: props.compact
            ? 'rgba(255,255,255,0.2)'
            : props.template.style.components.skill.levelBar.background,
        borderRadius: props.template.style.components.skill.levelBar.borderRadius,
        overflow: 'hidden',
        marginTop: '0.375rem'
    })
)

const getSkillBarFillStyles = (level: string) =>
    toCSSProperties({
        width: getSkillLevelWidth(level),
        height: '100%',
        backgroundColor: props.compact
            ? 'rgba(255,255,255,0.9)'
            : props.template.style.components.skill.levelBar.fillColor,
        transition: 'width 0.5s ease',
        boxShadow: props.compact ? '0 0 8px rgba(255,255,255,0.3)' : 'none'
    })

const skillLevelTextStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.skill.levelText.fontSize,
        color: props.compact
            ? 'rgba(255,255,255,0.7)'
            : props.template.style.components.skill.levelText.color,
        fontWeight: props.template.style.components.skill.levelText.fontWeight
    })
)

const getDotStyles = (dotIndex: number, level: string) => {
    const levelMap: Record<string, number> = {
        'beginner': 1,
        'intermediate': 3,
        'advanced': 4,
        'expert': 5
    }
    const max = levelMap[level] ?? 0
    const filled = dotIndex <= max

    return toCSSProperties({
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: filled
            ? (props.compact ? 'rgba(255,255,255,0.9)' : props.template.style.global.colors.primary)
            : (props.compact ? 'rgba(255,255,255,0.2)' : props.template.style.global.colors.muted || '#e0e0e0'),
        marginRight: '4px',
        transition: 'all 0.3s ease'
    })
}

// ==================== 语言样式 ====================
const compactLanguagesStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    })
)

const compactLanguageItemStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        backgroundColor: 'transparent',
        marginRight: 0,
        marginBottom: 0,
        borderRadius: 0
    })
)

// ==================== 辅助函数 ====================
const getSkillLevelWidth = (level: string): string => {
    const widths: Record<string, string> = {
        'beginner': '25%',
        'intermediate': '50%',
        'advanced': '75%',
        'expert': '100%'
    }
    return widths[level] || '50%'
}

const getDegreeText = (degree: string) => {
    const degrees: Record<string, string> = {
        'high-school': '高中',
        'associate': '专科',
        'bachelor': '本科',
        'master': '硕士',
        'phd': '博士'
    }
    return degrees[degree] || degree
}

const getProficiencyText = (level: string) => {
    const levels: Record<string, string> = {
        'basic': '入门',
        'conversational': '日常',
        'professional': '流利',
        'native': '母语'
    }
    return levels[level] || level
}

const getSkillLevelText = (level: string) => {
    const levels: Record<string, string> = {
        'beginner': '入门',
        'intermediate': '中级',
        'advanced': '高级',
        'expert': '专家'
    }
    return levels[level] || level
}
// ========================



// ==================== 个人部分专用样式 ====================

// 容器样式
const personalContainerStyles = computed(() =>
    toCSSProperties({
        width: '100%',
        padding: props.template.style.components.item.padding,
        backgroundColor: props.template.style.components.item.background || 'transparent',
        border: props.template.style.components.item.border
            ? `${props.template.style.components.item.border.width} ${props.template.style.components.item.border.style} ${props.template.style.components.item.border.color}`
            : 'none',
        borderRadius: props.template.style.components.item.border?.radius || '0'
    })
)

// 姓名部分
const nameSectionStyles = computed(() =>
    toCSSProperties({
        width: '100%',
        textAlign: props.template.layout.header.align,
        marginBottom: props.template.style.components.item.marginBottom
    })
)

const fullNameStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.header.name.fontSize,
        fontWeight: props.template.style.components.header.name.fontWeight,
        color: props.compact 
            ? 'rgba(255,255,255,0.95)' 
            : props.template.style.components.header.name.color,
        letterSpacing: props.template.style.components.header.name.letterSpacing,
        textTransform: props.template.style.components.header.name.textTransform || 'none',
        margin: '0 0 0.5rem 0'
    })
)

const currentTitleStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.header.title.fontSize,
        fontWeight: props.template.style.components.header.title.fontWeight,
        color: props.compact 
            ? 'rgba(255,255,255,0.8)' 
            : props.template.style.components.header.title.color,
        margin: '0'
    })
)

// 网格布局
const personalGridStyles = computed(() =>
    toCSSProperties({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: props.template.style.global.spacing.item,
        marginBottom: props.template.style.components.item.marginBottom
    })
)

// 联系信息部分
const contactSectionStyles = computed(() =>
    toCSSProperties({
        ...itemStyles.value,
        marginBottom: '0'
    })
)

const contactListStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    })
)

const contactItemStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.5rem',
        borderRadius: props.template.style.global.borders.radius,
        transition: 'all 0.2s ease',
        backgroundColor: props.compact ? 'rgba(255,255,255,0.05)' : 'transparent'
    })
)

const contactIconStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.header.contact.iconSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.7)' 
            : props.template.style.global.colors.primary,
        width: '1.25rem',
        textAlign: 'center',
        flexShrink: 0
    })
)

const contactContentStyles = computed(() =>
    toCSSProperties({
        flex: 1,
        minWidth: 0
    })
)

const contactLabelStyles = computed(() =>
    toCSSProperties({
        display: 'block',
        fontSize: props.template.style.components.header.contact.fontSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.6)' 
            : props.template.style.global.colors.muted,
        marginBottom: '0.125rem'
    })
)

const contactValueStyles = computed(() =>
    toCSSProperties({
        display: 'block',
        fontSize: props.template.style.components.header.contact.fontSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.9)' 
            : props.template.style.components.header.contact.color,
        fontWeight: props.template.style.global.fonts.weight.medium
    })
)

// 职业信息部分
const careerSectionStyles = computed(() =>
    toCSSProperties({
        ...itemStyles.value,
        marginBottom: '0'
    })
)

const careerListStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    })
)

const careerItemStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.5rem',
        borderRadius: props.template.style.global.borders.radius,
        transition: 'all 0.2s ease',
        backgroundColor: props.compact ? 'rgba(255,255,255,0.05)' : 'transparent'
    })
)

const careerIconStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.header.contact.iconSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.7)' 
            : props.template.style.global.colors.primary,
        width: '1.25rem',
        textAlign: 'center',
        flexShrink: 0
    })
)

const careerContentStyles = computed(() =>
    toCSSProperties({
        flex: 1,
        minWidth: 0
    })
)

const careerLabelStyles = computed(() =>
    toCSSProperties({
        display: 'block',
        fontSize: props.template.style.components.header.contact.fontSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.6)' 
            : props.template.style.global.colors.muted,
        marginBottom: '0.125rem'
    })
)

const careerValueStyles = computed(() =>
    toCSSProperties({
        display: 'block',
        fontSize: props.template.style.components.header.contact.fontSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.9)' 
            : props.template.style.components.header.contact.color,
        fontWeight: props.template.style.global.fonts.weight.medium
    })
)

// 个人简介部分
const summarySectionStyles = computed(() =>
    toCSSProperties({
        ...itemStyles.value
    })
)

const summaryContentStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.description.fontSize,
        color: props.compact 
            ? 'rgba(255,255,255,0.85)' 
            : props.template.style.components.item.description.color,
        lineHeight: props.template.style.components.item.description.lineHeight,
        margin: '0'
    })
)

// 社交链接部分
const socialSectionStyles = computed(() =>
    toCSSProperties({
        ...itemStyles.value
    })
)

const socialLinksStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem'
    })
)

const socialLinkStyles = computed(() =>
    toCSSProperties({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        color: props.compact 
            ? 'rgba(255,255,255,0.9)' 
            : props.template.style.global.colors.primary,
        textDecoration: 'none',
        borderRadius: props.template.style.global.borders.radius,
        border: `1px solid ${props.compact ? 'rgba(255,255,255,0.3)' : props.template.style.global.colors.border || '#e0e0e0'}`,
        transition: 'all 0.2s ease',
        fontSize: props.template.style.components.header.contact.fontSize,
        backgroundColor: props.compact ? 'rgba(255,255,255,0.1)' : 'transparent'
    })
)

const socialIconStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.header.contact.iconSize
    })
)

// 小标题样式
const subsectionTitleStyles = computed(() =>
    toCSSProperties({
        fontSize: props.template.style.components.item.title.fontSize,
        fontWeight: props.template.style.components.item.title.fontWeight,
        color: props.compact 
            ? 'rgba(255,255,255,0.9)' 
            : props.template.style.components.item.title.color,
        margin: '0 0 1rem 0'
    })
)

// 检查是否有社交链接
const hasSocialLinks = computed(() => 
    props.formData.personal.website || props.formData.personal.linkedin || props.formData.personal.github
)

</script>

<style scoped>
.personal-container {
    width: 100%;
}

.name-section {
    width: 100%;
}

.full-name {
    margin: 0;
}

.current-title {
    margin: 0;
}

.personal-grid {
    width: 100%;
}

.contact-item:hover,
.career-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    opacity: 0.9;
}

.contact-content,
.career-content {
    flex: 1;
    min-width: 0;
}

@media (max-width: 768px) {
    .personal-grid {
        grid-template-columns: 1fr !important;
    }
    
    .social-links {
        justify-content: center;
    }
}
.personal-container {
    width: 100%;
}

.contact-item:hover,
.career-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.02);
}

.social-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.05);
}

.contact-content,
.career-content {
    flex: 1;
    min-width: 0;
}

@media (max-width: 768px) {
    .personal-grid {
        grid-template-columns: 1fr !important;
    }
    
    .social-links {
        justify-content: center;
    }
    
    .contact-item,
    .career-item {
        padding: 0.75rem;
    }
}
</style>