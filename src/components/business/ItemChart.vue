<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div id="main"></div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import echarts from 'echarts'


    export default {
        data() {
            return {
                option: {
                    title: {text: this.$route.params.itemId + "的报表数据展示"},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },

        created() {
            this.$nextTick(function() {
                this.renderChart('main');
            })

        },

        methods: {
            renderChart(id) {
                let myChart = echarts.init(document.getElementById(id));
                // 绘制图表
                myChart.setOption(this.option);
            }
        }


    }


</script>

<style scoped>
    #main {
        /*需要制定具体高度，以px为单位*/
        height: 400px;
    }
</style>
