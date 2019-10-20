<template>
    <div class="loading" v-if="!isShow">
        <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div v-else>
        <a-player ref="aplayer" :audio="audio" :lrc-type="3"></a-player>
        <table class="music-item">
            <thead>
                <tr>
                    <td>编号</td>
                    <td>歌曲名称</td>
                    <td>歌手</td>
                </tr>
            </thead>
            <tbody>
                <tr @click="musicClick(item.id)" v-for="(item,index) in musicList" :key="item.id">
                    <td class="musicNumber">{{index+1}}</td>
                    <td class="musicName">{{item.name}}</td>
                    <td>{{item.ar[0].name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
export default {
    data() {
        return {
            isShow : false,
            musicList:[],
            audio: [
            {
            name: '东西（Cover：林俊呈）',
            artist: '纳豆',
            url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
            },
       
      ],
        }
    },
    created() {
        let obj = {
            title:"音乐",
            navName:"music"
        }
        this.$emit("changeActive",obj)
        this.getData()
    },
    methods: {
        musicClick(id){
            let musicApi = "https://bird.ioliu.cn/netease/song?id="+id
            axios.get(musicApi).then((res)=>{
                console.log(res);
                
                    this.audio[0].name = res.data.data.name,
                    this.audio[0].artist = res.data.data.ar[0],name,
                    this.audio[0].url = res.data.data.mp3.url,
                    this.audio[0].cover = res.data.data.al.picUrl, // prettier-ignore
                    this.$refs.aplayer.play()
            })
        },
        getData(){
            axios.get("https://bird.ioliu.cn/netease/playlist?id=2797862333").then((res)=>{
                console.log(res.data.playlist.tracks)
                this.musicList = res.data.playlist.tracks;
                this.isShow = true
            })
        }
    },
}
</script>
<style scoped>
.music-item{
    font-size: 0.4rem;
    border: 0;
    border-collapse: collapse;
}
.music-item tbody tr:nth-child(odd){
    background: #f7f7f7;
}
.music-item tbody tr td{
    font-size: 0.3rem;
    width:190px;
    height: 50px;
    
}
.musicName{
    padding-right: 20px;
}
.musicNumber{
    padding-left: 15px;
}
.loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%)
}
</style>