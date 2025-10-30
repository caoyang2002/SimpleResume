<template>
  <div class="flex items-start gap-4">
    <!-- 技能信息 -->
    <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          技能名称 <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="item.name" 
          type="text" 
          placeholder="例如：Vue.js" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required 
        />
      </div>
      
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          熟练程度 <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="item.level" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        >
          <option value="beginner">入门</option>
          <option value="intermediate">中级</option>
          <option value="advanced">高级</option>
          <option value="expert">专家</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">使用年限</label>
        <input 
          v-model.number="item.years" 
          type="number" 
          min="0"
          max="50"
          step="0.5"
          placeholder="例如：3" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <!-- 删除按钮 -->
    <button 
      type="button"
      @click="$emit('remove', index)"
      class="flex-shrink-0 mt-7 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2 transition-all"
      title="删除这项技能"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>

  <!-- 技能等级可视化 -->
  <div class="mt-3 flex items-center gap-3">
    <span class="text-sm text-gray-600 min-w-[60px]">等级:</span>
    <div class="flex-1 flex items-center gap-2">
      <div 
        v-for="level in 4" 
        :key="level"
        class="flex-1 h-2 rounded-full transition-all duration-300"
        :class="[
          getLevelIndex(item.level) >= level 
            ? 'bg-blue-500 shadow-sm' 
            : 'bg-gray-200'
        ]"
      ></div>
      <span class="text-sm font-medium text-gray-700 min-w-[50px]">
        {{ getLevelText(item.level) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/types/template'

interface Props {
  item: Skill
  index: number
}

defineProps<Props>()
defineEmits(['remove'])

const getLevelIndex = (level: string): number => {
  const levelMap: Record<string, number> = {
    'beginner': 1,
    'intermediate': 2,
    'advanced': 3,
    'expert': 4
  }
  return levelMap[level] || 2
}

const getLevelText = (level: string): string => {
  const textMap: Record<string, string> = {
    'beginner': '入门',
    'intermediate': '中级',
    'advanced': '高级',
    'expert': '专家'
  }
  return textMap[level] || '中级'
}
</script>