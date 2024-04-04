import './index.css'

const FullImage = props => {
  const {imgUrl, id} = props
  return (
    <div>
      <img src={imgUrl} className="question-img" alt="match" />
    </div>
  )
}

export default FullImage
