<template>
  <!-- Main Navbar -->
  <navbar
    :class="{ 'shadow-none -translate-y-full': !scroll }"
    class="w-full h-16 fixed transition-all duration-300 ease-in-out transform-gpu bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center py-2 px-4 flex-row-reverse z-10 shadow-lg md:px-8 md:flex-row md:h-20 xl:px-12"
  >
    <!-- Title -->
    <router-link
      class="cursor-pointer font-bold text-4xl focus:outline-none xl:text-5xl"
      :to="{ name: 'Home' }"
    >
      FMs<sup><small class="text-sm">®</small></sup>
    </router-link>
    <!-- end Title -->

    <!-- Menu Navigation -->
    <nav class="hidden md:visible md:w-auto md:h-full md:flex md:items-center">
      <router-link
        v-for="(link, index) in pages"
        :key="index"
        class="transition duration-200 ease-in-out text-white h-full tracking-widest no-underline flex justify-center items-center text-lg hover:text-gray-300 focus:outline-none md:px-8 lg:text-xl 2xl:px-10"
        :to="{ name: link.page }"
      >
        {{ link.page }}
      </router-link>
    </nav>
    <!-- end Menu Navigation -->

    <!-- Burger Menu -->
    <div
      @click="hideNavbar()"
      class="w-8 h-6 cursor-pointer md:hidden z-10 flex flex-col justify-between items-center"
    >
      <div
        :class="{ 'translate-x-1 translate-y-2px rotate-45': !hideMenu }"
        class="w-full h-1 bg-white block rounded-md transform-gpu origin-left transition-all duration-300 ease-in-out"
      ></div>
      <div
        :class="{ '-translate-x-full opacity-0': !hideMenu }"
        class="w-full h-1 bg-white block rounded-md transform-gpu transition-all duration-300 ease-in-out"
      ></div>
      <div
        :class="{ 'translate-x-1 -rotate-45': !hideMenu }"
        class="w-full h-1 bg-white block rounded-md transform-gpu origin-left transition-all duration-300 ease-in-out"
      ></div>
    </div>
    <!-- end Burger Menu -->
  </navbar>
  <!-- end Main Navbar -->

  <!-- Mobile Menu Navigation -->
  <navbar
    :class="{
      '-translate-x-full': hideMenu,
      'shadow-none -translate-y-full': !scroll
    }"
    class="w-full h-20 py-2 fixed bg-fixed transition-all duration-300 ease-in-out transform-gpu translate-y-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white tracking-widest no-underline flex justify-around items-center hover:text-gray-300 focus:outline-none md:hidden"
  >
    <router-link
      v-for="(link, index) in pages"
      :key="index"
      class="transition duration-200 ease-in-out text-white text-3xl rounded-lg tracking-widest no-underline hover:text-gray-300 focus:outline-none md:hidden"
      :to="{ name: link.page }"
    >
      {{ link.label }}
    </router-link>
  </navbar>
  <!-- end Mobile Menu Navigation -->
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          page: "Home",
          label: "🏠"
        },
        {
          page: "Categories",
          label: "🗃"
        },
        {
          page: "About",
          label: "🧑"
        }
      ],
      hideMenu: true,
      scroll: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScrollHideNavbar);
  },
  methods: {
    hideNavbar() {
      !this.hideMenu ? (this.hideMenu = true) : (this.hideMenu = false);
    },
    onScrollHideNavbar() {
      this.scroll = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>
