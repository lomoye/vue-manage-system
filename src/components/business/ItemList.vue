<template>
    <el-row>
        <el-col :span="6">
            <div class="grid-content">
                <a href="javascript:" class="empty"><span class="icon-plus"></span><span
                    class="icon-plus-tips"></span></a>
            </div>
        </el-col>
    </el-row>

</template>

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
