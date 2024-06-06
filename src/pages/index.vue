<script setup lang="ts">
  import { useHead } from 'unhead'
  import { pg_background_urls } from '~~/themes/pg-vuetify/tokens.mjs'

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  definePage({
    name: 'home',
    // alias: ['home'],
    meta: {
      title: 'Home',
      navOrder: 1,
    },
  })

  useHead({
    title: 'Home',
  })
</script>
<template>
  <div>
    <SampleCard />
  </div>
</template>
<style scoped></style>
