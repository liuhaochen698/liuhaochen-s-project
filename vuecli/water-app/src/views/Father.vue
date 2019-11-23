<template>
    <div>
        <linegraph :id="'bargraph'" :data="option" style="height:350px;"></linegraph>

    </div>
</template>

<script>
    import linegraph from '../components/linegraph.vue'
    export default {
        data(){
            return{
                notAccess:false,
                ChartLineGraph2:null,
                option:{
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 800],
                        type: 'line'
                    }]
                },


            }
        },
        mounted(){

        },
        components:{

            linegraph,
        }

    }

</script>

<style scoped>

</style>