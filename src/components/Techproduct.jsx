import tech from '../assets/style/tech.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'
import blackwatch from '../assets/img/products/watch.jpg'
import headphone from '../assets/img/products/headphone.jpg'
import laptop from '../assets/img/products/laptop.jpg'
import smartphone from '../assets/img/products/smartphone.jpg'
import { FaStar } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'


const Techproduct = () => {
    return (
        <div className={tech.tech}>
            <div className={tech.techcategory}>
                <Productheader title="Popular Product 2023" />
                <Producttext text="" /> <><><><><></></></></></><FaArrowLeft></FaArrowLeft>  <FaArrowRight></FaArrowRight>
            </div>

            <div className={tech.cartContainer}>
                <div className={tech.cart}>
                    <img src={blackwatch} alt="" />
                    <div className={tech.cartIcon}>
                    </div>
                </div>


                <div className={tech.cart}>
                    <img src={headphone} alt="" />
                    <div className={tech.cartIcon}>
                    </div>
                </div>


                <div className={tech.cart}>
                    <img src={laptop} alt="" />
                    <div className={tech.cartIcon}>
                    </div>
                </div>


                <div className={tech.cart}>
                    <img src={smartphone} alt="" />
                    <div className={tech.cartIcon}>
                    </div>
                </div>

            </div>

            <div className={tech.cartDetailContainer}>

                <div className={tech.cartDetails}>
                    <div className={tech.cartName}>
                        <h4>Rolex smartwatch</h4>
                    </div>
                    <div className={tech.cartBrandName}>
                        <h5>jumia</h5>
                    </div>
                    <div className={tech.cartRateGrid}>

                        <div className={tech.cartStar}>
                            <FaStar className={tech.star}></FaStar>  3.3
                        </div>
                        <div className={tech.line}></div>
                        <div className={tech.cartSold}>
                            100
                        </div>
                    </div>
                    <div className={tech.cartPrice}>
                        $7000
                    </div>
                </div>



                <div className={tech.cartDetails}>
                    <div className={tech.cartName}>
                        <h4> Quality Airpod</h4>
                    </div>
                    <div className={tech.cartBrandName}>
                        <h5> Oraimo</h5>
                    </div>
                    <div className={tech.cartRateGrid}>

                        <div className={tech.cartStar}>
                        <FaStar className={tech.star}></FaStar>   3.5
                        </div>
                        <div className={tech.line}></div>
                        <div className={tech.cartSold}>
                            300
                        </div>
                    </div>
                    <div className={tech.cartPrice}>
                        $1000
                    </div>
                </div>



                <div className={tech.cartDetails}>
                    <div className={tech.cartName}>
                        <h4>Macbook Laptop</h4>
                    </div>
                    <div className={tech.cartBrandName}>
                        <h5>alibaba</h5>
                    </div>
                    <div className={tech.cartRateGrid}>

                        <div className={tech.cartStar}>
                           <FaStar className={tech.star}></FaStar>   4.3
                        </div>
                        <div className={tech.line}></div>
                        <div className={tech.cartSold}>
                            600
                        </div>
                    </div>
                    <div className={tech.cartPrice}>
                        $2000
                    </div>
                </div>




                <div className={tech.cartDetails}>
                    <div className={tech.cartName}>
                        <h4>Iphone 15 pro</h4>
                    </div>
                    <div className={tech.cartBrandName}>
                        <h5>Apple</h5>
                    </div>
                    <div className={tech.cartRateGrid}>

                        <div className={tech.cartStar}>
                           <FaStar className={tech.star}></FaStar>   4.3
                        </div>
                        <div className={tech.line}></div>
                        <div className={tech.cartSold}>
                            400
                        </div>
                    </div>

                    <div className={tech.cartPrice}>
                        $1500
                    </div>
                </div>











            </div>

        </div>
    )
}

export default Techproduct