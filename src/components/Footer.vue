<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="">
        <strong class="subheading">Developed by Viktor Suprun</strong>

        <v-spacer></v-spacer>

        <v-btn class="mx-4" dark icon :href="contact.link" target="_blank">
          <v-icon size="24px">
            {{ contact.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="white--text text-center">
        Repository -
        <a :href="contact.repo" target="_blank" class="repository"
          ><strong
            >https://github.com/spronomicon/nethernite-technical-task</strong
          ></a
        >
      </v-card-text>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} for <strong>Nethernite</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      contact: {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/viktor-suprun-885427191",
        repo: "https://github.com/spronomicon/nethernite-technical-task",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.repository {
  color: #fff;
}
</style>