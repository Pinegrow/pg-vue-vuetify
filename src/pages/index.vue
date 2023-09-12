<script setup lang="ts">
  import { useHead } from 'unhead'

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
    <span>This is the index page - Vue with Vuetify. A fresh start!</span>
  </main>
</template>
