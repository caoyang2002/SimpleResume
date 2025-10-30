<template>
  <div class="space-y-4">
    <!-- 头部：荣誉名称 + 删除按钮 -->
    <div class="flex justify-between items-start gap-4">
      <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            荣誉名称 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.name" 
            type="text" 
            placeholder="例如：年度最佳员工" 
            class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required 
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            颁发机构 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="item.issuer" 
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
        title="删除这项荣誉"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>

    <!-- 时间和级别 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          获得时间 <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="item.date" 
          type="month" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          required 
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">荣誉级别</label>
        <select 
          v-model="item.level" 
          class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">请选择</option>
          <option value="国际级">国际级</option>
          <option value="国家级">国家级</option>
          <option value="省级">省级</option>
          <option value="市级">市级</option>
          <option value="公司级">公司级</option>
          <option value="部门级">部门级</option>
          <option value="团队级">团队级</option>
        </select>
      </div>
    </div>

    <!-- 描述 -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">荣誉描述</label>
      <textarea 
        v-model="item.description" 
        rows="2" 
        placeholder="简要描述获得该荣誉的原因或成就..." 
        class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
      ></textarea>
    </div>

    <!-- 荣誉级别标签（如果已选择） -->
    <div v-if="item.level" class="flex items-center gap-2">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border border-orange-200">
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {{ item.level }}荣誉
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Honor } from '~/types/template'

interface Props {
  item: Honor
  index: number
}

defineProps<Props>()
defineEmits(['remove'])
</script>