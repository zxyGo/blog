// 简单项目不详细分state、mutations、actions
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    //  是否使用严格模式
    strict: false,
    state: () => {

    },
    mutations: {

    }
  })
}