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
        <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="">
          <strong class="subheading">Developed by Viktor Suprun</strong>
  
          <v-spacer></v-spacer>
  
          <v-btn
            class="mx-4"
            dark
            icon
            :href="contact.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ contact.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
  
        <v-card-text class="white--text text-center">
          Repository - <a :href="contact.repo" target="_blank" class="repository"><strong>https://github.com/spronomicon/nethernite-technical-task</strong></a>
        </v-card-text>
        
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} for <strong>Nethernite</strong>
        </v-card-text>
      </v-card>
    </v-footer>
      </v-main>
      
    </v-theme-provider>
  </v-app>
</template>

<script>
import ItemsList from "./components/ItemsList";
import PackageInfo from "./components/PackageInfo";
import Pagination from "./components/Pagination";
import { eventBus } from "./main";

export default {
  name: "App",
  components: {
    ItemsList,
    PackageInfo,
    Pagination,
  },
  data() {
    return {
      isOpenModalDialog: false,
      contact: { 
        icon:'mdi-linkedin',
        link:'https://www.linkedin.com/in/viktor-suprun-885427191',
        repo:'https://github.com/spronomicon/nethernite-technical-task',
        },
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
    margin: 20px auto;

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

    .repository{
      color: #fff;
    }
  }
}
</style>