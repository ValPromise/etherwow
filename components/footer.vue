<style lang="less">
  @import url(~assets/css/variables.less);

  #comp-footer ul { 
    .flow(row); justify-content:center; align-items:center; line-height:50px;
    li { position:relative; margin:0 10px; cursor:pointer; }
    li:not(:last-child)::after { position:absolute; right:-12px; top:24px; width:4px; height:4px; .radius; background-color:@color-white; content:'\200B'; }
    li a { text-decoration:none; }
  }
  @media screen and (max-width:411px) {
    // #comp-footer { position:absolute; top:100%; left:0; width:100%;  }
  }
  @media screen and (min-width:412px) {
    // #comp-footer { position:absolute; bottom:0; left:0; width:100%;  }
  }
</style>

<template>
  <div id="comp-footer" class="comp-container">
    <ul>
      <li><a @click="routeTo('#guide')">玩法</a></li>
      <li><a @click="routeTo('#withdraw')">退款</a></li>
      <li><a @click="routeTo('#record')">记录</a></li>
      <li><a @click="routeTo('#contract')">智能合约</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    routeTo(hash) {
      // this.$store.commit('toggleMenu', false);
      document.documentElement.scrollTop = document.documentElement.clientHeight - 90
      document.body.scrollTop = document.body.clientHeight - 90

      location.hash = hash;
    },
  }
}
</script>

