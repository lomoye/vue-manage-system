<template>
    <div>

        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel :interval="5000" type="card" indicator-position="outside" height="435px">

                    <el-carousel-item v-for="(article, index) in articles" :key="article">
                        <img :src="article.picture"/>
                    </el-carousel-item>

                </el-carousel>
            </el-col>
        </el-row>


    </div>
</template>

<script>

    export default {

        data: function () {
            return {
                articles: []
            }
        },

        created() {
            this.searchArticles();
        },

        methods: {
            searchArticles() {
                let searchModel = {
                    orderby: "asc",
                    column: "`index`",
                    pageNo: 0,
                    pageSize: 5
                };

                this.$axios.post('/api/article/search', searchModel)
                    .then(function (response, searchModel) {
                        this.articles = response.data.data;
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
