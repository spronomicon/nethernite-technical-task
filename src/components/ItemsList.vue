<template>
  <div v-if="Object.keys(packages).length === 0" class="list-placeholder">
    Please type pckage name foe search...
  </div>
  <v-list v-else max-width="600">
    <v-list-item
      class="rounded"
      two-line
      v-for="(item, index) in packages"
      :key="index"
      @click="openDialogWindow(item)"
    >
      <v-list-item-content>
        <v-list-item-title>{{ item.package.name }}</v-list-item-title>
        <v-list-item-subtitle>{{
          item.package.description
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { eventBus } from "../main";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "ItemsList",
  components: {
    // Item,
  },
  data() {
    return {};
  },
  methods: {
    openDialogWindow(item) {
      this.setChosenPackage(item);
      eventBus.$emit("openDialogWindow");
    },
    ...mapMutations(["setChosenPackage"]),
    ...mapActions(["getCoincidences"]),
  },
  computed: mapState({
    packages: (state) => state.searchResult,
    responseItems: (state) => state.navigation.responseItems,
    currentOffset: (state) => state.navigation.currentOffset,
  }),
  created() {
    eventBus.$on("searchValue", (data) => {
      this.getCoincidences({
        value: data,
        size: this.responseItems,
        offset: this.currentOffset,
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.list-placeholder {
  text-align: center;
  font-size: 1.25rem;
}
.v-list{
  box-sizing: border-box;
  .v-list-item{
    border-bottom: 3px solid transparent;
    &:hover{
      box-sizing: border-box;
      background: #bfcde0;
      border-bottom: 3px solid #3b3355;
    }
    
  }
}
</style>