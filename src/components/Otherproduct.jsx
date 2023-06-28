import others from '../assets/style/others.module.scss'
import blacknike from '../assets/img/shoes/blacknike.jpg'
import dopenike from '../assets/img/shoes/dopenike.jpg'
import whitenike from '../assets/img/shoes/whitenike.jpg'



const Otherproduct = () => {
    return (
        <div className={others.others}>
            <div className={others.othersProductImg}>
            <img src={blacknike} alt="" />
            </div>

            <div className={others.othersProductDetails}>
                <div className={others.othersText}>
                    <h2> Persephone Sneakers – Universal Thread™</h2>

                    <h5>Persephone Sneakers</h5>
                    <p>hese look like a cross between APL’s knit designs and the
                         sustainable Chloe sneaker collection from last summer. Either way, 
                         these are a hit in my book, and the groove detail at the sole makes all the difference 
                        to make these sneakers appear way more expensive than they are.
                    </p>
                   
                    <br />
                    <p>price $42.99</p>
                    <div className={others.startshopping}>
                        <div className={others.startshoppingText}>
                            Start Shopping
                        </div>
                    </div>
                </div>
            </div>


            <div className={others.othersShoeOne}>
                <div className={others.othersShoeOneText}>
                    <h2> 327 New Balance Sneakers</h2>

                    <h5>327 New Balance Sneakers</h5>
                    <p>The bright blue color of this pair of New Balance sneakers is perfect 
                        for spring and summer. I love the 
                        contrasting two-tone shades on the inside and outside of the sneaker.
                    </p>
                    <p>price $100</p>
                   

                </div>
                <div className={others.othersShoeOneImg}>
                <img src={dopenike} alt="" />
                </div>
            </div>
            


          
        



        </div>
    )
}

export default Otherproduct