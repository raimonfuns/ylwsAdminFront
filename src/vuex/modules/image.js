import {
	ADD_IMAGE
} from '../types'

const state = {
  item:{}
}

const mutations = {
  [ADD_IMAGE](state, action){
    state.item = {...state.item, ...action.image}
  }
}

export default {
  state,
  mutations
}