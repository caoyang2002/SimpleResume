<template>
  <div class="space-y-4">
    <!-- 头部：学校和专业 + 删除按钮 -->
    <div class="flex justify-between items-start gap-4">
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            学校 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.school" 
            type="text" 
            placeholder="例如：清华大学" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            专业 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.major" 
            type="text" 
            placeholder="例如：计算机科学与技术" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
      </div>

      <button 
        type="button"
        @click="$emit('remove', index)"
        class="flex-shrink-0 mt-7 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2 transition-all"
        title="删除这项教育经历"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- 学历和时间 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          学历 <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="item.degree" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required
        >
          <option value="">请选择</option>
          <option value="high-school">高中</option>
          <option value="associate">专科</option>
          <option value="bachelor">本科</option>
          <option value="master">硕士</option>
          <option value="phd">博士</option>
        </select>
      </div>

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
          结束时间 <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="item.endDate" 
          type="month" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required 
        />
      </div>
    </div>

    <!-- GPA -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">GPA / 成绩</label>
        <input 
          v-model="item.gpa" 
          type="text" 
          placeholder="例如：3.8/4.0" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
    </div>

    <!-- 荣誉奖项 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">荣誉奖项（每行一条）</label>
      <textarea 
        :value="honorsText"
        @input="updateHonors"
        rows="3" 
        placeholder="例如：&#10;- 优秀毕业生&#10;- 国家奖学金&#10;- ACM程序设计竞赛二等奖" 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-mono text-sm"
      ></textarea>
    </div>

    <!-- 主要课程 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">主要课程（每行一条）</label>
      <textarea 
        :value="coursesText"
        @input="updateCourses"
        rows="2" 
        placeholder="例如：&#10;- 数据结构与算法&#10;- 操作系统&#10;- 计算机网络" 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-mono text-sm"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Education } from '~/types/template'

interface Props {
  item: Education
  index: number
}

const props = defineProps<Props>()
defineEmits(['remove'])

// 荣誉转文本
const honorsText = computed(() => {
  if (!props.item.honors || props.item.honors.length === 0) return ''
  return props.item.honors.map(h => `- ${h}`).join('\n')
})

// 更新荣誉
const updateHonors = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[-•]\s*/, ''))
  
  props.item.honors = lines
}

// 课程转文本
const coursesText = computed(() => {
  if (!props.item.courses || props.item.courses.length === 0) return ''
  return props.item.courses.map(c => `- ${c}`).join('\n')
})

// 更新课程
const updateCourses = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value
  const lines = text.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.replace(/^[-•]\s*/, ''))
  
  props.item.courses = lines
}
</script>