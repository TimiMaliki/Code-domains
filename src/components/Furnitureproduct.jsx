import furniture from '../assets/style/furniture.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'
import img1 from '../assets/img/furniture/f1.jpg'
import img2 from '../assets/img/furniture/f2.jpg'
import img3 from '../assets/img/furniture/f3.jpg'
import img4 from '../assets/img/furniture/f4.jpg'
import { FaStar } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'


const Furnitureproduct = () => {
  return (
    <div className={furniture.furniture}>
    <div className={furniture.furnitureCategory}>
        <Productheader title="Furniture Collection" />
        <Producttext text=""/>   <Producttext text="" /> <><><><><></></></></></><FaArrowLeft></FaArrowLeft>  <FaArrowRight></FaArrowRight>
    </div>



    <div className={furniture.cartContainer}>
                <div className={furniture.cart}>
                    <img src={img1} alt="" />
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                <img src={img2} alt="" />
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                <img src={img3} alt="" />
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                <img src={img4} alt="" />
                    <div className={furniture.cartIcon}>
                    </div>
                </div>

            </div>

            <div className={furniture.cartDetailContainer}>

                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Grand Dad Chair</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>oldies</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                        <FaStar></FaStar>       1.4
                        </div>
                        <div className={furniture.line}></div>  
                        <div className={furniture.cartSold}>
                            120
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            $800
                        </div>
                </div>



                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Oak rock chair</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>rockies</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                        <FaStar></FaStar>       1.0
                        </div>
                        <div className={furniture.line}></div>  
                        <div className={furniture.cartSold}>
                            130
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            $500
                        </div>
                </div>



                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>My dad's Bench</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Benny</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                        <FaStar></FaStar>   2.0  
                        </div>
                        <div className={furniture.line}></div>  
                        <div className={furniture.cartSold}>
                            50
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            $100
                        </div>
                </div>




                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Massage Chair</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Markie</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                        <FaStar></FaStar>   3.2
                        </div>
                        <div className={furniture.line}></div>
                        <div className={furniture.cartSold}>
                            1000
                        </div>
                    </div>

                    <div className={furniture.cartPrice}>
                            $700
                        </div>
                </div>




            </div>



    </div>
  )
}

export default Furnitureproduct