import React, { Component } from "react";

const options = ['Living Goods','Sankara Netharaya Home Trust','Water for South Sudan','BRAC USA']
 
class Nonprofit extends Component {
  render() {
    return (
      <div>
        <h2>Choose your nonprofit(s)</h2>
        <div style={{display:'flex', flexDirection:'column'}}>
          {
            options.map(v => (
              <label>
                <input type='checkbox'/>
                {v}
              </label>
            ))
          }
        </div>
        <button>Create fundraiser</button>
      </div>
    );
  }
}
 
export default Nonprofit;
