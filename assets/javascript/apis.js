import axios from 'axios'
import md5 from 'js-md5'

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    let msg = '';
    try {
      if (err && err.response) {
        switch (err.response.status) {
          case 400: err.message = '请求错误(400)'; break;
          case 401: err.message = '未授权，请重新登录(401)'; break;
          case 403: err.message = '拒绝访问(403)'; break;
          case 404: err.message = '请求出错(404)'; break;
          case 408: err.message = '请求超时(408)'; break;
          case 500: err.message = '服务器错误(500)'; break;
          case 501: err.message = '服务未实现(501)'; break;
          case 502: err.message = '网络错误(502)'; break;
          case 503: err.message = '服务不可用(503)'; break;
          case 504: err.message = '网络超时(504)'; break;
          case 505: err.message = 'HTTP版本不受支持(505)'; break;
          default:
            err.message = `连接出错(${err.response.status})!`;
            mes = err.message;
        }
      } else {
        msg = '连接服务器失败!';
      }
    } catch (e) {
      msg = '连接服务器失败！';
    }
    return Promise.reject(err)
  }
)

class API {
  constructor() {
    // 设置请求地址
    this.BASE_URL = 'http://127.0.0.1:7001';
    // 设置头部信息
    this.headers = {

    };
    // 重复请求列表
    this.DuplicateArray = {};
  }

  // 处理重复
  DealDuplicateRequest(url, params, options) {
    let timeout = options.timeout || 300;
    let md5Odj = md5(url, params);
    let newTime = new Date().getTime();
    if (this.DuplicateArray[md5Odj]) {
      // 比较是否超时
      let oldTime = this.DuplicateArray[md5Odj];
      if (newTime - oldTime <= timeout) {
        this.DuplicateArray[md5Odj] = newTime;
        return false;
      }
    }
    this.DuplicateArray[md5Odj] = newTime;
    return true;
  }

  get(url, params, options) {
    if (options && options.duplicate && !this.DealDuplicateRequest(url, params, options)) {
      return new Promise((resolve, reject) => {
        // 请求重复
        reject();
      })
    }
    return axios({
      method: 'get',
      baseURL: this.BASE_URL,
      url: url,
      params: params,
      withCredentials: true, // 跨域请求时是否需要使用凭证
    })
  }

  post(url, params, options) {
    if (options && options.duplicate && !this.DealDuplicateRequest(url, params, options)) {
      return new Promise((resolve, reject) => {
        // 请求重复
        reject();
      })
    }
    let fd = new URLSearchParams();
    if (params) {
      for (item in params) {
        fd.append(item, params[item])
      }
    }
    return axios({
      method: 'post',
      baseURL: this.BASE_URL,
      url: url,
      withCredentials: true, // 跨域请求时是否需要使用凭证
      data: fd
    })
  }

  request(url, params, options) {
    if (options && options.method === 'get') {
      return new Promise((resolve, reject) => {
        this.get(url, params, options).then(res => {
          if (res.data && res.data.code === 0) {
            resolve(res.data)
          } else {
            reject();
            // 错误的提示信息 - 待写
            let cb=function(){};
            if (options.callback&& typeof options.callback === 'function'){
              cb=options.callback;
            }
          }
        })
      })
    } else if (options && options.method === 'post') {
      return new Promise((resolve, reject) => {
        this.post(url, params, options).then(res => {
          if (res.data && res.data.code === 0) {
            resolve(res.data)
          } else {
            reject();
            // 错误的提示信息 - 待写
            let cb=function(){};
            if (options.callback&& typeof options.callback === 'function'){
              cb=options.callback;
            }
          }
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        reject();
      })
    }
  }
}

export default new API();