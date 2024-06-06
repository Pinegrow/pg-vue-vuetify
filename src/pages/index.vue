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
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
      "
    >
      <DarkModeSwitch /><span style="margin-left: 0.5rem; /* 8px */"
        >A Fresh Start!</span
      >
    </div>
  </div>
</template>
<style scoped></style>
