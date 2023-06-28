import index from './assets/style/index.module.scss'
import Carousel from './components/Carousel'
import Categories from './components/Categories'
import Techproduct from './components/Techproduct'
import Furnitureproduct from './components/Furnitureproduct'
import Shoeproduct from './components/Shoeproduct'
import Login from './components/Login'
import Otherproduct from './components/Otherproduct'
import Logo from './components/Logo'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Copyright from './components/Copyright'



function App() {

  return (
    <div>
      <nav>
        <div className={index.brandNameAndLogins}>
          <h2>Maliki</h2>

          <div className={index.Sub}>
            <input type="text" placeholder='Search Product' />
            <div className={index.subs}>
              <p>Categories</p>
            </div>
          </div>
        </div>

        <div className={index.menu}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Today's deals</a></li>
            <li><a href="">Trending</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Special offers</a></li>
          </ul>

        </div>
      </nav>


      <Carousel />
      <Categories />
      <Techproduct />
      <Furnitureproduct />
      <Shoeproduct />
      <Login />
      <Otherproduct />
      <Logo />
      <Subscribe />
      <Footer />
      <Copyright />
    </div>
  )
}

export default App
