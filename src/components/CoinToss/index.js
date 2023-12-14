// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isClicked: true, total: 0, tails: 0, heads: 0}

  OnClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isClicked: prevState.isClicked,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    }
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
      total: prevState.total + 1,
      tails: prevState.tails + 1,
    }))
  }

  render() {
    const {isClicked, total, tails, heads} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          {isClicked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" className="button" onClick={this.OnClickButton}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
