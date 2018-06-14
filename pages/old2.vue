<style lang="less">
  @import url(~assets/css/variables.less);
  .text-highlight { color:@color-highlight; }
  #page-home {
     p.info {
      font-size:12px; line-height:20px; color:@color-text-placeholder;
      span { font-size:12px; color:@color-danger; }
    }
    // 赌注
    #panel-bet {
      position:relative; .flow; justify-content:space-between; max-height:800px;
      & > *:not(:last-child) { margin-bottom:15px; }
      #bet-type {
        .flow(row);
        .label { padding:10px 0; .flow(column); justify-content:space-between; }
        ul { .flow(row); flex:1; margin-left:30px; }
        ul li {
          .flow(column); flex:1; justify-content:space-between;
          margin:0 15px; padding:10px 0;
          text-align:center;
          background-color:#666;
          .radius(8px);
          cursor:pointer;
          transition-duration:300ms;
          &:active { background-color:@color-primary-light-3; }
          &.selected { background:@color-primary-light-1;  }
        }
        ul li p { margin:10px 0; }
      }
      h1 { padding:20px 0 0 5px; font-size:22px; }
      #bet-rule {
        margin-top:10px;
        p { margin-bottom:3px; font-size:14px; line-height:16px; }
      }

      .btn.block { margin-bottom:10px; }
      // #compensate + .btn { margin-bottom:10px; }
      p.info {
        text-align:center;
        span { font-size:12px; color:@color-danger; }
      }
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
          height:16px; font-size:12px; line-height:16px; overflow:visible;
          ul, ul li { transition-duration:300ms; }
          li {
            opacity:0; color:#c0c4cc;
            // &:nth-child(1) { opacity:1; }
          }
        }
        .info { padding:10px 20px; }
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
    #dialog-agreement {
      .flow; justify-content:center; align-items:center;
      background-color:rgba(0,0,0,0);
      .inner-wrapper {
        position:relative;
        padding:20px 30px; width:400px; line-height:1.4; word-break:break-all;
        background-color:rgba(0,0,0,0.9); .radius(10px);
        .btn-wrapper {
          margin-top:20px; text-align:center;
          .btn { width:200px; }
        }
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

      #panel-bet #bet-type {
        ul { margin-left:10px; }
        ul li { margin:0 5px; }
      }

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
    #page-home #dialog-agreement {
      .inner-wrapper {
        width:auto; margin:0 15px;
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
        #bet-rule {
          p { white-space:nowrap; }
        }
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

  #panel-roll {
    .input-list {
      display:none;
      .input-wrapper {
        margin:5px 20px; height:30px;
        .flow(row); align-items:center;
        label { display:block; width:50px; text-align:left; }
        input[type=text] { flex:1; min-width:20px; height:100%; margin:0 10px; padding:0 10px; color:#666; .radius(4px); }
        .btn { min-height:30px; }
      }
    }
    input-list + .btn { margin-top:10px; }
  }
</style>

<template>
  <div id="page-home">
    <!-- 赌注 -->
    <div id="panel-bet" class="panel" v-if="roll.state==='ready'">
      <h1 class="text-highlight">国内最火爆的区块链猜数字小游戏</h1>
      <div>
        <h3>选择投注类型</h3>
        <div class="inner-panel" id="bet-type">
          <div class="label">
              <h3>数字</h3>
              <h3>投币</h3>
              <h3>赢币</h3>
          </div>
          <ul class="multiplying">
            <li v-for="(w,i) in this.bet.wager" :key="`wager${i}`" :class="bet.selected===i?'selected':''" @click="selectBetWager(i)">
                <p><span class="text-highlight">{{w.num}}</span></p>
              <p>{{w.eth}}</p>
              <p class="text-danger">{{w.profit}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="inner-panel" id="bet-rule">
        <p>系统在 <span class="text-highlight">1~100</span> 中产生一个随机数（随机数算法可证明公平）；</p>
        <p>如果随机数小于
        <span class="text-highlight">{{computedUserNumber}}</span>
          则系统自动将
        <span class="text-danger">{{computedUserProfit}}</span>
        ETH和
        <span class="text-danger">{{computedVppIfWin}}</span>&nbsp;
        <a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包；</p>
        <p>若大于等于
          <span class="text-highlight">{{computedUserNumber}}</span>
          则获得
          <span class="text-danger">{{computedVppIfLose}}</span>&nbsp;
          <a :href="vppLink" target="_blank">VPP</a>
        </p>
      </div>
      <div>
        <p class="info">&nbsp;
          <span v-if="bet.profit.max&&computedUserProfit&&!isUserProfitOK">
            已超过最大收益限制 ( {{bet.profit.max.toFixed(4)}} eth )，请调整投注金额或胜率</span>
        </p>
        <input type="button" class="btn primary block" value="投注" :disabled="!rollable" @click="doRoll">
      </div>
    </div>
    <!-- <div id="panel-roll" class="panel" v-else-if="roll.state==='roll'">
      <h2>投注结果</h2>
      <div class="inner-panel">
        <h3>投注数字</h3>
        <p class="number-block">{{+computedUserNumber}}</p>
      </div>
      <div class="border"></div>
      <div class="inner-panel">
        <h3>正在开奖请耐心等待...</h3>
        <p class="info">本次投注大概需要等待1-10分钟左右，视以太坊网络拥堵情况而定（不超过1小时），请稍后查看结果</p>
      </div>
      <div class="input-list">
        <div class="input-wrapper">
          <label for="sf8sdkfs">邮箱</label>
          <input type="text" id="sf8sdkfs" name="sf8sdkfs" v-model="email">
          <input type="button" class="btn primary" value="提交" @click="submitEmail">
        </div>
        <div class="input-wrapper">
          <label for="sdfs1eadsf">手机号</label>
          <input type="text" id="sdfs1eadsf" name="sdfs1eadsf" v-model="mobile">
          <input type="button" class="btn primary" value="提交" @click="submitMobile">
        </div>
      </div>
      <input type="button" class="btn primary block" value="再玩一次" @click="backToRoll">
    </div> -->
    <!-- 开奖 -->
    <div id="panel-roll" class="panel" v-else-if="roll.state!=='ready'">
      <h2>投注结果</h2>
      <div class="inner-panel">
        <h3>投注数字</h3>
        <p class="number-block">{{+computedUserNumber}}</p>
      </div>
      <div class="border"></div>
      <div class="inner-panel">
        <h3 v-if="roll.state==='roll'">正在开奖请耐心等待...</h3>
        <h3 v-else-if="roll.state==='bet'">已收到投注，正在生成随机数...</h3>
        <h3 v-else-if="roll.state==='result'">开奖数字</h3>
        <p class="info" v-if="roll.state!=='result'">本次投注大概需要等待1-10分钟左右，视以太坊网络拥堵情况而定（不超过1小时），请稍后查看结果</p>
        <div class="ads">
          <ul ref="ads-list">
            <li>Etherwow是中国最火的以太坊猜数字小游戏，无需注册，即点即玩</li>
            <li>随机数通过<a href="https://www.random.org/">random.org</a>根据实时大气扰动得出，保证公平</li>
            <li>为增加透明性，本网站<a :href="`https://etherscan.io/address/${contract.address}#code`" target="_blank">智能合约</a>源码已开源，玩家可以随时查看</li>
          </ul>
        </div>
        <div class="number-block">
          <p v-if="roll.result<3">
            <span v-if="roll.result===0" class="text-success">{{roll.value}}</span>
            <span v-else-if="roll.result===1" class="text-danger">{{roll.value}}</span>
            <span v-else class="text-warning">{{roll.value}}</span>
          </p>
          <svg v-else viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
        </div>
        <div class="tips" v-if="typeof roll.result==='number'">
          <p v-if="roll.result===0" class="text-success" style="line-height:20px;">
            - {{computedUserWager}} ETH
            <br>赠送 VPP:{{computedVppIfLose}} 个
          </p>
          <p v-else-if="roll.result===1" class="text-danger" style="line-height:20px;">
            Wow, 你赢了！ +{{computedUserProfit}} ETH
            <br>赠送 VPP:{{computedVppIfWin}} 个
          </p>
          <p v-else-if="roll.result===2">打款失败，请<a href="#withdraw" >手动提现</a></p>
          <p v-else-if="roll.result===3" class="text-warning">投注失败, 已退款</p>
          <p v-else-if="roll.result===4">投注失败, 请<a href="#withdraw" >手动提现</a></p>
        </div>
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
                  {{r.computedProfit.unit}}
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
            1.玩家可以任意选择一个档位并使用ETH投注
          </li>
          <li>
            2.系统在1~100中产生一个随机数（随机数算法可证明公平）
          </li>
          <li>
            3.玩家选择的数字大于系统产生的随机数，系统自动将 ETH+<a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包；若玩家选择的数字小于等于系统产生的随机数 ，系统自动将对应比例的 <a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包
          </li>
          <li>
            4.PC端请使用chrome + <a href="/help/metamask" target="_blank">metamask</a>访问
          </li>
          <li>
            5.手机端请使用 <a href="/help/trustwallet" target="_blank">trust wallet 浏览器</a>访问
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
      <p style="line-height:26px;">正在连接以太坊网络</p>
    </div>
    <div id="dialog-guide" class="dialog-container" :class="showGuideDialog?'show':''">
      <div class="inner-wrapper">
        <i class="close" @click="hideGuide"></i>
        <h2>怎么玩</h2>
        <div id="guide-game">
          <ul>
            <li>
              1.玩家可以任意选择一个档位并使用ETH投注
            </li>
            <li>
              2.系统在1~100中产生一个随机数（随机数算法可证明公平）
            </li>
            <li>
              3.玩家选择的数字大于系统产生的随机数，系统自动将 ETH+<a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包；若玩家选择的数字小于等于系统产生的随机数 ，系统自动将对应比例的 <a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包
            </li>
            <li>
              4.PC端请使用chrome + <a href="/help/metamask" target="_blank">metamask</a>访问
            </li>
            <li>
              5.手机端请使用 <a href="/help/trustwallet" target="_blank">trust wallet 浏览器</a>访问
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div id="dialog-agreement" class="dialog-container" :class="showAgreement?'show':''">
      <div class="inner-wrapper">
        <p>系统在1~100中产生一个随机数（<a href="http://www.oraclize.it/papers/random_datasource-rev1.pdf" target="_blank">随机数算法</a> 可证明公平）；
        <br>如果随机数小于<span class="text-highlight">{{computedUserNumber}}</span>则系统自动将{{computedUserProfit}}ETH和{{computedVppIfWin}} <a :href="vppLink" target="_blank">VPP</a> 转到玩家钱包；<br>若大于等于<span class="text-highlight">{{computedUserNumber}}</span>则获得{{computedVppIfLose}} <a :href="vppLink" target="_blank">VPP</a>
        </p>
        <div class="btn-wrapper">
          <input type="button" class="btn primary" value="确定" @click="doRoll">
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import contract from '~/assets/js/contract'
import contracts from '~/assets/js/contracts'
import vppContract from '~/assets/js/vppContract'
import Web3 from 'web3'
import footer1 from '~/components/footer'
import axios from 'axios'
export default {
  head() {
    return {
      script:[
        { src:'https://cdn.emailjs.com/dist/email.min.js' }
      ]
    }
  },
  data() {
    return {
      vppLink:"/vpp",
      showGuideDialog:false,
      showAgreement:false,
      hash:'',
      web3:undefined,
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
      vppContract: {
        ...vppContract,
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
        id:'',
        selected: 1,
        wager: [
          // {name:'0.1', value:0.1},
          // {name:'0.5', value:0.5},
          // {name:'1.0', value:1.0},
          // { eth:0.1, profit:1.000, num:9, real:1.0250000000000001 },
          { eth:0.1, profit:0.12,  num:76  },
          { eth:0.2, profit:0.36, num:51 },
          { eth:1,   profit:3, num:31 },
          { eth:0.5, profit:3, num:16 },
        ],
        range: {
          value:0,
          min:1,
          max:100
        },
        multiplying: {
          list:[
            {  }
          ]
        },
        profit: {
          max:0,
          reqTimer:-1,
          reqDelay:400
        }
      },
      // 投注状态
      roll: {
        index:0,
        state:'ready',
        result:'',
        value:'',
        BetID:'',

        // state:'roll',
        // result:4,
        // value:1
      },
      //
      metamaskOpt: {
        gas: 400000,
        gasPrice: process.env.NODE_ENV==='development'?110000000000: 11000000000
      },
      mountedRun: false,

      mobile:'',
      email:'',
    }
  },
  computed: {
    computedUserSelection() {
      return this.bet.wager[this.bet.selected];
    },
    computedUserWager() {
      // return this.bet.wager.list[this.bet.wager.selected].value;
      return this.computedUserSelection.eth;
    },
    computedUserProfit() {
      return this.computedUserSelection.profit;
      // let { wager, range, roll, profit } = this.bet;
      // if ( !profit.max ) return 0;
      // return ((((this.computedUserWager * (100-(range.value))) / (range.value)+this.computedUserWager))*900/1000)-this.computedUserWager;
    },
    computedUserNumber() {
      return this.computedUserSelection.num;
    },
    computedVppIfWin() {
      return Math.floor(50000 * this.computedUserWager * 0.01)
    },
    computedVppIfLose() {
      let { eth, num } = this.computedUserSelection;
      return 50000 * eth * (100-num) / 100 * 0.1
    },
    // 钱包可用
    isPocketAvailable() {
      return typeof web3 !== 'undefined';
    },
    isNetworkAvailable() {
      return typeof web3 !== 'undefined';
    },
    isAccountAvailable() {
      return !!this.account.address.trim()
    },
    isUserProfitOK() {
      return this.computedUserProfit? this.computedUserProfit <= this.bet.profit.max: false;
    },
    rollable() {
      return this.isPocketAvailable && this.isAccountAvailable && this.isUserProfitOK;
    },
    account() {
      return this.$store.state.account
    },
    contracts() {
      return this.web3? contracts.addrs.map(a=>{
        return this.web3.eth.contract(contracts.abi).at(a);
      }): []
    }
  },
  methods: {
    // --------- 功能 ---------
    // 初始化 web3
    initWeb3() {
      this.web3 = this.isPocketAvailable?
        new Web3(web3.currentProvider):
        new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


      if (process.env.NODE_ENV==='development') {
        this.web3Watcher = this.web3;
      } else {
        this.web3Watcher = this.web3;
        // this.web3Watcher = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/bjPSTQ5VH6r0zRznudTB"))
      }
    },
    hideGuide() {
      console.log('hide');
      localStorage.setItem('hasReadGuide', true);
      this.showGuideDialog = false;
    },
    // 获取账户信息
    async getAccountInfo() {
      // 获取钱包地址
      let address = await new Promise((resolve,reject)=>{
        this.web3.eth.getAccounts((err, result)=>{
          if ( err ) return reject('没找到账户信息')
          console.warn(`钱包地址: ${result[0]||''}`)
          resolve(result[0]||'')
        })
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
          resolve( result )
        })
      })
      .then(result=>{
        // 返回的是一个bigNumber对象, 需要获取bigNumber对应的数(单位是wei), 再将wei转成eth
        console.warn(`余额: ${ result.toNumber() } (wei)`)
        return +result.toNumber()
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getBalance'}))

      let vppWei = await new Promise((resolve,reject)=>{
        this.getVppContract().balanceOf(address, (err,result)=>{
          if ( err ) return reject(err)
          resolve(result.toNumber())
        })
      })


      // 余额 (单位 eth)
      let balance = +this.web3.fromWei( wei );
      let vppBalance = +this.web3.fromWei( vppWei )

      console.warn(`余额: ${balance} (eth)`)

      this.$store.commit('setAccount', { ...this.account, address, wei, balance, vppWei, vppBalance, loaded:true })
    },
    // 获取合约
    getContract(forWatching) {
      if ( forWatching ) {
        return this.web3Watcher.eth.contract(this.contract.abi).at(this.contract.address);
      } else {
        return this.web3.eth.contract( this.contract.abi ).at(this.contract.address)
      }
    },
    // 获取vpp合约
    getVppContract() {
      return this.vppContract.instance?
        this.vppContract.instance:
        ( this.vppContract.instance=this.web3.eth.contract(this.vppContract.abi).at(this.vppContract.address) );
    },
    // 获取投注记录
    async getRecord() {
      // 获取当前的区块数
      let blockNumber   = await new Promise((resolve, reject)=>{
        this.web3.eth.getBlockNumber((err, result)=>{
          if (err) return reject();
          resolve(result);
        });
      })
      .catch(err=>this.commonErrorCatcher.call(this,err,{from:'getRecord'}));

      // 估计n天的区块数, (假设一分钟上链15个)
      let dayBlockNumber = (60*24*15) * 7;

      // 获取合约
      let contract = this.contracts[0];

      console.log(  )

      console.log('contract...+++++++++++++停滞', contract)

      // 监听实例
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
      // 监听时间
      LogBet.watch((err,result)=>{
        if ( err ) return console.error(err);
        if ( bets.some(r=>r.args.BetID===result.args.BetID) ) return;
        bets.push( result );
        this.disposeRecord(bets, results, refunds);
        this.disposeRankRecord(results, bets)

        // 自己的投注
        // 如果流程不对, 如果已经有在监控的,
        if ( this.roll.BetID ) return console.log('111111111', this.roll.BetID);
        if ( this.roll.state !=='roll' ) return console.log('2222222', this.roll.state);
        if ( result.args.UserAddress !== this.account.address ) return console.log('其它的 账户');

        console.log('____________________bet')
        console.log( `id: ${result.args.BetID}` )
        console.log('____________________bet')

        // if ( this.roll.BetID && (this.roll.BetID!==result.args.BetID) ) return;
        console.warn('支付成功');
        this.roll.state = 'bet';
        this.roll.BetID = result.args.BetID;
        this.showAds('bet');
        this.updatePageData();
      })
      ResultBet.watch((err,result)=>{
        if ( err ) return console.error(err);
        if ( results.some(r=>r.args.BetID===result.args.BetID) ) return;
        results.push( result );
        this.disposeRecord(bets, results, refunds);
        this.disposeRankRecord(results, bets)

        // 自己的投注
        if ( this.roll.state.indexOf('bet') !== 0 ) return;
        if ( this.roll.BetID !== result.args.BetID ) return;


        console.log('____________________result')
        console.log( `${this.roll.BetID}, ${result.args.BetID}` )
        console.log('____________________result')

        this.roll.state = 'result';
        this.showAds('result');
        this.roll.result = +result.args.Status.toNumber()
        this.roll.value  = +result.args.DiceResult.toNumber()
        this.updatePageData();
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
            map['_'+r.UserAddress].ProfitValue += r.ProfitValue? +r.ProfitValue.toNumber(): 0
          } else {
            map['_'+r.UserAddress] = {
              UserAddress:r.UserAddress,
              ProfitValue:r.ProfitValue? +r.ProfitValue.toNumber(): 0
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
      console.log('=====error')
      console.log( err.toString() );
      console.log('=====error')
      this.$store.commit('showMessageDialog',{type:'failure', html:opt&&opt.html, text:err.toString()});
    },
    // 刷新页面数据
    async updatePageData(isFirstTime) {
      if ( !this.isPocketAvailable ) return;
      if ( !this.record.all.length ) {
        this.getRecord()
      }
      // 获取最大用户收益
      this.getUserMaxProfit();
      // 获取账户信息
      await this.getAccountInfo();
      if ( this.isAccountAvailable ) {
        this.getPendingWithdrawal();

        // 在钱包ok账户ok的情况下(直接可玩), 显示一次引导窗口
        if ( !localStorage.getItem('hasReadGuide') )  {
          this.showGuideDialog = true;
        }
      }
      // 钱包ok, 账户不ok, (差一步)右侧是引导
      // if ( isFirstTime && !this.isAccountAvailable ) {
      //   this.hash = '#guide';
      // } else {
      //   this.hashChange();
      // }

      this.hashChange();
    },

    // --------- bet ----------
    // 选择价格
    selectBetWager(idx) {
      this.bet.selected = idx;
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
      // this.showAgreement = false;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // 支付参数
      let additionParam = {
        from: this.account.address,
          to: this.contract.address,
          value: +this.web3.toWei( this.computedUserWager ),
          ...this.metamaskOpt
      };


      // 投注
      let contract = this.getContract();
      contract.userRollDice(+this.computedUserNumber, additionParam, (err, hash)=>{
        if ( err ) return this.commonErrorCatcher('已取消支付');
        let LogBet = contract.LogBet();
        //
        this.roll.state = 'roll';
        this.showAds('roll');
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
        setTimeout(this.showAds.bind(this,'bet-2'),10000)
      }

      list.className = state;
    },
    // 返回
    backToRoll() {
      this.roll.BetID  = ''
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
      let state='', value=0, prefix='', unit='';
      if ( status===0 ) {
        // state  = 'success'
        // value  = +this.web3.fromWei(r.BetValue.toNumber())
        // prefix = '-';

        state = 'danger'
        // value = this.getVppQtyIfLose(
        //   +this.web3.fromWei(r.BetValue.toNumber()),
        //   +r.UserNumber.toNumber()
        // )
        value  = +this.web3.fromWei(r.tokenReward.toNumber())
        prefix = '+'
        unit   = 'VPP'
      } else if ( status===1 ) {
        state  = 'danger'
        value  = +this.web3.fromWei(r.ProfitValue.toNumber())
        prefix = '+'
        unit   = 'ETH'
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
      return { state, value, prefix, unit }
      // let compare = r.DiceResult.toNumber()<r.UserNumber.toNumber();
      // let value   = this.web3.fromWei(compare? r.ProfitValue.toNumber(): r.BetValue.toNumber());

      // return { state:compare?'success':'failure', value, prefix:compare?'+':'-' }
    },

    // --------- bet ----------
    // --------- bet ----------

    hashChange() {
      this.hash = location.hash||'#record';
    },
    submitMobile() {
      if ( !/^1[3-9]\d{9}$/.test(this.mobile) ) {
        return this.$store.commit('showMessageDialog', {type:'failure', text:'手机号码错误'});
      }
    },
    submitEmail() {
      let reg = /^[a-zA-Z0-9\u4e00-\u9fa5]+([\.\_\-]?[a-zA-Z0-9\u4e00-\u9fa5])+@([a-zA-Z0-9]+[\.\-])+[a-zA-Z0-9]+$/;
      if ( !reg.test(this.email) ) {
        return this.$store.commit('showMessageDialog', {type:'failure', text:'邮箱格式错误'});
      }
    },
  },
  // 初始化 环境 和 账户信息
  mounted() {
    this.initWeb3();

    if ( this.isPocketAvailable ) {
      this.updatePageData(true)
      console.warn(`合约地址: ${this.contract.address}`);
    } else {
      this.hash = location.hash = '#guide';
      this.$store.commit('setAccount', {...this.account, loaded:true});
    }

    window.addEventListener('hashchange', this.hashChange);
    
    this.mobile = localStorage.getItem('_mobile')||'';
    this.email = localStorage.getItem('_email')||'';
  },
  components: {
    footer1
  },
}
</script>
