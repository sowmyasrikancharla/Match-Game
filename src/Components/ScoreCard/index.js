import {Component} from 'react'
import './index.css'

class ScoreCard extends Component {
  render() {
    const {score, onReset} = this.props

    const reset = () => {
      onReset()
    }
    return (
      <div className="card-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          alt="trophy"
          className="trophy"
        />
        <p className="ur-score">YOUR SCORE</p>
        <p className="ur-score">{score}</p>
        <button className="button" onClick={reset}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
          />
          Play Again
        </button>
      </div>
    )
  }
}
export default ScoreCard
