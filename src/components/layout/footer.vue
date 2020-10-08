<template>
  <footer class="app-footer">
    <div class="footer-info">
      <span class="mr-3">
        <i class="fas fa-phone mr-1"></i>服务热线: 400-685-2216
      </span>
      <span>
        <i class="fas fa-clock mr-1"></i>服务时间: 08:30-18:00
      </span>
    </div>
    <div class="footer-bar">Copyright © 2020. Draftex.cn All rights reserved. 奥ICP备19012256号 有票么-贺泽科技有限公司 版权所有</div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
}
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100vw;
  color: #000;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
}

.footer-info {
  background: $footer-info;
  padding: 5px;
  font-size: 12px;
}

.footer-bar {
  color: #fff;
  background: $footer-bar;
  padding: 5px;
  font-size: 12px;
}
</style>
