<template>
    <h1>{{ itemId }}的报表数据展示</h1>
</template>

<script>
    export default {
        data() {
            return {
                itemId: this.$route.params.itemId
            }
        }
    }
</script>

<style scoped>

</style>
