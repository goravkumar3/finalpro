import mainImage from '../../assets/iamges/Ecommerce web page-pana.svg'
const Home = () => {
  return (
    <div >
      <main className="row justify-content-around align-items-center px-3 my-5">
        <div className="col-12 col-lg-4 col-md-4">
          <h1>Store</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet voluptas dignissimos ex maiores, incidunt tempore, neque sequi ratione, id perspiciatis veniam sed culpa iusto nostrum ad sit soluta exercitationem.</p>
          <button className="btn btn-primary">Shop</button>
        </div>
         <div className="col-12 col-lg-5 col-md-5">
          <img src={mainImage} alt="mainImage" className='img-fluid' />
         </div>
      </main>
      <div className="row justify-content-around align-items-center px-3 my-5">
        <div className="col-12 col-lg-6 col-md-6">
          <h1>Join our newsletter and get 20% off</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, id?</p>
        </div>
        <div className="col-12 col-lg-4 col-md-4 d-flex">
          <input type="email" placeholder='Enter email address' className='form-control me-2 h-25'/>
          <button className='btn btn-danger h-25'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Home