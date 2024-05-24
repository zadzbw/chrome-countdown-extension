import { useStorageAsync } from '@vueuse/core'
import { storage } from 'webextension-polyfill'

import type { StorageLikeAsync, UseStorageAsyncOptions } from '@vueuse/core'
import type { MaybeRefOrGetter, RemovableRef } from '@vueuse/shared'

const storageInterface: StorageLikeAsync = {
  removeItem(key: string) {
    return storage.local.remove(key)
  },

  setItem(key: string, value: string) {
    return storage.local.set({ [key]: value })
  },

  async getItem(key: string) {
    const storedData = await storage.local.get(key)
    return storedData[key]
  },
}

export function useWebExtensionStorage<T>(
  key: string,
  initialValue: MaybeRefOrGetter<T>,
  options: UseStorageAsyncOptions<T> = {},
): RemovableRef<T> {
  return useStorageAsync(key, initialValue, storageInterface, options)
}
