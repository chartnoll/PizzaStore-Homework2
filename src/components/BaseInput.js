import React, {PureComponent} from 'react'

class BaseInput extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onBaseChange(event.target.value);
  }

  render() {
    const base = this.props.base
    console.log(base)
    return (
      <div className="Base" >
     <h2>Pizza Base</h2>
     <form className='SelectBase'>
         <label>
           <p>Pick your base size:</p>
            <select className='BaseSelector'  value={base} onChange={this.handleChange}>
             <option value=""> </option>
             <option value="20">20 cm New York style (€6,45)</option>
             <option value="25">25 cm New York style (€8,99)</option>
             <option value="30">30 cm New York style (€11,49)</option>
             <option value="35">35 cm New York style (€13,49)</option>
           </select>
         </label>
       </form>

     </div>
    )
  }
}

export default BaseInput
