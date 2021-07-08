import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productsList: [
      {
        id: 1,
        tittle: "Apple",
        price: 15,
        imgSrc:
          "https://img2.zakaz.ua/20160519.1463648077.ad72436478c_2016-05-19_Yana/20160519.1463648077.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg",
        description: "Fresh apple",
      },
      {
        id: 2,
        tittle: "Peach",
        price: 35,
        imgSrc:
          "https://image.jimcdn.com/app/cms/image/transf/dimension=475x1024:format=png/path/s0b259120d5963c22/image/i0db0c5a8f72aa0c5/version/1485797700/image.png",
        description: "Freash peach",
      },
      {
        id: 3,
        tittle: "Strawberry",
        price: 32,
        imgSrc:
          "https://n1s1.hsmedia.ru/42/1d/e2/421de250b5e2aca7ffb4191aa0681f26/620x462_1_480b3b8b4f78aa27dd1fb42e7f44583e@1000x745_0xac120003_1375478751562646998.jpg",
        description: "Fresh strawberry",
      },
    ],
  },
  getters: {
    getProductsList: ({ productsList }) => productsList,
    getProductById: (state) => (id) =>
      state.productsList.find((item) => item.id === id),
  },
  mutations: {
    addProduct(state, product) {
      state.productsList.push(product);
    },
    changeProduct(state, product) {
      const index = state.productsList.findIndex(
        (item) => item.id === product.id
      );
      state.productsList[index] = product;
    },
    deleteProduct(state, id) {
      state.productsList = state.productsList.filter((item) => item.id !== id);
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit("addProduct", {
        tittle: product.tittle,
        price: product.price,
        imgSrc: product.imgSrc,
        id: new Date().getTime(),
      });
    },
    changeProduct({ commit }, product) {
      commit("changeProduct", product);
    },
    deleteProduct({ commit }, productId) {
      commit("deleteProduct", productId);
    },
  },
});

export default store;
