import service from '@/api/http';

const loginApi = {
  // 验证登录实例
  postVerification: (params: object) => service.post(`/login`, params),
  test: (params: object) => service.get(`/router/template/test/sys/test`, params),
  login: (params: object) => service.get(`/router/user/pub/login`, params),
  checkToken: (params: object) => service.get(`/router/user/kh/getMyUserInfo`, params),
  bindQQ: (params: object) => service.post(`/router/user/kh/bindQQ `, params),
  muban_easy: (params: object) => service.post(`/router/common/pub/test`, params),
};

export default loginApi;
