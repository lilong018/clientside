<template>
  <!--添加签收户-->
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

    <!--开户行地址-->
    <h6 class="input-label-title">开户行地址</h6>
    <b-form-select v-model="formData.selectedKaiHuShen" :options="formData.optionsKaiHuShen" class="mb-3"></b-form-select>
    <br />
    <b-form-select v-model="formData.selectedKaiHuShi" :options="formData.optionsKaiHuShi" class="mb-3"></b-form-select>

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
      formData: {
        bankAccountCache: '', // 开户行行号-查詢視窗帶入值
        kaihuBankNumber: '307473000888', // 开户行行号
        kaihuBankName: '平安银行有限公司临沂分行	', // 开户行名称
        selectedKaiHuShen: null, // 开户省市
        optionsKaiHuShen: [
          { text: '请选择省/市', value: 'null' },
          { text: 'XX省 XX市', value: 'a' },
        ],

        selectedKaiHuShi: null, // 开户市
        optionsKaiHuShi: [
          { text: '请选择 市', value: 'null' },
          { text: 'XX市', value: 'a' },
        ],
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

    // 代入$store開戶行行號
    checkBanksDone(item) {
      const vm = this
      this.$set(vm.formData, item, vm.bankAccountCache)
    },
    // 清除＄store開戶行行號
    checkBanksRest() {
      const vm = this
      vm.setBankAccountCache('')
    },
  },
  computed: {
    ...mapState({
      //監聽 开户行行号
      bankAccountCache: (state) => state.system.bankAccountCache,
    }),
  },
}
</script>
