<template>
    <div class="book-item">
       <p>{{this.title}}</p>
       <p>{{this.promote_desc}}</p>
       <p>{{this.promote_price}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:"",
            author:"",
            promote_desc:"",
            promote_price:"",
        }
    },
    created() {
        let obj = {
            title:"书籍详情",
            navName:"bookDetail"
        }
        this.$emit("changeActive",obj)
        this.getData(this.$route.params.id)
    },
    methods: {
        getData(id){
            let birdApi = 'https://bird.ioliu.cn/v2?url=';
            let bookDetailApi = "https://m.douban.com/rexxar/api/v2/market/book/"+id
            axios.get(birdApi+bookDetailApi).then((res)=>{
                console.log(res)    
                this.title = res.data.data.title,
                this.promote_desc = res.data.data.promote_desc,
                this.promote_price = res.data.data.promote_price,
                this.author = res.data.data.subject.author[0]
               
            })
        }
    },
}
</script>
<style scoped>
.book-item p{
    font-size: 0.4rem;
}

</style>