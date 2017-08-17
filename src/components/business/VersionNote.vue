<template>
    <div>
        <div class="page-changelog">
            <div class="heading">
                更新日志
            </div>
            <ul class="timeline">
                <li class="day"  v-for="(o, index) in versionNotes" :key="index">
                    <p><em>{{ o.day }}</em></p>
                    <ul>
                        <li v-for="(content, i) in o.contents" :key="i">
                            {{ content }}
                        </li>

                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                versionNotes: []
            }
        },

        created() {
            this.listVersionNote();
        },

        methods: {
            listVersionNote() {
                this.$axios.post('/api/versionNote/list')
                    .then(function (response) {
                        this.versionNotes = response.data.data;
                        console.log(this.versionNotes)
                    }.bind(this))
            }
        }

    }
</script>

<style scoped>
    .timeline {
        list-style: none;
        position: relative;
        margin-top: 20px;
    }

    .day {
        position: relative;
    }

    .day:before {
        position: absolute;
        left: -26px;
        top: 3px;
        content: '';
        width: 10px;
        height: 10px;
        border: 2px solid #42b7ff;
        border-radius: 50%;
        display: block;
        background: #f9f7f7;
    }

    .page-changelog .timeline:before {
        content: "";
        width: 1px;
        height: 100%;
        position: absolute;
        left: -20px;
        top: 10px;
        background-color: #eaeefa;
    }

    .day ul {
        margin-left: 12px;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .day ul li {
        font-size: 14px;
        list-style: none;
        word-break: break-all;
    }

    .page-changelog .timeline li li:before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #5e6d82;
        margin-right: 5px;
        display: inline-block;
        vertical-align: middle;
    }

</style>
