<script setup lang="ts">
import { useRouter } from 'vue-router'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'
import { countdownList } from '~/storage'

const router = useRouter()

const name = ref('')
const date = ref('')

function handleCreate() {
  const id = uuidv4()
  // date show be number
  countdownList.value.push({ id, name: name.value, date: dayjs(date.value).valueOf() })
  router.back()
}

const minDate = computed(() => dayjs().add(1, 'day').format('YYYY-MM-DD'))

const canSubmit = computed(() => name.value && date.value)
</script>

<template>
  <Header class="gap-x-1">
    <IcRoundArrowBack class="icon-btn" @click="router.back()" />
    <div class="fw-500 text-base">
      Add Countdown
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

  <button :disabled="!canSubmit" class="btn" @click="handleCreate">
    Create
  </button>
</template>
