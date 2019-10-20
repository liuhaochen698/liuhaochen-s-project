<template>
    <div>
        <div class="chat-item">
            <div class="chat-list" v-for="item in chatList" :key="item.id">
                    <div class="chat-question">{{item.question}}</div>
                    <div class="chat-answer">{{item.answer}}</div>
            </div>
            
        </div>
        <div class="chat-inp">
            <input type="text" v-model="msgItem">
            <button @click="sendMsg">发送</button>
        </div>
    </div>
</template>
<script>
import md5 from "blueimp-md5"
export default {
    data() {
        return {
            msgItem:"",
            chatList:[]
        }
    },
   
    created() {
        let obj = {
            title:"聊天",
            navName:"chat"
        }
        this.$emit("changeActive",obj)
    },
    methods: {
        getTimeStamp(){
            let timer = new Date();
            timer = Date.parse(timer);
            timer = timer.toString().substr(0,10)
            return timer
        },
        getNonceStr(){
            let str = Math.random().toString(36)
            return str.substr(2)
        },
        getSign(params){
            let arr = Object.keys(params).sort();
            let str = "";
            for(let i =0;i<arr.length;i++){
                str += arr[i]+"="+encodeURI(params[arr[i]])+"&"
            }
            str+="app_key=KFjVlp1hq88xy6g4";
            str = md5(str).toString().toUpperCase()
            return str;


        },
        sendMsg(){
            let birdApi = "https://bird.ioliu.cn/v2?url=";
            let chatApi = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
            let params = {
                     app_id:"2122079517",
                     time_stamp:this.getTimeStamp(),
                     nonce_str:this.getNonceStr(),
                     session:"10000",
                     question:this.msgItem
            }
            params.sign = this.getSign(params)
            axios.get(birdApi+chatApi,{
                params

            }).then((res)=>{
                this.chatList.push({
                    answer:res.data.data.answer,
                    question:this.msgItem
                })
                console.log(res)

            })
        },
    },
}
</script>
<style scoped>
    .chat-list{
        font-size: .4rem
    }
     .chat-list .chat-question{
         text-align: right;
         background-color: greenyellow;
         width: 100%;
         height: auto;
         
     }
     .chat-list .chat-answer{
         text-align: left;
         background-color: #f7f7f7;
     }
     .chat-inp{
         position: fixed;
         bottom: 10%;
         left: 20%;
     }
    </style>