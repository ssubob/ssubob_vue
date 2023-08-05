import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      token: null,
      nickname: null,
    };
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
    getNickname: (state)=>{
      return state.nickname;
    }
  },
  mutations: {
    setToken(state, { token }) {
      state.token = token;
    },
    setNickname(state, { nickname }) {
      state.nickname = nickname;
    },
  },
  plugins: [createPersistedState()],
});

export default store;