import { sendMessage } from 'webext-bridge/background'
import type { Tabs } from 'webextension-polyfill'
import { runtime, tabs } from 'webextension-polyfill'

runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('[chrome-countdown-extension] Extension installed')
})

let prevTabId = 0

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
tabs.onActivated.addListener(async ({ tabId }) => {
  if (!prevTabId) {
    prevTabId = tabId
    return
  }

  let prevTab: Tabs.Tab

  try {
    prevTab = await tabs.get(prevTabId)
    prevTabId = tabId
  }
  catch (e) {
    // noop
    return
  }

  sendMessage('tab-prev', { title: prevTab.title }, { context: 'content-script', tabId })
})
