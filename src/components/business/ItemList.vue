<template>
    <div>
        <el-row>
            <el-col :span="7" class="item">
                <item>
                    <span class="icon-plus" slot="center"></span>
                </item>
            </el-col>


            <el-col :span="7" :offset="index % 3 == 2 ? 0 : 1" v-for="(o, index) in items" :key="o.theme" class="item">

                <item @click.native="routeTo">
                    <h1 class="theme" slot="center">{{ o.theme }}</h1>

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
                items: [
                    {
                        theme: "减肥"
                    },
                    {
                        theme: "美食"
                    },
                    {
                        theme: "运动"
                    },
                    {
                        theme: "旅游"
                    },
                    {
                        theme: "穿衣"
                    },
                    {
                        theme: "编码"
                    },
                    {
                        theme: "电影"
                    },
                    {
                        theme: "图书"
                    }
                ]
            }
        },

        methods: {
            routeTo() {
                this.$router.push("/itemList/itemRecordForm");
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
