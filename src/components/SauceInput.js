import React, {PureComponent} from 'react'

class SauceInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSauceChange(event.target.value);
  }

  render() {
    const sauce = this.props.sauce
    console.log(sauce)
    return (
      <div className="Sauce" >
     <h2>Pizza Sauce</h2>
     <form className='SelectSauce'>
         <label>
           <p>Pick your sauce:</p>
            <select className='SauceSelector'  value={sauce} onChange={this.handleChange}>
             <option value=""> </option>
             <option value="White">White Sauce</option>
             <option value="Red">Red Sauce</option>
             <option value="DoubleRed">Double Red Sauce (extra €1)</option>
             <option value="Mix">Mix It Up (extra €1,5)</option>

           </select>
         </label>
       </form>

     </div>
    )
  }
}

export default SauceInput
