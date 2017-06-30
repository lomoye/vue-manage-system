<template>
    <div>
        <el-row>
            <vcharts :option="o" :canvasId="index" :height="400" v-for="(o,index) in options" :key="index"></vcharts>
        </el-row>
    </div>

</template>

<script>
    import vcharts from './Vcharts'

    export default {
        data() {
            return {
                optionDatas: [],
                options: []
            }
        },

        created() {
            this.listItemRecords();
        },

        methods: {
            createOptions(optionDatas) {
                let options = [];
                for (let optionData of optionDatas) {
                    let option = {
                        title: {
                            text: optionData.name,
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

                this.options = options;
            },

            listItemRecords() {
                this.$axios.post('/api/itemRecord/list', 'itemId=' + this.$route.params.itemId)
                    .then(function (response) {
                        this.optionDatas = response.data.data;

                        this.createOptions(this.optionDatas)
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

        components: {
            vcharts
        }
    }


</script>

<style scoped>
    #main {
        /*需要制定具体高度，以px为单位*/
        height: 400px;
    }
</style>
