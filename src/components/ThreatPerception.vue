<template>
  <div class="index-wrap">
    <left-menu></left-menu>
      <div class="project-introduction">
        <div class="project-introduction-list">
          <div class="project-introduction-list-item">
              <h2> 新一代威胁感知系统</h2>
              <p>360天眼新一代威胁感知系统（SkyEye，以下简称天眼系统）是新一代高级威胁检测溯源产品，可为政府、金融、能源、运营商、大型企业等客户提供高级威胁的发现、分析与溯源功能。天眼系统可对本地流量进行全量还原、存储与深度分析，从流量、文件以及终端日志多个维度，结合360云端大数据平台与威胁情报中心推送的专属威胁情报，在“办公网”和“数据中心”场景下，准确发现包括APT在内的各类高级威胁事件，提升用户精准发现威胁和溯源分析的能力。</p>
              <img src="../assets/tianyan.jpg" >
              <br/>
            <button class="project-introduction-list-item-button">联系我们</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import LeftMenu  from './LeftMenu.vue'
  export default {
    components:{
      LeftMenu
    },
  }
</script>

<style scoped>

  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .project-introduction {
    float: left;
    width: 900px;
  }
  .project-introduction-list {
    overflow: hidden;
  }
  .project-introduction-list-item {
    float: left;
    width: 800px;
    background: rgba(243,233,255,0.6);
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin:20px auto;
    text-align:center;
  }
  .project-introduction-list-item h2{
    font-size: 48px;
    padding: 10px;
    text-align:center;
  }
  .project-introduction-list-item p{
    text-indent: 2em;
    line-height:1.5;
    font-size: 14px;
    text-align:left;
    width: 500px;
    float: left;
  }
  .project-introduction-list-item img{
    width: 300px;
    float: left;
  }
  .project-introduction-list-item button{
    margin-top: 15px;
    padding: 5px 20px;
    background: rgba(33,171,56,1);
    border: none;
    border-radius: 4px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
