import { useWebExtensionStorage } from '~/hooks/useWebExtensionStorage'

export interface CountDown {
  id: string
  name: string
  date: number
}

export const countdownList = useWebExtensionStorage<Array<CountDown>>('countdown-list', [])
