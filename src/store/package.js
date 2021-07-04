const Package = {
    state: () => ({
        chosenPackage: {}
    }),
    mutations: {
        setChosenPackage(state, data) {
            state.chosenPackage = data
        }
    },
    actions: {},
    getters: {}
}

export default Package;