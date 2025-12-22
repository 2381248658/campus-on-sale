// mock/index.js
import user from './modules/user'
import home from './modules/home'
import cart from './modules/cart'
import order from './modules/order'

export default [...user, ...home, ...cart, ...order]
