import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class OrderSummary extends PureComponent {

  baseCost(base) {
    let baseCost
    switch(base) {
      case "20":
        baseCost = 6.45
        break
      case "25":
        baseCost = 8.99
        break
      case "30":
        baseCost = 11.49
        break
      case "35":
        baseCost = 13.49
        break
      default:
        baseCost = 0
    }
    return baseCost
  }

  sauceCost(sauce) {
    let sauceCost
    switch(sauce) {
      case "White":
        sauceCost = 0
        break
      case "Red":
        sauceCost = 0
        break
      case "DoubleRed":
        sauceCost = 1
        break
      case "Mix":
        sauceCost = 1.5
        break
      default:
        sauceCost = 0
    }
    return sauceCost
  }

  deliveryCost(delivery, rawPizzaCost){
    if(delivery === "drone") return Math.round(rawPizzaCost*10)/100
    else return 0
  }

  render() {
    const pizzaOrder = this.props.pizzaOrder
    const baseCost = this.baseCost(pizzaOrder.base)
    const sauceCost = this.sauceCost(pizzaOrder.sauce)
    const toppings = this.props.toppings

    const toppingsCost = 1.5
    let pizzaCost = baseCost + sauceCost + toppingsCost

    const deliveryCost = this.deliveryCost(pizzaOrder.delivery, pizzaCost)
    pizzaCost = Math.floor((deliveryCost+pizzaCost)*100)/100

    return (
      <div>
       <h2>Your current order</h2>
       <p>Base cost is: €{baseCost}</p>
       <p>Sauce cost is: €{sauceCost}</p>
       <p>Toppings cost: €{toppingsCost}</p>
       <p>Delivery charge: €{deliveryCost}</p>
       <p>Total cost is: €{pizzaCost}</p>
     </div>
    )
  }
}

export default OrderSummary
