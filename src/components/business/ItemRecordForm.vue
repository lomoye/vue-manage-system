<!--项目记录表单提交-->
<template>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item prop="weight" label="体重" >
            <el-col :span="8">
                <el-input type="number" placeholder="单位:公斤" v-model.number="form.weight"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="日期">
            <el-col :span="8">
                <el-date-picker type="date" v-model="form.date" style="width: 100%;" readonly></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    weight: '',
                    date: new Date()
                },
                rules: {
                    weight: [
                        { required: true, message: '请输入体重(公斤)'}
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(form);
            }
        }
    }
</script>

<style scoped>
</style>
