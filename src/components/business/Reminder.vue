<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="上传主图">
                <el-upload
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    class="upload-demo"
                    drag
                    action="/api/common/picture"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过10Mb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="提醒主题">
                <el-col :span="8">
                    <el-input placeholder="请输入主题" v-model="form.title"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="提醒内容">
                <el-col :span="8">
                    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}"
                              placeholder="请输入内容" v-model="form.content"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="收件邮箱">
                <el-col :span="8">
                    <el-input placeholder="请输入收件邮箱" v-model="form.email"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="定时规则">
                <el-col :span="8">
                    <el-input placeholder="请输入定时规则" v-model="form.cron"></el-input>
                </el-col>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>

    export default {
        data() {
            return {
                form: {
                    content: null,
                    pictureUrl: null,
                    title: null,
                    cron: null,
                    email: null

                },
                rules: {}
            }
        },

        created() {

        },

        methods: {
            handleAvatarSuccess(res, file) {
                this.form.pictureUrl = res.data;
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 10;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 或者 PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 10MB!');
                }
                return isJPG && isLt2M;
            },

            onSubmit() {
                this.$axios.post("/api/reminder", this.form)
                    .then(function (response) {
                        this.$message({
                            message: '创建提醒事项成功',
                            type: 'success'
                        });
                        this.$router.push({name: 'reminderList'});
                    }.bind(this))
            }
        }
    }
</script>

<style scoped>
</style>
