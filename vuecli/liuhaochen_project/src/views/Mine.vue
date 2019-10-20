<template>
    <div>
        <h1>this is my page</h1>
        <router-link :to="{name:'test1',params:{name:'liuhaochen',age:22}}"> test1 |</router-link>
        <router-link to="/mine/test2"> test2</router-link>
        <router-view/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>