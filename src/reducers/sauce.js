import {SELECT_SAUCE} from '../actions/index'

const initialState = ""

export default (state = initialState, action) => {
  switch(action.type){
    case SELECT_SAUCE:
      return state = action.payload
    default: return state
  }
}
