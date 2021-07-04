<template>
  <v-card>
    <v-card-title class="text-h4">
      {{ packageInfo.name }} (v{{packageInfo.version}})
    </v-card-title>
    <v-card-subtitle class="text-h6">
      {{ author }}
    </v-card-subtitle>
    <v-card-text>
      {{ packageInfo.description }}
    </v-card-text>
    <v-card-actions v-if="links">
      <v-btn
        v-if="links.npm"
        :href="links.npm"
        target="_blank"
        color="blue darken-1"
        text
      >
        NPM
      </v-btn>
      <v-btn
        v-if="links.repository"
        :href="links.repository"
        target="_blank"
        color="blue darken-1"
        text
      >
        Repository
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn color="gray darken-1" text @click="closeDialog"> Close </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "PackageInfo",
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  computed: {
    ...mapState({
        packageInfo: state => state.package.chosenPackage.package
    }),
    author() {
      return this.packageInfo.author !== undefined
        ? this.packageInfo.author.name
        : this.packageInfo.publisher.username;
    },
    links() {
      return this.packageInfo.links !== undefined
        ? this.packageInfo.links
        : undefined;
    },
  },
};
</script>
<style scoped>
</style>