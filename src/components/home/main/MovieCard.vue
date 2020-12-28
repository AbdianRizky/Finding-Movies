<template>
  <div class="w-80 h-full flex flex-col">
    <!--Movie Title-->
    <label class="text-2xl font-bold">
      {{
        movie.Title.length > maxTitleLength
          ? movie.Title.substring(0, maxTitleLength) + "..."
          : movie.Title
      }}
    </label>
    <!--End Movie Title-->

    <!--Movie Year-->
    <label class="text-l">
      {{ movie.Year }}
    </label>
    <!--End Movie Year-->

    <!--Poster Movie-->
    <img
      :src="movie.Poster"
      class="w-full h-96 rounded-lg cursor-pointer"
      @click="getMovieId()"
    />
    <!--End Poster Movie-->
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
    index: Number
  },
  data() {
    return {
      maxTitleLength: 23
    };
  },
  methods: {
    getMovieId() {
      this.$emit("getMovieId", this.movie.imdbID);
    }
  }
};
</script>
