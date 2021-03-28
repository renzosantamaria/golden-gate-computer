<template>
  <header>
      <div class="header-content">
        <router-link class="logo" to="/">
            Golden Gate Computer
        </router-link>
        
        <div class="search">
            <input @input="search" v-model="phrase" id="search" type="text" placeholder="Search...">
            <div v-if="searchPhraseLength" class="search-result-wrapper">
                <ul>
                    <li
                    v-for="product in getSearchProducts" :key="product._id"
                    @click="cleanSearchPhrase"
                    >
                        <router-link :to="`/product/${product.id}`">
                            <div class="search-item-box">
                                <div class="img-wrapper">
                                    <!-- <img :src="require(`@/assets/${product.img_src}.png`)" alt="pic"> -->
                                </div>

                                <p>{{product.name}}</p> 
                                
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            phrase: ""
        }
    },
    computed:{
        searchPhraseLength(){
            return this.$root.searchPhrase.length
        },
        getSearchProducts(){
            return this.$root.filteredProducts
        }
    },
    methods:{
        search(){
            // console.log(this.phrase)
            this.$root.searchPhrase = this.phrase.toLowerCase()
            this.$root.searchFunction()
        },
        cleanSearchPhrase(){
            this.$root.searchPhrase = ''

        }
    }
}
</script>

<style lang="scss">
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.897);
    color: wheat;
    border-bottom: 1px solid rgb(202, 202, 202);
    .header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.4rem 1.6rem;
        .logo{
            font-family: 'Julius Sans One', sans-serif;
            text-decoration: none;
            color: black;
            font-size: 1.8rem;
            font-weight: 800;
        }
    }
    img{
        height: 60px;
    }
    .search{
        width: 260px;
        input{
            width: inherit;
            padding: 0.3rem;
            
        }
        .search-result-wrapper{
        background-color: rgb(235, 235, 235);
        position: absolute;
        width: inherit;
        ul{
            background-color:white;
            border: 1px solid rgb(177, 177, 177);
            max-height: 600px;   
            overflow-y:auto;
            overflow-x: hidden;
            &::-webkit-scrollbar-track
            {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
            }

            &::-webkit-scrollbar
            {
            width: 12px;
            background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb
            {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #5d5d5d;
            }
            li{
                padding: 0.4rem 0;
                display: flex;
                &:hover{
                    cursor: pointer;
                    background-color: darken($color: rgb(235, 235, 235), $amount: 10);
                }
                a{
                    display: flex;
                    align-items: center;
                    list-style: none;
                    color: black;
                    text-decoration: none;
                    font-size: 0.8rem;
                }
                p{
                    max-width: 160px;
                    text-align: left;
                }
                .search-item-box{
                    width: 100%;
                    // padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    .img-wrapper{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 40px;
                        width: 40px;
                        margin-right: 6pxpx;

                        img{
                            height: 35px;
                        }
                    }
                }
            }
        }
    }
    }

    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
        .search{
            width: 190px;
            .search-result-wrapper{
                ul{
                    li{
                        p{
                            max-width: 130px;
                            font-size: 0.8rem;
                        }
                    }
                }

            }
        }
    }
                
}
</style>