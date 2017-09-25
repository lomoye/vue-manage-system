<template>
    <div>
        <el-table
            :data="userSuggests"
            stripe
            v-loading.body="loading"
            element-loading-text="拼命加载中"
            style="width: 100%">
            <el-table-column
                prop="title"
                label="标题"
                width="180">
            </el-table-column>
            <el-table-column
                prop="userNick"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="chStatus"
                label="状态"
                width="180">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="创建时间"
                width="300">
            </el-table-column>

            <el-table-column
                prop="content"
                label="内容">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchModel: {
                    pageNo: 0,
                    pageSize: 10,
                },

                userSuggests: [],

                loading: true
            };
        },

        created() {
            this.searchUserSuggests();

        },

        methods: {
            searchUserSuggests() {
                this.$axios.post('/api/userSuggest/search', this.searchModel)
                    .then(function (response) {
                        this.userSuggests = response.data.data;
                        this.loading = false;
                        this.setSuggestChStatus();
                    }.bind(this))
            },

            setSuggestChStatus() {
                for (let suggest of this.userSuggests) {
                    if ("wait_process" === suggest.status) {
                        suggest.chStatus = "等待处理"
                    } else if ("refuse_process" === suggest.status) {

                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
