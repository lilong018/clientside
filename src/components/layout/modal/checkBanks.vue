<template>
  <div>
    请输入银行名称筛选后按下确认
    <br />
    <br />
    <ag-grid-vue style="width: 100%; height: 300px" class="table ag-theme-alpine" :gridOptions="gridOptions" @grid-ready="onGridReady" :columnDefs="columnDefs" :defaultColDef="defaultColDef" :modules="modules" :rowData="rowData" :rowHeight="rowHeight" :rowSelection="rowSelection" @selection-changed="onSelectionChanged"></ag-grid-vue>
    <!-- <footer class="modal-footer">
      <button type="button" class="btn btn-secondary">取消</button>
      <button type="button" class="btn btn-primary" @click="setBankAccountCache(checkBanksValue)">确认</button>
    </footer>-->
  </div>
</template>
<style lang="scss" scorped>
.btn-search {
  flex-basis: 120px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
import { mapState, mapActions } from 'vuex'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
// import { bankFilterParams } from '@/assets/js/global'
export default {
  name: 'checkBanks',
  data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      rowData: null,
      rowHeight: 28, // 表格每一行高度
      rowSelection: null, // 点选表格row方法
      checkBanksValue: null, // 暂存银行号
      modules: [ClientSideRowModelModule],
    }
  },
  beforeMount() {
    this.gridOptions = {}
    //设定th
    this.columnDefs = [
      {
        headerName: '开户银行名称',
        field: 'bankname',
        filter: 'agTextColumnFilter', //筛选文字
      },
      {
        headerName: '开户银行行号',
        field: 'bankAccount',
        filter: 'agTextColumnFilter', //筛选行号
      },
    ]
    // 点选表格row资料的方法
    this.rowSelection = 'single'

    // api data
    this.defaultColDef = {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
    }
    this.rowSelection
    this.rowData = [
      {
        bankname: '中国AA银行',
        bankAccount: '1111111111',
      },
      {
        bankname: '中国BB银行',
        bankAccount: '2222222222',
      },
      {
        bankname: '中国CC银行',
        bankAccount: '3333333333',
      },
      {
        bankname: '中国CC银行',
        bankAccount: '4444444444',
      },
      {
        bankname: '中国DD银行',
        bankAccount: '123421346',
      },
    ]
  },
  mounted() {
    this.gridApi = this.gridOptions.api
    this.gridColumnApi = this.gridOptions.columnApi
  },
  methods: {
    ...mapActions(['system/setBankAccountCache']),
    setBankAccountCache(data) {
      this['system/setBankAccountCache'](data)
    },

    // 选择列表后,银行行号的值存到 vm.checkBanksValue[0].bankAccount
    onSelectionChanged() {
      const vm = this
      var selectedRows = this.gridApi.getSelectedRows()
      if (selectedRows.length === 1) {
        vm.checkBanksValue = selectedRows[0].bankAccount
      }
      vm.setBankAccountCache(vm.checkBanksValue)
    },

    onGridReady(params) {
      // 表格初始化获取api data范例
      // const httpRequest = new XMLHttpRequest()
      // const updateData = (data) => {
      //   this.rowData = data
      // }
      // httpRequest.open(
      //   'GET',
      //   'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      // )
      // httpRequest.send()
      // httpRequest.onreadystatechange = () => {
      //   if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      //     updateData(JSON.parse(httpRequest.responseText))
      //   }
      // }
    },
  },
}
</script>