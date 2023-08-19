import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MoviesSlider = props => {
  const {movie} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = movie

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls className="video" />
            </div>
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MoviesSlider
