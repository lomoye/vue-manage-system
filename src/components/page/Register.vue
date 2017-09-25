<template>
    <div class="register-wrap">
        <div class="ms-title">注册</div>
        <div class="ms-register">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="mobile">
                    <el-input v-model="ruleForm.mobile" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="nick">
                    <el-input v-model="ruleForm.nick" placeholder="昵称"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                              @keyup.enter.native="submitForm()"></el-input>
                </el-form-item>
                <el-form-item prop="passwordAgain">
                    <el-input type="password" placeholder="再次输入密码" v-model="ruleForm.passwordAgain"
                              @keyup.enter.native="submitForm()"></el-input>
                </el-form-item>

                <div class="register-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                ruleForm: {
                    nick: '',
                    mobile: '',
                    password: '',
                    passwordAgain: ''
                },
                rules: {
                    nick: [
                        {required: true, message: '请输入昵称', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                    passwordAgain: [
                        {validator: validatePassword, trigger: 'blur'}
                    ]
                }

            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/user/register', {
                            nick: this.ruleForm.nick,
                            mobile: this.ruleForm.mobile,
                            password: this.ruleForm.password,
                        }).then(function (response) {
                                this.$message({
                                    message: '注册成功',
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
    .register-wrap {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .ms-title {
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -230px;
        text-align: center;
        font-size: 30px;
        color: #8599fa;

    }

    .ms-register {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        height: 220px;
        margin: -150px 0 0 -190px;
        padding: 40px;
        border-radius: 5px;
        background: #fff;
    }

    .register-btn {
        text-align: center;
    }

    .register-btn button {
        width: 100%;
        height: 36px;
    }
</style>
