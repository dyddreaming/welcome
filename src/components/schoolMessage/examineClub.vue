<template>
    <div class="app-main" style="position: relative">
        <div style="position:relative;height:85%;top:5%;left:5%;width:90%;background-color:#ffffff;">
            <div style="position:relative;height:5%;width:100%;text-align:center;font-size:20px;">社团资讯详细信息</div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 文字内容 -->
            <!-- 第一行 -->
            <div style="position:relative;height:15%;width:100%;display:flex;">
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    社团名称:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    资讯标题:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
                    资讯类别:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
                    联系人姓名:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%;text-align:center; display: flex; align-items: center; justify-content: center;">
                    联系人学号:xxxxx
                </div>
            </div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第二行 -->
            <div style="position:relative;height:15%;width:100%;display:flex">
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    联系电话:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    办公地点:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    开始时间:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    结束时间:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    投放时长:xxxxx
                </div>
            </div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 第三行 -->
            <div style="position:relative;height:15%;width:100%;display:flex">
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    首页推广:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    首页投放时长:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    首页推广图片:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                    搜索推广:xxxxx
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:20%; text-align:center; display: flex; align-items: center; justify-content: center;">
                </div>
            </div>
            <div style="width:100%; border-bottom: 1px solid #cccccc;"></div>
            <!-- 广告内容 -->
            <div style="position:relative;height:50%;width:100%;display:flex;">
                <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
                    <div style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">资讯图标</div>
                    <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;"></div>
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
                    <div style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">资讯图片</div>
                    <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;"></div>
                </div>
                <div style="position:relative; height:100%; width:1px; background-color: #cccccc;"></div>
                <div style="position:relative; height:100%; width:33%;  text-align:center; align-items: center;">
                    <div style="position:relative;height:20%;width:100%;display: flex;align-items: center; justify-content: center;">资讯文字</div>
                    <div style="position:relative;height:75%;width:90%;background-color:#dddddd;left:5%;"></div>
                </div>
            </div>
        </div>
        <div style="position:relative;height:10%;width:90%;left:5%;top:5%;">
            <div style="position:relative;height:100%;width:15%;left:85%;text-align:center; display: flex; align-items: center; justify-content: center;">
                <el-button type="danger" size="mini" style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#F89300;border:none" @click="goSearch">通过审核</el-button>
                <el-button type="danger" size="mini" style="position:relative;height:50%;width:40%;border-radius:10px;background-color:#FA5E00;border:none" @click="goBack">不通过审核</el-button>
            </div>
        </div>
    </div>
  </template>
  
  <style>
  </style>
  
  <script>
  export default {
    methods:{
    pass(){
       
    },
    noPass(){
       
    },
  },
  };
  </script>