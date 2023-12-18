<template>
  <div>
    <v-app class="footer">
      <v-footer class="text-center flex-column">
        <div>
          <strong>Richard Hendricks</strong>
        </div>

        <div>
          {{ new Date().getFullYear() }} — Published with Github Page.
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
</script>

<style scoped>
.footer {
  height: 64px;
  border-radius: 2px;
}

.v-theme--light,
.v-theme--dark {
  transition: background-color 1s;
}

.v-theme--dark,
.v-theme--light {
  transition: background-color 1s;
}
</style>