
import React from 'react';
import TopStories from '../components/TopStories';
import './Blog.css';

const sidebarBlockStyle = {
  border: '2px solid #E8EAF2',
  padding: '30px',
  boxSizing: 'border-box',
};


const blogPosts = [
  {
    title: "4 Factors That You Must Know Before Choosing The Best Forex Trading Platform",
    date: "July 19, 2022",
    excerpt: "Online trading has grown tremendously in the last decade. Increasing Internet and smartphone penetration has significantly increased one-liner traders in India. People comfortably trade in forex, stock market, commodities, and cryptocurrency on their smartphones. Needless to say, the number of online forex trading platforms has increased proportionately with the number of forex traders. You may […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/4-Factors-That-You-Must-Know-Before-Choosing-The-Best-Forex-Trading-Platform-1024x576-1.jpg"
  },
  {
    title: "How to Use MetaTrader 5 (MT5)? Beginners Guide",
    date: "July 14, 2022",
    excerpt: "After the huge success of Metatrader 4 (MT 4), Metatrader 5 is here to revolutionize online trading in various financial instruments. Metatrader 5 is the next-generation online trading platform. While Metatrader 4 was built to offer only forex trading, Metatrader 5 has expanded its wings to accommodate more asset classes including cryptocurrency! Metatrader 5 platform […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/How-to-Use-MetaTrader-5-MT5-Beginners-Guide-1024x576-1.jpg"
  },
  {
    title: "Learn How To Do Gold Trading Online In 4 Simple Steps",
    date: "July 13, 2022",
    excerpt: "Gold has been a popular commodity for ages, may it be for trading, jewelry or investment. So much so that gold reserves were considered a key financial asset of a country and the most prized item during wars in history. Over the years, the trading of gold has increased, and it is seeing more investors […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/Learn-How-To-Do-Gold-Trading-Online-In-4-Simple-Steps-1024x576-1.jpg"
  },
  {
    title: "Why MoneyplantFX Is The Best Platform For Forex Trading In Around The World",
    date: "July 12, 2022",
    excerpt: "Exchange of currencies has been an integral part of trading across counties for centuries. For every import-export currency exchanges hands make it a huge market for corporates and companies other than individuals to invest in. The Forex market has the highest trading volume in the world as the trading takes place 24 hour a day […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/Why-MoneyplantFX-Is-The-Best-Platform-For-Forex-Trading-In-India-1024x576-1.jpg"
  },
  {
    title: "5 Tips to Choose The Best Trading App In India To Earn Money",
    date: "June 29, 2022",
    excerpt: "The trading market in India has its traces in the 18th century and since then people in India trade in cryptocurrencies, goods, commodities, precious metals, etc. Then after LPG and the companies act 1850 people started showing there in corporate securities. And after massive digitalisation now investors rely on the online trading apps to invest […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/06/5-Tips-to-Choose-The-Best-Trading-App-In-India-To-Earn-Money-1024x576-1.jpeg"
  }
];

const Blog = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Blog Content */}
        <div className="col-lg-8">
          {blogPosts.map((post, index) => (
            <div className=" mb-4" key={index}>
              <div className="image-container">
  <img src={post.image} className="card-img-top" alt={post.title} />
</div>

              <div className="card-body">
                <small className="text-muted">{post.date}</small>
                <h2 className="card-title fw-bold hover-blue">{post.title}</h2>   
                <p className="card-text text-muted mt-2">{post.excerpt}</p>
                <button className="btn border text-dark btn-outline-primary" >Read More →</button>
                
                
              </div>
            </div>
          ))}
        </div>
        
{/* Sidebar */}
<div className="col-lg-4">
  <div className="position-relative" style={{ top: '5px' }}>
    <TopStories />

    {/* Sidebar Block - Search */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="text-secondary">Search</h5>
      <div className="d-flex">
        <input type="text" className="form-control me-2" placeholder="" />
        <button className="btn"style={{backgroundColor:"#7e7e7e"}}>Search</button>
      </div>
    </div>

    {/* Sidebar Block - Recent Posts */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="fw-bold fs-1">Recent Posts</h5>
      <ul className="list-unstyled">
        {blogPosts.slice(0, 5).map((post, index) => (
          <li key={index}>
            <button className="text-decoration-none text-secondary d-block mb-2 btn btn-link p-0 text-start">
              {post.title}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Sidebar Block - Recent Comments */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="fw-bold fs-1">Recent Comments</h5>
      <p className="text-muted">No comments to show.</p>
    </div>

    {/* Sidebar Block - Archives */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="fw-bold fs-1">Archives</h5>
      <ul className="list-unstyled">
        <li><button className="btn  text-secondary p-0 text-start">July 2022</button></li>
        <li><button className="btn  text-secondary p-0 text-start">June 2022</button></li>
      </ul>
    </div>

    {/* Sidebar Block - Categories */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="fw-bold fs-1">Categories</h5>
      <p className='text-secondary'>Blogs</p>
    </div>

    {/* Sidebar Block - Logo */}
    <div className="mb-4 text-center" style={sidebarBlockStyle}>
      <img
        src="https://moneyplantfx.com/wp-content/uploads/2024/07/logo-1.png"
        alt="MoneyplantFX Logo"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    {/* Sidebar Block - Social Profile */}
    <div className="mb-4" style={sidebarBlockStyle}>
      <h5 className="fw-bold">Social Profile</h5>
      <div className="d-flex gap-3 p-3">
        <a
          href="https://www.facebook.com/Moneyplant_official-103910755515677/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white social-icon"style={{backgroundColor:"black"}}
        >
          <i className="fab fa-facebook-f fs-4" ></i>
        </a>
        <a
          href="https://twitter.com/MoneyplantF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white social-icon"style={{backgroundColor:"black"}}
        >
          <i className="fab fa-twitter fs-4"></i>
        </a>
        <a
          href="https://www.instagram.com/moneyplant_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white social-icon"style={{backgroundColor:"black"}}
        >
          <i className="fab fa-instagram fs-4"></i>
        </a>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      
    
  );
};

export default Blog;
