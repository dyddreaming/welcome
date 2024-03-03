<template>
    <div class="body" id="app" style="
      background-color: #ffda9f;
      height: 100%;
      width: 100%;
    ">
        <div
            style="position:relative;height:90%;top:2%;width:96%;left:2%;background-color:#ffffff;border-radius:8px;box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);">
            <!-- 广告推送机制 -->
            <div style="position:relative;height:25%;width:100%;;">
                <div
                    style="position:relative;height:25%;width:100%;text-align:center;font-size:25px;background-color:#FFB27D;color:#ffffff;display: flex; justify-content: center; align-items: center; font-size: 25px;">
                    广告推送机制设置</div>
                <div style="position:relative;height:75%;width:100%;text-align:center;display:flex">
                    <div style="position:relative;height:70%;width:25%;top:30%;">
                        <el-checkbox v-model="address" label="所在地" border
                            style="position: relative;width:40%;"></el-checkbox>
                    </div>
                    <div style="position:relative;height:70%;width:25%;top:30%;">
                        <el-checkbox v-model="keyword" label="关键词" border
                            style="position: relative;width:40%;"></el-checkbox>
                    </div>
                    <div style="position:relative;height:70%;width:25%;top:30%;">
                        <el-checkbox v-model="college" label="学院" border
                            style="position: relative;width:40%;"></el-checkbox>
                    </div>
                    <div style="position:relative;height:70%;width:25%;top:30%;">
                        <el-checkbox v-model="gender" label="性别" border
                            style="position: relative;width:40%;"></el-checkbox>
                    </div>
                </div>
            </div>
            <!-- 广告推广费用设置 -->
            <div style="position:relative;height:75%;width:100%;">
                <div
                    style="position: relative; height: 8%; width: 100%; text-align: center; background-color: #FFB27D; color: #ffffff; display: flex; justify-content: center; align-items: center; font-size: 25px;">
                    广告推广费用设置
                </div>
                <div style="position:relative;height:92%;width:100%;display:flex">
                    <div style="position: relative; width: 33%; height: 100%; border-right: 2px solid #FFB27D;">
                        <div
                            style="position: relative; height: 8%; width: 100%; text-align: center;color: #808080; display: flex; justify-content: center; align-items: center; font-size: 18px;">
                            关键词个数
                        </div>
                    </div>
                    <div style="position: relative; width: 33%; height: 100%; border-right: 2px solid #FFB27D;">
                        <div
                            style="position: relative; height: 8%; width: 100%; text-align: center;color: #808080; display: flex; justify-content: center; align-items: center; font-size: 18px;">
                            关键词等级
                        </div>
                    </div>
                    <div style="position: relative; width: 34%; height: 100%;">
                        <div style="position:relative;height:50%;width:100%;border-bottom: 2px solid #FFB27D;">
                            <div
                                style="position: relative; height: 8%; width: 100%; text-align: center;color: #808080; display: flex; justify-content: center; align-items: center; font-size: 18px;">
                                投放时长
                            </div>
                        </div>
                        <div style="position:relative;height:50%;width:100%;">
                            <div
                                style="position: relative; height: 8%; width: 100%; text-align: center;color: #808080; display: flex; justify-content: center; align-items: center; font-size: 18px;">
                                首页推广时长
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>