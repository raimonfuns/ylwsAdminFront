import {
	// ARTICLE_LIST,
  REMOVE_ARTICLE,
	ADD_ARTICLE_LIST,
	// REQUEST_ARTICLE_LIST,
	// GET_ARTICLE_LIST_FAILURE
} from '../types'

const state = {
  items: [],
  count: 0
}

const mutations = {
  // [REQUEST_ARTICLE_LIST](state){
  //   state.isFetching = true
  // },
  // [ARTICLE_LIST](state,action){
  //   state.isFetching = false
  //   state.isMore = action.isMore
  //   state.items = action.articleList
  // },
  // [GET_ARTICLE_LIST_FAILURE](state){
  //   state.isFetching = false
  // },
  [ADD_ARTICLE_LIST](state,action){
    // state.isFetching = false
    // state.isMore = action.isMore
    console.log(action.articleList)
    state.items = action.articleList
    state.count = action.count
  },
  [REMOVE_ARTICLE](state,action){
    state.items.$remove(action.article)
  },
}

export default {
  state,
  mutations
}