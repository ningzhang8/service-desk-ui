import { getMenuList } from '@/api/auth/menu'

const auth = {
  namespaced: true,
  state: {
    navBar: []
  },
  actions: {
    // 获取Navbar菜单
    GetNavBar({commit}) {
      return new Promise(resolve => {
        getMenuList().then((res) => {
          commit('SET_NAVBAR', res.data)
          resolve(res.data)
        });
      });
    }
  },
  mutations: {
    SET_NAVBAR: (state, navBar) => {
      state.navBar = navBar;
    },
    SET_ACTIVE_MENU: () => {

    },
  },
}

export default auth