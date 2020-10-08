<template>
  <div class="bg bg-money-dark p-3">
    <div class="card card-depth-bg mb-3">
      <div class="card-body" style="min-height: 120px">
        <div class="card-title card-text">银行账户</div>

        <b-tabs active-nav-item-class="active-nav-item-class" active-tab-class="active-tab-class" content-class="mt-3">
          <!--京东智票-->
          <b-tab title="京东智票" active>
            <b-tabs pills>
              <!--提現戶-->
              <b-tab title="提現戶" active>
                <div class="p-2">
                  <!--卡片 已通過-->
                  <div class="bank-card success">
                    <div>
                      <label>已通过</label>
                    </div>
                    <table>
                      <tr>
                        <td>企业名称</td>
                        <td>拉拉科技金融有限公司</td>
                      </tr>
                      <tr>
                        <td>开户行名称</td>
                        <td>平安银行有限公司分行分行</td>
                      </tr>
                      <tr>
                        <td>开户银行行号</td>
                        <td>3094730134283974</td>
                      </tr>
                      <tr>
                        <td>银行帐号</td>
                        <td>34579*********47</td>
                      </tr>
                    </table>
                  </div>

                  <!--卡片 待审核-->
                  <div class="bank-card pending">
                    <div>
                      <label>待审核</label>
                    </div>
                    <table>
                      <tr>
                        <td>企业名称</td>
                        <td>拉拉科技金融有限公司</td>
                      </tr>
                      <tr>
                        <td>开户行名称</td>
                        <td>平安银行有限公司分行分行</td>
                      </tr>
                      <tr>
                        <td>开户银行行号</td>
                        <td>3094730134283974</td>
                      </tr>
                      <tr>
                        <td>银行帐号</td>
                        <td>34579*********47</td>
                      </tr>
                    </table>
                  </div>

                  <!--卡片 待鉴权-->
                  <div class="bank-card pending">
                    <div>
                      <label>待鉴权:剩余次数: 3</label>
                      <b-btn class="btnActivity" variant="danger" size="sm" v-b-modal.bankAuth>
                        <i class="far fa-hand-point-right faa-horizontal animated"></i>
                        点击进行鉴权
                      </b-btn>
                      <!--Modal 银行鉴权-->
                      <b-modal id="bankAuth" ref="bankAuth" title="银行鉴权" hide-footer>
                        <bank-auth></bank-auth>
                      </b-modal>
                    </div>
                    <table>
                      <tr>
                        <td>企业名称</td>
                        <td>拉拉科技金融有限公司</td>
                      </tr>
                      <tr>
                        <td>开户行名称</td>
                        <td>平安银行有限公司分行分行</td>
                      </tr>
                      <tr>
                        <td>开户银行行号</td>
                        <td>3094730134283974</td>
                      </tr>
                      <tr>
                        <td>银行帐号</td>
                        <td>34579*********47</td>
                      </tr>
                    </table>
                  </div>

                  <!--卡片 添加-->
                  <div class="bank-card add" v-b-modal.bankAdd>
                    <i class="fa fa-plus upload-ico"></i>
                    <div class="text-secondary">
                      <div>点击此處添加提現戶</div>
                    </div>
                  </div>
                  <!--Modal添加簽收戶-->
                  <b-modal id="bankAdd" title="添加签收户" @ok="bankAddDone" @cancel="bankAddCancel" ok-title="确认" cancel-title="取消" hide-footer>
                    <bank-add></bank-add>
                  </b-modal>
                </div>
              </b-tab>

              <!--提現戶-->
              <b-tab title="簽收戶">
                <b-card-text>京东智票 簽收戶</b-card-text>
              </b-tab>
            </b-tabs>
          </b-tab>

          <!--京东智付-->
          <b-tab title="京东智付">
            <b-tabs pills>
              <!--提現戶-->
              <b-tab title="提現戶" active>
                <b-card-text>京东智付 提現戶</b-card-text>
              </b-tab>

              <!--提現戶-->
              <b-tab title="簽收戶">
                <b-card-text>京东智付 簽收戶</b-card-text>
              </b-tab>
            </b-tabs>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// 銀行卡-template
.bank-card {
  width: 280px;
  height: 160px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px 15px 15px 15px;
  background: #232323;
  border-radius: 5px;
  margin: 10px;
  position: relative;
  vertical-align: bottom;
  label {
    display: inline-block;
    position: absolute;
    left: -10px;
    top: 10px;
    padding: 5px 10px;
  }
  table {
    font-size: 13px;
  }
}
// 銀行卡-已通過
.bank-card.success {
  color: $gold;
  label {
    color: #000;
    background: $gold;
  }
}

// 銀行卡-待審核
.bank-card.pending {
  border: 1.8px dashed $pending;
  color: $pending-dark;
  background: $pending-light;
  label {
    color: #fff;
    background: $pending;
  }
}

// 銀行卡-添加
.bank-card.add {
  display: inline-block;
  flex-direction: unset;
  justify-content: unset;
  background: $gold-lighter;
  border: 1.8px dashed $gold-dark;
  padding: 50px 15px 15px 15px;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    opacity: 1;
  }

  .upload-ico {
    color: $gold-dark;
    font-size: 40px;
    margin-bottom: 5px;
  }
}

.btnActivity {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>

<script>
import BankAdd from '@/components/views/account/bank/add/bankAdd'
import BankAuth from '@/components/views/account/bank/add/bankAuth'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'bank',
  components: {
    BankAdd,
    BankAuth,
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['system/setAdminMenuFlag']),
    setAdminMenuFlag(flag) {
      this['system/setAdminMenuFlag'](flag)
    },
    bankAddDone() {
      alert('銀行添加確認')
    },
    bankAddCancel() {
      alert('銀行添加取消')
    },
    bankAuthDone() {
      alert('银行鉴权確認')
    },
    bankAuthCancel() {
      alert('银行鉴权取消')
    },
  },
  mounted() {
    this.setAdminMenuFlag(true) // 開菜單
  },
}
</script>
