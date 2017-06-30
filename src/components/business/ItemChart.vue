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
                optionDatas: [],
            }
        },

        created() {
            this.listItemRecords();
        },

        methods: {
            renderChart(id, optionDatas) {
                let myChart = echarts.init(document.getElementById(id));
                // 绘制图表
                let options = this.createOptions(optionDatas);

                myChart.setOption(options[0]);
            },

            createOptions(optionDatas) {
                let options = [];
                for (let optionData of optionDatas) {
                    let option = {
                        title: {
                            text: optionData.name ,
                            subtext: optionData.desc
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
                            data: optionData.days
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} ' + optionData.unit
                            },
                            axisPointer: {
                                snap: true
                            }
                        },

                        series: [
                            {
                                name: optionData.yAxisName,
                                type: 'line',
                                smooth: true,
                                data: optionData.yAxis,
                            }
                        ]
                    };

                    options.push(option);
                }

                return options;
            },

            listItemRecords() {
                this.$axios.post('/api/itemRecord/list', 'itemId=' + this.$route.params.itemId)
                    .then(function (response) {
                        this.optionDatas = response.data.data;

                        this.$nextTick(function () {
                            this.renderChart('main', this.optionDatas);
                        })
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
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
