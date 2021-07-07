import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productsList: [
      { id: 1, tittle: "Apple", price: 15, description: "Fresh apples" }, {id: 2, tittle: 'Potatoes', price: 20, description: 'Home Potatoes'}, {id: 3, tittle: 'Onoin', price: 30, description:'No tears onion'},   ],
  },
  mutations: {
      addProduct(state, product){
          state.productsList.push(product)
      },
      editProduct(state, product){
          const index = state.productsList.findIndex((item) => item.id === product)
          state.productsList[index] = product
      },
      deleteProduct(state, id){
          state.productsList = state.productsList.filter((product) => product.id !== id)
      }
  },
  actions: {
      createProduct({commit}, product){
          commit('addProduct', {
              tittle: product.tittle,
              price: product.price,
              description: product.description,
              id: new Date().getTime()
          })
      },
      editProduct({commit}, product){
          commit('editProduct', product)
      },
      deleteProduct({commit}, productId){
          commit('deleteProduct', productId)
      }
  },
  getters: {
      getProductsList: ({productsList}) => productsList,
      getProductById: (state) => (id) => {state.productsList.find((item )=> item.id===id)}
  },
  modules: {},
});

export default store;
