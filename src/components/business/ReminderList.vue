<template>
    <div>
        <el-table
            :data="reminders"
            border
            style="width: 100%">
            <el-table-column label="主图">
                <template slot-scope="scope">
                    <img :src="scope.row.pictureUrl" style="max-height: 100px"/>
                </template>
            </el-table-column>
            <el-table-column
                label="主题"
                prop="title">
            </el-table-column>
            <el-table-column
                label="内容"
                prop="content">
            </el-table-column>
            <el-table-column
                label="收件邮箱"
                width="220px"
                prop="email">
            </el-table-column>
            <el-table-column
                label="定时规则"
                prop="cron">
            </el-table-column>


            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog
            title="删除提醒事项"
            :visible.sync="dialogDeleteVisible"
            size="tiny"
            >
            <span>确认删除么？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteReminder()">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog title="编辑提醒" :visible.sync="dialogFormVisible">
            <el-form :model="reminderSelected">
                <el-form-item label="定时规则">
                    <el-input v-model="reminderSelected.cron"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="editReminder()">确 定</el-button>
            </div>
        </el-dialog>
    </div>


</template>

<script>

    export default {
        data() {
            return {
                reminders: [],
                dialogFormVisible: false,
                dialogDeleteVisible: false,

                reminderSelected: {}//被选中的
            }
        },

        created() {
            this.listReminders();
        },

        methods: {
            listReminders() {
                this.$axios.post('/api/reminder/list')
                    .then(function (response) {
                        this.reminders = response.data.data;
                    }.bind(this))
            },

            handleEdit(index, row) {
                this.dialogFormVisible = true;
                this.reminderSelected = row;
            },

            handleDelete(index, row) {
                this.dialogDeleteVisible = true;
                this.reminderSelected = row;
            },

            editReminder() {
                this.$axios.put('/api/reminder', this.reminderSelected)
                    .then(function (response) {
                        if (response.data.data) {
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                        } else {
                            this.$message({
                                message: '修改失败',
                                type: 'error'
                            });
                        }

                        this.dialogFormVisible = false;
                    }.bind(this))
            },

            deleteReminder() {
                this.$axios.delete('/api/reminder?id=' + this.reminderSelected.id)
                    .then(function (response) {
                        if (response.data.data) {
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                            this.listReminders();
                        } else {
                            this.$message({
                                message: '删除失败',
                                type: 'error'
                            });
                        }

                        this.dialogDeleteVisible = false;
                    }.bind(this));
            }
        }


    }
</script>

<style scoped>
</style>
