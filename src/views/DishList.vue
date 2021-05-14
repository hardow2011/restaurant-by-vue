<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="columns is-multiline">
      <!-- <DishCard class="column is-one-quarter" v-for="(dish, index) in dishes" :key="index" :dish="dish" /> -->
      <DishCategory class="column is-full is-primary" v-for="(dishCategory, index) in dishCategories" :key="index" :dishCategory="dishCategory" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DishCard from "@/components/DishCard.vue";
import DishCategory from "@/components/DishCategories.vue";
import axios from "axios";

export default {
  name: "DishList",
  components: {
    // HelloWorld,
    DishCategory,
  },
  data() {
    return {
      dishCategories: null,
    };
  },
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/hardow2011/restaurant-by-vue/dishCategories"
      )
      .then((response) => {
        this.dishCategories = response.data;
        // console.log(this.dishCategories)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
