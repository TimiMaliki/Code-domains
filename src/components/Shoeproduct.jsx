import shoes from '../assets/style/shoes.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'


const Shoeproduct = () => {
  return (
    <div className={shoes.shoes}>
    <div className={shoes.shoesCategory}>
        <Productheader title="shoes Collection" />
        <Producttext text="see all" />
    </div>



    <div className={shoes.cartContainer}>
                <div className={shoes.cart}>
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                    <div className={shoes.cartIcon}>
                    </div>
                </div>


                <div className={shoes.cart}>
                    <div className={shoes.cartIcon}>
                    </div>
                </div>

            </div>

            <div className={shoes.cartDetailContainer}>

                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                            4.3
                        </div>

                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            7000
                        </div>
                </div>



                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                            4.3
                        </div>

                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            7000
                        </div>
                </div>



                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                            4.3
                        </div>

                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>
                    <div className={shoes.cartPrice}>
                            7000
                        </div>
                </div>




                <div className={shoes.cartDetails}>
                    <div className={shoes.cartName}>
                        <h4>Product name will be here</h4>
                    </div>
                    <div className={shoes.cartBrandName}>
                        <h5>Maliki</h5>
                    </div>
                    <div className={shoes.cartRateGrid}>

                        <div className={shoes.cartStar}>
                            4.3
                        </div>

                        <div className={shoes.cartSold}>
                            7000
                        </div>
                    </div>

                    <div className={shoes.cartPrice}>
                            7000
                        </div>
                </div>



            </div>

    </div>
  )
}

export default Shoeproduct