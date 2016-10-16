import {
	ADD_ARTTICLE
} from '../types'

const state = {
  item:{}
}

const mutations = {
  [ADD_ARTTICLE](state, action){
    state.item = {...state.item, ...action.article}
  }
}

export default {
  state,
  mutations
}