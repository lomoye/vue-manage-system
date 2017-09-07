<template>
    <div class="login-wrap">
        <div class="ms-title">数据记录</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="mobile">
                    <el-input v-model="ruleForm.mobile" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                              @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-radio-group v-model="isMobile" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">电脑端</el-radio-button>
                    <el-radio-button :label="true">手机端</el-radio-button>
                </el-radio-group>
                <a href="#register" target="_blank" class="register-btn">注册</a>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                isMobile: /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ,

                ruleForm: {
                    mobile: '',
                    password: ''
                },
                rules: {
                    mobile: [
                        {required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/user/login', this.ruleForm)
                            .then(function (response) {
                                //将userId存到游览器缓存里
                                localStorage.userId = response.data.data.id;
                                if (this.isMobile) {
                                    this.$router.push({name: 'mobileItemList'});
                                } else {
                                    this.$router.push({name: 'account'});
                                }
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
    .login-wrap {
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
        color: #fff;

    }

    .ms-login {
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

    .login-btn {
        text-align: center;
    }
    .register-btn {
        margin-left: 50px;
        font-size: 35px;
        border:1px solid #ff3068;
        border-radius: 20%;
        background: #ff1733;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
    }
</style>
