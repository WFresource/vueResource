import axios  from 'axios';
import instance  from './instance';
import qs from 'qs'

let base = '';

 export const requestLogin = params => { return axios.post(`${base}/login/verify`,  qs.stringify(params)).then(res => res.data); };

//用户信息
export const getUserInfo = params => { return instance.post(`${base}/user/info`, qs.stringify(params)).then(res => res.data); };

//修改用户密码
export const updatePassword = params => { return instance.post(`${base}/user/editpwd`, params).then(res => res.data); };

