<template>
  <div id="app">
    <TheHeader />
    <router-view/>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components:{
    TheHeader
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1600px;
  margin: 0 auto;
  background-color: rgba(246, 246, 246, 0.548);
  // padding: 140px 0;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
