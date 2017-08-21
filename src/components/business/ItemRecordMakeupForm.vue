<!--项目记录表单提交-->
<template>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item :label="o.displayName" v-for="(o, index) in form.itemParams" :key="index">
            <el-col :span="8">
                <el-input type="number" v-model="o.value" :placeholder="o.unit"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="日期">
            <el-col :span="8">
                <el-date-picker type="date" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import {formatDate} from '../../utils/dateFormatter';

    export default {
        data() {
            return {
                form: {
                    itemParams: [],

                    desc: '补填',

                    date: new Date()
                },
                rules: {
                    /*weight: [
                     { required: true, message: '请输入体重(公斤)'}
                     ]*/
                }
            }
        },

        created() {
            this.listItemParams();
        },

        methods: {
            listItemParams() {
                this.$axios.post("/api/itemParam/list", "itemId=" + this.$route.params.itemId)
                    .then(function (response) {
                        this.form.itemParams = response.data.data;
                    }.bind(this))
            },

            onSubmit() {
                let itemParamValueList = [];
                let itemId = this.$route.params.itemId;

                for (let param of this.form.itemParams) {
                    let itemParamValue = {};
                    itemParamValue.itemId = itemId;
                    itemParamValue.value = param.value;
                    itemParamValue.itemParamId = param.id;

                    itemParamValueList.push(itemParamValue);
                }

                let itemRecord = {itemId: itemId, itemParamValueList: itemParamValueList, desc: this.form.desc, day: formatDate(this.form.date, "yyyy/MM/dd hh:mm:ss")};

                this.$axios.post("/api/itemRecord/makeup", itemRecord)
                    .then(function (response) {
                        this.$message({
                            message: '恭喜,录入成功',
                            type: 'success'
                        });
                    }.bind(this))
            }
        }
    }
</script>

<style scoped>
</style>
