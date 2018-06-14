<style lang="less">

  @import url(~assets/css/variables.less);
  #__nuxt, #__layout, .page-root, .page-container { height:100%; }
  body { background:#333; }
  #__default {
    h2 { margin-bottom:15px; font-size:40px; }
    h3 { margin:10px 0; font-size:18px; font-weight:500; }
    h5 { font-size:12px; }
    .panel { padding:5px 10px; }
    .btn.block { height:52px; font-size:22px; }
    .text-pending { .text-warning; }
  }


  @import url(~assets/css/icons/success.less);
  @import url(~assets/css/icons/failure.less);
  .dialog-container {
    position:fixed; top:0; left:0; z-index:999; width:100vw; height:100%;
    background-color: rgba(0,0,0,.7);
    transition-duration:300ms;
    pointer-events:none; opacity:0;
    &.show { pointer-events:auto; opacity:1; }
  }
  #dialog-message {
    .flow; align-items:center; justify-content:center;
    background-color:transparent;
    &.show{ pointer-events:none; }
    .inner-wrapper {
      display:inline-block;
      margin-top:-150px;
      padding:14px;
      max-width:70%;
      line-height:1.4;
      text-align:justify;
      color:#fff;
      background:rgba(51,51,51,.9) no-repeat center 12px;
      background-size:30px auto ;
      box-shadow:0 0 3px 1px #777;
      border-radius:8px;

      &[data-type] {
        padding-top:50px;
        &:empty { background-position:center 10px; padding-bottom:0; }
        min-width:50px;
        text-align:center;
      }
      &[data-type=success] { background-image:url(@icon-success); }
      &[data-type=failure] { background-image:url(@icon-failure); }
    }
  }
  #menu {
    position:fixed; top:55px; left:0; z-index:1000;
    width:100%;
    overflow:hidden;
    transition-duration:300ms;
    &.hide {
      opacity:0;
      pointer-events:none;
      ul { transform:translate3d(0,-100%,0);  }
    }
    ul { .flow(row); flex-wrap:wrap; padding:20px 20px 50px 20px; background:@color-primary; transition-duration:300ms; }
    li {
      width:33%; line-height:50px; text-align:center; cursor:pointer;
      a {
        display:block; margin:0 35px;
        .border(bottom);
        color:@color-white;
        text-decoration:none;
        &:hover { color:@color-highlight; }
      }
    }
  }

  #footer ul {
    .flow(row); justify-content:center; align-items:center; line-height:50px;
    li { position:relative; margin:0 10px; cursor:pointer; }
    li:not(:last-child)::after { position:absolute; right:-12px; top:24px; width:4px; height:4px; .radius; background-color:@color-white; content:'\200B'; }
    li a { text-decoration:none; }
  }

  @media screen and (max-width:411px) {
    #menu {
      top:0; height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      background:@color-primary;
      ul { padding-bottom:20px; }
      li {
        width:100%; height:100%;
        a { border:0 none; }
      }
    }
    #footer { position:absolute; top:100%; left:0; width:100%;  }
  }

</style>

<template>
  <div id="__default" class="page-root">
    <div id="menu" :class="showMenu?'':'hide'" @click="$store.commit('toggleMenu', false)">
      <ul>
        <li><a @click="routeTo('#guide')">玩法</a></li>
        <li><a @click="routeTo('#withdraw')">退款</a></li>
        <li><a @click="routeTo('#record')" :class="">记录</a></li>
        <li><a @click="routeTo('#contract')">智能合约</a></li>
      </ul>
    </div>
    <topbar />
    <nuxt class="page-container" :data-page="$route.name"/>
    <!-- <div id="footer">
      <ul>
        <li><a @click="routeTo('#guide')">玩法</a></li>
        <li><a @click="routeTo('#withdraw')">退款</a></li>
        <li><a @click="routeTo('#record')">记录</a></li>
        <li><a @click="routeTo('#contract')">智能合约</a></li>
      </ul>
    </div> -->
    <!-- 全局消息弹窗 -->
    <div id="dialog-message" class="dialog-container" :class="messageDialog.show?'show':''">
      <div class="inner-wrapper" :data-type="messageDialog.type||''" v-if="messageDialog.html" v-html="messageDialog.html"></div>
      <div class="inner-wrapper" :data-type="messageDialog.type||''" v-else>{{messageDialog.text}}</div>
    </div>
  </div>
</template>

<script>
import bet from '~/components/bet'
import topbar from '~/components/topbar'
export default {
  components: { topbar, bet },
  data() {
    return {
      hash:''
    }
  },
  computed: {
    messageDialog() {
      return this.$store.state.messageDialog
    },
    showMenu() {
      return this.$store.state.showMenu
    }
  },
  methods: {
    routeTo(hash) {
      location.hash = hash;
      // this.$store.commit('toggleMenu', false);
      document.documentElement.scrollTop = document.documentElement.clientHeight - 90
      document.body.scrollTop = document.body.clientHeight - 90
    },
  },
  mounted() {
    // 测试环境下的移动端页面, 加载debug工具
    if ( process.env.NODE_ENV === 'development' && (/iphone|ios|android|ipad/gi).test(navigator.userAgent) ) {
      localStorage.removeItem('hasReadGuide')
      let script = document.createElement('script');
      script.onload = function() { eruda.init(); }
      document.body.appendChild(script)
      script.src = '//cdn.bootcss.com/eruda/1.4.2/eruda.min.js'
    }

    this.hash = location.hash
  }
}
</script>
