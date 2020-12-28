<template>
  <Header />
  <div class="flex flex-col">
    <div class="transition-all duration-300 ease-in-out mt-16 md:mt-20">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header }
};
</script>
