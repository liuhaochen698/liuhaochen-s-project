<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld :msg="str"></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
      str:"hello"
    }
  },
  components:{
    HelloWorld
  }
}
</script>
<style scoped>
  
</style>
