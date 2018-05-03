import {SELECT_BASE} from '../actions/index'

const initialState = ""

export default (state = initialState, action) => {
  switch(action.type){
    case SELECT_BASE:
      return state = action.payload
    default: return state
  }
}
