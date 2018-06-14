<style lang="less">
  @import url(~assets/css/variables.less);
  #page-home {
    // 赌注
    #panel-bet {
      position:relative; .flow; justify-content:space-between; max-height:800px;
      .selection { 
        .flow(row);height:40px; line-height:40px; align-items:stretch;
        .preview { padding:0 10px; min-width:70px; font-size:26px; text-align:center; color:@color-primary; background-color:#fff; .radius; }
        .preview + * { flex:1; }
      }
      #explain {
        position:absolute; top:55px; left:10px; width:100%;
        line-height:16px; font-size:12px;
      }
      #wager {
        .selection { 
          .list { 
            flex:1; .flow(row); margin-left:20px;
            li { 
              padding:0 10px; .radius(); cursor:pointer;
              transition-duration:300ms;
              &.selected { background-color:@color-primary-light-1; transition-delay:0; }
              &:active {  background-color:@color-primary-light-5; }
              // &:actived { background-color:@color-primary-light-1; }
            }
          }
        }
        .condition { margin:10px 0; font-size:12px; color:@color-text-placeholder; }
      }
      #range {
        margin-bottom:40px;
        .selection {
          .supp-info {
            position:absolute; left:0; top:100%; line-height:25px; font-size:12px; color:#fff; 
          }
          .preview { position:relative; }
          .preview::after { position:absolute; right:5px; font-size:10px; content:'%'; }
          div { 
            position:relative; display:flex; align-items:center;  margin:0 15px 0 20px; 
            input { 
              position:relative;
              width:100%;  height:25px; background:transparent; 
              .radius; cursor:pointer; -webkit-appearance:none; 
              // background:url(~assets/img/range-background.svg) no-repeat center/ 100% auto; 

              &::after { position:absolute; top:12px; left:0; z-index:1; content:'\200B'; width:100%; height:3px; background:@color-primary-light-1; }
              &::-webkit-slider-thumb {
                position:relateve; z-index:10;
                width:22px; height:35px;
                -webkit-appearance:none;
                cursor:pointer;
                .radius(10px);
                // border:10px solid transparent;
                border:0 none;
                background-color:@color-primary-light-1;
                // box-shadow:0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;
              }
            }
            ul { 
              .flow(row); position:relative; width:100%; font-size:10px;
              li { position:absolute; top:0; bottom:0; cursor:pointer; transform:translate3d(-50%,0,0); }
            }
          }
        }
      }
      #compensate {
        line-height:20px;
        h2 {
          span { font-size:60px; }
          line-height:60px; 
        }
        span { float:right; color:@color-highlight; }
        p.info { 
          font-size:12px; color:@color-text-placeholder; 
          span { font-size:16px; color:@color-danger; }
        }
      }
      #compensate + .btn { margin-bottom:10px; }
    }
    // 投注
    #panel-roll {
      .flow; justify-content:space-between; max-height:800px; text-align:center;
      h2 { text-align:left; }
      .border { margin:0 30px; }
      .number-block { font-size:100px; }
      .inner-panel { 
        position:relative;
        h3 { margin:10px 0 20px 0; }
        .tips { margin:20px 0; }
        .ads  { 
          margin-top:-12px; height:16px; font-size:12px; line-height:16px; overflow:visible;
          ul, ul li { transition-duration:300ms; }
          li { 
            opacity:0; 
            // &:nth-child(1) { opacity:1; }
          }
        }
      }
      .btn-wrapper { 
        padding:0 15px;
        margin-bottom:20px; 
        // padding:0 5px 0 25px;
        // .flow(row);
        // .block { flex:1; }
        // .text  { margin-left:10px; }
      }
    }
    // 历史
    #panel-record {
      // li { .border(bottom); }
      // padding-top:20px;
      .tabs {text-align:right;}
      .tabs .btn { .radius(5px); border-bottom-left-radius:0; border-bottom-right-radius:0; }
      .tabs .btn.primary { background-color:@color-primary; color:#fff; }
      .table-wrapper { width:100%; min-width:100%; height:calc(100%-46px); .scroll; }
      table thead td { color:@color-highlight; }
      table { min-width:100%; border-collapse:collapse; }
      table td { padding:10px; font-size:16px; white-space:nowrap; }
      table tr:nth-child(even) { background-color:#666; }
      table tr:nth-child(odd) { background-color:#555; }
      // table tbody td { text-align:center; }
      // table td span { .text-ellipsis; width:auto; max-width:20vw;  }
    }
    // 
    #panel-loading {
      .flow; align-items:center; justify-content:center;
    }
    #panel-guide {
      .anchors { 
        line-height:1.2;
        margin:20px 0;
        li { margin:0; }
        // .flow(row); flex-wrap:wrap; line-height:24px;
        // li { margin-left:10px; }
      }
      li { margin-bottom:10px; line-height:1.4; }
    }
    #panel-withdraw {
      line-height:1.4;
      p { margin-bottom:10px; word-break:break-all; }
      input { margin:20px 0; }
    }
    #panel-contract {
      // overflow:hidden;
      // padding:0;
      // padding-bottom:0;
      // padding:0 0 10px 0;
      overflow:hidden;
      iframe { border:0 none; outline:0 none; min-height:100%; width:100%; height:auto!important; }
    }
    #dialog-guide {
      @import url(~assets/css/icons/failure.less);
      .flow; justify-content:center; align-items:center;
      background:rgba(0,0,0,0);
      .inner-wrapper {
        position:relative; 
        padding:30px; width:500px; line-height:1.4; word-break:break-all;
        background-color:rgba(0,0,0,0.7); .radius(10px);
        li { margin-bottom:12px; }
        i.close { position: absolute; right:0; top:0; width:60px; height:60px; background:url(@icon-failure) no-repeat center / 30px 30px; cursor: pointer; }
      }
    }
  }

  @panel-height-mb:calc( 100% - 90px );
  @panel-height-pc:calc( 100% - 110px );
  @media screen and (max-width:411px) {
    
    #page-home { 
      .panel#panel-bet,
      .panel#panel-roll { margin:0; padding:5px 10px; min-height:100%; }
      .panel { padding:30px 10px; min-height:100%; }
      // .panel#panel-bet + .panel,
      // .panel#panel-roll + .panel { margin:40px 0; }
    }
    #page-home #dialog-guide {
      .inner-wrapper {
        background-color:rgba(0,0,0,0.9)!important;
        i.close { left:50%; top:auto; right:auto; bottom:30px; margin-left:-30px; }
        width:100%!important; height:100%;
        .flow; justify-content:center; align-items:center;
      }
    }
    #panel-contract {
      height:100vh;
    }
    #page-home #panel-roll .inner-panel .ads {
      ul {
        &.roll { 
          li:nth-child(1) { opacity:1 }
        }
        &.bet { 
          transform:translate3d(0,-32px,0);
          li:nth-child(2) { opacity:1 }
        }
        &.bet-2 {
          transform:translate3d(0,-48px,0);
          li:nth-child(3) { opacity:1 }
        }
        &.result {
          transform:translate3d(0,-60px,0);
        }

      }
    }
  }
  @media screen and (min-width:412px) {
    #page-home { 
      // padding: 0 20px;
      .flow(row); height:@panel-height-pc; padding-top:10px; overflow:hidden;
      .panel { 
        flex:1; margin:0 10px; min-width:375px; .scroll;
        // &:not(#panel-bet):not(#panel-roll) { flex:1; }
      }
      #panel-bet { 
        min-width:500px; 
        // & > * { margin-bottom:80px!important; }
      }
      #panel-contract {
        height:calc( 100% - 10px);
        // height:100%;
        iframe { height:calc( 100% - 38px); }
      }
      // #panel-bet, 
      // #panel-roll {  }
      #panel-roll .inner-panel .ads {
        ul {
          &.roll { 
            li:nth-child(1) { opacity:1 }
          }
          &.bet { 
            transform:translate3d(0,-16px,0);
            li:nth-child(2) { opacity:1 }
          }
          &.bet-2 {
            transform:translate3d(0,-32px,0);
            li:nth-child(3) { opacity:1 }
          }
          &.result {
            transform:translate3d(0,-48px,0);
          }
        }
      }
    }
    #comp-footer { position:absolute; bottom:0; left:0; width:100%;  }
  }
</style>

<template>
  <div id="page-home">
    <!-- 赌注 -->
    <div id="panel-bet" class="panel" v-if="roll.state==='ready'">
      <h2>立刻投注</h2>
      <!-- <div id="explain">
        <p>玩家在[2,99]间选择一个数字并使用ETH投注</p>
        <p>系统在[1,100]间产生一个随机数</p>
        <p>玩家选择的数字大于系统随机数则赢了！</p>
      </div> -->
      <div id="amount">
        <h3>投注金额</h3>
        <div id="wager">
          <div class="selection">
            <p class="preview">{{computedWager}}</p>
            <ul class="list">
              <li 
              v-for="(s,i) in bet.wager.list" 
              :key="`wager${i}`"
              @click="selectBetWager(i)"
              :class="i===bet.wager.selected?'selected':''"
              >{{s.name}}</li>
            </ul>
          </div>
          <div class="condition">
            <p>最小投注 {{bet.wager.list[0].value}} ETH</p>
            <p>最大收益 {{bet.profit.max}} ETH</p>
          </div>
        </div>
      </div>
      <div id="range">
        <h3>胜率大小</h3>
        <div class="selection">
          <p class="preview">
            {{bet.range.value}}
            <!-- <span class="supp-info">min change</span> -->
          </p>
          <div>
            <input type="range" 
            :min="bet.range.min" 
            :max="bet.range.max" 
            v-model="bet.range.value"
            >
            <ul class="signs supp-info">
              <li v-for="i in 5" :key="`range${i}`" :style="`left:${(i-1)*25}%;`" @click="setRange(i)">
                {{(i-1)*25}}%
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="compensate">
        <h2>投注结果小于 <span>{{+bet.range.value+1}}</span></h2>
        <!-- <h3>投注结果小于 <span>{{+bet.range.value+1}}</span></h3> -->
        <p>投注金额 <span>{{computedWager}} ETH&nbsp;</span></p>
        <p>用户收益 <span>{{computedUserProfit}} ETH&nbsp;</span></p>
        <p class="info">&nbsp;
          <span v-if="computedUserProfit&&!isUserProfitOK">
            (已超过最大收益限制，请调整投注金额或胜率)</span>
        </p>
      </div>
      <input type="button" class="btn primary block" value="投注" :disabled="!rollable" @click="doRoll">
    </div>
    <!-- 开奖 -->
    <div id="panel-roll" class="panel" v-else>
      <h2>投注结果</h2>
      <div class="inner-panel">
        <h3>投注数字</h3>
        <p class="number-block">{{+bet.range.value+1}}</p>
      </div>
      <div class="border"></div>
      <div class="inner-panel">
        <h3 v-if="roll.state==='roll'">正在开奖请耐心等待...</h3>
        <h3 v-else-if="roll.state==='bet'">已收到投注，正在生成随机数...</h3>
        <h3 v-else-if="roll.state==='result'">开奖数字</h3>
        <div class="ads">
          <ul ref="ads-list">
            <li>Etherwow是中国最火的以太坊猜数字小游戏，无需注册，即点即玩，最高50倍收益！</li>
            <li>随机数通过<a href="random.org">random.org</a>根据实时大气扰动得出，保证公平</li>
            <li>为增加透明性，本网站智能合约源码已开源，玩家可以随时查看</li>
          </ul>
        </div>
        <p class="number-block">
          <!-- {{roll.result}} -->
          <template v-if="typeof roll.result !=='number'">
            <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
          </template>
          <template v-else-if="roll.result<3">
            <span v-if="roll.result===0" class="text-success">{{roll.value}}</span>
            <span v-else-if="roll.result===1" class="text-danger">{{roll.value}}</span>
            <span v-else class="text-warning">{{roll.value}}</span>
          </template>
        </p>
        <p class="tips" v-if="typeof roll.result==='number'">
          <span v-if="roll.result===0" class="text-success">- {{computedWager}} ETH</span>
          <span v-else-if="roll.result===1" class="text-danger">Wow, 你赢了！ +{{computedUserProfit}} ETH</span>
          <span v-else-if="roll.result===2">
            打款失败，请<a href="#withdraw" >手动提现</a>
          </span>
          <span v-else-if="roll.result===3" class="text-warning">投注失败, 已退款</span>
          <span v-else-if="roll.result===4">
            投注失败, 请<a href="#withdraw" >手动提现</a>
          </span>
        </p>
      </div>
      <div class="btn-wrapper" v-if="typeof roll.result==='number'">
        <input type="button" 
          class="btn primary block"
          @click="backToRoll"
          value="再玩一次" 
        >
        <!-- <input type="button" class="btn text" value="分享"> -->
        <!-- <i class="icon">分享</i> -->
      </div>
      <div class="btn-wrapper" v-else style="height:52px"></div>
    </div>

    <footer1 />

    <!-- 提现 -->
    <div id="panel-withdraw" class="panel" v-show="hash==='#withdraw'">
      <h2>提现</h2>
      <p>系统将自动处理对玩家的打款，但是不排除打款失败的情况。<br>如果系统给玩家打款失败，系统将记录下来，玩家稍后可以在此手动点击提现。</p>
      <p>账户: <a :href="`https://etherscan.io/address/${account.address}`" target="_blank">{{account.address}}</a></p>
      <p>可提现金额: {{account.pendingWithdrawal}} ETH</p>
      <input type="button" class="btn primary" 
      :disabled="!account.pendingWithdrawal"
      @click="doWithdraw" 
      :value="`提现`">
    </div>
    <!-- 记录 -->
    <div id="panel-record" class="panel" v-show="hash==='#record'">
      <div class="tabs">
        <input type="button" class="btn text" :class="record.show==='all'?'primary':''" @click="record.show='all'" value="最新投注">
        <input type="button" class="btn text" :class="record.show==='rank'?'primary':''" @click="record.show='rank'" value="奖金排行">
        <input type="button" class="btn text" :class="record.show==='user'?'primary':''" @click="record.show='user'" value="我的投注">
      </div>
      <div class="table-wrapper">
        <table>
          <thead v-if="record.show==='rank'">
            <tr>
              <td>累计奖金(一周)</td>
              <td>玩家地址</td>
            </tr>
          </thead>
          <thead v-else>
            <tr>
              <td>投注数字</td>
              <td>开奖数字</td>
              <td>投注金额</td>
              <td>玩家收益</td>
              <td>投注ID</td>
              <td>玩家地址</td>
            </tr>
          </thead>
          <tbody v-if="record.show==='rank'">
            <tr v-for="(r,i) in record[record.show]" :key="`r-a-${i}`">
              <td class="text-danger">+ {{web3.fromWei(r.ProfitValue)}}</td>
              <td><a :href="`https://etherscan.io/address/${r.UserAddress}`" target="_blank">
                {{ r.UserAddress }}</a>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(r,i) in record[record.show]" :key="`r-a-${i}`">
              <td>{{ r.UserNumber.toNumber() }}</td>
              <td>{{ r.DiceResult.toNumber() }}</td>
              <td>{{ web3.fromWei(r.BetValue.toNumber()) }}</td>
              <td>
                <span v-if="record.show==='rank'" class="text-danger">
                  + {{ web3.fromWei(r.ProfitValue.toNumber()) }}
                </span>
                <span :class="`text-${r.computedProfit.state}`" v-else>
                  {{r.computedProfit.prefix}}
                  {{r.computedProfit.value}}
                </span>
              </td>
              <td>{{ r.BetID }}</td>
              <td><a :href="`https://etherscan.io/address/${r.UserAddress}`" target="_blank">
                {{ r.UserAddress }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 引导 -->
    <div id="panel-guide" class="panel" v-show="hash.indexOf('#guide')===0">
      <h2>怎么玩</h2>
      <ul class="anchors">
        <!-- <li><a href="#guide-game">游戏规则</a></li> -->
        <!-- <li><a href="#guide-metamask">使用 metamask</a></li>
        <li><a href="#guide-browser">使用 mist 浏览器</a></li>
        <li><a href="#guide-mobile">使用手机</a></li>
        <li><a href="#guide-tips">Hot Tips</a></li> -->
      </ul>
      <div id="guide-game">
        <h3>游戏规则</h3>
        <ul>
          <li>
            1.玩家在2~99中选择一个数字并使用ETH投注
          </li>
          <li>
            2.系统在1~100中产生一个随机数（<a href="http://www.oraclize.it/papers/random_datasource-rev1.pdf" target="_blank">随机数算法</a>可证明公平）
          </li>
          <li>
            3.玩家选择的数字大于系统产生的随机数则玩家赢，系统自动将本金+收益转到玩家钱包
          </li>
          <li>
            4.如果玩家输，系统将发送1 wei（0.0000000000000001ETH）到玩家钱包
          </li>
        </ul>
      </div>
      <!-- <div id="guide-metamask">
        <h3>使用 metamask</h3>
        <ol>
          <li>1111111111111111111</li>
          <li>2222222222222</li>
          <li>333333333333333333333</li>
          <li>444444444444444444444</li>
          <li>555555555555555555</li>
        </ol>
      </div>
      <div id="guide-browser">
        <h3>使用 mist 浏览器</h3>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <ol>
          <li>1111111111111111111</li>
          <li>2222222222222</li>
          <li>333333333333333333333</li>
          <li>444444444444444444444</li>
          <li>555555555555555555</li>
        </ol>
      </div> -->
    </div>
    <div id="panel-help" class="panel" v-show="hash==='#help'">
      <h2>帮助</h2>
    </div>
    <div id="panel-contract" class="panel" v-if="hash==='#contract'">
      <h3>
        <a :href="`https://etherscan.io/address/${contract.address}#code`" target="_blank">智能合约地址</a>
      </h3>
      <iframe src="/code" />
    </div>
    <div id="panel-loading" class="panel" v-show="!hash">
      <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
    </div>
    <div id="dialog-guide" class="dialog-container" :class="showGuide?'show':''">
      <div class="inner-wrapper">
      <i class="close" @click="hideGuide"></i>
        <h2>怎么玩</h2>
        <div id="guide-game">
          <ul>
            <li>
              1.玩家在2~99中选择一个数字并使用ETH投注
            </li>
            <li>
              2.系统在1~100中产生一个随机数（<a href="http://www.oraclize.it/papers/random_datasource-rev1.pdf" target="_blank">随机数算法</a>可证明公平）
            </li>
            <li>
              3.玩家选择的数字大于系统产生的随机数则玩家赢，系统自动将本金+收益转到玩家钱包
            </li>
            <li>
              4.如果玩家输，系统将发送1 wei（0.0000000000000001ETH）到玩家钱包
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contract from '~/assets/js/contract'
import Web3 from 'web3'
import footer1 from '~/components/footer'
export default {
  head() {
    return {
      // meta: {
      // }
    }
  },
  data() {
    return {
      showGuide:false,
      hash:'',
      web3:undefined,
      isNetworkOK:false,
      isAccountOK:false,
      // 账户
      // account :{
      //   address:'',
      //   wei:0,
      //   balance:0,
      //   pendingWithdrawal:0,
      // },
      // 合约
      contract:{
        ...contract,
        instance:null,
      },
      // 投注记录
      record: {
        show:'all',
        user:[],
        all:[],
        rank:[]
      },
      // 赌注设置
      bet: {
        hasBet:false,
        wager: {
          selected:0,
          list:[
            {name:'0.1', value:0.1},
            {name:'0.2', value:0.2},
            {name:'0.3', value:0.3},
            {name:'0.5', value:0.5},
            {name:'0.7', value:0.7},
            {name:'1.0', value:1.0},
          ],
        },
        range: {
          min:1,
          max:98,
          value:50
        },
        roll: {
          value:51,
        },
        profit: {
          max:0,
          reqTimer:-1,
          reqDelay:400
        }
      },
      // 投注状态
      roll: {
        state:'ready',
        result:'',
        value:-1,
        BetID:'',

        // state:'roll',
        // result:4,
        // value:1
      },
      // 
      metamaskOpt: {
        gas: 400000,
        gasPrice: 3000000000
      },
      mountedRun: false,
    }
  },
  computed: {
    computedWager() {
      return this.bet.wager.list[this.bet.wager.selected].value;
    },
    computedUserProfit() {
      let { wager, range, roll, profit } = this.bet;
      if ( !profit.max ) return 0;
      return ((((this.computedWager * (100-(range.value))) / (range.value)+this.computedWager))*900/1000)-this.computedWager;
    },
    isUserProfitOK() {
      return this.computedUserProfit? this.computedUserProfit <= this.bet.profit.max: false;
    },
    rollable() {
      return this.isNetworkOK && this.isAccountOK && this.isUserProfitOK;
    },
    account() {
      // console.log( this.$store.state.account )
      return this.$store.state.account
    }
  },
  methods: {
    // --------- 功能 ---------
    // 初始化 web3
    initWeb3() {
      this.web3 = typeof web3 !== 'undefined'? 
        new Web3(web3.currentProvider):
        new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    },
    hideGuide() {
      localStorage.setItem('hasReadGuide', true);
      this.showGuide = false;
    },
    // 获取账户信息
    async getAccountInfo() {
      let vm = this;
      // 获取钱包地址
      let address = await new Promise((resolve,reject)=>{
        this.web3.eth.getAccounts((err, result)=>{
          if ( err ) return reject(err)
          // else if ( !result.length ) return reject('没找到账户信息');
          // else if ( !result.length ) return reject.call(null,{show:false});
          this.isAccountOK = result.length&&!!result[0]? true: false;
          resolve(result)
        })
      })
      .then(result=>{
        console.warn(`钱包地址: ${result[0]}`)
        return result[0];
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getAccountInfo'}));

      if ( !address ) {
        this.$store.commit('setAccount', {...this.account, loaded:true});
        return;
      }

      // 获取余额 (单位 wei)
      let wei = await new Promise((resolve,reject)=>{
        this.web3.eth.getBalance(address, 'latest', (err,result)=>{
          if ( err ) return reject(err)
          resolve(result)
        })
      })
      .then(result=>{
        // 返回的是一个bigNumber对象, 需要获取bigNumber对应的数(单位是wei), 再将wei转成eth
        console.warn(`余额: ${ result.toNumber() } (wei)`)
        return +result.toNumber()
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getBalance'}))

      // 余额 (单位 eth)
      let balance = +this.web3.fromWei( wei );
      console.warn(`余额: ${balance} (eth)`)

      this.$store.commit('setAccount', { ...this.account, address, wei, balance, loaded:true })
    },
    // 获取合约
    getContract() {
      return this.contract.instance? 
        this.contract.instance:
        ( this.contract.instance=this.web3.eth.contract(this.contract.abi).at(this.contract.address) );
    },
    // 获取投注记录
    async getRecord() {
      if ( !this.checkAccountValid(false) ) return;
      // 获取当前的区块数
      let blockNumber   = await new Promise((resolve, reject)=>{
        this.web3.eth.getBlockNumber((err, result)=>{
          if (err) return reject();
          resolve(result);
        });
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getRecord'}));

      this.record.blockNumber = blockNumber;
      // console.log('______________________blockNumber', blockNumber)
      
      // 估计n天的区块数, (假设一分钟上链10个)
      let dayBlockNumber = (60*24*15) * 7;

      // 获取合约
      let contract = this.getContract();

      let LogBet,ResultBet,LogRefund,
          bets=[], results=[], refunds=[];


      LogBet = contract.LogBet(
        { _userAddress: '' }, 
        { fromBlock   : blockNumber>dayBlockNumber? blockNumber-dayBlockNumber: blockNumber }
      );
      ResultBet = contract.LogResult(
        { _userAddress: '' }, 
        { fromBlock   : blockNumber>dayBlockNumber? blockNumber-dayBlockNumber: blockNumber }
      );
      LogRefund = contract.LogRefund(
        { _userAddress: '' }, 
        { fromBlock   : blockNumber>dayBlockNumber? blockNumber-dayBlockNumber: blockNumber }
      );
      
      LogBet.watch((err,result)=>{
        if ( err ) return console.error(err);
        if ( bets.some(r=>r.args.BetID===result.args.BetID) ) return;
        bets.push( result );
        this.disposeRecord(bets, results, refunds);
        this.disposeRankRecord(results, bets)
      })
      ResultBet.watch((err,result)=>{
        if ( err ) return console.error(err);
        if ( results.some(r=>r.args.BetID===result.args.BetID) ) return;
        // console.log( '______________record_result' )
        // console.log( result.args.BetID, ': ', result.args.Status.toNumber() )
        results.push( result );
        this.disposeRecord(bets, results, refunds);
        this.disposeRankRecord(results, bets)
      });
      LogRefund.watch((err,result)=>{
        if ( err ) return console.error(err);
        if ( refunds.some(r=>r.args.BetID===result.args.BetID) ) return;
        refunds.push( result );
        this.disposeRecord(bets, results, refunds);
      })
      // this.loadRankRecord()
    },
    // 获取待提现金额
    async getPendingWithdrawal() {
      this.account.pendingWithdrawal = await new Promise((resolve,reject)=>{
        this.getContract()
        .userGetPendingTxByAddress(this.account.address, (err,result)=>{
          if ( err ) return reject(err);
          if ( !result ) return resolve(0);
          console.warn(`未提现: ${ result.toNumber() }`)
          resolve(+this.web3.fromWei(result.toNumber()))
        })
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getPendingWithdrawal'}));
    },
    disposeRecord(bets,results,refunds) {
      // console.log('dispose')
      clearTimeout(this.disposeRecordTimer);
      this.disposeRecordTimer = setTimeout(()=>{
        if ( this.record.all.length && this.record.all.length!==bets.length ) {
          this.runHorse();
        }
        this.record.all = bets.map(b=>{
          let r  = results.filter(r=>r.args.BetID===b.args.BetID)[0] || {args:{}};
          let f  = refunds.filter(r=>r.args.BetID===b.args.BetID)[0] || {args:{}};
          let o  = { ...b.args, ...r.args, ...f.args};
          o.computedProfit = this.computeProfit( o );
          return o;
        }).reverse();
        this.record.user = this.record.all.filter(r=>r.UserAddress===this.account.address)
        this.recordDisposed = true;
      }, 500);
    },
    disposeRankRecord(results,bets) {
      clearTimeout( this.disposeRankRecordTimer )
      this.disposeRankRecordTimer = setTimeout(()=>{
        let arr = results
          // 合并列表
          .map(b=>{
            let r  = bets.filter(r=>r.args.BetID===b.args.BetID)[0] || {args:{}};
            let o  = { ...b.args, ...r.args};
            return o;
          })
          // 过滤(已出结果,并且结果为赢)
          .filter(r=>r.Status&&(+r.Status.toNumber()===1||+r.Status.toNumber()===2))

        let map = {}
        arr.forEach(r=>{
          if ( map['_'+r.UserAddress] ) {
            map['_'+r.UserAddress].ProfitValue += +r.ProfitValue.toNumber()
          } else {
            map['_'+r.UserAddress] = {
              UserAddress:r.UserAddress,
              ProfitValue:+r.ProfitValue.toNumber()
            }
          }
        })

        this.record.rank = Object.keys(map)
          .map(i=>map[i])
          .sort((c,n)=>n.ProfitValue - c.ProfitValue);


          // // 排序
          // .sort((c,n)=>{
          //   return n.ProfitValue.toNumber() - c.ProfitValue.toNumber()
          // })
        // let map = {};
        // let arr = results
        //   .filter(r=>{
        //     return r.args.Status.toNumber()===1||r.args.Status.toNumber()===2
        //   })
        //   .map(r=>{
        //     return { UserAddress:r.args.UserAddress, ProfitValue:r.args.ProfitValue }
        //   });
        //   console.log('+__++++++++++++++++arr');
        //   return console.log( results[0].args );
        //   arr.forEach(r=>{
        //     // map['_'+r.UserAddress] = (map['_'+r.UserAddress]||0)
        //     if ( map['_'+r.UserAddress] ) {
        //       map['_'+r.UserAddress].ProfitValue += r.ProfitValue.toNumber()
        //     } else {
        //       map['_'+r.UserAddress] = {
        //         UserAddress:r.UserAddress,
        //         ProfitValue:0
        //       }
        //     }
        //   })
        // this.record.rank = Object.keys(map).map(i=>i);

        // console.log('__________________r');
        // console.log( this.record.rank );
      }, 300);
    },
    runHorse() {
      console.log('跑马');
    },
    // 提现
    doWithdraw() {
      if ( this.account.pendingWithdrawal == 0 ) 
        return this.commonErrorCatcher.call(this,err,{from:'doWithdraw'})

      let contract = this.getContract();

      let additionParam = {
        from:this.account.address,
        ...this.metamaskOpt
      };
      // 支付参数

      contract.userWithdrawPendingTransactions(
        // this.account.address, 
        // this.web3.toWei(this.account.pendingWithdrawal), 
        additionParam,
        (err, result)=>{
        if ( err ) return this.commonErrorCatcher.call(this,err,{from:'userWithdrawPendingTransactions'})
        this.$store.commit('showMessageDialog', {type:'success', html:'提现成功<br>请稍后进行查询'});
      })
      // console.log( this.contract.abi )
    },

    //--------- 检测 ---------
    // 检测账户有效性, 默认会显示错误提示(如果有)
    checkAccountValid(showWarning=true) {
      let warning = '';
      if ( !this.web3 ) {
        warning = 'web3 / metamask 加载失败, 请刷新重试'
      }
      else if ( !this.account.address ) {
        warning = '钱包获取失败, 请确认已经登录'
      }
      // else if ( !this.getContract() ) {
      //   warning = '合约获取失败';
      // }

      showWarning && warning && this.commonErrorCatcher.call(this,warning,{from:'checkAccountValid'})

      return !warning;
    },
    // 检查合约可用
    checkContractAvailable(showWarning=true) {
      let warning = '';
      if ( !this.getContract() ) {
        warning = '合约获取失败';
      }

      showWarning && warning && this.commonErrorCatcher.call(this,warning,{from:'checkContractAvaliable'})
      return !warning;
    },
    // 检测余额可用
    checkBalanceAvailable(n) {
      let warning = '';
      if ( isNaN(this.account.balance) ) {
        warning = '余额加载失败, 请刷新页面重试'
      }
      else if ( this.account.balance < n ) {
        warning = '余额不足'
      }

      warning && this.commonErrorCatcher.call(this,warning,{from:'checkBalanceAvailable'})
      
      return !warning;
    },

    // --------- 其它 ---------
    // 通用的catcher
    commonErrorCatcher(err,opt) {
      this.$store.commit('showMessageDialog',{type:'failure', html:opt&&opt.html, text:err.toString()});
    },
    // 刷新页面数据
    async updatePageData(isFirstTime) {
      if ( !this.isNetworkOK ) return;
      this.getUserMaxProfit();
      await this.getAccountInfo();
      if ( isFirstTime && !this.isAccountOK ) {
        this.hash = '#guide';
      } else {
        this.hashChange();
      }
      this.getPendingWithdrawal();
      if ( !this.record.all.length ) {
        this.getRecord()
      }
      if ( !localStorage.getItem('hasReadGuide') )  {
        this.showGuide = true;
      }
    },

    // --------- bet ----------
    // 选择价格
    selectBetWager(idx) {
      this.bet.wager.selected = idx;
    },
    setRange(idx) {
      let temp = ((idx-1)*25);
      if ( temp === 0 ) temp = this.bet.range.min;
      else if ( temp === 100 ) temp = this.bet.range.max
      this.bet.range.value = temp;
    },
    getUserMaxProfit() {
      let profit = this.bet.profit;
      clearTimeout( profit.reqTimer );
      profit.reqTimer = setTimeout(()=>{
        let contract = this.getContract();
        let temp = contract.maxProfit((err,result)=>{
          if ( err ) return this.commonErrorCatcher.call(this,err,{from:'getUserMaxProfit'})
          profit.max = +this.web3.fromWei(result.toNumber());
          console.warn(`最大玩家收益: ${profit.max}`);
        });
      }, profit.reqDelay);
    },
    // 投注
    doRoll() {
      if ( !this.checkAccountValid() ) return;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // 支付参数
      let additionParam = {
          from: this.account.address,
          to: this.contract.address,
          value: +this.web3.toWei( this.computedWager ),
          ...this.metamaskOpt
      };

      // 投注
      let contract = this.getContract();
      contract.userRollDice(+this.bet.range.value+1, additionParam, (err, hash)=>{
        if ( err ) return;

        // if ( err ) return this.commonErrorCatcher(err);
        let LogBet = contract.LogBet();
        // 
        console.log("roll-----------");
        this.roll.state = 'roll';
        this.showAds('roll');
        // 投注支付监控
        LogBet.watch((err, result)=>{
          if ( err ) return this.commonErrorCatcher.call(this,err,{from:'userRollDice'})
          if ( result.args.UserAddress !== this.account.address ) return console.log('其它的 账户');

          // console.log( result )
          console.warn('支付成功');
          this.roll.state = 'bet';
          this.roll.BetID = result.args.BetID;

          this.showAds('bet');
          // this.record.all.push({})
          // this.record.user.push(result.args)
          this.updatePageData();
          LogBet.stopWatching();
        })
        // 投注结果监控
        let LogResult = contract.LogResult();
        LogResult.watch((err, result)=>{
          if ( err ) return this.commonErrorCatcher.call(this,err,{from:'LogResult.watch'});
          if ( result.args.UserAddress !== this.account.address ) return console.log('其它的 result');
          if ( result.args.BetID !== this.roll.BetID ) return console.log('其它的 bet');


          this.roll.state = 'result';
          this.showAds('result');
          
          this.roll.result = +result.args.Status.toNumber()
          this.roll.value  = +result.args.DiceResult.toNumber()
          this.updatePageData();
          LogResult.stopWatching();
        })
      })
    },
    showAds(state) {
      let list  = this.$refs['ads-list'];
      if ( !list ) {
        this.$nextTick(this.showAds.bind(this,state));
        return;
      }

      if ( list.className === 'result' ) {
        return;
      }
      
      if ( state === 'bet' ) {
        setTimeout(this.showAds.bind(this,'bet-2'),3000)
      }

      list.className = state;
    },
    // 返回
    backToRoll() {
      this.roll.BetID  = '';
      this.roll.state  = 'ready';
      this.roll.result = '';
      this.roll.value  = undefined;
    },
    // --------- record ----------
    computeProfit(r) {
      let status = r.Status? +r.Status.toNumber(): -1;
      // 如果还没出结果
      if ( status === -1 ) {
        r.DiceResult = { toNumber(){ return '-'; } }
        // return { state:'pending', value:'待开奖' };
        return { state:'pending', value:!!r.RefundValue?'已手工退款':'待开奖' };
      }
      let state='', value=0, prefix='';
      if ( status===0 ) {
        state  = 'success'
        value  = +this.web3.fromWei(r.BetValue.toNumber())
        prefix = '-';
      } else if ( status===1 ) {
        state  = 'danger'
        value  = +this.web3.fromWei(r.ProfitValue.toNumber())
        prefix = '+'
      } else {
        switch(status) {
          case 2: value='系统转账失败，请手工提现'; break;
          case 3: value='已退款'; break;
          case 4: value='自动退款失败，请手工提现'; break;
          // case 5: value='待开奖'; break;
          // case 6: value='已手工退款'; break;
          default: value='-';
        }
        state  = 'warning'
        r.DiceResult = { toNumber(){ return '-' } }
      }
      return { state, value, prefix }
      // let compare = r.DiceResult.toNumber()<r.UserNumber.toNumber();
      // let value   = this.web3.fromWei(compare? r.ProfitValue.toNumber(): r.BetValue.toNumber());

      // return { state:compare?'success':'failure', value, prefix:compare?'+':'-' }
    },

    // --------- bet ----------
    // --------- bet ----------

    hashChange() {
      this.hash = location.hash||'#record';
    },
    async checkNetwork() {
      return await new Promise((resolve,reject)=>{
        this.getContract().maxNumber((err,result)=>{
          resolve(!err)
        });
      })
    }
  },
  // 初始化 环境 和 账户信息
  async beforeMount() {
  // async created() {
    this.initWeb3();

    this.isNetworkOK = await this.checkNetwork();
    if ( this.isNetworkOK ) {
      // this.hashChange();
      this.updatePageData(true)
      console.warn(`合约地址: ${this.contract.address}`);
      // if ( !this.isAccountOK ) {
      //   this.hash = location.hash = '#guide';
      // }
    } else {
      // this.commonErrorCatcher('未连接到以太坊主网')
      this.hash = location.hash = '#guide';
      this.$store.commit('setAccount', {...this.account, loaded:true});
    }
    // console.log( '______________isNetw', this.isNetworkOK );


    window.addEventListener('hashchange', this.hashChange);


    this.getContract().maxNumber((err,result)=>{
      console.log('___________________maxNumber');
      console.log( err || result.toNumber() );
      console.log('___________________maxNumber');
    })
  },
  mounted() {
    // setTimeout(function() {
      // SyntaxHighlighter.all();
    // }, 3000);
  },
  components: {
    footer1
  }
}
</script>
