<template>
  <div class="space-y-4">
    <!-- 头部：项目名称 + 删除按钮 -->
    <div class="flex justify-between items-start gap-4">
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            项目名称 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.name" 
            type="text" 
            placeholder="例如：电商平台系统" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            担任角色 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.role" 
            type="text" 
            placeholder="例如：前端负责人" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
      </div>

      <button 
        type="button"
        @click="$emit('remove', index)"
        class="flex-shrink-0 mt-7 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2 transition-all"
        title="删除这个项目"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- 时间和链接 -->
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
        <label class="block text-sm font-medium text-gray-700 mb-1">结束时间</label>
        <input 
          v-model="item.endDate" 
          type="month" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">项目链接</label>
        <input 
          v-model="item.url" 
          type="url" 
          placeholder="https://..." 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <!-- 项目描述 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">项目描述</label>
      <textarea 
        v-model="item.description" 
        rows="2" 
        placeholder="简要描述项目背景、目标和你的职责..." 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
      ></textarea>
    </div>

    <!-- 技术栈 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">技术栈</label>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="(tech, techIndex) in item.technologies" 
            :key="techIndex"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200"
          >
            {{ tech }}
            <button 
              type="button"
              @click="removeTechnology(techIndex)"
              class="ml-2 hover:text-blue-900"
            >
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </span>
        </div>
        <div class="flex gap-2">
          <input 
            v-model="newTechnology"
            type="text" 
            placeholder="输入技术名称后按回车添加" 
            @keyup.enter="addTechnology"
            class="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <button 
            type="button"
            @click="addTechnology"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            添加
          </button>
        </div>
      </div>
    </div>

    <!-- 项目成果 -->
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectExperience } from '~/types/template'

interface Props {
  item: ProjectExperience & {
    achievements: string[]
  }
  index: number
}

const props = defineProps<Props>()
defineEmits(['remove'])

const newTechnology = ref('')

const addTechnology = () => {
  if (newTechnology.value.trim()) {
    if (!props.item.technologies) {
      props.item.technologies = []
    }
    props.item.technologies.push(newTechnology.value.trim())
    newTechnology.value = ''
  }
}

const removeTechnology = (index: number) => {
  if (props.item.technologies) {
    props.item.technologies.splice(index, 1)
  }
}

const addAchievement = () => {
  if (!props.item.achievements) {
    props.item.achievements = []
  }
  props.item.achievements.push('')
}

const removeAchievement = (index: number) => {
  if (props.item.achievements) {
    props.item.achievements.splice(index, 1)
  }
}
// 更新成就列表
const updateAchievements = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[-•]\s*/, ''))
  
  props.item.achievements = lines
}
// 成就列表转文本
const achievementsText = computed(() => {
  if (!props.item.achievements || props.item.achievements.length === 0) return ''
  return props.item.achievements.map(a => `- ${a}`).join('\n')
})
</script>