import others from '../assets/style/others.module.scss'

const Otherproduct = () => {
    return (
        <div className={others.others}>
            <div className={others.othersProductImg}>
            </div>

            <div className={others.othersProductDetails}>
                <div className={others.othersText}>
                    <h2>Maliki</h2>

                    <h5>Product Name will be here</h5>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet cumque est sequi!
                    </p>
                    <br />
                    <p>price</p>
                    <div className={others.startshopping}>
                        <div className={others.startshoppingText}>
                            Start Shopping
                        </div>
                    </div>
                </div>
            </div>


            <div className={others.othersShoeOne}>
                <div className={others.othersShoeOneText}>
                    <h2>Maliki</h2>

                    <h5>Product Name will be here</h5>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet cumque est sequi!

                    </p>
                </div>
                <div className={others.othersShoeOneImg}>

                </div>
            </div>


            <div className={others.othersShoeOne}>
                <div className={others.othersShoeOneText}>
                    <h2>Timi</h2>

                    <h5>Product Name will be here</h5>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eveniet cumque est sequi!

                    </p>
                </div>
                <div className={others.othersShoeOneImg}>

                </div>
            </div>



        </div>
    )
}

export default Otherproduct