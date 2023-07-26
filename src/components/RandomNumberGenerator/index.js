// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onClicked = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prev => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button onClick={this.onClicked} className="btn">
              Generate
            </button>
          </div>
          <div>
            <p className="para">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
