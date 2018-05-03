import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {updateToppings} from '../actions/index'
import {connect} from 'react-redux'
import store from '../store'

class ToppingsInput extends PureComponent {
  constructor(props) {
    super(props)


    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange1.bind(this)
    this.handleChange3 = this.handleChange1.bind(this)
  }

  handleChange1(event) {
    const currentToppings = this.props.toppings
    // console.log("!!!!!!!!!!",currentToppings)
    let newToppings = currentToppings
    newToppings[0] = event.target.value
    console.log(newToppings)
    // console.log("this props!", this.props)
    this.props.updateToppings(newToppings)
  }

  handleChange2(event) {
    const currentToppings = this.props.toppings
    // console.log("!!!!!!!!!!",currentToppings)
    let newToppings = currentToppings
    newToppings[1] = event.target.value
    console.log(newToppings)
    // console.log("this props!", this.props)
    this.props.updateToppings(newToppings)
  }

  handleChange3(event) {
    const currentToppings = this.props.toppings
    // console.log("!!!!!!!!!!",currentToppings)
    let newToppings = currentToppings
    newToppings[2] = event.target.value
    console.log(newToppings)
    // console.log("this props!", this.props)
    // console.log("!!!!!!!!!!",currentToppings, newToppings)
    this.props.updateToppings(newToppings)
  }

  render() {
    // const toppings = this.state
    const theToppings = this.props.toppings
    const topping1 = theToppings[0]
    const topping2 = theToppings[1]
    const topping3 = theToppings[2]
    console.log("this props!", this.props.toppings)
    return (
      <div className="Base" >
     <h2>Pizza Base</h2>
     <form className='SelectBase'>
         <label>
           <p>Pick your base size:</p>
            <select className='BaseSelector'  value={topping1} onChange={this.handleChange1}>
            <option value=""> </option>
            <option value="pineapple">Pineapple</option>
            <option value="corn">Corn</option>
            <option value="olives">olives</option>
            <option value="redOnion">Red Onion</option>
            <option value="spinach">Spinach</option>
            <option value="tomatoes">Tomatoes</option>
            <option value="chicken">Chicken</option>
           </select>
         </label>
       </form>

       <form className='SelectBase'>
           <label>
             <p>Pick your base size:</p>
              <select className='BaseSelector'  value={topping2} onChange={this.handleChange2}>
              <option value=""> </option>
              <option value="pineapple">Pineapple</option>
              <option value="corn">Corn</option>
              <option value="olives">olives</option>
              <option value="redOnion">Red Onion</option>
              <option value="spinach">Spinach</option>
              <option value="tomatoes">Tomatoes</option>
              <option value="chicken">Chicken</option>
             </select>
           </label>
         </form>

         <form className='SelectBase'>
             <label>
               <p>Pick your base size:</p>
                <select className='BaseSelector'  value={topping3} onChange={this.handleChange3}>
                 <option value=""> </option>
                 <option value="pineapple">Pineapple</option>
                 <option value="corn">Corn</option>
                 <option value="olives">olives</option>
                 <option value="redOnion">Red Onion</option>
                 <option value="spinach">Spinach</option>
                 <option value="tomatoes">Tomatoes</option>
                 <option value="chicken">Chicken</option>
               </select>
             </label>
           </form>

     </div>
    )
  }
}

export default connect(null, {updateToppings})(ToppingsInput)
