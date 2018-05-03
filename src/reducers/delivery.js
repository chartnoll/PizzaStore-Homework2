import {SELECT_DELIVERY} from '../actions/index'

const initialState = ""

export default (state = initialState, action) => {
  switch(action.type){
    case SELECT_DELIVERY:
      return state = action.payload
    default: return state
  }
}
