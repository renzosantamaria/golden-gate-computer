<template>
<div class="product-container">

  <!-- <img :src="require(`@/assets/${img_src}.png`)" alt="image"> -->
  <!-- <img :src="`/img/${img_src}.png`" > -->
  <!-- <img :src="`/static/${img_src}.jpeg`"> -->
  <h2>{{name}}</h2>
  <p> Categoria: {{category}}</p>
  <!-- <p>Stock: {{stock}}</p> -->
  <h3>Precio: S/.{{price}}</h3>
</div>
</template>

<script>

export default {
  props:[
    'name', 'desc', 'price', 'img_src', 'stock', 'category'
  ]

}
</script>

<style lang="scss">
.product-container{
  background-color: white;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0.6rem;
  img{
    height: 120px;
  }
}
</style>