import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

// @ts-expect-error - can ignore it
import { colors } from '@unocss/preset-uno/colors'

export default defineConfig({
  shortcuts: [{
    'body-bg': 'bg-white @dark:bg-dark-400',
    'primary-text': 'text-dark-400 @dark:text-light-300',
  }],
  theme: {
    colors: {
      aaa: colors.red['500'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
