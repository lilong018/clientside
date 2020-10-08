<template>
  <!--签收户权鑑-->
  <div class="mb-3">
    <!--企业名称-->
    <b-form-group>
      <label>企业名称</label>
      <br />
      上海拉拉事业有限公司
    </b-form-group>

    <!--开户行行号-->
    <div class="inline-with-button-group">
      <b-form-input required v-model="formData.kaihuBankNumber" placeholder="开户行行号" class="d-inline-block"></b-form-input>
      <b-button variant="outline-secondary" class="small-btn d-inline-block" v-b-modal.checkBanks>查询行号</b-button>
      <!--跳弹视窗-银行名称检索-->
      <b-modal id="checkBanks" title="查询行号" @ok="checkBanksDone('kaihuBankNumber')" @cancel="checkBanksRest" ok-title="确认" cancel-title="取消">
        <CheckBanks></CheckBanks>
      </b-modal>
    </div>

    <!--开户行名称-->
    <b-form-input v-model="formData.kaihuBankName" required disabled placeholder="开户行名称"></b-form-input>

    <!--银行账号-->
    <b-form-input required placeholder="银行账号"></b-form-input>

    <!--账户验证-->
    <b-form-input required placeholder="金额"></b-form-input>

    <!--剩余鉴权次数-->
    <div class="border border-danger px-2 text-danger d-inline-block">
      剩余鉴权次数:
      <span class="fa-3x">3</span>
      次
    </div>

    <!--Modal 验证失败-->
    <br />
    <br />
    <b-btn variant="danger" size="sm" v-b-modal.error-msg>错误讯息</b-btn>
    <b-modal id="error-msg" ref="error-msg" title="验证失败" ok-title="确认" ok-only @ok="this.$refs['error-msg'].hide()">
      <div>验证失败: 验证金额错误</div>
      <div>银行鉴权失败3次，请重新绑定银行账户</div>
    </b-modal>
    <footer class="modal-footer inside">
      <button type="button" class="btn btn-dark">取消</button>
      <button type="button" class="btn btn-primary">确认</button>
    </footer>
  </div>
</template>
<style lang="scss" scorped></style>

<script>
import { mapState, mapActions } from 'vuex'
import CheckBanks from '@/components/layout/modal/checkBanks'

export default {
  name: 'bank-add',
  components: {
    CheckBanks,
  },
  data() {
    return {
      errorMessage: '验证失败: 验证金额错误',
      formData: {
        bankAccountCache: '', // 开户行行号-查询视窗带入值
        kaihuBankNumber: '307473000888', // 开户行行号
        kaihuBankName: '平安银行有限公司临沂分行	', // 开户行名称
      },
    }
  },

  methods: {
    ...mapActions(['system/setBankAccountCache']),
    setBankAccountCache(data) {
      this['system/setBankAccountCache'](data)
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },

    // 代入$store开户行行号
    checkBanksDone(item) {
      const vm = this
      this.$set(vm.formData, item, vm.bankAccountCache)
    },
    // 清除＄store开户行行号
    checkBanksRest() {
      const vm = this
      vm.setBankAccountCache('')
    },
  },
  computed: {
    ...mapState({
      //监听 开户行行号
      bankAccountCache: (state) => state.system.bankAccountCache,
    }),
  },
}
</script>
