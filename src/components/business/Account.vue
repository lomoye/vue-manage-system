<template>

    <div class="mod-my">
        <div class="mybox">
            <div class="mybox-header">我的</div>
            <div class="mybox-body">
                <div class="mybox-user">
                    <img class="user-logo" :src="user.icon">
                    <span style="font-size: 20px;">{{ user.nick }}</span>
                </div>
                <div class="mybox-my">
                    <div class="mybox-my-context">
                        <span>
                        积分: {{ creditAccount.credit }} 元
                        </span>
                    </div>

                </div>
            </div>
        </div>

        <div class="account-log">
            <div class="mybox-header">积分日志</div>
            <div>
                <el-table
                    :data="creditAccountLogs"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="day"
                        label="日期"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="content"
                        label="事件">
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                user: {
                    nick: '',
                    icon: ''
                },

                creditAccount: '',

                creditAccountLogs: []
            }
        },

        created() {
            this.getCreditAccount();
            this.getUser();
            this.listCreditAccountLog();
        },

        methods: {

            getUser() {
                this.$axios.get('/api/user')
                    .then(function (response) {
                        this.user = response.data.data;
                    }.bind(this))
            },

            getCreditAccount() {
                this.$axios.get('/api/creditAccount')
                    .then(function (response) {
                        this.creditAccount = response.data.data;
                    }.bind(this))
            },

            listCreditAccountLog() {
                this.$axios.post('/api/creditAccountLog/list')
                    .then(function (response) {
                        this.creditAccountLogs = response.data.data;
                    }.bind(this))
            }
        },
    }
</script>

<style scoped>
    .mybox {
        position: relative;
    }

    .mod-my .mybox .mybox-body .mybox-user {
        float: left;
        width: 394px;
        height: 144px;
    }

    .mod-my .mybox .mybox-body .mybox-my {
        float: left;
    }

    .mod-my .mybox .mybox-body:before {
        position: absolute;
        top: 61px;
        left: 430px;
        display: inline-block;
        content: "\200B";
        clear: both;
        width: 1px;
        height: 144px;
        background: #eff0f9;
    }

    .mybox-header {
        color: #333333;
        font-size: 20px;
        line-height: 60px;
        border-bottom: 1px solid #eff0f9;
    }

    .mybox-body {
        height: 144px;
        background: #c5e1ff;
    }

    .user-logo {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .mybox-user {
        position: relative;
        left: 16px;
        top: 16px;
    }

    .mybox-my {
        position: relative;
        left: 36px;
        top: 16px;
    }

    .mybox-my-context {
        font-size: 16px;
        padding: 50px;
    }


    .account-log {
        margin-top: 20px;
    }
</style>




