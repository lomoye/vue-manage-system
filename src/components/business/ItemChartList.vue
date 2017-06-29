<template>
    <el-row>
        <el-col :span="7" :offset="index % 3 == 0 ? 0 : 1" v-for="(o, index) in items" :key="o.name" class="item">

            <item @click.native="routeTo(o)">
                <h1 class="theme" slot="center">{{ o.name }}</h1>

            </item>
        </el-col>



    </el-row>

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
                this.$router.push({name: 'itemChart', params: {itemId: item.id}});
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
</style>
