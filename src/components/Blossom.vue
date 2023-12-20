<template>
  <v-app>
    <h1 class="title">Lost Love & Found Memeories</h1>
    <h2 class="title">--Summrized by ChatGPT</h2>

    <div class="contentWrapper">
      <div class="content" v-for="(item, index) in blossomData" :key="index">
        <p :class="item.narrator">{{ item.time }}</p>
        <p class="text">{{ item.content }}</p>
        <v-img class="image" v-if="item.img"></v-img>
      </div>
    </div>

    <div style="margin-bottom: 32px"></div>
  </v-app>
</template>

<script>
import bloosmJson from "../../assets/content/blossom.json"
export default {
  data() {
    return {
      blossomData: bloosmJson.content,
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.contentWrapper {
  max-width: 600px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  font-weight: 350;
  color: #6C6D6E;
}

.content {
  margin-left: 2vh;
  margin-right: 2vh;
  margin-top: 16px;
}

.male {
  color:#3399FF;
}

.female {
  color:#EEA2AD;
}

.omniscient {
  color: #FF7F50;
}

.text {
  margin-top: 16px;
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