import shoes from '../assets/style/shoes.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'
import blacknike from '../assets/img/shoes/blacknike.jpg'
import dopenike from '../assets/img/shoes/dopenike.jpg'
import whitenike from '../assets/img/shoes/whitenike.jpg'
import { FaStar } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'



const Shoeproduct = () => {
  return (
    <div className={shoes.shoes}>
    <div className={shoes.shoesCategory}>
        <Productheader title="shoes Collection" />
        <Producttext text=""/>   <Producttext text="" /> <><><><><></></></></></><FaArrowLeft></FaArrowLeft>  <FaArrowRight></FaArrowRight>
    </div>



    <div className={shoes.cartContainer}>
                <div className={shoes.cart}>
                    <img src={blacknike} alt="" />
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                <img src={dopenike} alt="" />
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                <img src={whitenike} alt="" />
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                <img src={blacknike} alt="" />
                    <div className={shoes.cartIcon}>
                    </div>
                </div>

            </div>

            <div className={shoes.cartDetailContainer}>

                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Big black</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>buddo</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                        <FaStar></FaStar>      4.3
                        </div>
                        <div className={shoes.line}></div>  
                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            $2300
                        </div>
                </div>



                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>  Dope</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Dope</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                        <FaStar></FaStar>      5.0
                        </div>
                        <div className={shoes.line}></div>  
                        <div className={shoes.cartSold}>
                            10000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            $3000
                        </div>
                </div>



                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Ice nike</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Nike</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                        <FaStar></FaStar>      5.0
                        </div>
                        <div className={shoes.line}></div>  
                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            $3000
                        </div>
                </div>




                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>TiShark</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Timi</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                        <FaStar></FaStar>      4.6
                        </div>
                        <div className={shoes.line}></div>  
                        <div className={shoes.cartSold}>
                            4000
                        </div>
                    </div>

                    <div className={shoes.cartPrice}>
                            $3400
                        </div>
                </div>



            </div>

    </div>
  )
}

export default Shoeproduct