<template>
  <v-app>
    <div class="contact">
      <h1 class="title">About Me</h1>
      <p>Inspired by the Silicon Valley series, I named myself Richard Hendricks, although I am not as intelligent as him.
      </p>
      <p>I studied English back in university but always kept an interest in programming.</p>
      <p>I code primarily in C++, Python, and sometimes Vue and JavaScript.</p>
      <p>My MBTI is INFJ-T, an idealist, but I no longer hold any hope for open source anymore, so I made my proudest
        repository private with sheer elegant code inside.</p>
      <p>As Liu wrote in The Three-Body Problem, as I quote,</p>
      <p><i>"In China, any idea that dared to take flight would only crash back to the ground."</i></p>
      <p>Anyway, feel free to check out my public repositories and chat with me.</p>
      <br>
      
      <v-divider></v-divider>

      <h1 class="title">Contact Me</h1>
      <div class="cardWrapper">
        <v-card class="card" width="400" @click="locationHerf('github')">
          <v-card-title class="d-flex align-center">
            <v-icon style="margin-right: 10px">{{ mdiGithub }}</v-icon>
            <span>Github Home</span>
          </v-card-title>
          <v-card-text>
            @Richard Hendricks's Github
          </v-card-text>
        </v-card>

        <v-card class="card" width="400" @click="locationHerf('gmail')">
          <v-card-title class="d-flex align-center">
            <v-icon style="margin-right: 10px">{{ mdiGmail }}</v-icon>
            <span>Gmail</span>
          </v-card-title>
          <v-card-text>
            @Richard Hendricks's Gmail
          </v-card-text>
        </v-card>

        <v-card class="card" width="400" @click="locationHerf('weibo')">
          <v-card-title class="d-flex align-center">
            <v-icon style="margin-right: 10px">{{ mdiSinaWeibo }}</v-icon>
            <span>Sina Weibo</span>
          </v-card-title>
          <v-card-text>
            @Richard Hendricks's Sina Weibo
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mdiGithub, mdiGmail, mdiSinaWeibo } from '@mdi/js';

export default {
  data() {
    return {
      mdiGithub: mdiGithub,
      mdiGmail: mdiGmail,
      mdiSinaWeibo: mdiSinaWeibo,
    }
  },
  methods: {
    locationHerf(type) {
      let url = "";
      if (type == "github") url = "https://github.com/CodingDogzxg";
      else if (type == "gmail") url = "mailto:codingdogzxg@gmail.com";
      else if (type == "weibo") url = "https://www.weibo.com/codingdogzxg";
      window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>
.contact {
  min-height: 85vh !important;
}

.title {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

p {
  text-align: center;
  font-size: 16px;
  margin-left: 2vh;
  margin-right: 2vh;
}

.cardWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2vh;
}

.card {
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
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