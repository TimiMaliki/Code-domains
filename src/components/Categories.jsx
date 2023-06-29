import categories from '../assets/style/categories.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'
import coding from '../assets/img/categories/coding.png'
import console from '../assets/img/categories/console.png'
import finearts from '../assets/img/categories/finearts.png'
import furniture from '../assets/img/categories/furnitures.png'
import jewelry from '../assets/img/categories/jewelry.png'
import openbook from '../assets/img/categories/open-book.png'
import responsive from '../assets/img/categories/responsive.png'
import sports from '../assets/img/categories/sports.png'
import teddybear from '../assets/img/categories/teddy-bear.png'
import wristwatch from '../assets/img/categories/wristwatch.png'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className={categories.categories}>
      <div className={categories.category}>
        <Productheader title="Our Top Categories" />
        <div className={categories.categoriesArrows}>
 <Producttext text="" /> <><><><><></></></></></><FaArrowLeft></FaArrowLeft>  <FaArrowRight></FaArrowRight>
        </div>
      </div>

      <div className={categories.categoryitems}>
        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={wristwatch} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Watches</p>
          </div>
        </div>

        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={console} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Games</p>
          </div>
        </div>



        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={finearts} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Fine Art</p>
          </div>
        </div>


        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={coding} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Softwares</p>
          </div>
        </div>





        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={furniture} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Furniture</p>
          </div>
        </div>


      </div>

      {/* second categoryitems section */}


      <div className={categories.categoryitems}>
        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={responsive} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Electronics</p>
          </div>
        </div>

        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={openbook} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Books</p>
          </div>
        </div>



        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={jewelry} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Jewelry</p>
          </div>
        </div>


        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={teddybear} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Toys</p>
          </div>
        </div>





        <div className={categories.categorywrap}>
          <div className={categories.categoryitem}>
            <img src={sports} alt="" />
          </div>
          <div className={categories.categorytext}>
            <p>Sports</p>
          </div>
        </div>


      </div>

    </div>
  )
}



export default Categories