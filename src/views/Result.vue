<template lang="pug">
  v-container
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
import { mapMutations } from "vuex";
import firebase from "firebase";
export default {
  components: {},
  created() {
    console.log(this.$route);
    const result = {
      "0": [],
      "1": [],
      "2": [],
      "3": [],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": [],
      "10": [],
      "11": [],
      "12": [],
      "13": [],
      "14": [],
      "15": [],
      "16": [],
      "18": [],
      "19": [],
      "20": [],
      "21": [],
      "22": [],
      "23": [],
      "24": [],
      "25": [],
      "26": [],
      "27": [],
      "28": [],
      "29": [],
      "30": [],
      "31": [],
      "32": [],
      "33": [],
      "34": [],
      "35": [],
      "36": [],
      "37": []
    };
    firebase
      .database()
      .ref("vote")
      .once("value", snap => {
        const allData = snap.val();
        const m = [
          {
            id: 0,
            name: "中村大輔",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 1
          },
          {
            id: 1,
            name: "石塚 政輝",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 4
          },
          {
            id: 2,
            name: "井上 隆三",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 4
          },
          {
            id: 3,
            name: "岩下 広司",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 1
          },
          {
            id: 4,
            name: "大井 理恵",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 5
          },
          {
            id: 5,
            name: "小栗 佑基",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 2
          },
          {
            id: 6,
            name: "尾仲 慎一",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 1
          },
          {
            id: 7,
            name: "小野川 瑞季",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 4
          },
          {
            id: 8,
            name: "加川 大輔",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 3
          },
          {
            id: 9,
            name: "川野 翔太郎",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 1
          },
          {
            id: 10,
            name: "久保田 仁",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 5
          },
          {
            id: 11,
            name: "香村 尚輝",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 3
          },
          {
            id: 12,
            name: "古謝 龍聖",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 4
          },
          {
            id: 13,
            name: "小菅 翔一朗",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 4
          },
          {
            id: 14,
            name: "小林 大河",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 3
          },
          {
            id: 15,
            name: "古牧 佑悟",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 2
          },
          {
            id: 16,
            name: "関口 景太",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 3
          },
          {
            id: 18,
            name: "田中 翔那",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 1
          },
          {
            id: 19,
            name: "田中 喜規",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 3
          },
          {
            id: 20,
            name: "谷口 真治",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 5
          },
          {
            id: 21,
            name: "戸渡 文子",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 4
          },
          {
            id: 22,
            name: "内藤 迅",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 5
          },
          {
            id: 23,
            name: "⻄田 聖志",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 3
          },
          {
            id: 24,
            name: "橋詰 一平",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 1
          },
          {
            id: 25,
            name: "馬場 仁美",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 1
          },
          {
            id: 26,
            name: "半田 寿久",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 4
          },
          {
            id: 27,
            name: "本間 直子",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 3
          },
          {
            id: 28,
            name: "前田 達也",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 3
          },
          {
            id: 29,
            name: "松岡 功祐",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 1
          },
          {
            id: 30,
            name: "水谷 礼子",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 3
          },
          {
            id: 31,
            name: "柳原 政知",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 1
          },
          {
            id: 32,
            name: "山岸 大致",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 3
          },
          {
            id: 33,
            name: "山崎 大輔",
            is_voted: false,
            tecPoint: 2,
            servicePoint: 3
          },
          {
            id: 34,
            name: "山枡 優大",
            is_voted: false,
            tecPoint: 3,
            servicePoint: 4
          },
          {
            id: 35,
            name: "水木 大悟",
            is_voted: false,
            tecPoint: 4,
            servicePoint: 3
          },
          {
            id: 36,
            name: "尾石 宗一",
            is_voted: false,
            tecPoint: 5,
            servicePoint: 2
          },
          {
            id: 37,
            name: "吉島 菜穂",
            is_voted: false,
            tecPoint: 1,
            servicePoint: 3
          }
        ];

        for (let k in allData) {
          for (let l in allData[k]) {
            // console.log(l);
            result["" + l].push(allData[k][l]);
          }
        }

        for (let m in result) {
          const totalTec =
            result[m].reduce((a, b) => {
              a += b.tec;
              return a;
            }, 0) / result[m].length;
          const totalService =
            result[m].reduce((a, b) => {
              a += b.service;
              return a;
            }, 0) / result[m].length;

          result[m] = {
            totalTec,
            totalService,
            total: (totalTec + totalService) / 2
          };
        }
        const sorteadResult = Object.entries(result).sort((a, b) => {
          return Number(a[1].totalService) < Number(b[1].totalService) ? -1 : 1;
        });
        console.log(m);
        console.log(
          sorteadResult.map(el => {
            return [m.find(n => n.id == el[0]).name, el[1]];
          })
        );
      });
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