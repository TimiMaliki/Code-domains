import furniture from '../assets/style/furniture.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'


const Furnitureproduct = () => {
  return (
    <div className={furniture.furniture}>
    <div className={furniture.furnitureCategory}>
        <Productheader title="Furniture Collection" />
        <Producttext text="see all" />
    </div>



    <div className={furniture.cartContainer}>
                <div className={furniture.cart}>
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                    <div className={furniture.cartIcon}>
                    </div>
                </div>


                <div className={furniture.cart}>
                    <div className={furniture.cartIcon}>
                    </div>
                </div>

            </div>

            <div className={furniture.cartDetailContainer}>

                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                            4.3
                        </div>

                        <div className={furniture.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            7000
                        </div>
                </div>



                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                            4.3
                        </div>

                        <div className={furniture.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            7000
                        </div>
                </div>



                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                            4.3
                        </div>

                        <div className={furniture.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={furniture.cartPrice}>
                            7000
                        </div>
                </div>




                <div className={furniture.cartDetails}>
                    <div className={furniture.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={furniture.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={furniture.cartRateGrid}>

                        <div className={furniture.cartStar}>
                            4.3
                        </div>

                        <div className={furniture.cartSold}>
                            7000
                        </div>
                    </div>

                    <div className={furniture.cartPrice}>
                            7000
                        </div>
                </div>




            </div>



    </div>
  )
}

export default Furnitureproduct