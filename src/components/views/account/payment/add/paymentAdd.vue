<template>
  <div class="bg bg-money-dark p-3">
    <div class="card mb-3">
      <div class="card-body container py-5">
        <div class="card-title card-text text-center">电子交易账户开通</div>

        <!--(1)Step过程-帐户开通-->
        <div class="steps-box">
          <ul class="steps">
            <li class="step step-active">
              <div class="step-content">
                <span class="step-circle">1</span>
                <span class="step-text">账户开通</span>
              </div>
            </li>
            <li class="step">
              <div class="step-content">
                <span class="step-circle">2</span>
                <span class="step-text">资料审核</span>
              </div>
            </li>
            <li class="step">
              <div class="step-content">
                <span class="step-circle">3</span>
                <span class="step-text">账户激活</span>
              </div>
            </li>
            <li class="step">
              <div class="step-content">
                <span class="step-circle">4</span>
                <span class="step-text">完成开户</span>
              </div>
            </li>
          </ul>
        </div>

        <!--绑定银行账户-->
        <article class="mb-5">
          <h2 class="form-title">绑定银行账户</h2>

          <b-form-input v-model="formData.companyName" required placeholder="企业名称"></b-form-input>
          <div class="inline-with-button-group">
            <b-form-input required v-model="formData.kaihuBankNumber" placeholder="开户行行号" class="d-inline-block"></b-form-input>
            <b-button variant="outline-secondary" class="small-btn d-inline-block" v-b-modal.checkBanks>查询行号</b-button>
            <!--跳弹视窗-银行名称检索-->
            <b-modal id="checkBanks" title="查询行号" @ok="checkBanksDone('kaihuBankNumber')" @cancel="checkBanksRest" ok-title="确认" cancel-title="取消">
              <CheckBanks></CheckBanks>
            </b-modal>
          </div>
          <b-form-input v-model="formData.kaihuBankName" required placeholder="开户行名称"></b-form-input>

          <!--开户行地址-->
          <h6 class="input-label-title">开户行地址</h6>
          <b-form-select v-model="formData.selectedKaiHuShen" :options="formData.optionsKaiHuShen" class="mb-3"></b-form-select>
          <br />
          <b-form-select v-model="formData.selectedKaiHuShi" :options="formData.optionsKaiHuShi" class="mb-3"></b-form-select>
          <b-form-input v-model="formData.bankAccount" required placeholder="银行帐号"></b-form-input>
        </article>

        <!--企业信息 -->
        <article class="mb-5">
          <h2 class="form-title">企业信息</h2>
          <!--左 企业信息 -->
          <div class="row">
            <div class="col">
              <div class="upload-area">
                营业执照（多证合一）
                <div class="upload-area__wrapper">
                  <div class="upload-box">
                    <i class="far fa-image upload-ico"></i>
                    <div class="text-secondary">
                      <div>点击此上传图片</div>
                      <small>2MB 以内</small>
                    </div>
                  </div>
                  <input ref="companyFile" type="file" style="display: none" />

                  <!--示例-->
                  <b-button variant="outline-secondary" class="small-btn d-inline-block" v-b-modal.paper>示例</b-button>
                  <!--跳弹视窗-营业执照示例-->
                  <b-modal id="paper" size="lg" title="营业执照示例" ok-title="确认" ok-only>
                    <img style="max-width: 100%" src="@/assets/images/resource/paper.jpg" />
                  </b-modal>
                </div>
              </div>
              <small class="text-danger"> 请上传复印盖公章的扫描件，上传图片3~4秒后，系统 将会自动识别您的相关信息，若信息有误请手动更改 </small>

              <b-form-group>
                <b-form-input required placeholder="企业名称"></b-form-input>
                <b-form-input required placeholder="企业简称 (如:xx金融)"></b-form-input>
                <b-form-input required placeholder="证件代码"></b-form-input>
                <b-input-group append="万元">
                  <b-form-input required placeholder="注册资本"></b-form-input>
                </b-input-group>
                <b-form-datepicker v-model="formData.datepickerLicence" class="datepicker-form" placeholder="执照到期日"></b-form-datepicker>
              </b-form-group>
            </div>

            <!--中 企业注册地址一-->
            <div class="col">
              <h6 class="input-label-title">注册地址</h6>
              <b-form-select v-model="formData.selectedCompanyAddressShen" :options="formData.optionsCompanyRegisterAddressShen" class="mb-3"></b-form-select>
              <br />
              <b-form-select v-model="formData.selectedCompanyAddressShi" :options="formData.optionsCompanyRegisterAddressShi" class="mb-3"></b-form-select>
              <b-form-select v-model="formData.selectedCompanyAddressQu" :options="formData.optionsCompanyRegisterAddressQu" class="mb-3"></b-form-select>
              <b-form-textarea v-model="formData.companyRegisterAddress" placeholder="输入 企业的详细地址，最多80个字" rows="3" max-rows="6"></b-form-textarea>
            </div>

            <!--右 企业经营地址一-->
            <div class="col">
              <h6 class="input-label-title">经营地址</h6>
              <b-form-select v-model="formData.selectedCompanyAddressShen" :options="formData.optionsCompanyAddressShen" class="mb-3"></b-form-select>
              <br />
              <b-form-select v-model="formData.selectedCompanyAddressShi" :options="formData.optionsCompanyAddressShi" class="mb-3"></b-form-select>
              <b-form-textarea v-model="formData.companyAddress" placeholder="输入 输入 经营范围，最多输入140个字" rows="3" max-rows="12"></b-form-textarea>
            </div>
          </div>
        </article>

        <br />

        <!--法人信息-->
        <article class="mb-5">
          <h2 class="form-title">企业信息</h2>

          <div class="upload-area">
            身分证(正面)
            <div class="upload-area__wrapper">
              <div class="upload-box" @click="chooseFiles()">
                <i class="far fa-image upload-ico"></i>
                <div class="text-secondary">
                  <div>点击此上传图片</div>
                  <small>2MB 以内</small>
                </div>
              </div>
              <input style="display: none" type="file" />
              <!--示例-->
              <b-button type="button" variant="outline-secondary" class="small-btn d-inline-block" v-b-modal.person-id>示例</b-button>
              <!--跳弹视窗-身分证(正面)-->
              <b-modal id="person-id" size="md" title="身分证(正面)" ok-title="确认" ok-only>
                <img style="max-width: 100%" src="@/assets/images/resource/person-id.jpg" />
              </b-modal>
            </div>
          </div>

          <div class="upload-area">
            身分证(背面)
            <div class="upload-area__wrapper">
              <div class="upload-box" @click="chooseFiles()">
                <i class="far fa-image upload-ico"></i>
                <div class="text-secondary">
                  <div>点击此上传图片</div>
                  <small>2MB 以内</small>
                </div>
              </div>
              <input id="fileUpload" style="display: none" type="file" />
              <!--示例-->
              <b-button type="button" variant="outline-secondary" class="small-btn d-inline-block" v-b-modal.person-id-back>示例</b-button>
              <!--跳弹视窗-身分证(背面)-->
              <b-modal id="person-id-back" size="md" title="身分证(背面)" ok-title="确认" ok-only>
                <img style="max-width: 100%" src="@/assets/images/resource/person-id-back.jpg" />
              </b-modal>
            </div>
          </div>
          <b-form-group>
            <b-form-input required placeholder="法人名称"></b-form-input>
            <b-form-input required placeholder="身份证号码"></b-form-input>
            <b-form-input required placeholder="手机号码"></b-form-input>
          </b-form-group>
        </article>

        <!--财务经办人授权-->
        <article class="mb-5">
          <h2 class="form-title">财务经办人授权</h2>

          <b-form-group>
            <b-form-input required placeholder="经办人姓名"></b-form-input>
            <b-form-input required placeholder="经办人手机号码 (11位)"></b-form-input>
            <div class="inline-with-button-group">
              <b-form-input required placeholder="经办人微信号"></b-form-input>

              <b-form-checkbox id="sameAsJinban" v-model="formData.sameAsJinbanStatus" name="sameAsJinban" value="accepted" unchecked-value="not_accepted">同经办人手机</b-form-checkbox>
            </div>
            <b-form-input required placeholder="经办人身份证号码"></b-form-input>
            <b-form-input required placeholder="经办人电子邮箱"></b-form-input>
          </b-form-group>
          <div class="text-danger">请确认经办人姓名，手机号，身份证号信息一致，否则无法通过资料审核</div>
        </article>

        <div class="d-flex justify-content-center">
          <router-link to="/account/payment/add/activation">
            <b-button variant="primary" class="btn-lg">立即注册</b-button>
          </router-link>
        </div>
      </div>
    </div>

    <!--财务经办人手机号码校验-->
    <b-modal id="modalMobileCheck" title="财务经办人手机号码校验" ok-title="确认" cancel-title="取消" no-close-on-esc no-close-on-backdrop hide-header-close>
      <b-form-group>
        <b-form-input class="mb-0" required placeholder="财务经办人手机号码"></b-form-input>
        <small>由于苏宁易付宝登录用户名和接受资金变动等信息提醒</small>
      </b-form-group>
      <div class="inputButtonInline">
        <b-form-input required placeholder="短信验证码"></b-form-input>
        <b-button class="ml-3" variant="outline-secondary">获取验证码</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import CheckBanks from '@/components/layout/modal/checkBanks'
export default {
  name: 'paymentAdd',
  components: { CheckBanks },
  data() {
    return {
      showForm: true,
      selectedBankAccount: '', //来自跳弹视窗选取的值

      formData: {
        // 绑定银行账户
        companyName: '', // 企业名称
        kaihuBankNumber: '', // 开户行行号
        kaihuBankName: '', // 开户行名称
        sameAsJinbanStatus: true, // 经办人同手机,

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
        bankAccount: '', // 开户帐号

        //企业信息
        selectedCompanyRegisterAddressShen: null,

        optionsCompanyRegisterAddressShen: [
          { text: '请选择省/市', value: 'null' },
          { text: 'XX省 XX市', value: 'a' },
        ],

        selectedCompanyRegisterAddressShi: null,

        optionsCompanyRegisterAddressShi: [
          { text: '请选择 市', value: 'null' },
          { text: 'XX市', value: 'a' },
        ],

        selectedCompanyRegisterAddressQu: null,

        optionsCompanyRegisterAddressQu: [
          { text: '请选择 区', value: 'null' },
          { text: 'XX区', value: 'a' },
        ],

        companyRegisterAddressAddress: '',
        //企业经营地址
        selectedCompanyAddressShen: null,

        optionsCompanyAddressShen: [
          { text: '请选择省/市', value: 'null' },
          { text: 'XX省 XX市', value: 'a' },
        ],

        selectedCompanyAddressShi: null,

        optionsCompanyAddressShi: [
          { text: '请选择 市', value: 'null' },
          { text: 'XX市', value: 'a' },
        ],

        selectedCompanyAddressQu: null,

        optionsCompanyAddressQu: [
          { text: '请选择 区', value: 'null' },
          { text: 'XX区', value: 'a' },
        ],

        companyAddress: '',

        //执照到期
        datepickerLicence: null,
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
      bankAccountCache: (state) => state.system.bankAccountCache, //银行帐户选取数字
    }),
  },
  mounted() {
    const vm = this

    //顯示手機檢查
    this.$bvModal.show('modalMobileCheck')
  },
}
</script>