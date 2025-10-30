<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- 照片选择区域 -->
    <div class="lg:col-span-1 flex flex-col items-center justify-start">
      <div class="relative mb-4 group">
        <div class="w-48 h-48 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden border-4 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:border-blue-600">
          <template v-if="modelValue.avatar">
            <img :src="modelValue.avatar" alt="个人照片" class="w-full h-full object-cover">
            <!-- 悬停时显示更换提示 -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                点击更换
              </span>
            </div>
          </template>
          <template v-else>
            <div class="text-center">
              <svg class="w-24 h-24 text-gray-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <p class="text-xs text-gray-500">点击上传</p>
            </div>
          </template>
        </div>
        <input 
          type="file" 
          :id="uploadId" 
          accept="image/jpeg,image/png,image/jpg,image/webp" 
          class="hidden"
          @change="handlePhotoUpload"
          ref="fileInput"
        >
        <label 
          :for="uploadId"
          class="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
          title="上传照片"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </label>
      </div>
      
      <p class="text-sm text-gray-600 text-center mb-3 px-4">
        <span class="font-medium">上传专业照片</span><br>
        <span class="text-xs text-gray-500">
          支持 JPG、PNG、WebP<br>
          建议 400×400 像素，≤2MB
        </span>
      </p>
      
      <button 
        type="button" 
        v-if="modelValue.avatar"
        @click="removePhoto"
        class="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 font-medium px-4 py-2 rounded-lg transition-all border border-transparent hover:border-red-200"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        移除照片
      </button>
    </div>
    
    <!-- 个人信息表单 -->
    <div class="lg:col-span-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- 姓氏 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            姓 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="modelValue.firstName" 
            type="text" 
            placeholder="张" 
            maxlength="20"
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required 
          />
        </div>

        <!-- 名字 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            名 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="modelValue.lastName" 
            type="text" 
            placeholder="三" 
            maxlength="20"
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required 
          />
        </div>
        
        <!-- 邮箱 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            邮箱 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="modelValue.email" 
            type="email" 
            placeholder="zhangsan@example.com" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required 
          />
        </div>
        
        <!-- 电话 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            电话
          </label>
          <input 
            v-model="modelValue.phone" 
            type="tel" 
            placeholder="138-0000-0000" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- 微信 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-5.523 3.024-7.387C11.82 8.145 10.462 7.5 8.946 7.5c-.85 0-1.662.18-2.402.506a.7.7 0 01-.477.053L4.57 7.56a.164.164 0 00-.084-.027.163.163 0 00-.145.147c0 .036.015.072.024.106l.195.738a.295.295 0 01-.106.333C2.634 9.854 1.715 11.055 1.715 12.46c0 2.02 1.88 3.708 4.43 4.046-.277-.487-.443-1.053-.443-1.661 0-3.641 3.503-6.595 7.826-6.595 4.323 0 7.826 2.954 7.826 6.595 0 3.641-3.503 6.595-7.826 6.595a9.185 9.185 0 01-2.387-.31.7.7 0 00-.477.053l-1.497.499a.163.163 0 01-.084.027.163.163 0 01-.145-.147c0-.036.015-.072.024-.106l.195-.738a.295.295 0 00-.106-.333c-1.82-.997-2.739-2.198-2.739-3.603 0-1.405.919-2.606 2.739-3.603z"/>
            </svg>
            微信
          </label>
          <input 
            v-model="modelValue.wechat" 
            type="text" 
            placeholder="wechat_id" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- 个人主页 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
            </svg>
            个人主页
          </label>
          <input 
            v-model="modelValue.website" 
            type="url" 
            placeholder="https://example.com" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- GitHub -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </label>
          <input 
            v-model="modelValue.github" 
            type="text" 
            placeholder="github.com/username" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- LinkedIn -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </label>
          <input 
            v-model="modelValue.linkedin" 
            type="text" 
            placeholder="linkedin.com/in/username" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- 求职期望 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            求职期望 <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="modelValue.jobExpectation" 
            type="text" 
            placeholder="例如：前端开发工程师" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
            required
          />
        </div>
        
        <!-- 所在地 -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            所在地
          </label>
          <input 
            v-model="modelValue.address" 
            type="text" 
            placeholder="例如：北京市朝阳区" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
          />
        </div>
        
        <!-- 个人简介 -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
            </svg>
            个人简介
            <span class="text-xs text-gray-500 font-normal ml-auto">
              {{ summaryLength }}/500 字
            </span>
          </label>
          <textarea 
            v-model="modelValue.summary" 
            rows="4" 
            maxlength="500"
            placeholder="简要介绍您的专业背景、核心技能和职业目标...&#10;&#10;例如：5年前端开发经验，精通Vue、React等主流框架。擅长性能优化和工程化建设，有大型项目架构经验。" 
            class="border-2 border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 resize-none"
          ></textarea>
          <p class="text-xs text-gray-500 mt-1">💡 提示：突出你的核心竞争力和职业亮点</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { PersonalInfo } from '~/types/person'

interface Props {
  modelValue: PersonalInfo
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const fileInput = ref<HTMLInputElement | null>(null)
const uploadId = `photo-upload-${Math.random().toString(36).substr(2, 9)}`

// 计算简介字数
const summaryLength = computed(() => {
  return props.modelValue.summary?.length || 0
})

function handlePhotoUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    
    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert('❌ 请上传 JPG、PNG 或 WebP 格式的图片！')
      return
    }
    
    // 验证文件大小
    if (file.size > 2 * 1024 * 1024) {
      alert('❌ 图片大小不能超过 2MB！\n当前大小：' + (file.size / 1024 / 1024).toFixed(2) + 'MB')
      return
    }
    
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      // 创建临时图片对象检查尺寸
      const img = new Image()
      img.onload = () => {
        if (img.width < 200 || img.height < 200) {
          alert('⚠️ 图片尺寸过小！建议使用至少 400×400 像素的图片以获得更好的显示效果。')
        }
        // 更新头像
        emit('update:modelValue', {
          ...props.modelValue,
          avatar: result
        })
      }
      img.src = result
    }
    reader.onerror = () => {
      alert('❌ 图片读取失败，请重试！')
    }
    reader.readAsDataURL(file)
  }
}

function removePhoto() {
  emit('update:modelValue', {
    ...props.modelValue,
    avatar: ''
  })
  // 清空文件输入
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>