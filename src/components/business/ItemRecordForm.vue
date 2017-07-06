<!--项目记录表单提交-->
<template>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item :label="o.displayName" v-for="(o, index) in form.itemParams" :key="index">
            <el-col :span="8">
                <el-input type="number" v-model="o.value" :placeholder="o.unit"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="备注">
            <el-col :span="8">
                <el-input
                    type="textarea"
                    autosize
                    placeholder="可选填"
                    v-model="form.desc"
                    >
                </el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="日期">
            <el-col :span="8">
                <el-date-picker type="date" v-model="form.date" style="width: 100%;" readonly></el-date-picker>
            </el-col>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    itemParams: [],

                    desc: '',

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
                let self = this;
                this.$axios.post("/api/itemParam/list", "itemId=" + this.$route.params.itemId)
                    .then(function (response) {
                        self.form.itemParams = response.data.data;
                    })
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

                let itemRecord = {itemId: itemId, itemParamValueList: itemParamValueList, desc: this.form.desc};

                this.$axios.post("/api/itemRecord", itemRecord)
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
