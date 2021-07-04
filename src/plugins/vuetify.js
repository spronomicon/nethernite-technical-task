import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3b3355', // #E53935
            secondary: '#bfcde0', // #FFCDD2
            accent: '#000505', // #3F51B5
          },
        },
      },
});
