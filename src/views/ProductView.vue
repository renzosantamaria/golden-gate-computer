<template>
  <div class="single-view-container">
    <div class="prod-img">
      <!-- <img :src="require(`@/assets/${product.img_src}.png`)" alt="image"> -->
    </div>

    <div class="content-wrapper">
      <div class="prod-name">
        <h2>{{product.name}}</h2>  
      </div>
      <div class="prod-info">
        <!-- <p><span class="prod-subtitle"><strong>Stock:</strong></span> {{product.stock}}</p>     -->
        <p><span class="prod-subtitle"><strong>Descripción:</strong></span> {{product.desc}}</p>  
        <p><span class="prod-subtitle"><strong>Precio:</strong></span> S/.{{product.price}}</p>  
      </div>
    </div>

    <div class="back-button">
      <router-link class="back-btn" to="/">Go back!</router-link>
    </div>


  </div>
</template>


<script>
export default {
  computed:{
    product(){
      let data = this.$root.data
      return data.find(prod => prod.id == this.$route.params.id)
    }
  },

  methods:{

  }
}
</script>


<style lang="scss">
.single-view-container{
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  .prod-img{
    padding: 1rem 0;
  }
  .content-wrapper{
    max-width: 440px;
    text-align: left;
    margin: 0 auto;
    .prod-name{
      margin-bottom: 1rem;
      text-align: center;
    }
    .prod-info{
      p{
        margin-bottom: 1rem;

      }

      .prod-subtitle{
        display: inline-block;
        width: 100px;
      }
    }
  }
  img{
    height: 260px;
  }
  .back-button{
    margin-top: 80px;
    .back-btn{
      text-decoration: none;
      padding: 1rem 2rem;
      color: black;
      border-radius: 8px;
      box-shadow: 2px 2px 6px rgba(138, 138, 138, 0.7);
      &:hover{
        background-color: rgb(54, 54, 54);
        color: blanchedalmond;
      }
    }
  }
}
</style>