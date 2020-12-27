<template>
  <div class="flex flex-col justify-center items-center">
    <add-space-for-navbar>
      <div v-for="n in 100" :key="n">{{ n }}</div>
    </add-space-for-navbar>
  </div>
</template>

<script>
import AddSpaceForNavbar from "../layouts/AddSpaceForNavbar.vue";

export default {
  components: {
    AddSpaceForNavbar
  }
};
</script>
