<template>
    <div>
        <el-row>
            <vcharts :option="o" :canvasId="index" :height="400" v-for="(o,index) in options" :key="index"></vcharts>

            <h3>减肥报表</h3>

            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">

                </el-table-column>
                <el-table-column :prop="o.id + ''" :label="o.displayName" width="180" v-for="(o,index) in itemParams" :key="o.id">

                </el-table-column>
                <el-table-column prop="desc" label="备注">

                </el-table-column>
            </el-table>
        </el-row>

    </div>

</template>

<script>
    import vcharts from './Vcharts'

    export default {
        data() {
            return {
                options: [],

                tableData: [],

                itemParams: []
            }
        },

        created() {
            this.listItemRecords();
            this.fetchItemReport();
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

            initReport(data) {
                this.itemParams = data.itemParams;

                this.tableData = data.recordMaps;
            },

            listItemRecords() {
                this.$axios.post('/api/itemRecord/list', 'itemId=' + this.$route.params.itemId)
                    .then(function (response) {
                        this.createOptions(response.data.data)
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            fetchItemReport() {
                this.$axios.post('/api/itemRecord/report', 'itemId=' + this.$route.params.itemId)
                    .then(function (response) {
                        this.initReport(response.data.data)
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
