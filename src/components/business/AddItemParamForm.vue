<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
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


        <el-button size="large" type="danger" style="margin-top: 5px" @click="onSubmit()">完成添加</el-button>

    </div>

</template>

<script>
    export default {

        data() {
            return {
                form: {
                    itemParams: [{
                        itemId: this.$route.params.itemId,
                        displayName: '',
                        unit: '',
                    }],
                }
            }
        },

        methods: {
            addItemParam() {
                this.form.itemParams.push({
                    itemId: this.$route.params.itemId,
                    displayName: '',
                    unit: ''
                })
            },

            deleteItemParam(index) {
                this.form.itemParams.splice(index, 1);
            },

            onSubmit() {
                this.$axios.post("/api/itemParam", this.form.itemParams)
                    .then(function (response) {
                        let resp = response.data;
                        if (resp.resultCode === "0") {
                            this.$message({
                                message: '恭喜,添加属性成功',
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
