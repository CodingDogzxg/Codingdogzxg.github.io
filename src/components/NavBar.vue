<template>
  <v-layout class="navBar">
    <v-app-bar :elevation="2" rounded fixed>
      <v-col>
        <v-row align="center">
          <v-app-bar-nav-icon @click.stop="toggleDrawer" class="hidden-md-and-up">
            <v-img :src="isDarkMode ? '/assets/image/navBar/avatarLight.ico' : '/assets/image/navBar/avatarDark.ico'"
              width="24" height="24"></v-img>
          </v-app-bar-nav-icon>
          <v-app-bar-title>Richard's Blog</v-app-bar-title>
        </v-row>
      </v-col>

      <v-col class="hidden-sm-and-down">
        <v-row class="d-flex flex-nowrap" justify="center">
          <v-col cols="auto" v-for="(link, index) in links" :key="index">
            <v-btn density="default" @click="locationHerf(link.url)">{{ link.name }}</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row justify="end">
          <v-btn @click="toggleMode">
            <img :src="isDarkMode ? '/assets/image/navBar/lightMode.svg' : '/assets/image/navBar/darkMode.svg'">
          </v-btn>
        </v-row>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list>
        <v-list-item v-for="link in links" @click="locationHerf(link.url)">
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>

<script setup>
import { useTheme } from 'vuetify'
import { useRouter } from 'vue-router';

const theme = useTheme();
const router = useRouter();

const links = [
  { name: 'Home', url: '/' },
  { name: 'Repos', url: '/repositories' },
  { name: 'Posts', url: '/posts' },
  { name: 'Contact', url: '/contact' },
];

let isDarkMode = false;

function toggleMode() {
  if (theme.global.current.value.dark) {
    theme.global.name.value = 'light';
    isDarkMode = false;
  }
  else {
    theme.global.name.value = 'dark';
    isDarkMode = true;
  }
}

function locationHerf(url) {
  router.push(url);
}
</script>

<style scoped>
.navBar {
  height: 64px;
  margin-bottom: 2px;
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