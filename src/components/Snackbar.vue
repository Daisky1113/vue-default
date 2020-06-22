<template lang="pug">
	.text-center
		v-snackbar.black--text( color="purple" v-model="isShow" :timeout="timeout" top )
			div
				p(color="amber darken-3") 投票しました
				div.d-flex.align-center
					v-avatar.mb-1.mr-2(size="32")
						v-img(:src="'./img/avatars/avatar-' + this.$store.getters.currentMemberData.id + '.jpg'")
					span.mr-4.title {{ this.$store.getters.currentMemberData.name }}
					span.body-1
						span.mr-1 技術:
						span.title.mr-2 {{ ['S','A','B','C','D'][this.$store.getters.currentMemberData.tecPoint - 1] }}
						span.mr-1 サービス:
						span.title {{ ['S','A','B','C','D'][this.$store.getters.currentMemberData.servicePoint -1 ]}}
</template>
<script>
export default {
  created() {
    console.log(this.$store.state.members);
  },
  computed: {
    isShow: {
      get: function() {
        return this.$store.state.isSnackbar;
      },
      set: function() {
        this.$store.commit("closeSnack");
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
  methods: {
    open() {
      this.$store.commit("openSnack");
    }
  }
};
</script>