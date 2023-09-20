<template>
  <v-app>
    <v-main>
      <div>
        <MetaTags />
        <div class="d-flex flex-column bg-background text-on-background">
          <!-- <NavBar class="position-fixed bg-background shadow" style="z-index: 20;" /> -->
          <!-- <div class="mt-24 shadow"> -->
          <router-view />
          <!-- </div> -->
          <!-- <TheFooter /> -->
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<style></style>
