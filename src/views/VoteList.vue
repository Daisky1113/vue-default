<template lang="pug">
  v-container
    Snackbar
    VoteForm(:tec="this.$store.getters.currentMemberData.tecPoint" :ser="this.$store.getters.currentMemberData.servicePoint")
    ProductInfoDialog
    v-card
      v-list
        v-list-item
          v-list-item-title(@click.stop="defaultSort") Name
          v-list-item-title.text-center
            v-btn.grey--text(outlined  @click.stop="tecSort") 技術点
          v-list-item-title.text-center
            v-btn.grey--text(outlined  @click.stop="serviceSort") サービス点
          v-list-item-title.text-center
            v-btn.grey--text(outlined  @click.stop="totalSort") 総合点
          v-list-item-title.grey--text.text-center Action
        v-list-item( v-for="data in totalList" :key ="data.id")
          v-list-item-avatar
            v-img(:src="'./img/avatars/avatar-' + data.id + '.jpg'")
          v-list-item-title {{ data.name }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.tecPoint -1] }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.servicePoint -1 ]}}
          v-list-item-title.text-center {{ (data.tecPoint + data.servicePoint) / 2 }}
          v-list-item-title.text-center
            v-btn(icon @click="openInfo(data.id)")
              v-icon mdi-card-account-details-outline
            v-btn(icon @click="edit(data.id)")
              v-icon mdi-file-document-edit-outline
</template>
<script>
import VoteForm from "../components/VoteForm.vue";
import ProductInfoDialog from "../components/ProductInfoDialog.vue";
import Snackbar from "../components/Snackbar.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    VoteForm,
    Snackbar,
    ProductInfoDialog
  },
  created() {
    console.log(this.$route);
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
      this.setCurrentMemberId(id);
      this.openVoteForm();
    },
    openInfo(id) {
      this.setCurrentMemberId(id);
      this.openProductInfoDialog();
    },
    ...mapMutations([
      "openProductInfoDialog",
      "setCurrentMemberId",
      "openVoteForm",
      "defaultSort",
      "tecSort",
      "serviceSort",
      "totalSort",
      "vote"
    ])
  }
};
</script>