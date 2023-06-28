import carousel from '../assets/style/carousel.module.scss'
import pinkwatch from '../assets/img/carousel/watchpink.jpg'

const Carousel=() => {
  return (
      <div className={carousel.carouselContainer}>
          <img src={pinkwatch} />
      </div>
    

  )
}

export default Carousel