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
            routeTo(item) {
                this.$router.push({name: 'itemRecordForm', params: {itemId: item.id}});
            },

            toAddItem() {
                this.$router.push({name: 'itemForm'});
            },

            listItems() {
                let self = this;
                this.$axios.post('/api/item/list')
                    .then(function (response) {
                        self.items = response.data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
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
