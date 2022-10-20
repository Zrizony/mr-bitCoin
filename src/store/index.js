import { createStore } from "vuex";
import user from './modules/user.js'

const storeOptions = {
    strict: true,
    state() {
        return {
        }
    },
    mutations: {

    },
    getters: {

    },
    modules: {
        user
    }
}

// Create a new store instance.
const store = createStore(storeOptions)
export default store