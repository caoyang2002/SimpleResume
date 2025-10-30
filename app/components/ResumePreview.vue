<template>
  <div>
    <component :is="templateComponent" :formData="formData" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ResumeSimple from './ResumeSimple.vue'

const props = defineProps<{ formData: any, template: string }>()

const templateComponent = computed(() => {
return ResumeSimple
})
</script>
