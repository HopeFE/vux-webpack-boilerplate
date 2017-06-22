import Vue from 'vue'
import axios from 'axios'
import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = ''

// POST传参序列化
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
})

axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    Vue.$vux.toast.show({text: res.data.msg, type: 'text', time: 1500, position: 'bottom'})
    return Promise.reject(res)
  }
  return res
}, (error) => {
  Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1500, position: 'bottom'})
  return Promise.reject(error)
})

export default axios
