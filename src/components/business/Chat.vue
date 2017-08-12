<template>

    <div>
        <el-row>
            <el-col :span="24">
                <el-input v-model="message" placeholder="输入信息" @keyup.enter.native="sendMsg"></el-input>
            </el-col>

        </el-row>

        <el-row>
            <el-col :span="24" >
                <div class="grid-content" id="chatContent">

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data() {
            return {
                message: '',
                ws: ''
            }
        },

        created() {
            this.initChat();
        },


        methods: {

            sendMsg() {
                if (!this.message) {
                    return;
                }

                if (!this.ws || this.ws.readyState !== 1) {
                    console.log("ws re init..");
                    this.initChat();
                }

                this.ws.send(this.message);
                this.message = ''
            },

            initChat() {
                if (this.ws && this.ws.readyState === 1) {
                    return;
                }

                this.ws = new WebSocket("wss://localhost/ws/chat/" + localStorage.userId);
                console.log(this.ws);
                this.ws.onopen = function () {
                    console.log("已连接");
                };

                this.ws.onmessage = function (evt) {
                    console.log("数据已接收:" + evt.data);
                    $("#chatContent").append("<p>" + evt.data + "</p>")
                };

                this.ws.onclose = function () {
                    // 关闭 websocket
                    console.log("连接已关闭...");
                };
            }
        }
    }
</script>

<style scoped>
    .grid-content {
        border: 1px solid #e0e0e0;
        min-height: 555px;
    }
</style>
