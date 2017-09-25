<template>
    <div>
        <el-form :model="userSuggestForm" :rules="rules" ref="userSuggestForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="title">
                <el-input v-model="userSuggestForm.title" placeholder="标题"></el-input>
            </el-form-item>
            <el-form-item prop="content">
                <textArea class="contentArea" placeholder="内容" v-model="userSuggestForm.content"
                          @keyup.enter.native="submitForm('userSuggestForm')"></textArea>
            </el-form-item>
            <div>
                <el-button type="primary" @click="submitForm('userSuggestForm')">提交</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userSuggestForm: {
                    title: '',
                    content: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入建议内容', trigger: 'blur'}
                    ]
                }
            }
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/userSuggest', this.userSuggestForm)
                            .then(function (response) {
                                this.$message({
                                    message: '恭喜,添加建议成功',
                                    type: 'success'
                                });
                            }.bind(this))
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .contentArea {
        border-radius: 10px;
        width: 100%;
        height: 500px;
    }
</style>
