import React, {PureComponent} from 'react'

class DeliveryInput extends PureComponent {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onDeliveryChange(event.target.value)
  }


  render() {
    const delivery = this.props.delivery
    console.log(delivery)
    return (
      <div className="Delivery" >
     <h2>Delivery Option</h2>
     <form className='SelectDelivery'>
         <label>
           <p>Would you like turbo-drone-delivery (for an extra 10%)</p>
            <select className='DeliverySelector'  value={delivery} onChange={this.handleChange}>
             <option value=""> </option>
             <option value="drone">Turbo-Drone-Delivery</option>
             <option value="normal">Normal Delivery</option>
           </select>
         </label>
       </form>

     </div>
    )
  }
}

export default DeliveryInput
