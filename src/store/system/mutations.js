export default {
  // 表頭選單登入
  setLoginFlag(state, data) {
    state.loginFlag = data
  },
  // 左選單
  setAdminMenuFlag(state, data) {
    state.adminMenuFlag = data
  },
  // 選擇銀行列表的暫存值
  setBankAccountCache(state, data) {
    state.bankAccountCache = data
  },
  setToken(state, data){
    sessionStorage.setItem("token",data);
    state.token = data;
  },
  removeToken(state, token){
    sessionStorage.removeItem("token",token);
    state.token = token;
  },
  setUserId(state, userId){
    sessionStorage.setItem("userId",userId);
    state.userId = userId;
  },
  setDisplayName(state, displayName){
    sessionStorage.setItem("displayName",displayName);
    state.displayName = displayName;
  },
  setPlatformId(state, platformId){
    sessionStorage.setItem("platformId",platformId);
    state.platformId = platformId;
  },
  setUserInfo(state, userInfo){
    sessionStorage.setItem("userInfo",userInfo);
    state.userInfo = userInfo;
  }
}
