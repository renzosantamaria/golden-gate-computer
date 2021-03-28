import Vue from 'vue'
import App from './App.vue'
import router from './router'
import data from "@/assets/data.js";

Vue.config.productionTip = false

new Vue({
  data(){
    return{
      data: data,
      singleProd: null,
      searchPhrase: '',
      filteredProducts : []
    }
  },
  methods:{
    searchFunction(){
      let products = this.data
      let searchPhrase = this.searchPhrase
      if (searchPhrase.length == 0 ) {
        return products
      } else {
        //--
        this.filteredProducts = []
        products.map(prod => {
          for (let key in prod) {
            if (typeof prod[key] != 'number') {
              if (prod[key].toLowerCase().includes(searchPhrase)) { //hittar en match
                if (this.filteredProducts.length == 0) {
                  this.filteredProducts.push(prod)
                }
                let rep = true
                this.filteredProducts.map(filProd => {
                  if (filProd.id != prod.id) {
                    rep = false
                  }
                  if (filProd.id == prod.id) {
                    rep = true
                  }
                })
                if (rep == false) {
                  this.filteredProducts.push(prod)
                }
              }
            }
          }
        })
        //--
        return this.filteredProducts
      }
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
