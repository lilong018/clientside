<template>
  <div class="bg bg-money-dark p-3">
    <!--企业信息-->
    <div class="card mb-3">
      <div class="card-body" style="min-height: 120px">
        <div class="card-title card-text">企业信息</div>
        <table class="table">
          <tr>
            <th style="width: 120px">企業名稱</th>
            <th>用戶手機號</th>
          </tr>
          <tr>
            <td>15554807565</td>
            <td>
              15554807565
              <label class="label success">帐号安全</label>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="row">
      <!--代办事项-->
      <div class="col-4">
        <div class="card mb-3">
          <div class="card-body" style="min-height: 120px">
            <div class="card-title card-text">企业信息</div>
            <table class="table">
              <tr>
                <th style="width: 120px">我的卖出</th>
                <td>
                  待确认
                  <span class="text-danger">(0)</span>
                </td>
                <td>
                  待背书
                  <span class="text-danger">(0)</span>
                </td>
              </tr>
              <tr>
                <th style="width: 120px">我的买入</th>
                <td>
                  待确认
                  <span class="text-danger">(0)</span>
                </td>
                <td>
                  待背书
                  <span class="text-danger">(0)</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <!--消息服务-->
      <div class="col">
        <div class="card mb-3">
          <div class="card-body" style="min-height: 120px">
            <div class="card-title card-text">消息服务</div>

            <!--tabs-->
            <b-tabs pills>
              <b-tab title="新消息">
                <b-list-group class="mt-3">
                  <b-list-group-item>
                    <span class="float-right">2020/10/10 11:11:11</span>
                    <div>
                      <span class="text-success">【新】</span>
                      美德集团财务有限公司，20.22万元
                    </div>
                    <div>您于2020/10/10 11:11:11 发布的电票未审核通过</div>
                  </b-list-group-item>
                  <b-list-group-item>
                    <span class="float-right">2020/10/10 11:11:11</span>
                    <div>
                      <span class="text-success"></span>
                      美德集团财务有限公司，20.22万元
                    </div>
                    <div>您于2020/10/10 11:11:11 发布的电票未审核通过</div>
                  </b-list-group-item>
                  <b-list-group-item>
                    <span class="float-right">2020/10/10 11:11:11</span>
                    <div>
                      <span class="text-success"></span>
                      美德集团财务有限公司，20.22万元
                    </div>
                    <div>您于2020/10/10 11:11:11 发布的电票未审核通过</div>
                  </b-list-group-item>
                </b-list-group>
              </b-tab>
              <b-tab title="已讀">
                <b-list-group class="mt-3">
                  <b-list-group-item>
                    <span class="float-right">2020/10/10 11:11:11</span>
                    <div>美德集团财务有限公司，20.22万元</div>
                    <div>您于2020/10/10 11:11:11 发布的电票未审核通过</div>
                  </b-list-group-item>
                </b-list-group>
              </b-tab>
              <b-pagination class="mt-3" />
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {}
  },
}
</script>
