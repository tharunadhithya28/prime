import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  console.log(actionList)
  const comedyList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1> Action Movies </h1>
        <div>
          <Slider {...settings}>
            {actionList.map(eachMovie => (
              <MoviesSlider key={eachMovie.id} movie={eachMovie} />
            ))}
          </Slider>
        </div>
      </div>
      <div>
        <h1> Comedy Movies </h1>
        <div>
          <Slider {...settings}>
            {comedyList.map(eachMovie => (
              <MoviesSlider movie={eachMovie} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
