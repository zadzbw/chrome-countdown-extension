import { useWebExtensionStorage } from '~/hooks/useWebExtensionStorage'

export interface CountDown {
  id: number
  name: string
  date: number
  // expired?: boolean
}

// generate 3 countdowns for testing
const testData = [
  { id: 1, name: 'Birthday', date: new Date('2024-07-25').getTime() },
  { id: 2, name: 'New Year', date: new Date('2024-05-30').getTime() },
  { id: 3, name: 'Christmas', date: new Date('2025-12-25').getTime() },
]

export const countdownList = useWebExtensionStorage<Array<CountDown>>('countdown-list', testData)
