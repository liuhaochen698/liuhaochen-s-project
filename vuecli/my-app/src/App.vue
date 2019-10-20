<template>
  <div id="app">
    <Nav :activeObj="initActive"></Nav>
    <router-view @changeActive="thisActive"/>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";

export default {
  data() {
    return {
      initActive:{
        title:"电影",
        navName:"movie"
      }
      
    }
  },
  methods:{
    thisActive(obj){
      console.log(obj)
        this.initActive = obj
      }
  },
  components:{
    Nav
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.clearfixed::after{
  content: "";
  display: block;
  clear: both;
}
body{
    padding: 1rem 0 1rem 0;
}
</style>
