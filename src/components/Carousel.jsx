import carousel from '../assets/style/carousel.module.scss'
import blacksmartwatch from '../assets/img/carousel/blacksmartwatch.jpg'

const Carousel=() => {
  return (
      <div className={carousel.carouselContainer}>
          <img src={blacksmartwatch} />
      </div>
    

  )
}

export default Carousel