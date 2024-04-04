// Write your code here
import {Component} from 'react'
import './index.css'

class Thumbnail extends Component {
  render() {
    const {thumbnailDetails, updateScore} = this.props
    const {thumbnailUrl, id} = thumbnailDetails

    const clickThumbnail = () => {
      updateScore(id)
    }
    return (
      <div>
        <li className="no-dot">
          {/* eslint-disable-next-line */}
          <button onClick={clickThumbnail} className="but">
            <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
          </button>
        </li>
      </div>
    )
  }
}

export default Thumbnail
