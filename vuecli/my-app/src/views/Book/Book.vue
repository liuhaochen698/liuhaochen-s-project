<template>
    <div>
            <swiper class="swiper-item" :options="swiperOption">
                    <swiper-slide @click.native="bookHandle(item.id)" class="swiper-list" v-for="item in bookList" :key="item.id">
                        <img :src="'https://images.weserv.nl/?url='+item.cover.url" alt="">
                        <p>{{item.title}}</p>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    data() {
        return {
          bookList:[],
          swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
          el: '.swiper-pagination',
          clickable: true
          }
        }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    created() {
        let obj = {
            title:"书籍",
            navName:"book"
        }
        this.$emit("changeActive",obj)
        this.getData()
    },
    methods: {
        getData(){
            let birdApi = 'https://bird.ioliu.cn/v2?url=';
            let bookApi = "https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20"
            axios.get(birdApi+bookApi).then((res)=>{
                this.bookList =res.data.subject_collection_items
            })
        },
        bookHandle(id){
            this.$router.push({
                name:"bookDetail",
                params:{
                    id
                }
                
            })
        }
    },
}
</script>
<style scoped>
.swiper-list{
    width: 2rem;
    height: 5rem;
}
.swiper-list img {
    width: 100%;
    height: 100px;

}
.swiper-list p {
    font-size: 0.3rem;
}
</style>