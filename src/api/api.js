import axios from 'axios'

export const base = 'https://raw.githubusercontent.com/bold881/vuestartup/master'

// 创建产品分类
export const createCategory = (params, config) => {
  return axios.post(`${base}/prodCategory`, params, config)
    .then((res) => res.data)
}

// 获取最新的产品分类
export const getTestData = (params, config) => {
  return axios.get(`${base}/data.json`, config)
    .then((res) => res.data)
}
