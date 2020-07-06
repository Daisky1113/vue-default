<template lang="pug">
  v-dialog(persistent v-model="this.show" max-width="500")
    v-card
      v-card-title 投票しますか？
      v-card-text
        div.d-flex.flex-column
          p.text-center {{ name }}
        v-row.d-flex.align-end.pb-0
          v-col(cols="12" lg="3" xs="12")
            p.title 技術
          v-col(cols="12" lg="9" xs="12")
            v-radio-group(row @change="value => voteData.tec = value" :value="tec")
              v-radio(
                v-for="(n,index) in ['S','A','B','C','D']"
                checked
                :color="color"
                :key="'tec' + n" 
                :value="index + 1" 
                :label="n")
        v-row.d-flex.align-end
          v-col(cols="12" lg="3" xs="12")
            p.title サービス
          v-col(cols="12" lg="9" xs="12")
            v-radio-group(row @change="value => voteData.service = value" :value="ser")
              v-radio(:color="color" v-for="(n,index) in ['S','A','B','C','D']" :key="'tec' + n" :value="index + 1" :label="n")
      v-card-actions
        v-spacer
        v-btn(text @click.stop="close" ) 閉じる
        v-btn(@click.stop="sendData" outlined color="purple darken-3") 送信する
</template>
<style scoped>
.avatar-wrapper {
  position: relative;
}
</style>
<script>
// import { mapGetters } from "vuex";
export default {
  props: {
    name: String,
    tec: Number,
    ser: Number
  },
  data: () => ({
    color: "#6a1b9a",
    voteData: {
      tec: 0,
      service: 0
    }
  }),
  computed: {
    show: function() {
      return this.$store.state.UI.isVoteFormShow;
    }
  },
  methods: {
    close() {
      this.$store.commit("UI/voteFormHide");
    },
    sendData() {
      this.voteData.tec == 0 && (this.voteData.tec = this.$props.tec);
      this.voteData.service == 0 && (this.voteData.service = this.$props.ser);

      // this.$store.dispatch("vote", Object.assign({}, this.voteData));
      this.close();
      this.reset();
    },
    reset() {
      this.voteData.tec = 0;
      this.voteData.service = 0;
    }
  }
};
</script>