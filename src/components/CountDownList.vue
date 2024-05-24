<script setup lang="ts">
import { countdownList } from '~/storage'
</script>

<template>
  <div class="count-down-list">
    <template v-if="countdownList.length > 0">
      <CountDown v-for="countDown in countdownList" :key="countDown.id" v-bind="countDown" />
    </template>
    <div v-else class="count-down-list-empty">
      empty
    </div>
  </div>
</template>
