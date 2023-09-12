<script setup lang="ts">
  import { computed } from 'vue'
  import site from '@/site'
  import { useHead, useSeoMeta } from 'unhead'
  import { useRoute } from 'vue-router/auto'

  const fonts =
    'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Inter:100,200,300,400,500,600,700,800,900&display=swap'
  const googleapis = 'https://fonts.googleapis.com'
  const gstatic = 'https://fonts.gstatic.com'

  const { title, description } = site
  const route = useRoute()

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'keywords', content: route.meta.tags?.toString() },
      { property: 'author', content: 'Pinegrow' },
      {
        property: 'twitter:image',
        content: 'https://icons.vuetelescope.com/vue.svg',
      },
      {
        property: 'twitter:image:alt',
        content: 'Vue',
      },
      {
        property: 'twitter:site',
        content: '@pinegrow',
      },
      {
        property: 'twitter:card',
        content: 'summary',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fonts,
      },
    ],
    noscript: [
      `<link rel="stylesheet" crossorigin="anonymous" href="${fonts}" />`,
    ],
  })
</script>

<template>
  <div></div>
</template>
