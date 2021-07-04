import Vue from 'vue'
import Vuex from 'vuex'
import Package from './package'
import Navigation from './navigation'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        package: Package,
        navigation: Navigation
    },
    strict: true,
    state: {
        searchResult:[],
        searchValue:'',
    },
    getters: {},
    actions: {
        async getCoincidences({commit}, {value, size = 10, offset = 0}) {
            try{
                let response = await fetch(`https://registry.npmjs.org/-/v1/search?size=${size}&text=${value}&from=${offset}`)
                let data = await response.json()
                commit('searchResult', data.objects)

                commit('setSearchValue', value)

                commit('updateAllPages', data.total/size)
                commit('currentPage', offset/size+1)
                commit('currentOffset', offset)

            }
            catch(e){
                throw new Error(e);
            }
        },
    },
    mutations: {
        searchResult(state, packages) {
            state.searchResult = packages
        },
        setSearchValue(state, value) {
            state.searchValue = value
        },
    }
})


export default store;