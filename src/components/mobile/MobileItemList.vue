<template>
    <div class="container">
        <el-row>
            <el-col class="item" style="background: #ccc">
                <item @click.native="toChat()">
                    <h1 class="theme" slot="center" >~尬聊实验室~</h1>
                </item>
            </el-col>

            <el-col v-for="(o, index) in items" :key="o.name" class="item">
                <item @click.native="routeTo(o)">
                    <h1 class="theme" slot="center">{{ o.name }}</h1>
                </item>
            </el-col>


        </el-row>
    </div>

</template>

<script>
    import item from '../business/Item';

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
                this.$router.push({name: 'mobileItemRecordForm', params: {itemId: item.id}});
            },

            toChat() {
                this.$router.push({name: 'mobileChat'});
            },

            listItems() {
                this.$axios.post('/api/item/list')
                    .then(function (response) {
                        this.items = response.data.data;
                    }.bind(this))
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
        background: #ca5663
    }

    .container {
        background: none repeat scroll 0 0 #fff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom:0;
        width: auto;
        padding:20px;
        box-sizing: border-box;
        overflow-y: scroll;
    }

    .theme {
        display: inline-block;
        position: relative;
        margin-top: 70px;
        color: #242424;
    }
</style>
