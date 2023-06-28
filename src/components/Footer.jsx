import myfooter from '../assets/style/myfooter.module.scss'

const Footer = () => {
    return (
        <div className={myfooter.footer}>

            <div className={myfooter.brandAndLogos}>
                <h2>Maliki</h2>
                <p>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Dolorum expedita recusandae nostrum.</p>

                <div className={myfooter.logo}>
                    <div className={myfooter.logoOne}>
                    </div>
                    <div className={myfooter.logoOne}>
                    </div>
                    <div className={myfooter.logoOne}>
                    </div>
                    <div className={myfooter.logoOne}>
                    </div>
                </div>
            </div>


            <div className={myfooter.link}>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Unique Product</a></li>
                    <li><a href="">Custom care</a></li>
                </ul>
            </div>


                <div className={myfooter.brandAndLogos}>
                    <h2>Maliki</h2>
                    <p>
                        +2348102850113
                    </p>
                    <p>
                        N0 4 Odin Nwankwo Street
                    </p>


                    <div className={myfooter.logo}>
                        <div className={myfooter.logoOne}>
                        </div>
                        <div className={myfooter.logoOne}>
                        </div>
                        <div className={myfooter.logoOne}>
                        </div>
                        <div className={myfooter.logoOne}>
                        </div>
                    </div>
                </div>

        

            <div className={myfooter.link}>
                <ul>
                    <li><a href="">Career</a></li>
                    <li><a href="">Affiliate</a></li>
                    <li><a href="">Branches</a></li>
                    <li><a href="">Ladies wear</a></li>
                </ul>
            </div>



        </div>

    )
}

export default Footer