<template>
  <nav class="admin-menu">
    <ul>
      <li class="admin-menu-title">账户管理</li>
      <li class="admin-menu-item">
        <router-link to="/account/bank" >银行账户</router-link>
      </li>
      <li class="admin-menu-item">
        <router-link to="/account/payment">电子交易账户</router-link>
      </li>
      <li class="admin-menu-title">企业信息</li>
      <li class="admin-menu-item">
        <router-link to="/enterprise/message">基本信息</router-link>
      </li>
      <li class="admin-menu-item">
        <router-link to="/enterprise/safeSettings">安全中心</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'admin-menu',
}
</script>

<style lang="scss" scoped>
.admin-menu {
  background: #171717;
  flex-basis: 150px;
  padding: 30px 20px;

  ul {
    li {
      list-style: none;
    }
  }

  .admin-menu-title {
    border-bottom: 1px solid #888;
    padding: 5px 0;
    color: #888;
    margin-top: 20px;
  }

  .admin-menu-title:first-child {
    margin-top: unset;
  }

  .admin-menu-item {
    padding: 10px 0 0;

    a {
      color: #cdcdcd;
    }

    a:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  a.router-link-exact-active {
    color: $gold;
  }
}
</style>
