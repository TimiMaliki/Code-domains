import logo from '../assets/style/logo.module.scss'
import day from '../assets/img/logo/24-hours.png'
import  cellphone from '../assets/img/logo/cellphone.png'
import  delivery from '../assets/img/logo/delivery.png'
import  refund from '../assets/img/logo/refund.png'

const Logo = () => {
    return (
        <div className={logo.logo}>

            <div className={logo.logoIcon}>
                <img src={delivery} alt="" />
            </div>
            <div className={logo.logoText}>
             <h4>Free Delivery</h4>
             <p>Enjoy Free Delivery on all Jumia Express orders above $10000 delivered to Lagos, Abuja, 
                Port-Hacourt, Ibadan and Abeokuta...</p>
            </div>


            <div className={logo.logoIcon}>
            <img src={cellphone} alt="" />
            </div>
            <div className={logo.logoText}>
            <h4>Secure payment</h4>
             <p>We offer the best and secure payment methods</p>
            </div>


        
            <div className={logo.logoIcon}>
            <img src={day} alt="" />
            </div>
            <div className={logo.logoText}>
            <h4>24/7 support</h4>
             <p>We offer dependable, on-demand support options 
                including 24/7 technical and remote support and
                 4-hour and next business day global on-site support in over 100 countries</p>
            </div>



            <div className={logo.logoIcon}>
            <img src={refund} alt="" />
            </div>
            <div className={logo.logoText}>
            <h4>Refund</h4>
             <p>Get your money back within 24hours</p>
            </div>
            












        </div>
    )
}

export default Logo
