<template>
  <v-app>
    <v-theme-provider light>
      <v-main>
        <v-container class="search-container">
          <v-text-field solo @change="sendSearchValue"></v-text-field>
        </v-container>

        <v-container class="list-wrapper">
          <ItemsList class="rounded" />
        </v-container>

        <v-container class="navigation">
          <Pagination />
        </v-container>

        <v-dialog
          @click:outside="closeModalDialog"
          v-model="isOpenModalDialog"
          max-width="600"
        >
          <PackageInfo @closeDialog="closeModalDialog" />
        </v-dialog>
        <Footer />
      </v-main>
      
    </v-theme-provider>
  </v-app>
</template>

<script>
import ItemsList from "./components/ItemsList";
import PackageInfo from "./components/PackageInfo";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { eventBus } from "./main";

export default {
  name: "App",
  components: {
    ItemsList,
    PackageInfo,
    Pagination,
    Footer,
  },
  data() {
    return {
      isOpenModalDialog: false,
    };
  },
  methods: {
    sendSearchValue(value) {
      if (value) eventBus.$emit("searchValue", value);
    },
    openModalDialog() {
      this.isOpenModalDialog = true;
    },
    closeModalDialog() {
      this.isOpenModalDialog = false;
    },
  },
  mounted() {
    eventBus.$on("openDialogWindow", () => {
      this.openModalDialog();
    });
  },
};
</script>

<style lang="scss">
#app {
  background: #5d5d81;
  .v-main {
    max-width: 1280px;
    width: 100%;
    margin: 40px auto 0px;

    .search-container {
      max-width: 600px;
      width: 100%;

      .v-text-field__details {
        display: none;
      }
    }

    .list-wrapper {
      max-width: 600px;
      padding: 0 12px;
      height: 670px;
    }

    .navigation {
      margin: 20px auto;
      max-width: 400px;
      width: 100%;
    }

  }
}
</style>