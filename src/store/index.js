import Vue from 'vue'
import Vuex from 'vuex'
import products from '../mock/products.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    storeCart: []
  },

  getters: {
    products: (state) => state.products,
    storeCart: (state) => state.storeCart,
  },

  actions: {
    getProducts({ commit }) {
      commit("getProductData")
    },

    addToCart({ commit }, item) {
      commit("addItemToCart", item)
    },

    addQty({ commit }, id) {
      commit("addQty", id)
    },

    reduceQty({ commit }, id) {
      commit("reduceQty", id)
    },

    removeItem({ commit }, id) {
      commit("removeItem", id)
    },
  },

  mutations: {
    getProductData(state) {
      state.products = products;
    },

    addItemToCart(state, item) {
      const addedItem = state.storeCart.find((product) => product.id === item.id)
      if (!addedItem) {
        state.storeCart.push({ ...item, qty: 1 });
      } else {
        addedItem.qty++;

      }
    },

    addQty(state, id) {
      const currentItem = state.storeCart.find((product) => product.id === id)
      currentItem.qty++;
    },

    reduceQty(state, id) {
      const currentItem = state.storeCart.find((product) => product.id === id)
      if(currentItem.qty > 1) {
        currentItem.qty--;
      }else{
        state.storeCart = state.storeCart.filter(product => product.id !== id)  
      }
    },

    removeItem(state, id) {
      state.storeCart = state.storeCart.filter(product => product.id !== id)
    }
  },

  modules: {

  },
});
