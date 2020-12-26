<template>
  <header
    :class="{ 'shadow-none -translate-y-full': !scroll }"
    class="navbar w-full h-16 fixed transition-all duration-400 ease-in-out transform-gpu bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center py-2 px-4 flex-row-reverse z-10 shadow-lg md:flex-row md:px-8 lg:h-20 xl:px-12"
  >
    <!-- Title -->
    <router-link
      class="cursor-pointer flex justify-end items-center font-bold text-4xl"
      :to="{ name: 'Home' }"
    >
      FMs<small class="text-sm">®</small>
    </router-link>
    <!-- end Title -->

    <!-- Menu Navigation -->

    <nav class="hidden md:visible md:w-auto md:h-full md:flex md:items-center">
      <router-link
        v-for="(link, index) in pages"
        :key="index"
        class="transition duration-200 ease-in-out text-white h-full tracking-widest no-underline flex justify-center items-center hover:text-gray-300 focus:outline-none md:px-6 xl:px-8 xl:text-lg 2xl:px-10"
        :to="{ name: link.page }"
      >
        {{ link.page }}
      </router-link>
    </nav>
    <!-- end Menu Navigation -->

    <!-- Menu icon -->
    <div @click="showNavbar()" class="cursor-pointer md:hidden z-10">
      <IconMenu :width="30" :height="30" color="#fff" />
    </div>
    <!-- end Menu icon -->
  </header>
  <!-- Mobile Menu Navigation -->
  <nav
    v-if="showMenu == true"
    :class="{
      'shadow-none -translate-y-full': (showMenu = true),
      'shadow-none -translate-y-full': !scroll
    }"
    class="navbar w-full h-16 py-2 px-8 fixed transition-all duration-400 ease-in-out transform-gpu translate-y-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white tracking-widest no-underline flex justify-between items-center hover:text-gray-300 focus:outline-none md:hidden"
  >
    <router-link
      v-for="(link, index) in pages"
      :key="index"
      class="transition duration-200 ease-in-out text-white text-3xl rounded-lg tracking-widest no-underline hover:text-gray-300 focus:outline-none md:hidden"
      :to="{ name: link.page }"
    >
      {{ link.label }}
    </router-link>
  </nav>
  <!-- end Mobile Menu Navigation -->
</template>

<script>
import IconMenu from "./Icons/IconMenu";

export default {
  components: { IconMenu },
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
      showMenu: false,
      scroll: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.hideNavbar);
  },
  methods: {
    showNavbar() {
      !this.showMenu
        ? (this.showMenu = true)
        : setTimeout(() => {
            this.showMenu = false;
          }, 1000);
    },
    hideNavbar() {
      this.scroll = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>
