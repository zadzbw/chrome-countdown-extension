<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-x-1 items-center">
      <IcBaselineKeyboardBackspace class="w-6 h-6" @click="router.back()" />
      <div class="fw-500 text-base">
        Settings
      </div>
    </div>
  </div>
</template>
