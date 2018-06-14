<style lang="less">
  @import url(~assets/css/variables.less);
  #comp-bet {
    #topbar { height:50px; .flow(row); justify-content:space-between; align-items:center;  }
    #account-info { 
      width:50%;
      #address { margin-bottom:3px; .text-ellipsis; }
    }
    #amount {  
      #bet-size {
        .flow(row); height:40px; line-height:40px; align-items:stretch;
        .preview { padding:0 10px; min-width:70px; text-align:center; color:@color-text-regular; background-color:#fff; .radius; }
        .list { 
          flex:1; .flow(row); margin-left:10px;
          li { 
            padding:0 10px; .radius; 
            &.selected { background-color:@color-primary-light-1; }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="comp-bet" class="comp-container">
    <div id="topbar" class="panel">
      <img src="" alt="logo">
      <div id="account-info">
        <h4 id="address">钱包: {{account.address}}</h4>
        <h4 id="balance">余额: {{account.balance}} ETH</h4>
      </div>
    </div>
    <div id="amount" class="panel">
      <h2>Place your bet</h2>
      <h3>BET SIZE</h3>
      <!-- <input type="button" @click="tryPaying" value="ROLL"> -->
      <div id="bet-size">
        <p class="preview">{{selectedBetSize.value}}</p>
        <ul class="list">
          <li 
          v-for="(s,i) in betSize.list" :key="`betSize${i}`" 
          @click="selectBetSize(i)"
          :class="i===betSize.curr?'selected':''"
          >{{s.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      betSize:{
        curr: 0,
        list: [
          {name:'MIN', value:0.1},
          {name:'MED', value:0.5},
          {name:'MAX', value:1},
        ]
      }
    }
  },
  methods: {
    // 选择价格
    selectBetSize(idx) {
      this.betSize.curr = idx;
    },
  },
  computed: {
    account(){ return {} },
    selectedBetSize() {
      return this.betSize.list[this.betSize.curr];
    }
  }
}
</script>

