<script setup lang="ts">
import dayjs from 'dayjs'
import type { CountDown } from '~/storage'

const { date } = defineProps<CountDown>()

const remainingDays = computed(() => {
  const now = dayjs(dayjs().format('YYYY-MM-DD'))
  const target = dayjs(date)
  return target.diff(now, 'day')
})
</script>

<template>
  <div class="count-down-item">
    <div class="flex flex-col gap-y-1">
      <div class="text-lg line-height-none">
        <span class="fw-500">{{ remainingDays }}</span>
        <span class="fw-400">d</span>
      </div>
      <div class="text-sm line-height-none">
        {{ name }}
      </div>
    </div>
  </div>
</template>
