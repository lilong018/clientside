export default {
  // 表頭選單登入
  setLoginFlag({ commit }, data) {
    commit('setLoginFlag', data)
  },
  // 左選單
  setAdminMenuFlag({ commit }, data) {
    commit('setAdminMenuFlag', data)
  },
  // 選擇銀行列表的暫存值
  setBankAccountCache({ commit }, data) {
    commit('setBankAccountCache', data)
  },
  // 用户登入设置token
  setToken({ commit }, data) {
    commit('setToken', data)
  },
  // 用户登出消除token
  removeToken({ commit }, data) {
    commit('removeToken', data)
  },
  // 用户登入设置userId
  setUserId({ commit }, data) {
    commit('setUserId', data)
  },
   // 用户登入设置显示名
   setDisplayName({ commit }, data) {
    commit('setDisplayName', data)
  },
   // 用户登入设置平台id
   setPlatformId({ commit }, data) {
    commit('setPlatformId', data)
  },
  // 用户登入设置userInfo
  setUserInfo({ commit }, data) {
    commit('setUserInfo', data)
  }
  
}
