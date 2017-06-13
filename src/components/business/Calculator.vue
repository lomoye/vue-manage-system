<template>
    <div id="main_panel">
        <el-row>
            <el-col :span="24">
                <el-button v-for="formula in formulas" @click="printFormula(formula)">{{ formula }}</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <textarea class="grid-content">{{ formulaData }}</textarea>

            </el-col>
        </el-row>
    </div>


</template>

<script>

    export default {
        data() {
            return {
                formulas: [
                    "log", "sin", "cos", "tan"
                ],
                formulaData: ""
            }
        },

        methods: {
            printFormula(formula) {
                console.log(formula);
                this.formulaData += formula;
            }
        }

    }
</script>

<style scoped>
    .grid-content {
        border: 1px solid #e0e0e0;
        min-height: 221px;
    }

    textarea {
        width: 600px;
        height: 200px;
        max-width: 600px;
        max-height: 200px;
    }

</style>
