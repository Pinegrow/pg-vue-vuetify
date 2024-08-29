import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

import Markdown from 'unplugin-vue-markdown/vite'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from 'markdown-it-shiki'
import VueDevTools from 'vite-plugin-vue-devtools'

// import { visualizer } from 'rollup-plugin-visualizer'

import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // routesFolder: 'src/pages', // default
      dts: 'typed-router.d.ts',
    }),
    /* IMPORTANT: Vue must be placed after VueRouter()  */
    Vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#image-loading
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: (tag) => tag === 'lite-youtube',
        },
      },
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        // https://github.com/antfu/markdown-it-shiki
        md.use(Shiki, {
          // theme: {
          //   dark: 'min-dark',
          //   light: 'min-light',
          // },
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),
    Layouts(),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        /\.mdx$/, // .mdx
      ],
      imports: [
        'vue',
        VueRouterAutoImports, // Remove 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        'src/composables',
        'src/utils',
        'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
    AutoImportComponents({
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      dirs: ['src/components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],

      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
      content: {
        pipeline: {
          include: ['./src/**/*'],
        },
      },
    }),
    Vuetify({
      /* If customizing sass variables of vuetify components */
      styles: {
        configFile: 'src/assets/vuetify/settings.scss',
      },
      //...
    }),
    VueDevTools(),
    liveDesigner({
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
      devtoolsKey: 'devtoolsKey',
      //...
      vuetify: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'vuetify.config.ts', // or file where vuetify is created
        // themePath: false, // Set to false so that Design Panel is not used
        // utilities: false,
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
      //     ),
      //   },
      // ],
    }),
  ],

  // build: {
  //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
  //   rollupOptions: {
  //     plugins: [visualizer()],
  //   },
  // },

  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',
      },
    },
  },
})
