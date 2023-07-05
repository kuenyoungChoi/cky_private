<template>
  <div id="app">
      <Nav/>
      <Header/>
      <router-view/>
      <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/NavCom.vue'
import Header from '@/components/HeaderCom.vue'
import Footer from '@/components/FooterCom.vue'
export default {
  name: 'App',

  components:{
    Nav, Header, Footer,
  },


  data: () => ({
    //
  }),


  mounted() {

  }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
