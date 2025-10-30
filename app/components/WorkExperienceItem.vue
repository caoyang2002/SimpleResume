<template>
  <div class="space-y-4">
    <!-- 头部：公司和职位 + 删除按钮 -->
    <div class="flex justify-between items-start gap-4">
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            职位 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.position" 
            type="text" 
            placeholder="例如：前端开发工程师" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            公司 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.company" 
            type="text" 
            placeholder="例如：某科技公司" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
      </div>

      <button 
        type="button"
        @click="$emit('remove', index)"
        class="flex-shrink-0 mt-7 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2 transition-all"
        title="删除这项工作经历"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- 时间和地点 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          开始时间 <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="item.startDate" 
          type="month" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required 
        />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          结束时间
        </label>
        <div class="flex items-center gap-2">
          <input 
            v-model="item.endDate" 
            type="month" 
            :disabled="item.current"
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">工作地点</label>
        <input 
          v-model="item.location" 
          type="text" 
          placeholder="例如：北京" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <!-- 至今复选框 -->
    <div class="flex items-center">
      <input 
        v-model="item.current" 
        type="checkbox" 
        :id="`current-${index}`"
        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
      />
      <label :for="`current-${index}`" class="ml-2 text-sm text-gray-700 cursor-pointer select-none">
        我目前在职
      </label>
    </div>

    <!-- 工作描述 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">工作描述</label>
      <textarea 
        v-model="item.description" 
        rows="2" 
        placeholder="简要描述你的工作职责和内容..." 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
      ></textarea>
    </div>

    <!-- 工作成就 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">工作成就（每行一条）</label>
      <textarea 
        :value="achievementsText"
        @input="updateAchievements"
        rows="4" 
        placeholder="例如：&#10;- 主导重构项目，将首屏加载时间优化至1.2s&#10;- 建立组件库，提高团队开发效率30%&#10;- 指导5名初级工程师进行技术培训" 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-mono text-sm"
      ></textarea>
      <p class="text-xs text-gray-500 mt-1">💡 提示：每行一条成就，以 "- " 开头会自动转为列表格式</p>
    </div>

    <!-- 技术栈 -->
   <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">使用技术</label>
      
      <!-- 技术栈标签显示 -->
      <div v-if="item.technologies && item.technologies.length > 0" class="flex flex-wrap gap-2 mb-2">
        <span 
          v-for="tech in item.technologies" 
          :key="tech"
          class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
        >
          {{ tech }}
          <button 
            type="button"
            @click="removeTechnology(tech)"
            class="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      </div>
      
      <!-- 输入框 - 使用单独的输入状态 -->
      <div class="flex gap-2">
        <input 
          v-model="techInput" 
          type="text" 
          placeholder="输入技术后按回车或逗号添加"
          @keydown.enter="addTechnology"
          @keydown.188="addTechnology"
          @blur="addTechnology"
          class="border-2 border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button 
          type="button"
          @click="addTechnology"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          添加
        </button>
      </div>
      <p class="text-xs text-gray-500 mt-1">💡 提示：输入技术后按回车、逗号或点击添加按钮</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { WorkExperience } from '~/types/template'

interface Props {
  item: WorkExperience
  index: number
}

const props = defineProps<Props>()
const emit = defineEmits(['remove'])
const techInput = ref('')

// 成就列表转文本
const achievementsText = computed(() => {
  if (!props.item.achievements || props.item.achievements.length === 0) return ''
  return props.item.achievements.map(a => `- ${a}`).join('\n')
})

// 更新成就列表
const updateAchievements = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[-•]\s*/, ''))
  
  props.item.achievements = lines
}




// 技术栈转文本（用于显示已添加的技术）
const technologiesText = computed(() => {
  if (!props.item.technologies || props.item.technologies.length === 0) return ''
  return props.item.technologies.join(', ')
})

// 添加技术
const addTechnology = () => {
  if (techInput.value.trim()) {
    if (!props.item.technologies) {
      props.item.technologies = []
    }
    
    // 按逗号分割并添加多个技术
    const newTechs = techInput.value.split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0)
    
    newTechs.forEach(tech => {
      if (!props.item.technologies!.includes(tech)) {
        props.item.technologies!.push(tech)
      }
    })
    
    techInput.value = '' // 清空输入框
  }

}
//

// // 技术栈转文本
// const technologiesText = computed(() => {
//   if (!props.item.technologies || props.item.technologies.length === 0) return ''
//   return props.item.technologies.join(', ')

// })

// // 更新技术栈
// const updateTechnologies = (event: Event) => {
//   const text = (event.target as HTMLInputElement).value
//   const techs = text.split(',')
//     .map(t => t.trim())
//     .filter(t => t.length > 0)
  
//   props.item.technologies = techs
// }

// 移除单个技术
const removeTechnology = (tech: string) => {
  if (props.item.technologies) {
    const index = props.item.technologies.indexOf(tech)
    if (index > -1) {
      props.item.technologies.splice(index, 1)
    }
  }
}
</script>