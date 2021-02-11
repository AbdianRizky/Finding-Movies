<template>
  <NavigationBar />
  <div class="flex flex-col bg-gradient-to-r from-pink-500 to-yellow-600">
    <div class="transition-all duration-300 ease-in-out mt-16 md:mt-20">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/layouts/NavigationBar.vue";

export default {
  components: { NavigationBar }
};
</script>
