import {
	IMAGE_LIST,
  REMOVE_IMAGE,
	ADD_IMAGE_LIST,
	// REQUEST_IMAGE_LIST,
	// GET_IMAGE_LIST_FAILURE
} from '../types'

const state = {
  items: [],
  count: 0
}

const mutations = {
  // [REQUEST_IMAGE_LIST](state){
  //   state.isFetching = true
  // },
  // [IMAGE_LIST](state,action){
  //   state.isFetching = false
  //   state.isMore = action.isMore
  //   state.items = action.imageList
  // },
  // [GET_IMAGE_LIST_FAILURE](state){
  //   state.isFetching = false
  // },
  [ADD_IMAGE_LIST](state,action){
    // state.isFetching = false
    // state.isMore = action.isMore
    console.log(action.imageList)
    state.items = action.imageList
    state.count = action.count
  },
  [REMOVE_IMAGE](state,action){
    state.items.$remove(action.article)
  },
}

export default {
  state,
  mutations
}