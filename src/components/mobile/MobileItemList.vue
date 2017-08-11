<template>
    <div class="container">
        <el-row>
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

    .theme {
        display: inline-block;
        position: relative;
        margin-top: 70px;
        color: #242424;
    }
</style>
