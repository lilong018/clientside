<template>
  <div class="bg bg-money-dark p-3">
    <div class="card mb-3">
      <div class="card-body container py-5">
        <div class="card-title card-text text-center">电子交易账户开通</div>

        <!--(1)Step过程-完成开户-->
        <div class="steps-box">
          <ul class="steps">
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">1</span>
                <span class="step-text">账户开通</span>
              </div>
            </li>
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">2</span>
                <span class="step-text">资料审核</span>
              </div>
            </li>
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">3</span>
                <span class="step-text">账户激活</span>
              </div>
            </li>
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">4</span>
                <span class="step-text">完成开户</span>
              </div>
            </li>
          </ul>
        </div>

        <!--银行账户激活-->
        <article class="mb-5">
          <h2 class="form-title">银行账户激活</h2>

          <div class="p-3 text-center">开户完成 … 即将去电子账户页面</div>
        </article>

        <br />

        <div class="d-flex justify-content-center">
          <router-link to="/account/payment"><b-button variant="primary" class="btn-lg">返回电子交易账户</b-button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'paymentAddStep3',
  data() {
    return {}
  },
  mounted() {
    const vm = this

    //显示手机检查
    this.$bvModal.show('modalMobileCheck')
  },
}
</script>
