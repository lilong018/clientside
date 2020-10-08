<template>
  <div class="bg bg-money-dark p-3">
    <div class="card mb-3">
      <div class="card-body" style="min-height: 120px">
        <div class="card-title card-text">渠道账户</div>
        <ag-grid-vue class="table ag-theme-alpine" style="width: 100%; height: 120px" :rowHeight="rowHeight" :columnDefs="columnDefs" :rowData="rowData"></ag-grid-vue>

        <!--上方表格-->
        <!-- <b-table small striped hover :items="items" :fields="fields">
          <template v-slot:cell(actions)="actionsVar">
            <b-button size="sm" class="mr-1" @click="createAccount()">开通</b-button>
            <span>-</span>
            <b-button size="sm" class="mr-1" @click="littleAuthentication()">小额鉴权</b-button>
            <b-button size="sm" class="mr-1" @click="bankAccount()">银行账户</b-button>
          </template>
        </b-table> -->
      </div>
    </div>

    <div class="card">
      <div class="card-body" style="min-height: 120px">
        <div class="card-title card-text">渠道对比说明</div>
        <table class="table table-bordered table-sm style-three-color">
          <thead>
            <th style="width: 100px">账户渠道</th>
            <th>京东智付</th>
            <th>京东智票</th>
          </thead>
          <tbody>
            <tr>
              <th>监管账户名称</th>
              <td>京东金融服务（上海）股份有限公司</td>
              <td>京东金融服务（上海）股份有限公司</td>
            </tr>
            <tr>
              <th>验票银行</th>
              <td>无</td>
              <td>平安银行，中信银行</td>
            </tr>
            <tr>
              <th>余额充值方式</th>
              <td>网关充值(兴业银行丶中国银行丶邮储银行丶北京银行丶平安银行丶中信银行丶浦发银行丶中国光大银行丶 中国建设银行丶华夏银行丶中国民生银行丶上海银行、招商银行、齐鲁银行、东莞农商行)</td>
              <td>网关充值(兴业银行丶中国银行丶邮储银行丶北京银行丶平安银行丶中信银行丶浦发银行丶中国光大银行丶 中国建设银行丶华夏银行丶中国民生银行丶上海银行、招商银行、齐鲁银行、东莞农商行)</td>
            </tr>
            <tr>
              <th>充值手续费</th>
              <td>免费</td>
              <td>免费</td>
            </tr>
            <tr>
              <th>提现手续费</th>
              <td>每笔4元</td>
              <td>每笔4元</td>
            </tr>
            <tr>
              <th>提现时间</th>
              <td>7*24小时无限额准实时到账</td>
              <td>7*24小时无限额准实时到账</td>
            </tr>
            <tr>
              <th>提现到账户</th>
              <td>可选择绑定的任一提现账户</td>
              <td>可选择绑定的任一提现账户</td>
            </tr>
            <tr>
              <th>校验元素</th>
              <td>不验票</td>
              <td>票号丶金额丶票是否已在接单方户丶成交金额是否大于等于20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.style-three-color th:first-child {
  background: #eae1e1;
}
.style-three-color td:first-child {
  background: #f2f2f2;
}
.style-three-color th:nth-child(2) {
  background: #faeaea;
}
.style-three-color td:nth-child(2) {
  background: #fff7f7;
}
.style-three-color th:nth-child(3) {
  background: #f4f0e6;
}
.style-three-color td:nth-child(3) {
  background: #f2f2f2;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'account',
  data() {
    return {
      actionsVar: {},
      columnDefs: null,
      rowData: null,
      rowHeight: 28,
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: '账户渠道',
        field: 'data01',
      },
      {
        headerName: '登录用户名',
        field: 'data02',
      },
      {
        headerName: '商户类型',
        field: 'data03',
      },
      {
        headerName: '冻结金额(元)',
        field: 'data04',
      },
      {
        headerName: '冻结金额(元)',
        field: 'data05',
      },
      {
        headerName: '开通状态操作',
        field: 'data06',
      },
      {
        flex: 1,
        wrapText: true,
        autoHeight: true,
        sortable: true,
        resizable: true,
      },
    ]

    this.rowData = [
      {
        data01: '东京智票',
        data02: 'UserHalo',
        data03: '0',
        data04: '0',
        data05: '未开通',
        data06: '开通',
      },
      {
        data01: '东京智付',
        data02: '-',
        data03: '-',
        data04: '-',
        data05: '未开通',
        data06: '开通',
      },
    ]
  },
  methods: {
    ...mapActions(['system/setAdminMenuFlag']),
    setAdminMenuFlag(flag) {
      this['system/setAdminMenuFlag'](flag)
    },
  },
  mounted() {
    this.setAdminMenuFlag(true)
  },
}
</script>
