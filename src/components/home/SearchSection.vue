<template>
  <section
    class="w-full h-28 bg-gradient-to-r from-pink-500 to-yellow-600 flex justify-center items-center p-5 md:h-36"
  >
    <div
      class="w-full h-9 flex justify-center items-center flex-col md:w-4/6 xl:w-3/5 2xl:w-2/4"
    >
      <label
        class="text-lg text-white pb-3 font-bold tracking-widest md:text-xl"
        >Cari Film Disini
      </label>
      <div class="flex w-full h-full">
        <input
          type="text"
          autocomplete="off"
          placeholder="Search Movies..."
          class="w-full h-full rounded-l-full bg-white p-1 px-3 font-sans focus:outline-none font-bold text-lg tracking-wider md:p-3 md:text-xl"
          autofocus
          @input="search()"
          @keyup.enter="inputSearchPressEnter()"
        />
        <button
          class="px-2 h-9 bg-black text-white text-lg md:text-xl font-bold rounded-r-full tracking-wider bg-gradient-to-r from-teal-400 to-blue-500 focus:outline-none focus:ring-offset-yellow-500 focus:ring-2 hover:text-gray-100 hover:from-pink-500 hover:to-orange-500 md:px-6"
          @click="clickSearchButton()"
        >
          Search
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  props: {},
  methods: {
    search() {
      this.value = event.target.value;
      this.$emit("search", this.value);
    },
    inputSearchPressEnter() {
      this.value;
      this.$emit("inputSearchPressEnter", this.value);
    },
    clickSearchButton() {
      this.value;
      this.$emit("clickSearchButton", this.value);
    }
  }
};
</script>
