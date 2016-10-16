import {
	ARTICLE_DETAIL
} from '../types'

const state = {
  item:{}
}

const mutations = {
  [ARTICLE_DETAIL](state,action){
    state.item = action.articleDetail
  }
}

export default {
  state,
  mutations
}