<template lang="pug">
  v-app
    Header
    router-view.mt-12.pt-12
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",

  components: {
    Header
  },

  data: () => ({
    //
  })
};
</script>
