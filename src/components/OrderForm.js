import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import BaseInput from './BaseInput'
import DeliveryInput from './DeliveryInput'
import SauceInput from './SauceInput'
import ToppingsInput from './toppings2'
import OrderSummary from './OrderSummary'
import {selectDelivery, updateToppings, selectSauce, selectBase} from '../actions/index'

class OrderForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      base: 0,
      sauce: "",
      toppings: [
        "",
        "",
        ""
      ],
      delivery: ""
    }

    this.handleBaseChange = this.handleBaseChange.bind(this)
    this.handleSauceChange = this.handleSauceChange.bind(this)
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this)
    this.handleToppingsChange = this.handleToppingsChange.bind(this)
  }

  handleSauceChange(sauceInput) {
    if(sauceInput === ""){
      alert('You need to select a sauce!')
      return
    }
    this.setState({sauce: sauceInput})
    this.props.selectSauce(sauceInput)
  }

  handleDeliveryChange(deliveryInput) {
    if(deliveryInput === ""){
      alert('You need to select a delivery option!');
      return
    }
    this.setState({delivery: deliveryInput})
    this.props.selectDelivery(deliveryInput)
  }

  handleBaseChange(baseInput) {
    if(baseInput === ""){
      alert('You need to select a base!');
      return
    }
    this.setState({base: baseInput})
    this.props.selectBase(baseInput)
  }

  handleToppingsChange(name, value) {
    console.log(name, value)

    let allToppings = this.state.toppings

    if(this.noMoreThan3(allToppings) === 3 && value === true){
      alert('You cannot select more than 3 toppings!')
      return
    }
    let newToppings = this.state.toppings

    newToppings[name] = value

    this.props.updateToppings(newToppings)
    this.setState({toppings: newToppings})
  }

  noMoreThan3(allToppings) {
    //console.log("toppings is9999",this.state.toppings)
    const toppings = Object.values(allToppings)
    console.log("toppings is9999",toppings, allToppings)
    return toppings.filter( (topping) => topping === true).length
  }

  render() {

    let base = this.state.base
    let sauce = this.state.sauce
    let delivery = this.state.delivery
    let toppings = this.state.toppings

    let pizzaOrder = {
      base: base,
      sauce: sauce,
      delivery: delivery,
      toppings: toppings
    }

    return (
      <div>
        <OrderSummary
          pizzaOrder = {pizzaOrder} />

        <BaseInput
          base = {base}
          onBaseChange={this.handleBaseChange} />

        <SauceInput
          sauce = {sauce}
          onSauceChange={this.handleSauceChange} />

        <DeliveryInput
          delivery = {delivery}
          onDeliveryChange={this.handleDeliveryChange} />

        <ToppingsInput
          toppings = {toppings}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  toppings: state.toppings
}

export default connect(mapStateToProps, {selectDelivery, updateToppings, selectSauce, selectBase})(OrderForm)
