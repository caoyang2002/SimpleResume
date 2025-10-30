<!-- Section for form -->
<template>
  <div class="mb-8">
    <div class="flex items-center justify-between mb-4 pb-3 border-b-2" :style="{ borderColor: colors.primary }">
      <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <div class="w-2 h-8 rounded" :style="{ backgroundColor: colors.primary }"></div>
        {{ title }}
        <span v-if="items.length > 0" class="text-sm font-normal text-gray-500 ml-2">
          ({{ items.length }} 项)
        </span>
      </h2>
    </div>

    <div v-if="items.length === 0" class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
      <div class="text-gray-400 mb-2">
        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      </div>
      <p class="text-gray-600">暂无{{ title }}信息</p>
      <p class="text-sm text-gray-500 mt-1">点击下方按钮开始添加</p>
    </div>

    <div v-else class="space-y-4">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
      >
        <slot name="item" :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  items: any[]
  colors: {
    primary: string
    secondary: string
    bg: string
  }
}

defineProps<Props>()
</script>