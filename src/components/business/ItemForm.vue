<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="项目名称" prop="name">
                <el-col :span="8">
                    <el-input v-model="form.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="项目描述">
                <el-col :span="8">
                    <el-input v-model="form.desc"></el-input>
                </el-col>
            </el-form-item>


            <el-button style="margin-bottom: 5px" @click="addItemParam()">添加记录参数</el-button>


            <div id="itemParams">
                <el-row>
                    <el-col :span="8" v-for="(o, index) in form.itemParams" :key="index">
                        <el-form ref="form" :model="o" label-width="80px" class="paramForm">
                            <el-form-item label="文案">
                                <el-col :span="8">
                                    <el-input v-model="o.displayName"></el-input>
                                </el-col>
                            </el-form-item>

                            <el-form-item label="单位">
                                <el-col :span="8">
                                    <el-input v-model="o.unit"></el-input>
                                </el-col>
                            </el-form-item>

                            <el-row>
                                <el-col :push="20">
                                    <el-button @click="deleteItemParam(index)" icon="delete"></el-button>
                                </el-col>
                            </el-row>

                        </el-form>
                    </el-col>
                </el-row>
            </div>


        </el-form>


        <el-button size="large" type="danger" style="margin-top: 5px" @click="onSubmit()">完成创建</el-button>

    </div>

</template>

<script>
    export default {

        data() {
            return {
                form: {
                    name: '',
                    desc: '',
                    itemParams: [{
                        displayName: '体重',
                        unit: 'kg',
                    }],
                },




                rules: {
                    name: [
                        {required: true, message: '请输入项目名'}
                    ]
                }
            }
        },

        methods: {
            addItemParam() {
                this.form.itemParams.push({
                    displayName: '',
                    unit: ''
                })
            },

            deleteItemParam(index) {
                this.form.itemParams.splice(index, 1);
            },

            onSubmit() {
                this.$axios.post("/api/item", this.form)
                    .then(function (response) {
                        let resp = response.data;
                        if (resp.resultCode === "0") {
                            this.$message({
                                message: '恭喜,添加项目成功',
                                type: 'success'
                            });
                            this.$router.push({name: 'itemList'});
                        } else {
                            this.$message.error(resp.resultMessage);
                        }
                    }.bind(this))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
    #itemParams {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        transition: .2s;
    }

    .paramForm {
        border: 1px solid #eaeefb;
        border-radius: 4px;
        transition: .2s;
        margin: 20px;
        padding: 10px;
    }

    .paramForm:hover {
        border: 1px solid #13ce66;
        border-radius: 4px;
        transition: .2s;
        margin: 20px;
        padding: 10px;
    }
</style>
