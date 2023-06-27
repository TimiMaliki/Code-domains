import Sub from '../assets/style/Sub.module.scss'

const Subscribe = () => {
  return (
    <div className={Sub.Subscribe}>
          <div className={Sub.SubText}>
      <h2>Subscribe to our Newsletter</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div className={Sub.Sub}>
   <input type="text" placeholder='Enter your email' />
   <div className={Sub.subs}>
    <p>Subscribe</p>
   </div>
      </div>



        
    </div>
  )
}

export default Subscribe