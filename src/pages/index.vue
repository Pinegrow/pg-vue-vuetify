<script setup lang="ts">
  import { useHead } from 'unhead'
  import { useHero } from '@/composables/hero'
  const { heroImageSrc } = useHero()

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
  <main>
    <SampleCard />
  </main>
</template>
<style scoped></style>
