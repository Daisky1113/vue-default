<template lang="pug">
  v-dialog(persistent v-model="this.$store.state.isProductInfoDialog" max-width="760")
    v-card.pt-4
      v-card-text
        v-row.d-flex.mb-4
          v-col(cols="6")
            v-img(:src="'./img/thumbs/notfound.jpg'")
          v-col(cols="6")
            h4.display-1.mb-2 {{ this.$store.getters.currentProductData.name }}
            p
              a.orange--text(color="amber darken-4" :href="this.$store.getters.currentProductData.url" target="blank" v-text="this.$store.getters.currentProductData.url")
            p
              v-chip.mt-2.mr-2(v-for="(topic, index) in this.$store.getters.currentProductData.tecTopics.split(',')" :key="index") {{ topic }}
        div.pa-4.mb-4
          h2.headline.mb-6 技術的こだわり
          p.body-1(v-for="(p,index) in this.$store.getters.currentProductData.tecDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
        div.px-4
          h2.headline.mb-6 サービス的こだわり
          p.body-1(v-for="(p,index) in this.$store.getters.currentProductData.serviceDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
      v-card-actions
        v-spacer
        v-btn(@click="close" text) 閉じる
</template>
<script>
export default {
  methods: {
    close() {
      this.$store.commit("closeProductInfoDialog");
    }
  }
};
</script>