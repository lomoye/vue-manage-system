<template>
    <div>
        <el-row>
            <el-col :span="24">
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
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} kg'
                        },
                        axisPointer: {
                            snap: true
                        }
                    },

                    series: [
                        {
                            name: '用电量',
                            type: 'line',
                            smooth: true,
                            data: [],
                        }
                    ]
                }
        }
        },

        created() {


            this.$nextTick(function () {
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
