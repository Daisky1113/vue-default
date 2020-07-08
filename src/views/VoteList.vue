<template lang="pug">
  v-container
    VoteForm(
      v-if="this.$store.state.UI.isVoteFormShow"
      :tec="this.currentVoteData.tec"
      :ser="this.currentVoteData.service"
      :name="this.currentVoteData.name")
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
        v-list-item(v-for="data in voteData" :key ="data.id")
          v-list-item-title
              v-icon(v-if="data.is_voted") mdi-check
              v-icon(v-if="!data.is_voted") mdi-file-document-outline
              span.ml-2 {{ data.name }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.tec -1] }}
          v-list-item-title.text-center {{ ['S','A','B','C','D'][data.service -1 ]}}
          v-list-item-title.text-center {{ (data.tec + data.service) / 2 }}
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
// import ProductInfoDialog from "../components/ProductInfoDialog.vue";
// import Snackbar from "../components/Snackbar.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    VoteForm
    // Snackbar,
    // ProductInfoDialog
  },
  created() {
    // console.log("vote");
    // console.log(this.voteList);
    console.log(this.voteData);
  },
  beforeMount() {
    // this.totalSort();
    // console.log("beforemount");
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
    ...mapGetters("domain", ["currentVoteData", "voteData"])
  },
  methods: {
    edit(id) {
      this.setCurrentTeamId(id);
      this.voteFormShow();
    },
    tecSort() {
      this.tecSortState.active = true;
      this.serviceSortState.active = false;
      this.totalSortState.active = false;
      this.tecSortState.up = !this.tecSortState.up;
      this.tecSortState.down = !this.tecSortState.down;
      this.voteData.sort((a, b) => {
        if (this.tecSortState.up) {
          return a.tec < b.tec ? -1 : 1;
        } else {
          return a.tec > b.tec ? -1 : 1;
        }
      });
    },
    serviceSort() {
      this.tecSortState.active = false;
      this.serviceSortState.active = true;
      this.totalSortState.active = false;
      this.serviceSortState.up = !this.serviceSortState.up;
      this.serviceSortState.down = !this.serviceSortState.down;
      this.voteData.sort((a, b) => {
        if (this.serviceSortState.up) {
          return a.service < b.service ? -1 : 1;
        } else {
          return a.service > b.service ? -1 : 1;
        }
      });
    },
    totalSort() {
      this.tecSortState.active = false;
      this.serviceSortState.active = false;
      this.totalSortState.active = true;
      this.totalSortState.up = !this.totalSortState.up;
      this.totalSortState.down = !this.totalSortState.down;
      this.voteData.sort((a, b) => {
        if (this.totalSortState.up) {
          return (a.tec + a.service) / 2 < (b.tec + b.service) / 2 ? -1 : 1;
        } else {
          return (a.tec + a.service) / 2 > (b.tec + b.service) / 2 ? -1 : 1;
        }
      });
    },
    ...mapMutations("domain", ["setCurrentTeamId"]),
    ...mapMutations("UI", ["voteFormShow"])
  }
};
</script>