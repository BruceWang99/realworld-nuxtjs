import { request } from '@/plugins/request'


// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

// 用户注册
export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}
// 获取用户信息
export const getCurrentUser = data => {
  return request({
    method: 'GET',
    url: '/api/user',
    data
  })
}
// 更新用户信息
export const updateUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}
// 获取用户轮廓
export const getUserProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}
