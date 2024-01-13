import { defineConfig } from 'unocss'
import { presetUno } from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  rules: [
    ['pointer', { cursor: 'pointer' }]
  ],
  presets: [
    presetUno(),
    presetWebFonts()
  ]
})
