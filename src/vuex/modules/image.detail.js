import {
	IMAGE_DETAIL
} from '../types'

const state = {
  item:{}
}

const mutations = {
  [IMAGE_DETAIL](state,action){
    state.item = action.imageDetail
  }
}

export default {
  state,
  mutations
}