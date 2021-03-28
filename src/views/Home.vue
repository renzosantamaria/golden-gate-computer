<template>
  <div class="home">
    <img class="hero" src="@/assets/hero3.jpeg" alt="">
    <h1>Products</h1>
    <ul>
      <li v-for="product in productList" :key="product.id"
      >
        <ProductCard
        @click.native="viewProduct(product.id)"
        :stock="product.stock"
        :category="product.category"
        :name="product.name"
        :desc="product.taste"
        :price="product.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>

import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard
  },
  data(){
  return{
    products: this.$root.data
  }
  },
  computed:{
    productList(){
      return this.$root.data
    }
  },
  methods:{
    viewProduct(userId){
      this.$router.push({ path: `/product/${userId}` })
    }
  }
}
</script>

<style lang="scss">
.home{
  .hero{
    width: 100%;
    margin-bottom: 80px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li{
      list-style: none;
      margin: auto;
      cursor: pointer;
    }
  }
}
</style>