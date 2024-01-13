import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, head: 0, tails: 0, imagehead: 'true'}

  CoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (parseInt(tossResult) === 1) {
      this.setState(toss => ({
        total: toss.total + 1,
        head: toss.head + 1,
        imagehead: 'true',
      }))
    } else {
      this.setState(toss => ({
        total: toss.total + 1,
        tails: toss.tails + 1,
        imagehead: 'false',
      }))
    }
  }

  render() {
    const {total, head, tails, imagehead} = this.state
    return (
      <div className="coinToss-main-container">
        <div className="coinToss-container">
          <h1 className="coinToss-heading"> Coin Toss Game </h1>
          <div className="coinToss-image-container">
            <p className="coinToss-para"> Heads (or) Tails </p>
            {imagehead === 'true' ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                className="coinToss-image"
                alt="toss result"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                className="coinToss-image"
                alt="toss result"
              />
            )}
            <div>
              <button
                className="coinToss-btn"
                type="button"
                onClick={this.CoinToss}
              >
                Toss Coin
              </button>
            </div>
            <div className="coinToss-heads-tails">
              <p className="coinToss-total"> Total:{total} </p>
              <p className="coinToss-total"> Heads:{head} </p>
              <p className="coinToss-total"> Tails:{tails} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
