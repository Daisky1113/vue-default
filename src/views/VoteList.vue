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
              v-icon.ml-2(v-if="tecSortState.active && tecSortState.up") mdi-arrow-up-circle-outline
              v-icon.ml-2(v-if="tecSortState.active && tecSortState.down") mdi-arrow-down-circle-outline
          v-list-item-title.text-center
            v-btn.grey--text(outlined  @click.stop="serviceSort") サービス点
              v-icon.ml-2(v-if="serviceSortState.active && serviceSortState.up") mdi-arrow-up-circle-outline
              v-icon.ml-2(v-if="serviceSortState.active && serviceSortState.down") mdi-arrow-down-circle-outline
          v-list-item-title.text-center
            v-btn.grey--text(outlined  @click.stop="totalSort") 総合点
              v-icon.ml-2(v-if="totalSortState.active && totalSortState.up") mdi-arrow-up-circle-outline
              v-icon.ml-2(v-if="totalSortState.active && totalSortState.down") mdi-arrow-down-circle-outline
          v-list-item-title.grey--text.text-center Action
        v-list-item(v-if="data.id != 0 && data.id != 12 && data.id != 14 && data.id != 26 && data.id != 34" v-for="data in voteList" :key ="data.id")
          v-list-item-avatar
            v-img(:src="'./img/avatars/avatar-' + data.id + '.jpg'")
          v-list-item-title {{ data.name }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.tecPoint -1] }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.servicePoint -1 ]}}
          v-list-item-title.text-center {{ (data.tecPoint + data.servicePoint) / 2 }}
          v-list-item-title.text-center
            v-btn(icon @click="edit(data.id)")
              v-icon mdi-file-document-edit-outline
</template>
<style>
.v-tabs-slider-wrapper {
  display: none !important;
}
</style>
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
    console.log("vote");
    console.log(this.voteList);
  },
  beforeMount() {
    this.totalSort();
    console.log("beforemount");
  },
  data: function() {
    return {
      sortMode: "defaultSort",
      tecSortState: {
        active: false,
        up: false,
        down: true
      },
      serviceSortState: {
        active: false,
        up: false,
        down: true
      },
      totalSortState: {
        active: true,
        up: false,
        down: true
      }
    };
  },
  computed: {
    voteList() {
      return this.$store.state.members;
    }
  },
  methods: {
    edit(id) {
      this.setCurrentMemberId(id);
      this.openVoteForm();
    },
    tecSort() {
      this.tecSortState.active = true;
      this.serviceSortState.active = false;
      this.totalSortState.active = false;
      this.tecSortState.up = !this.tecSortState.up;
      this.tecSortState.down = !this.tecSortState.down;
      this.voteList.sort((a, b) => {
        if (this.tecSortState.up) {
          return a.tecPoint < b.tecPoint ? -1 : 1;
        } else {
          return a.tecPoint > b.tecPoint ? -1 : 1;
        }
      });
    },
    serviceSort() {
      this.tecSortState.active = false;
      this.serviceSortState.active = true;
      this.totalSortState.active = false;
      this.serviceSortState.up = !this.serviceSortState.up;
      this.serviceSortState.down = !this.serviceSortState.down;
      this.voteList.sort((a, b) => {
        if (this.serviceSortState.up) {
          return a.servicePoint < b.servicePoint ? -1 : 1;
        } else {
          return a.servicePoint > b.servicePoint ? -1 : 1;
        }
      });
    },
    totalSort() {
      this.tecSortState.active = false;
      this.serviceSortState.active = false;
      this.totalSortState.active = true;
      this.totalSortState.up = !this.totalSortState.up;
      this.totalSortState.down = !this.totalSortState.down;
      this.voteList.sort((a, b) => {
        if (this.totalSortState.up) {
          return (a.tecPoint + a.servicePoint) / 2 <
            (b.tecPoint + b.servicePoint) / 2
            ? -1
            : 1;
        } else {
          return (a.tecPoint + a.servicePoint) / 2 >
            (b.tecPoint + b.servicePoint) / 2
            ? -1
            : 1;
        }
      });
    },
    ...mapMutations([
      "setCurrentMemberId",
      "openVoteForm",
      "defaultSort",
      "vote"
    ])
  }
};
</script>