<template lang="pug">
  v-container
    v-snackbar.black--text(color="yellow lighten-3" top v-model="send" :timeout="timeout") 送信しました
    v-row.d-flex.justify-between
      v-col(cols="12" md="8" xs="12")
        v-card
          v-card-text
            v-row.d-flex.mb-4
              v-col(cols="6")
                v-img(:src="'./img/thumbs/notfound.jpg'")
              v-col(cols="6")
                h4.display-1.mb-2 {{ product.name }}
                p
                  a.orange--text(color="amber darken-4" :href="product.url" target="blank" v-text="product.url")
                p
                  v-chip.mt-2.mr-2(v-for="(topic, index) in product.tecTopics.split(',')" :key="index") {{ topic }}
            div.pa-4.mb-4
              h2.headline.mb-6 技術的こだわり
              p.body-1(v-for="(p,index) in product.tecDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
            div.px-4
              h2.headline.mb-6 サービス的こだわり
              p.body-1(v-for="(p,index) in product.serviceDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
      v-col(cols="12" md="4" xs="12")
        v-card()
          v-card-text()
            v-text-field(color="amber darken-4", v-model="product.name" outlined label="プロダクト名")
            v-text-field(color="amber darken-4" v-model="product.url" outlined label="URL")
            v-textarea(color="amber darken-4" v-model="product.tecTopics" outlined label="使用技術をカンマ(,)区切りで入力してください")
            v-textarea(color="amber darken-4" v-model="product.tecDetail" outlined label="技術的に工夫したところ（改行区切り）")
            v-textarea(color="amber darken-4" v-model="product.serviceDetail" outlined label="サービス的に工夫したところ（改行区切り）")
          v-card-actions
            v-spacer
            v-btn(@click="sendProductDetail" color="orange" outlined) この内容で登録する
</template>
<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
}
</style>
<script>
export default {
  created() {
    console.log(this.$route);
  },
  data: function() {
    return {
      send: false,
      timeout: 3000,
      product: {
        creator: this.$store.state.userName,
        id: this.$store.state.userId,
        name: "",
        url: "",
        tecTopics: "",
        tecDetail: "",
        serviceDetail: ""
      }
    };
  },
  methods: {
    sendProductDetail() {
      this.send = true;
      this.$store.dispatch(
        "updateProductDetail",
        Object.assign({}, this.product)
      );
    }
  }
};
</script>