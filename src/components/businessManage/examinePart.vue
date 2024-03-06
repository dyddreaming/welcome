<template>
    <div class="app-main" style="position: relative">
        <div style="position:relative;height:85%;top:5%;left:5%;width:90%;background-color:#ffffff;">
            <div style="position:relative;height:5%;width:100%;text-align:center;font-size:20px;">广告详细信息</div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 文字内容 -->
            <!-- 第一行 -->
            <div style="position:relative;height:8%;width:100%;display:flex;">
                <div style="position:relative;height:100%;width:60%;display:flex;">
                    <div
                        style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                        广告名称:{{ fetchData.title }}
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                    <div
                        style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                        广告类型:{{ getCategoryText(fetchData.category) }}
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                    <div
                        style="position:relative; height:100%; width:33%;text-align:center; display: flex; align-items: center; justify-content: center;">
                        收取费用:{{ fetchData.cost }}
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                </div>
                <div style="position:relative;height:300%;width:40%;display:flex">
                    <div
                        style="position:relative; height:100%; width:15%; display: flex; justify-content: center; align-items: center;">
                        <div>广告图标</div>
                    </div>
                    <div style="position:relative;width:95%;height:90%;top:5%;background:#dddddd">{{ fetchData.icon }}
                    </div>
                </div>
            </div>
            <div style="width:799px; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第二行 -->
            <div style="position:relative;height:8%;width:60%;display:flex">
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    商家名称:{{ fetchData.name }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    商家电话:{{ fetchData.phone }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    商家地址:{{ fetchData.address }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
            </div>
            <div style="width:799px; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第三行 -->
            <div style="position:relative;height:8%;width:60%;display:flex">
                <div
                    style="position:relative; height:100%; width:33%;text-align:center; display: flex; align-items: center; justify-content: center;">
                    提交时间:{{ fetchData.createTime }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%;text-align:center; display: flex; align-items: center; justify-content: center;">
                    投放时间:{{ fetchData.releaseTime }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    投放时长:{{ fetchData.duration }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
            </div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第四行 -->
            <div style="position:relative;height:8%;width:100%;display:flex">
                <div style="position:relative;height:100%;width:60%;display:flex;">
                    <div
                        style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                        首页推广:xxxxx
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                    <div
                        style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                        首页投放时长:{{ fetchData.promoteTime }}
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                    <div
                        style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                        首页推广图片:xxxxx
                    </div>
                    <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                </div>
                <div style="position:relative;height:300%;width:40%;display:flex">
                    <div
                        style="position:relative; height:100%; width:15%; display: flex; justify-content: center; align-items: center;">
                        <div>广告图片:</div>
                    </div>
                    <div style="position:relative;width:95%;height:90%;top:5%;background:#dddddd"></div>
                </div>
            </div>
            <div style="width:799px; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第五行 -->
            <div style="position:relative;height:8%;width:60%;display:flex">
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    搜索推广:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    关键词:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    工作方式:{{ fetchData.partTime.workWay }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
            </div>
            <div style="width:799px; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第六行 -->
            <div style="position:relative;height:8%;width:60%;display:flex">
                <div
                    style="position:relative; height:100%; width:49%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    职位描述:{{ fetchData.partTime.description }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div
                    style="position:relative; height:100%; width:33%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    薪资:{{ fetchData.partTime.salary }}
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
            </div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 职位详情 -->
            <div style="position:relative;height:46%;width:80%;left:10%;">
                <div
                    style="position:relative;height:8%;width:100%;display: flex; justify-content: center; align-items: center;">
                    职位详情</div>
                <div style="position:relative;height:85%;width:100%;background-color:#dddddd;top:2%;"></div>
            </div>
        </div>
        <div style="position:relative;height:10%;width:90%;left:5%;top:5%;">
            <div
                style="position:relative;height:100%;width:15%;left:85%;text-align:center; display: flex; align-items: center; justify-content: center;">
                <el-button type="danger" size="mini"
                    style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#F89300;border:none"
                    @click="pass">通过审核</el-button>
                <el-button type="danger" size="mini"
                    style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#FA5E00;border:none"
                    @click="noPass">不通过审核</el-button>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
    data() {
        return {
            id: null,
            fetchData: null,
        };
    },
    created() {
        this.id = this.$store.getters.getExamineID;
        // console.log("接收到的广告ID:", this.id);
        axios
            .get(`${this.$store.getters.getIp}/advertisements/${this.id}`)
            .then((response) => {
                this.fetchData = response.data.data;
                // console.log("获取广告数据:", this.fetchData);
            })
            .catch((error) => {
                console.error("获取数据时出错：", error);
            });
    },
    methods: {
        pass() {
            this.$confirm("确认通过审核吗？", "提示", {
                confirmButtonText: "确认",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    let data = {
                        id: parseInt(this.id),
                        pass: true,
                    };
                    const queryString = Object.keys(data)
                        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                        .join('&');
                    axios
                        .put(`${this.$store.getters.getIp}/advertisements/examine?${queryString}`)
                        .then((response) => {
                            // console.log(response.data);
                            if (response.data.code) {
                                this.$message({
                                    message: "审核成功",
                                    type: "success",
                                });
                                this.$router.push("/noPass");
                            }
                        })
                        .catch((error) => {
                            console.error("审核错误:", error);
                        });
                }).catch(() => { });
        },
        noPass() {

        },
        getCategoryText(category) {
            switch (category) {
                case 0:
                    return "社团";
                case 1:
                    return "兼职";
                case 2:
                    return "美食";
                case 3:
                    return "娱乐";
                default:
                    return "未知类型";
            }
        },
    },
};
</script>