<template>
  <div class="space-y-6 bg-white p-6 rounded-lg shadow">
    <div>
      <h2 class="text-xl font-semibold mb-4">选择您的身份</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button
          v-for="option in identityOptions"
          :key="option.value"
          @click="selectIdentity(option.value)"
          class="p-4 rounded-lg border-2 transition-all"
          :class="identity === option.value ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'"
        >
          <h3 class="font-medium text-lg">{{ option.label }}</h3>
          <p class="text-gray-600 text-sm mt-1">{{ option.description }}</p>
        </button>
      </div>
    </div>

    <div v-if="identity">
      <h2 class="text-xl font-semibold mb-4">选择您的行业</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button
          v-for="option in industryOptions[identity as Identity] || []"
          :key="option.value"
          @click="selectIndustry(option.value)"
          class="p-4 rounded-lg border-2 transition-all"
          :class="industry === option.value ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'"
        >
          <h3 class="font-medium text-lg">{{ option.label }}</h3>
          <p class="text-gray-600 text-sm mt-1">{{ option.description }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Identity = 'student' | 'fresh' | 'experienced';

const props = defineProps<{
  identity: Identity | '';
  industry: string;
}>()

const emit = defineEmits<{
  'update:identity': [value: Identity];
  'update:industry': [value: string];
}>()

const identityOptions = [
  {
    value: 'student',
    label: '在校学生',
    description: '正在就读或即将毕业的学生'
  },
  {
    value: 'fresh',
    label: '应届生',
    description: '刚毕业或即将毕业的学生'
  },
  {
    value: 'experienced',
    label: '职场人士',
    description: '已有工作经验的求职者'
  }
] as const

const industryOptions: Record<Identity, Array<{ value: string; label: string; description: string }>> = {
  student: [
    {
      value: 'tech',
      label: '计算机/IT',
      description: '软件开发、人工智能、数据分析等'
    },
    {
      value: 'finance',
      label: '金融/经济',
      description: '银行、证券、投资、会计等'
    },
    {
      value: 'design',
      label: '设计/创意',
      description: 'UI设计、平面设计、产品设计等'
    }
  ],
  fresh: [
    {
      value: 'tech',
      label: '互联网/科技',
      description: '软件开发、算法研究、产品运营等'
    },
    {
      value: 'finance',
      label: '金融/投资',
      description: '投资分析、风险控制、财务管理等'
    },
    {
      value: 'consulting',
      label: '咨询/管理',
      description: '管理咨询、战略规划、市场研究等'
    }
  ],
  experienced: [
    {
      value: 'tech',
      label: '科技/研发',
      description: '技术架构、研发管理、技术专家等'
    },
    {
      value: 'product',
      label: '产品/运营',
      description: '产品管理、业务运营、市场营销等'
    },
    {
      value: 'management',
      label: '管理/咨询',
      description: '项目管理、团队管理、战略咨询等'
    }
  ]
}

const selectIdentity = (value: Identity) => {
  emit('update:identity', value)
  emit('update:industry', '')
}

const selectIndustry = (value: string) => {
  emit('update:industry', value)
}
</script>
