<script setup lang="ts">
import type { CountDown } from '~/storage'

const { date } = defineProps<CountDown>()

function calcRemainingDays(date: number) {
  const now = new Date()
  const target = new Date(date)
  const diff = target.getTime() - now.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
</script>

<template>
  <div class="count-down-item">
    <div class="text-base fw-500">
      {{ calcRemainingDays(date) }}d
    </div>
    <div class="text-sm">
      {{ name }}
    </div>
  </div>
</template>
