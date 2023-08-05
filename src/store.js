import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      token: null,
    };
  },
  getters: {
    getToken: state => {
      return state.token
    }
  },
  mutations: {
    setToken(state, { token }) {
      state.token = token;
    },
  },
  plugins: [createPersistedState()]
});

export default store;