<template>
    <div>
        <p><em>目标列表</em></p>

        <div>
            <el-table
                :data="itemGoals"
                stripe
                style="width: 100%">
                <el-table-column
                    prop="itemName"
                    label="项目名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="itemGoal.goalNum"
                    label="目标数值"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="itemGoal.startTime"
                    label="创建时间"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="itemGoal.endTime"
                    label="截止时间"
                    width="250">
                </el-table-column>

                <el-table-column
                    prop="itemGoal.creditRate"
                    label="积分比率"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="itemGoal.status"
                    label="状态">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                itemGoals : []
            }
        },

        created() {
            this.listItemGoal();
        },

        methods: {
            listItemGoal() {
                this.$axios.post('/api/itemGoal/list')
                    .then(function (response) {
                        this.itemGoals = response.data.data;
                    }.bind(this))
            }
        }
    }

</script>

<style scoped>
    p > em {
        display: block;
        margin-bottom:30px;
    }
</style>
