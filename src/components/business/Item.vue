<template>

    <div class="grid-content" :span="6">
        <a href="javascript:" class="empty"><slot name="center"></slot></a>
    </div>

</template>

<script>
    export default {
        data: function(){
            return {}
        }
    }
</script>

<style scoped>
    .grid-content {
        border: 1px solid #e0e0e0;
        min-height: 221px;
    }

    .grid-content:hover {
        border: 1px solid black;
    }

    a.empty {
        display: block;
        height: 221px;
        text-align: center;
    }

</style>
