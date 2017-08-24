<template>
  <div class="index-left">
    <h1><b>产品PRODUCT</b></h1>
    <div class="index-left-item">
      <!--  使用v-for进行循环-->
      <template v-for="product in LeftList">
        <h2>{{ product.name}}</h2>
        <ul>
          <li v-for="item in product.list">
            <router-link :to="{path:item.path}">{{ item.title}} </router-link><!--
              <a :href="item.url" style="color:inherit;text-decoration: none">{{ item.title}}</a>-->
            <span v-if="item.hot" class="hot-tag" >hot</span>
          </li> <!-- :动态绑定url-->
        </ul>
      </template>
      <h2>网站安全</h2>
      <ul>
        <li>
          <a href="http://b.360.cn/product/cloud_monitoring" style="color:inherit;text-decoration: none"> 网站云监测系统</a>
        </li>
        <li>
          <a href="http://b.360.cn/product/all_test" style="color:inherit;text-decoration: none"> 众测</a>
        </li>
        <li>
          <a href="http://b.360.cn/product/leak_scan" style="color:inherit;text-decoration: none"> 网站漏洞扫描系统</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        LeftList:{
          FirstItemList:{
            name:'大数据安全',
            list:[{
              title:'新一代威胁态势感知系统',
              url:'http://b.360.cn/product/threat_perception',
              path:'/threat_perception'
            },{
              title:'态势感知与安全运营平台',
              url:'http://b.360.cn/product/ngsoc',
              path:'/ngsoc'
            },{
              title:'安全管理系统',
              url:'http://b.360.cn/product/Safety_management',
              path:'/Safety_management'
            }]
          },
          SecondItemlist:{
            name:'终端安全',
            list:[{
              title:'新一代终端安全管理系统',
              url:'http://b.360.cn/product/terminal_security_mgt',
              hot:true,
              path:'/terminal_security_mgt'
            },{
              title:'终端安全响应系统',
              url:'http://b.360.cn/product/security_response',
              path:'/security_response'
            },{
              title:'终端准入控制系统',
              url:'http://b.360.cn/product/nac',
              path:'/nac'
            }]
          },
          ThirdItemlist:{
            name:'边界安全',
            list:[{
              title:'新一代智慧防火墙',
              url:'http://b.360.cn/product/firewall',
              path:'/firewall'
            },{
              title:'虚拟化下一代防火墙',
              url:'http://b.360.cn/product/vNGFW',
              path:'/vNGFW'
            },{
              title:'安全隔离与信息交换系统',
              url:'http://b.360.cn/product/security_isolation',
              path:'/vNGFW'
            }]
          },
        }
      }
    }
  }
</script>

<style scoped>
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
    text-decoration:none;
  }
  .index-left h1{
    color: #2c3e50;
    font-size: larger;
    padding: 3px 15px;
    /*  padding: 10px 5px 15px 15px;*/
    margin-top: 20px;
  }
  .index-left-item {
    margin: 3px 15px;
    background-color:rgba(256,256,256,0.6);
    /*   background: #fff;*/
    box-shadow: 0 0 1px #ddd;
    /*   opacity: 0.8;*/
  }
  .index-left-item h2 {
    background: rgba(33,171,56,1);
    color: #fff;
    padding: 5px 15px;
    margin-bottom: 0px;
  }
  .index-left-item li {
    padding: 15px;
    color: #222;
  }
  .index-left-item ul {
    padding: 5px 15px;
  }
</style>
