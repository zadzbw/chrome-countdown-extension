<script setup lang="ts">
import { storage } from 'webextension-polyfill'
import { useRouter } from 'vue-router'

const router = useRouter()

window.storage = storage
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-x-1 items-center">
      <IcBaselineCalendarMonth class="w-6 h-6" />
      <div class="fw-500 text-base">
        Countdowns
      </div>
    </div>
    <div class="flex gap-x-1">
      <IcBaselinePlus class="w-6 h-6" />
      <IcBaselineMoreHoriz class="w-6 h-6" @click="router.push('/setting')" />
    </div>
  </div>
  <CountDownList />
</template>
