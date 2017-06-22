<template>
    <div>
        <el-row>
            <el-col span="7">
                <item>
                    <span class="icon-plus" slot="center"></span>
                </item>
            </el-col>

            <el-col span="7" offset="1" v-for="o in items" :key="o.theme">
                <item>
                    <h1 class="theme" slot="center">{{ o.theme }}</h1>
                </item>
            </el-col>

        </el-row>



    </div>
</template>

<script>
    import item from './Item.vue';
    export default {
        data: function () {
            return {
                items : [
                    {
                        theme: "减肥"
                    },
                    {
                        theme: "美食"
                    }
                ]
            }
        },
        components: {
            item
        }
    }
</script>

<style scoped>

    .theme {
        display: inline-block;
        position: relative;
        margin-top: 70px;
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
