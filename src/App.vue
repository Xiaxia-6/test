<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="./assets/logo2.png" >
        <div class="head-nav">
          <ul class="nav-list">
            <li>退出</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        msg:'i am layout',
        price:5
      }
    }
  }
</script>
<style>
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
 */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /*  .a{
      color:inherit;
      text-decoration: none;
    }*/
  body{
    background: gainsboro;
    font-family: "Helvetica Neue",Helvetica,Arial;
    font-size: 14px;
    color: #444;
  }
  .app-head{
    background: #011935;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner{
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo{
    float:left
  }
  .app-head-inner img{
    height: 50px;
    margin-top: 20px;
  }
  .head-nav{
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }

</style>
