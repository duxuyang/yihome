import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:5500',
  withCredentials: false,
  headers: {
    /* 'Content-Type': 'application/json;charset=utf-8',*/
    'tokenId': '9999999'
  },
  transformRequest: [function(data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});


/**
 * 请求数据拦截
 */
/*instance.interceptors.request.use( config => {
    if (isForm && config.method === 'post') config.data = qs.stringify(config.data)
    return config
}, error => {
    return Promise.reject(error)
})*/

/**
 * 响应数据拦截
 */
/*instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
}) */

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function(res) {
    response(res);
  }).catch(function(err) {
    response(err);
  })
}


export default {
  get: function(url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function(url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function(url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function(url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}