// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevNumber => ({number: 0 + randomNumber}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="bg-card">
          <h1>Random Number</h1>
          <p>
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
