<script setup lang="ts">
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import type { CountDown } from '~/storage'
import { countdownList } from '~/storage'

const { id, date, dragging } = defineProps<CountDownProps>()

const router = useRouter()

interface CountDownProps extends CountDown {
  dragging: boolean
}

const hover = ref(false)

const remainingDays = computed(() => {
  const now = dayjs(dayjs().format('YYYY-MM-DD'))
  const target = dayjs(date)
  return target.diff(now, 'day')
})

const showEmoji = computed(() => remainingDays.value <= 0)

function handleDelete() {
  // eslint-disable-next-line no-alert
  const isConfirm = confirm('Are you sure to delete this countdown?')
  if (isConfirm)
    countdownList.value = countdownList.value.filter(item => item.id !== id)
}

function toDetail() {
  router.push(`/countdown/${id}`)
}
</script>

<template>
  <div
    :class="$style.countDownItem"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    @click="toDetail"
  >
    <div class="flex flex-col gap-y-1 flex-grow">
      <div class="flex gap-x-1" :class="[showEmoji ? 'items-center' : 'items-baseline']">
        <TwemojiCheckMarkButton v-if="showEmoji" class="size-5" />
        <div class="text-lg line-height-none">
          <span class="fw-500">{{ remainingDays }}</span>
          <span class="fw-400">d</span>
        </div>
        <div>{{ date }}</div>
      </div>
      <div class="text-sm line-height-none">
        {{ name }}
      </div>
    </div>

    <Transition
      enter-active-class="animate-fade-in animate-duration-200 animate-ease-out"
      leave-active-class="animate-fade-in animate-duration-200 animate-ease-in animate-reverse"
    >
      <div v-if="!dragging && hover" class="icon-btn" @click.stop="handleDelete">
        <IcOutlineDeleteSweep class="size-4.5" />
      </div>
    </Transition>
  </div>
</template>

<style module>
.countDownItem {
  @apply mx--1.5 px-1.5 py-1.5 flex items-center cursor-pointer rounded-2;

  @apply primary-text body-bg;
}
</style>
