import axios from 'axios'
import qs from 'qs' //转换请求参数格式，需要时使用
axios.defaults.timeout = 5000
axios.defaults.baseURL = process.env.API_ROOT // 域名
axios.defaults.withCredentials = true

//http request 拦截器
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token')
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers = {
        'x-auth-token': token
      }
    }

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 4003) {
      vant.Toast({
        mes: '您没有权限操作！',
        timeout: 1500,
        callback: () => {
          router.go(-1);
        }
      });

      return false;
    }
    if (response.data.code === -1) {
      localStorage.removeItem('token')
      router.push({
        path: "/login",
        querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
      })
    }
    return response
  },
  err => {
    if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
      vant.Toast({
        mes: '网络异常，连接超时...',
        timeout: 1500
      });
    }
    return Promise.reject(err)
  }
)

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    //ES6构造函数 -- 待学习
    axios
      .post(url, params)
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: param })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: qs.stringify(params),
      headers: headers
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
* 封装post请求
* @param url
* @param data
* @returns {Promise}
*/

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
export default {
  fetchGet,
  fetchPost,
}
