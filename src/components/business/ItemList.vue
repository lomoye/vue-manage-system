<template>
    <div>
        <el-row>
            <el-col :span="7" class="item">
                <item @click.native="toAddItem()">
                    <span class="icon-plus" slot="center"></span>
                </item>
            </el-col>


            <el-col :span="7" :offset="index % 3 == 2 ? 0 : 1" v-for="(o, index) in items" :key="o.name" class="item">

                <item @click.native="routeTo(o)">
                    <h1 class="theme" slot="center">{{ o.name }}</h1>
                    <el-button @click.prevent.stop="toAddGoal(o)" slot="footer">制定目标</el-button>
                    <el-button @click.prevent.stop="toAddParamPage(o)" slot="footer">添加属性</el-button>
                    <el-button @click.prevent.stop="deleteItem(o)" slot="footer">删除项目</el-button>

                </item>
            </el-col>


        </el-row>


    </div>
</template>

<script>
    import item from './Item';
    export default {
        data() {
            return {
                items: []
            }
        },

        created() {
            this.listItems();
        },

        methods: {
            toAddGoal(item) {
                this.$router.push({name: 'itemGoalForm', params: {itemId: item.id}})
            },

            routeTo(item) {
                this.$router.push({name: 'itemRecordForm', params: {itemId: item.id}});
            },

            toAddParamPage(item) {
                this.$router.push({name: 'addItemParamForm', params: {itemId: item.id}})
            },

            toAddItem() {
                this.$router.push({name: 'itemForm'});
            },

            listItems() {
                this.$axios.post('/api/item/list')
                    .then(function (response) {
                        this.items = response.data.data;
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            deleteItem(item) {
                this.$confirm('此操作将删除该项目, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.delete('/api/item?id=' + item.id)
                        .then(function (response) {
                            this.$message({
                                message: '删除项目成功',
                                type: 'success'
                            });
                        }.bind(this))
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            }
        },

        components: {
            item
        }
    }
</script>

<style scoped>

    .item {
        margin-bottom: 20px;
    }

    .theme {
        display: inline-block;
        position: relative;
        margin-top: 70px;
        color: #242424;
    }

    .icon-plus {
        display: inline-block;
        position: relative;
        margin-top: 62px;
        width: 74px;
        height: 74px;
        background-color: #33374b;
        border-radius: 37px;
    }

    .icon-plus:before {
        left: 17px;
        top: 36px;
        width: 40px;
        height: 3px;
    }

    .icon-plus:after, .icon-plus:before {
        content: "";
        position: absolute;
        background-color: #fff;
        border-radius: 1px;
    }

    .icon-plus:after {
        left: 36px;
        top: 17px;
        width: 3px;
        height: 40px;
    }

    .icon-plus:after, .icon-plus:before {
        content: "";
        position: absolute;
        background-color: #fff;
        border-radius: 1px;
    }
</style>
