import { createStore } from "vuex";
import auth from './modules/auth'
import getters from './getters'

const store = createStore({
  modules: {
    auth,
  },
  getters
});

export default store;
