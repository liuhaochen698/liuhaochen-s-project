<template>
    <div :class="['nav-container',activeClass]">
        <header>
         <p>首页</p>
         <span>{{activeTitle}}</span>
        </header>
        <nav>
            <ul>
                <li @click="clickHandle(item)" v-for="(item,index) in navList"  :key="index">{{item.title}}</li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return{
            activeClass:"movie",
            activeTitle:"电影",
            navList:[
                {
                  title:"电影",
                  pathName:"/",
                  className:"movie"  
                },
                {
                  title:"音乐",
                  pathName:"/music",
                  className:"music"  
                },
                {
                  title:"书籍",
                  pathName:"/book",
                  className:"book"  
                },
                {
                  title:"聊天",
                  pathName:"/chat",
                  className:"chat"  
                }
            ],
            
        }
        
    },
    methods: {
                clickHandle(obj){
                    this.$router.push(obj.pathName);
                    this.activeClass = obj.className;
                    this.activeTitle = obj.title
                }
            },
    props:["activeObj"],
    watch: {
        activeObj2(){
        this.activeClass = this.activeObj.navName,
        this.activeTitle = this.activeObj.title
        }
       
    },
    computed: {
        activeObj2(){
            return this.activeObj.title
        }
    },
}
</script>
<style scoped>
.nav-container header,.nav-container nav{
    background: gray;
    height: 1rem;
    width: 100%;
}
.nav-container header{
    font-size: 0.8rem;
    position: fixed;
    top: 0;
    text-align: center
}
.nav-container header p{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.3rem
   
}
.nav-container nav{
    font-size: 0.5rem;
    position: fixed;
    bottom: 0;
}
.nav-container nav ul{
    display: flex;
}
.nav-container nav ul li{
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
}
.movie header,.movie nav{
background-color: rgb(33, 150, 243);
}
.music header,.music nav{
background-color: rgb(0, 150, 136);
}
.book header,.book nav{
background-color: rgb(121, 85, 72);
}
.chat header,.chat nav{
background-color: rgb(63, 81, 181);
}    
</style>