const Navigation = {
    state: () => ({
        responseItems: 10,
        currentPage: 0,
        allPages: 0,
        currentOffset: 0
    }),
    mutations: {
        updateAllPages(state, data) {
            //Баг с API: после оффсета больше 5000 с количеством выводимых елементов 10, дальнейшее изменение оффсета не дает других результатов
            //Пришлось прописать ограничение, что б результаты не дублировались
            if(data > 501){
                state.allPages = 501
            }
            else{
                state.allPages = Math.ceil(data)
            }
        },
        currentPage(state, data) {
            state.currentPage = data
        },
        currentOffset(state, data) {
            state.currentOffset = data
        },
        resetNavigation(state) {
            state.currentPage = 0
            state.currentOffset = 0
        },
    },
    actions: {},
    getters: {
        getCurrentState(state){
            return {
                currentPage: state.currentPage,
                allPages: state.allPages,
                currentOffset: state.currentOffset,
            }
        }
    }
}

export default Navigation;