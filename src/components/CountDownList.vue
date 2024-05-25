<script setup lang="ts">
import draggable from 'vuedraggable'
import { countdownList } from '~/storage'

const dragging = ref(false)
</script>

<template>
  <div class="min-h-100px">
    <template v-if="countdownList.length > 0">
      <draggable
        :list="countdownList"
        :ghost-class="$style.ghost"
        item-key="id"
        animation="200"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <CountDown :key="element.id" v-bind="element" :dragging="dragging" />
        </template>
      </draggable>
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

<style module>
.ghost {
  @apply bg-gray-200 opacity-80
}
</style>
