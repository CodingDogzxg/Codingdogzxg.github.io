<template>
  <v-app class="home">
    <div class="mainDiv">
      <v-img class="memoji" src="/assets/image/home/memoji.png"></v-img>
      <h1 class="name">Richard Hendricks</h1>
      <h4 class="center">codingdogzxg</h4>
      <p class="center">Better version of me. </p>
    </div>
  </v-app>
</template>

<script>

</script>

<style scoped>
.home {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 85vh;
  margin: 0;
}

.mainDiv {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  min-height: 600px;
}

.memoji {
  transition: transform 0.3s ease;
}

.memoji:hover {
  transform: scale(1.1);
}

.name {
  text-align: center;
  margin-top: 40px;
}

.center {
  text-align: center;
  margin-top: 20px;
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