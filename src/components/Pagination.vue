<template>
  <v-pagination
    @input="selectedPage"
    :value="getCurrentState.currentPage"
    :length="getCurrentState.allPages"
  ></v-pagination>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "Pagination",
  methods: {
    selectedPage(offsetValue) {
      const requestObject = {
        value: this.searchValue(),
        size: this.responseItems(),
        offset: (offsetValue - 1) * this.responseItems(),
      };
      this.getCoincidences(requestObject);
    },
    ...mapActions(["getCoincidences"]),
    ...mapState({
      searchValue: (state) => state.searchValue,
      responseItems: (state) => state.navigation.responseItems,
    }),
  },
  computed: mapGetters(["getCurrentState"]),
};
</script>
<style lang="scss">

</style>