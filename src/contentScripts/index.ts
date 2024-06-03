/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'

// Firefox `tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.log('[chrome-countdown-extension] Launching extension from content script')

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[chrome-countdown-extension] Navigate from page "${data.title}"`)
  })
})()
