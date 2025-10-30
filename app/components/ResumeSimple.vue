<template>
  <div class="max-w-4xl mx-auto">
    <!-- 头部部分 -->
    <div class="mb-6 pb-4 border-b-4" :style="{ borderColor: colors.primary }">
      <div class="flex items items-start gap-6">
      
        <div class="flex-1">
          <h1 
            class="text-4xl font-bold mb-2"
            :style="{ color: colors.primary }"
          >
            {{ formData.lastName }}{{ formData.firstName }}
          </h1>
          <p class="text-xl mb-3" :style="{ color: colors.secondary }">
            {{ formData.jobExpectation || '求职者' }}
          </p>
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm" :style="{ color: colors.secondary }">
            <span v-if="formData.email">📧 {{ formData.email || 'my123email@gmail.com'}}</span>
            <span v-if="formData.phone">📱 {{ formData.phone }}</span>
            <span v-if="formData.wechat">💬 {{ formData.wechat }}</span>
            <span v-if="formData.website">🌐 {{ formData.website }}</span>
          </div>
          <p class="text-sm mb-3" :style="{ color: colors.secondary }">
            📍{{ formData.base || '中国大陆' }}
          </p>
        </div>
  <img 
          v-if="formData.photoUrl"
          :src="formData.photoUrl"
          alt="照片"
          class="w-24 h-24 rounded-full object-cover border-4"
          :style="{ borderColor: colors.primary }"
        />
      </div>
    </div>

    <!-- 基本信息 -->
    <div v-if="formData.birthDate || formData.gender || formData.jobStatus" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        基本信息
      </h2>
      <div class="grid grid-cols-2 gap-x-6 gap-y-2" :style="{ color: colors.secondary }">
        <div v-if="formData.birthDate">
          <span class="font-semibold">出生年月：</span>{{ formData.birthDate }}
        </div>
        <div v-if="formData.gender">
          <span class="font-semibold">性别：</span>{{ formData.gender }}
        </div>
        <div v-if="formData.jobStatus" class="col-span-2">
          <span class="font-semibold">求职状态：</span>{{ formData.jobStatus }}
        </div>
      </div>
    </div>

    <!-- 工作经历 -->
    <div v-if="formData.works?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        工作经历
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.works" :key="index" class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h4 class="font-bold text-lg" :style="{ color: colors.primary }">
                {{ item.position }}
              </h4>
              <p class="text-base" :style="{ color: colors.secondary }">{{ item.company }}</p>
            </div>
            <span class="text-sm whitespace-nowrap" :style="{ color: colors.secondary }">
              {{ item.startDate }} - {{ item.endDate || '至今' }}
            </span>
          </div>
          <p class="text-sm leading-relaxed" :style="{ color: colors.secondary }">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 项目经历 -->
    <div v-if="formData.projects?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        项目经历
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.projects" :key="index" class="mb-4">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h4 class="font-bold text-lg" :style="{ color: colors.primary }">
                {{ item.name }}
              </h4>
              <p class="text-sm" :style="{ color: colors.secondary }">{{ item.role }}</p>
            </div>
            <span class="text-sm whitespace-nowrap" :style="{ color: colors.secondary }">
              {{ item.startDate }} - {{ item.endDate || '至今' }}
            </span>
          </div>
          <p class="text-sm leading-relaxed" :style="{ color: colors.secondary }">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- 教育经历 -->
    <div v-if="formData.educations?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        教育经历
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.educations" :key="index" class="mb-3">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="font-bold" :style="{ color: colors.primary }">
                {{ item.school }}
              </h4>
              <p class="text-sm" :style="{ color: colors.secondary }">
                {{ item.major }} · {{ item.degree }}
              </p>
            </div>
            <span class="text-sm" :style="{ color: colors.secondary }">
              {{ item.startDate }} - {{ item.endDate }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 专业技能 -->
    <div v-if="formData.skills?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        专业技能
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.skills" :key="index" class="mb-2">
          <span class="font-semibold" :style="{ color: colors.primary }">
            {{ item.category }}：
          </span>
          <span :style="{ color: colors.secondary }">
            {{ item.items }}
            <span v-if="item.level" class="text-sm">({{ item.level }})</span>
          </span>
        </div>
      </div>
    </div>

    <!-- 所获荣誉 -->
    <div v-if="formData.honors?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        所获荣誉
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.honors" :key="index" class="mb-2">
          <div class="flex justify-between">
            <span class="font-semibold" :style="{ color: colors.primary }">
              {{ item.title }}
            </span>
            <span class="text-sm" :style="{ color: colors.secondary }">
              {{ item.date }}
            </span>
          </div>
          <p class="text-sm" :style="{ color: colors.secondary }">
            {{ item.issuer }}
            <span v-if="item.description"> - {{ item.description }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- 资格证书 -->
    <div v-if="formData.certificates?.length" class="mb-6">
      <h2 
        class="text-2xl font-bold mb-3 pb-2 border-b-2"
        :style="{ color: colors.primary, borderColor: colors.primary }"
      >
        资格证书
      </h2>
      <div class="pl-4">
        <div v-for="(item, index) in formData.certificates" :key="index" class="mb-2">
          <div class="flex justify-between">
            <span class="font-semibold" :style="{ color: colors.primary }">
              {{ item.name }}
            </span>
            <span class="text-sm" :style="{ color: colors.secondary }">
              {{ item.date }}
            </span>
          </div>
          <p class="text-sm" :style="{ color: colors.secondary }">
            {{ item.issuer }}
            <span v-if="item.number"> · 证书编号：{{ item.number }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Provide default color palette so the template can render even when parent
// doesn't pass a `colors` prop.
const props = withDefaults(defineProps<{
  formData: any
  colors?: { primary: string; secondary: string; bg: string }
}>(), ( {
  colors: {
    primary: '#1f2937', // slate-800
    secondary: '#6b7280', // gray-500
    bg: '#ffffff'
  }
} as any))
</script>