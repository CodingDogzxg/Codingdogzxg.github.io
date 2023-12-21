<template>
  <v-app>
    <div class="contentWrapper">
      <h1 class="title1">Lost Love & Found Memeories</h1>
      <h3 class="title2">--Summrized by ChatGPT</h3>

      <div class="content" v-for="(item, index) in blossomData" :key="index">
        <p :class="item.narrator">{{ item.time }}</p>
        <div class="text">
          <p>{{ item.content }}</p>
          <v-img v-if="item.img" :src="item.img"></v-img>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 32px"></div>
  </v-app>
</template>

<script>
import bloosmJson from "../../assets/json/blossom.json"
export default {
  data() {
    return {
      blossomData: bloosmJson.content,
    }
  }
}
</script>

<style scoped>
.title1 {
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
}

.title2 {
  text-align: right;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 2vh;
}

.title3 {
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
}

.contentWrapper {
  max-width: 600px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
}

.content {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

.male {
  color: #3399FF;
  margin-bottom: 5px;
}

.female {
  color: #F5658E;
  margin-bottom: 5px;
}

.omniscient {
  color: #FF7F50;
  margin-bottom: 5px;
}

.text {
  margin-bottom: 25px;
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