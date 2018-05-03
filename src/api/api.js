import instance  from './instance';
import qs from 'qs'

let base = 'aps/api';
//let base='/api';
// let base = 'http://127.0.0.1:8081/api';
// let base = 'http://121.43.164.178:8081/api';//公网线上调试api
//export const requestLogin = params => { return axios.post(`${base}/login/verify`,params).then(res => res.data); };
 export const requestLogin = params => { return instance.post(`${base}/login/verify`,  qs.stringify(params)).then(res => res.data); };

//用户信息
export const getUserInfo = params => { return instance.post(`${base}/user/info`, qs.stringify(params)).then(res => res.data); };

//修改用户密码
export const updatePassword = params => { return instance.post(`${base}/user/editpwd`, params).then(res => res.data); };

