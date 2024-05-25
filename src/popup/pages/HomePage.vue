<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <Header class="justify-between">
    <div class="flex gap-x-1 items-center">
      <IcBaselineCalendarMonth class="size-6" />
      <div class="fw-500 text-base">
        Countdowns
      </div>
    </div>
    <div class="flex gap-x-1">
      <IcBaselinePlus class="icon-btn" @click="router.push('/add')" />
      <IcBaselineMoreHoriz class="icon-btn" @click="router.push('/setting')" />
    </div>
  </Header>
  <CountDownList />
</template>
