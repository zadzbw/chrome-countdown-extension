<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs'
import type { CountDown } from '~/storage'
import { countdownList } from '~/storage'

const router = useRouter()
const route = useRoute()

const id = route.params.id
const countdown = countdownList.value.find(item => item.id === id) as CountDown

const name = ref(countdown.name)
const date = ref(countdown.date)

function handleSave() {
  countdown.name = name.value
  countdown.date = date.value
  router.back()
}

const minDate = computed(() => dayjs().add(1, 'day').format('YYYY-MM-DD'))

const canSubmit = computed(() => name.value && date.value)
</script>

<template>
  <Header class="gap-x-1">
    <IcRoundArrowBack class="icon-btn" @click="router.back()" />
    <div class="fw-500 text-base">
      Update Countdown
    </div>
  </Header>

  <div class="flex flex-col gap-y-2 mb-2">
    <div class="flex flex-col gap-y-1">
      <div class="text-sm fw-600">
        Name
      </div>
      <input v-model="name" class="outline-none text-lg pb-1 border-b fw-300" placeholder="edit me">
    </div>
    <div class="flex flex-col gap-y-1">
      <div class="text-sm fw-600">
        Date
      </div>
      <input v-model="date" type="date" class="outline-none text-lg pb-1 border-b fw-300" :min="minDate">
    </div>
  </div>

  <button :disabled="!canSubmit" class="btn" @click="handleSave">
    Save
  </button>
</template>
