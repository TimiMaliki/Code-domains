import categories from '../assets/style/categories.module.scss'
import Productheader from './Productheader'
import Producttext from './Producttext'

const Categories = () => {
    return (
        <div className={categories.categories}>
            <div className={categories.category}>
                <Productheader title="Our Top Categories" />
                <Producttext text="see all" />
            </div>

            <div className={categories.categoryitems}>
            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Watches</p>
                </div>
            </div>

            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Games</p>
                </div>
            </div>



            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Fine Art</p>
                </div>
            </div>


            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Softwares</p>
                </div>
            </div>





            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
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
            </div>
            <div className={categories.categorytext}>
              <p>Electronics</p>
                </div>
            </div>

            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Books</p>
                </div>
            </div>



            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Jewelry</p>
                </div>
            </div>


            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
            </div>
            <div className={categories.categorytext}>
              <p>Toys</p>
                </div>
            </div>





            <div className={categories.categorywrap}>
             <div className={categories.categoryitem}>
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