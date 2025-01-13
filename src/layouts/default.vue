<script setup lang="ts">
  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title,
      description: route.meta.description,
      ogImage: route.meta.ogImage,
      canonicalUrl: route.meta.canonicalUrl || route.fullPath,
      generator: route.meta.generator,
      tags: route.meta.tags,
    }
  })

  useHeadAndMeta(pageMeta)
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <v-app
      class="bg-background text-on-background"
      style="min-height: 100vh !important"
    >
      <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
      <!-- https://vuetifyjs.com/en/features/application-layout/
        Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
      <!-- <NavBar /> -->
      <v-main class="py-4">
        <router-view />
      </v-main>
      <!-- https://vuetifyjs.com/en/features/application-layout/
        TheFooter contains the v-footer -->
      <!-- <TheFooter /> -->
    </v-app>
    <!-- </div> -->
  </div>
</template>

<style></style>
