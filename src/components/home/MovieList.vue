<template>
  <section
    class="w-full h-full bg-gradient-to-r from-purple-300 to-green-300 p-8 grid grid-cols-1 gap-x-4 gap-y-6 justify-items-center md:grid-cols-2 xl:grid-cols-3 lg:p-20 xl:p-20 2xl:grid-cols-4"
  >
    <movie-card
      v-for="(movie, index) in result"
      :key="index"
      :index="index"
      :movie="movie"
    />
  </section>
</template>

<script>
import MovieCard from "./main/MovieCard.vue";

export default {
  components: {
    MovieCard
  },
  props: {
    result: Array
  }
};
</script>
