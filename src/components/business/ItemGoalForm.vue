<template>
    <div>
        <p><em>制定目标</em></p>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="截止时间">
                <el-col :span="8">
                    <el-date-picker :editable="false" v-model="form.endTime" type="date" style="width: 100%;" ></el-date-picker>
                </el-col>
            </el-form-item>

            <el-form-item label="目标参数">
                <el-select v-model="form.itemParamId" placeholder="请选择">
                    <el-option
                        v-for="(itemParam, index) in itemParams"
                        :key="index"
                        :label="itemParam.displayName"
                        :value="itemParam.id">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="目标数值">
                <el-col :span="8">
                    <el-input type="number" v-model="form.goalNum"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="积分比率">
                <el-col :span="8">
                    <el-input type="number" placeholder="每改变0.1,增加多少积分,填整数" v-model="form.creditRate"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {formatDate} from '../../utils/dateFormatter';

    export default {
        data() {
            return {
                form: {
                    itemParamId: '',
                    endTime: '',
                    goalNum: '',
                    creditRate: ''
                },

                itemParams: []
            }
        },

        created() {
            this.listItemParams();
        },

        methods: {

            onSubmit() {
                let formData = {};
                formData.itemId = this.$route.params.itemId;
                formData.goalNum = this.form.goalNum;
                formData.creditRate = this.form.creditRate;
                formData.endTime = formatDate(this.form.endTime, "yyyy/MM/dd hh:mm:ss");
                formData.itemParamId = this.form.itemParamId;

                this.$axios.post('/api/itemGoal', formData)
                    .then(function (response) {
                        this.$message({
                            message: '创建目标成功',
                            type: 'success'
                        });
                    }.bind(this))
            },

            listItemParams() {
                this.$axios.post("/api/itemParam/list", "itemId=" + this.$route.params.itemId)
                    .then(function (response) {
                        this.itemParams = response.data.data;
                        console.log(this.itemParams)
                    }.bind(this))
            },

        }
    }

</script>

<style scoped>
    p > em {
        display: block;
        margin-bottom:30px;
    }
</style>
