<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index"
                                      :route="subItem.route">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :route="item.route">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-document',
                        index: 'account',
                        route: {path: '/account'},
                        title: '我的'
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'chat',
                        route: {path: '/chat'},
                        title: '尬聊'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        title: '日报',
                        subs: [
                            {
                                index: 'itemList',
                                route: {path: '/itemList'},
                                title: '项目'
                            },
                            {
                                index: 'itemChartList',
                                route: {path: '/itemChartList'},
                                title: '报表'
                            },
                            {
                                index: 'itemGoal',
                                route: {path: '/itemGoal'},
                                title: '目标'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-time',
                        index: 'versionNote',
                        route: {path: '/versionNote'},
                        title: '更新'
                    },
                    {
                        icon: 'el-icon-information',
                        index: '3',
                        title: '建议',
                        subs: [
                            {
                                index: 'userSuggestForm',
                                route: {path: '/userSuggestForm'},
                                title: '提交'
                            },
                            {
                                index: 'userSuggestList',
                                route: {path: '/userSuggestList'},
                                title: '列表'
                            }
                        ]
                    }
                ]
            }
        },
        computed: {
            onRoutes(){
                return this.$route.path.split("/")[1];
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom: 0;
        background: #2E363F;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
