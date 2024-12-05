import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

export default defineConfig({
  site: config.site,
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  markdown: {
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin]
  }
})
