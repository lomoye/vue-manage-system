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
                        index: 'article',
                        route: {path: '/article'},
                        title: '减肥食谱'
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
