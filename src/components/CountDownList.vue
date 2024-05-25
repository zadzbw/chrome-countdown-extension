<script setup lang="ts">
import { countdownList } from '~/storage'
</script>

<template>
  <div class="min-h-96px">
    <template v-if="countdownList.length > 0">
      <CountDown v-for="countDown in countdownList" :key="countDown.id" v-bind="countDown" />
    </template>
    <template v-else>
      <div class="flex flex-col gap-y-2 items-center justify-center min-h-inherit">
        <IcRoundContentPasteSearch class="w-12 h-12" />
        <div class="text-sm fw-500 text-center">
          To add a countdown, click the plus button below.
        </div>
      </div>
    </template>
  </div>
</template>
