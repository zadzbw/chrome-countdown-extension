<script setup lang="ts">
import { useRouter } from 'vue-router'
import { countdownList } from '~/storage'

const router = useRouter()

function clearAll() {
  countdownList.value = []
  router.back()
}
</script>

<template>
  <Header class="gap-x-1">
    <IcRoundArrowBack class="icon-btn" @click="router.back()" />
    <div class="fw-500 text-base">
      Settings
    </div>
  </Header>

  <div>
    <button class="btn" @click="clearAll">
      Clear All
    </button>
  </div>
</template>
