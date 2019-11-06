<template>
    <div id="app">
        <Header :selectMenu="selectMenu"></Header>
        <div class="nav">
            <div  type="card" @click="handleClick">
                <div label="超历史" name="first">

                </div>
                <div label="超保证" name="second">

                </div>
                <div label="超警戒" name="third">

                </div>
                <div label="快涨落" name="fourth">
                    <Footer :menu="menu4" :selectMenu="selectMenu" @change="fn"></Footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer.vue";

    export default {
        components: {
            Header,
            Footer,

        },
        data() {
            return {
                menu: [

                ],
                menu2: [

                ],
                menu3: [

                ],
                menu4: [


                ],
                selectMenu: {
                    name: "超警测站信息",

                },
                activeName: "first",
                content: []
            };
        },
        methods: {
            fn(index) {
                // console.log(index);
                this.selectMenu = this.menu[index];
            },
            handleClick(){

            }

    }
    };
</script>
<style scoped>
    .nav {
        margin-top: 1rem;
    }

    .el-tabs__nav {
        width: 100%;
        display: flex;
    }

    .el-tabs__item {
        flex: 1;
        text-align: center;
    }

    .el-carousel__item {
        background-color: #f2f6fc;
    }


    #myChart1 {
        margin: 0 1rem;
    }
</style>