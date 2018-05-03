import {UPDATE_TOPPINGS} from '../actions/index'

const initialState = []

initialState[0] = ""
initialState[1] = ""
initialState[2] = ""

export default (state = initialState, action) => {
  switch(action.type){
    case UPDATE_TOPPINGS:
      return state = action.payload
    default: return state
  }
}
