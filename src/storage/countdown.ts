import { useWebExtensionStorage } from '~/hooks/useWebExtensionStorage'

export interface CountDown {
  id: string
  name: string
  date: string
}

export const countdownList = useWebExtensionStorage<Array<CountDown>>('countdown-list', [])
