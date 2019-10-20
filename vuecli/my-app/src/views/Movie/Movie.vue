<template>
    <div>
        <ul>
            <li @click="goDetail(item.id)" v-for="item in movieList" :kry="item.id" class="nav-item clearfixed">
                <div class="nav-left">
                    <img :src="'https://images.weserv.nl/?url='+item.cover.url">
                </div>
                <div class="nav-right">
                    <p>{{item.title}}</p>
                    <p>
                        主演：<span v-for="itemAct in item.actors" :key="itemAct">{{itemAct}}/</span>
                    </p>
                    <p>{{item.card_subtitle}}</p>
                    
                </div>
            </li>
           

        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            total:10,
            start:0,
            movieList:[]
        }
    },
    created() {
        let obj = {
            title:"电影",
            navName:"movie"
        }
        this.$emit("changeActive",obj)
        this.getData()
        this.pushScroll()
    },
    methods: {
    pushScroll(){
        let pScroll = document.documentElement;
        window.onscroll = ()=>{
            let cHeight = pScroll.clientHeight;
            let sHeight = pScroll.scrollHeight;
            let sTop = pScroll.scrollTop;
            // console.log(cHeight,sHeight,sTop)
            //cHeight+sTop=sHeight 触底
            if((sHeight-sTop) <= (cHeight+10)){
                this.start +=10;
                this.getData()
            }
        }
    },
    getData() {
        if (this.movieList.length != this.total) {
            let ioApi = 'https://bird.ioliu.cn/v2?url=';
            let urlApi = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.start}&count=10`
            axios.get(ioApi + urlApi).then((res) => {
                this.total  = res.data.total;
                this.movieList = this.movieList.concat(res.data.subject_collection_items) //共34条
            })
        }
    },
    goDetail(id){
        this.$router.push({
            name:"movieDetail",
            params:{
                id
            }
        })
    }
        
    },
   
}
</script>
<style scoped>
.nav-item{
    padding: 10px;
    border-bottom: 1px solid #dddddd;
}
.nav-left{
    float: left;
    width: 40%;
}
.nav-left img{
    width: 90%;
}
.nav-right{
    float: right;
    width:60%;
    font-size: 0.3rem;
}

</style>