<template>
  <search-section
    @search="getSearchValue($event)"
    @inputSearchPressEnter="searchInput()"
    @clickSearchButton="searchButton()"
  />
  <div
    :class="{ hidden: response === 'True', block: response === 'False' }"
    class="w-full h-max-screen bg-gray-300"
  >
    Home
  </div>
  <Suspense v-if="response === 'True'">
    <!-- retrieve when its fully loaded -->
    <template #default>
      <div>
        <movie-list :result="hasilCari" />
        <Footer />
      </div>
    </template>
    <!-- retrieve when its fully loaded -->

    <!-- loader -->
    <template #fallback>
      <Loading />
    </template>
    <!-- loader -->
  </Suspense>
  <!-- no response -->
  <section
    v-else-if="response === 'False'"
    class="w-full h-full p-8 flex justify-center items-center text-center font-bold text-4xl md:text-5xl"
  >
    Upss....
    <br />
    Movie not found!
  </section>
  <!-- no response -->
</template>

<script>
import axios from "axios";
import { defineAsyncComponent } from "vue";
import SearchSection from "@/components/home/SearchSection.vue";
import Footer from "@/components/layouts/Footer.vue";
import Loading from "@/components/ui/Loading.vue";

const MovieList = defineAsyncComponent(async () => {
  await new Promise(r => setTimeout(r, 3000));
  return import("@/components/home/MovieList.vue");
});

export default {
  components: {
    SearchSection,
    MovieList,
    Footer,
    Loading
  },
  data() {
    return {
      hasilCari: Array,
      response: String,
      value: String
    };
  },
  methods: {
    async searchMovies() {
      const getData = await axios
        .get(`http://www.omdbapi.com?apikey=51f13f50&s=${this.value}`)
        .then(response => {
          // console.log(response.data);
          this.response = response.data.Response;
          this.hasilCari = response.data.Search;
        })
        .catch(err => {
          console.log(err);
        });
      return getData;
    },
    getSearchValue(value) {
      this.value = value;
    },
    searchInput() {
      this.value;
      this.searchMovies();
    },
    searchButton() {
      this.value;
      this.searchMovies();
    }
  }
};
</script>
