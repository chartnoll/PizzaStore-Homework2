export const SELECT_BASE = 'SELECT_BASE'
export const SELECT_SAUCE = 'SELECT_SAUCE'
export const UPDATE_TOPPINGS = 'UPDATE_TOPPINGS'
export const SELECT_DELIVERY = 'SELECT_DELIVERY'

const selectBase = (base) => {
  console.log(base)
  return {
    type: "SELECT_BASE",
    payload: base
  }
}

const selectSauce = (sauce) => {
  console.log(sauce)
  return {
    type: "SELECT_SAUCE",
    payload: sauce
  }
}

const updateToppings = (topping) => {
  console.log("What is toppings!!!!",topping)
  return {
    type: "UPDATE_TOPPINGS",
    payload: topping
  }
}

const selectDelivery = (delivery) => {
  console.log(delivery)
  return {
    type: "SELECT_DELIVERY",
    payload: delivery
  }
}

export {selectDelivery, updateToppings, selectSauce, selectBase}
