ㄇㄩ
<template>
  <div class="bg bg-money">
    <div class="registerSuccess content-padding">
      <div class="panel-simple">
        <h2 class="title">注册成功</h2>

        <div class="good-news">喜您成功开启平台交易账户，如使用电票担保交易功能， 需要您继续完成企业交易认证，即可创建电子交易账户</div>

        <b-container fluid>
          <b-row>
            <b-col>
              <router-link to="/account/payment">
                <b-button variant="primary" class="btn-block ml-2">创建电子交易账户</b-button>
              </router-link>
            </b-col>
            <b-col>
              <router-link to="/home">
                <b-button variant="outline-secondary" class="btn-block ml-2">暂不开户，我先逛一逛</b-button>
              </router-link>
            </b-col>
          </b-row>
        </b-container>

        <!--温馨提示 start-->
        <div class="friendly-reminder">
          <div class="friendly-reminder__title">
            <i class="solid-line"></i>
            <span>温馨提示</span>
            <i class="solid-line"></i>
          </div>
          <ul>
            <li>Q: 为什么要创建电子交易账户？</li>
            <li>
              <i class="fas fa-info-circle mr-1"></i>
              有票么采用【先打款，后背书】的交易模式，即买方先打款到指定专户，买方确认资金到账后再背书， 系统合验电票签收后解付资金。
            </li>
            <li>
              <i class="fas fa-info-circle mr-1"></i>
              企业的对公银行账户无法实现资金冻结和解冻相关功能，需要为企业创建【电子交易账户】实现相关功能。
            </li>
          </ul>
        </div>
        <!--温馨提示 end-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.registerSuccess {
  margin: 0 auto;

  .panel-simple {
    width: 750px;
  }

  .good-news {
    margin: 30px 0;
  }
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'registerSuccess',
}
</script>
