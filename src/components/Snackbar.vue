<template lang="pug">
	.text-center
		v-snackbar.black--text( color="purple" v-model="isShow" :timeout="timeout" top )
			div
				p(color="amber darken-3") 投票しました
				div.d-flex.align-center
					span.mr-4.title {{ this.name }}
					span.body-1
						span.mr-1 技術:
						span.title.mr-2 {{ ['S','A','B','C','D'][this.tec - 1] }}
						span.mr-1 サービス:
						span.title {{ ['S','A','B','C','D'][this.service -1 ]}}
</template>
<script>
export default {
  props: {
    name: String,
    tec: Number,
    ser: Number
  },
  created() {
    // console.log(this.isShow);
  },
  computed: {
    isShow: {
      get: function() {
        return this.$store.state.UI.isSnackbarShow;
      },
      set: function() {
        this.$store.commit("UI/snackBarHide");
      }
    }
  },
  data: () => ({
    member: {
      id: 1
    },
    timeout: 2500,
    color: "grey lighten-5"
  }),
  methods: {}
};
</script>