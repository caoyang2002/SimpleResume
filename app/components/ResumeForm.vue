<template>
  <div class="container mx-auto p-4 max-w-5xl">
    <form @submit.prevent="onSubmit" class="bg-white rounded-xl shadow-lg p-8 space-y-8">
      <!-- 完成度指示器 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-semibold text-gray-700">简历完成度</span>
          </div>
          <span class="text-2xl font-bold text-blue-600">{{ completionRate }}%</span>
        </div>
        <div class="w-full bg-white rounded-full h-3 shadow-inner border border-blue-200">
          <div 
            class="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
            :style="{ width: completionRate + '%' }"
          ></div>
        </div>
        <p class="text-xs text-gray-600 mt-2">
          {{ completionRate >= 80 ? '✨ 简历完成度很高！' : completionRate >= 50 ? '👍 继续完善你的简历' : '💡 建议至少填写基本信息和一项工作或教育经历' }}
        </p>
      </div>

      <!-- 基本信息部分 -->
      <Section title="基本信息" :items="[formData]" :colors="sectionColors">
        <template #item="{ item }">
      <PersonalItem v-model="formData.personal" />

        </template>
      </Section>

      <!-- 工作经历部分 -->
      <Section title="工作经历" :items="formData.works || []" :colors="sectionColors">
        <template #item="{ item, index }">
          <WorkExperienceItem 
            :item="item" 
            :index="index"
            @remove="removeWork"
          />
        </template>
      </Section>
      
      <div class="text-center">
        <button 
          type="button" 
          @click="addWork" 
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg active:scale-95"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          添加工作经历
        </button>
      </div>

      <!-- 教育经历部分 -->
      <Section title="教育经历" :items="formData.educations || []" :colors="sectionColors">
        <template #item="{ item, index }">
          <EducationItem 
            :item="item" 
            :index="index"
            @remove="removeEducation"
          />
        </template>
      </Section>
      
      <div class="text-center">
        <button 
          type="button" 
          @click="addEducation" 
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg active:scale-95"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          添加教育经历
        </button>
      </div>

      <!-- 专业技能部分 -->
      <Section title="专业技能" :items="formData.skills || []" :colors="sectionColors">
        <template #item="{ item, index }">
          <SkillItem 
            :item="item" 
            :index="index"
            @remove="removeSkill"
          />
        </template>
      </Section>
      
      <div class="text-center">
        <button 
          type="button" 
          @click="addSkill" 
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg active:scale-95"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          添加技能
        </button>
      </div>

      <!-- 获得荣誉部分 -->
      <Section title="获得荣誉" :items="formData.honors || []" :colors="sectionColors">
        <template #item="{ item, index }">
          <HonorItem 
            :item="item" 
            :index="index"
            @remove="removeHonor"
          />
        </template>
      </Section>
      
      <div class="text-center">
        <button 
          type="button" 
          @click="addHonor" 
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg active:scale-95"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          添加荣誉奖项
        </button>
      </div>

      <!-- 提交按钮 -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-gray-200">
        <button 
          type="button"
          @click="resetForm"
          class="w-full sm:w-auto text-gray-700 hover:text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg transition-all font-semibold border-2 border-gray-300 hover:border-red-300"
        >
          <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          清空表单
        </button>
        <button 
          type="submit" 
          class="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 text-lg"
        >
          <svg class="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          保存简历
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useResume } from '~/composables/useResume'
import type { ResumeData } from '~/types/template'

// 导入子组件
import Section from './Section.vue'
import WorkExperienceItem from './WorkExperienceItem.vue'
import EducationItem from './EducationItem.vue'
import SkillItem from './SkillItem.vue'
import HonorItem from './HonorItem.vue'
import { ref } from 'vue'
import PersonalItem from '~/components/PersonalItem.vue'
// import type { ResumeData } from '~/types/template'


const props = defineProps<{ modelValue?: ResumeData }>()
const emit = defineEmits(['update:modelValue'])

const { 
  formData,
  addWork, 
  removeWork, 
  addEducation, 
  removeEducation,
  addSkill, 
  removeSkill,
  addHonor, 
  removeHonor,
  resetForm: clearForm,
  completionRate
} = useResume()

const sectionColors = {
  primary: '#2563eb',
  secondary: '#4b5563',
  bg: '#f9fafb'
}

// 初始化表单数据
if (props.modelValue) {
  Object.assign(formData.value, props.modelValue)
}

// 监听表单变化
watch(formData, (value) => {
  emit('update:modelValue', { ...value })
}, { deep: true })

function handlePhotoUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    
    if (!file.type.match('image.*')) {
      alert('请上传图片文件！')
      return
    }
    
    if (file.size > 2 * 1024 * 1024) {
      alert('图片大小不能超过2MB！')
      return
    }
    
    const reader = new FileReader()
    reader.onload = (e) => {
      formData.value.personal.avatar = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

function removePhoto() {
  formData.value.personal.avatar = ''
  const input = document.getElementById('photo-upload') as HTMLInputElement
  if (input) input.value = ''
}

function resetForm() {
  if (confirm('确定要清空所有信息吗？此操作不可恢复。')) {
    clearForm()
  }
}

function onSubmit() {
  const errors = []
  if (!formData.value.personal.firstName) errors.push('请输入姓')
  if (!formData.value.personal.lastName) errors.push('请输入名')
  if (!formData.value.personal.email) errors.push('请输入邮箱')
  if (!formData.value.personal.jobExpectation) errors.push('请输入求职期望')
  
  if (errors.length > 0) {
    alert('请完善以下信息：\n' + errors.join('\n'))
    return
  }
  
  emit('update:modelValue', { ...formData.value })
  alert('✅ 简历信息已保存！')
}
</script>