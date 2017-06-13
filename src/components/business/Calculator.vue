<template>
    <div id="main_panel">
        <el-row>
            <el-col :span="24">
                <el-button v-for="formula in formulas" @click="printFormula(formula)">{{ formula }}</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" >
                <div class="grid-content" v-model="formulaData" contenteditable="true"><img src="https://www.baidu.com/img/bd_logo1.png"/>{{ showFormulaData }}</div>

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
                formulaData: "",

                showFormulaData: ""
            }
        },

        methods: {
            printFormula(formula) {
                this.formulaData += formula;
            }
        },

        watch: {
            formulaData: function () {
                console.log(this.formulaData);
                this.showFormulaData = this.formulaData;
            }
        }


    }
</script>

<style scoped>
    .grid-content {
        border: 1px solid #e0e0e0;
        min-height: 221px;
    }

</style>
