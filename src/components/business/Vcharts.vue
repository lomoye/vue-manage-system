<template>
    <div :id="canvasId" :style="{ height: height + 'px' }">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        created() {
            this.renderChart(this.option);
        },

        methods: {
            renderChart(option) {
                this.$nextTick(function () {
                    let canvas = document.getElementById(this.canvasId);

                    let myChart = echarts.init(canvas);
                    myChart.setOption(option);
                })
            }
        },

        props: {
            height: '',
            canvasId: '',
            option: {}
        }
    }
</script>

<style scoped>

</style>
