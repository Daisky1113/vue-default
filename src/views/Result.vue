<template lang="pug">
  v-container
    v-card
      v-list
        v-list-item
</template>
<script>
import { mapActions } from "vuex";

export default {
  components: {},
  created() {
    this.fetchAllVotes();
  },
  mounted() {
    console.log("mounted");
    // console.log(this.getAllResult);
  },
  data: function() {
    return {
      sortMode: "defaultSort",
      totalList: this.$store.state.members
    };
  },
  computed: {},
  methods: {
    edit(id) {
      console.log(id);
    },
    openInfo(id) {
      this.setCurrentMemberId(id);
      this.openProductInfoDialog();
    },
    ...mapActions("domain", ["fetchAllVotes"])
  }
};
</script>