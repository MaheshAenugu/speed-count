import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  acceleration = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="speed-para">
          Speed is <span className="speed-para">{count}</span>mph
        </p>
        <p className="limit-para">Min limit is 0mph,Max limit is 200mph</p>
        <div className="btn-container">
          <button className="acc-btn" type="button" onClick="acceleration">
            Accelerate
          </button>
          <button className="brk-btn" type="button" onClick="brake">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
