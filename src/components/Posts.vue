<template>
  <v-app>
    <h1 class="title">Posts</h1>
    <div class="posts">
      <div v-if="postData" v-for="(item, index) in postData" :key="index" class="cardWrapper">
        <v-card class="card" @click="locationHerf(item.url)">
          <v-img :src="item.pic" height="200px" cover></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.desc }}</v-card-subtitle>
        </v-card>
      </div>
    </div>
    <v-pagination class="pagination" :length="pageCount" v-model="currPage"></v-pagination>
  </v-app>
</template>

<script>
import postJson from "../../assets/json/posts.json"

export default {
  data() {
    return {
      postData: null,
      currPage: 1,
      pageCount: 1,
      itemPerPage: 0,
    }
  },
  methods: {
    locationHerf(url) {
      window.open(url, "_blank")
    },
    refreshRepoItems() {
      this.itemPerPage = window.innerWidth < 780 ? 4 : 8;

      this.postData = null;
      let startIndex = (this.currPage - 1) * this.itemPerPage;

      this.postData = postJson.config.slice(startIndex, Math.min(postJson.config.length, startIndex + this.itemPerPage));
      this.pageCount = Math.ceil(postJson.config.length / this.itemPerPage);
    },
  },
  watch: {
    currPage(newVal, oldVal) {
      this.refreshRepoItems();
    },
  },
  mounted() {
    this.refreshRepoItems();

    this.refreshRepoItemWithParam = () => {
      this.currPage = 1;
      this.refreshRepoItems();
    };
    addEventListener("resize", this.refreshRepoItemWithParam);
  },
  beforeDestroy() {
    removeEventListener("resize", this.refreshRepoItemWithParam);
  },
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 65vh !important;
  text-align: center;
}

.title {
  text-align: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.cardWrapper {
  min-width: 390px;
  margin-left: auto;
  margin-right: auto;
}

.card {
  width: 350px;
  height: 290px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

.pagination {
  margin-top: 2vh;
  margin-bottom: 2vh;
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