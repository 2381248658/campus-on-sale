// modules/user.js
import Mock from 'mockjs'

export default [
  {
    url: '/api/campus/v1/login',
    method: 'post',
    response: ({ body }) => {
      // 严格校验账号和密码
      if (body.account === 'admin' && body.password === '666666') {
        return {
          code: '1',
          msg: '操作成功',
          result: {
            id: '1001',
            account: 'admin',
            nickname: '校园惠emo',
            avatar: '../../src/assets/images/head.jpg',
            token: 'mock-token-for-admin-666666',
          },
        }
      } else {
        return {
          code: '0',
          msg: '学号或密码错误，请检查！',
          result: null,
        }
      }
    },
  },
  // 个人中心猜你喜欢模块
  {
    url: '/api/campus/v1/goods/relevant',
    method: 'get',
    response: ({ query }) => {
      const limit = parseInt(query.limit) || 4
      const list = Array.from({ length: limit }).map(() => ({
        id: Mock.mock('@guid'),
        name: '猜你喜欢：' + Mock.mock('@ctitle(5,10)'),
        desc: Mock.mock('@cparagraph(1)'),
        price: Mock.mock('@float(10, 200, 2, 2)'),
        picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
      }))
      return {
        code: '1',
        msg: 'success',
        result: list,
      }
    },
  },
]
