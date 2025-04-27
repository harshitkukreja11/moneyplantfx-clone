// src/pages/Blog.js
import React from 'react';

const blogPosts = [
  {
    title: "4 Factors That You Must Know Before Choosing The Best Forex Trading Platform",
    date: "July 19, 2022",
    excerpt: "Online trading has grown tremendously... You may […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/4-Factors-That-You-Must-Know-Before-Choosing-The-Best-Forex-Trading-Platform-1024x576-1.jpg"
  },
  {
    title: "How to Use MetaTrader 5 (MT5)? Beginners Guide",
    date: "July 14, 2022",
    excerpt: "After the huge success of Metatrader 4 (MT 4)... Metatrader 5 platform […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/How-to-Use-MetaTrader-5-MT5-Beginners-Guide-1024x576-1.jpg"
  },
  {
    title: "Learn How To Do Gold Trading Online In 4 Simple Steps",
    date: "July 13, 2022",
    excerpt: "Gold has been a popular commodity for ages... more investors […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/Learn-How-To-Do-Gold-Trading-Online-In-4-Simple-Steps-1024x576-1.jpg"
  },
  {
    title: "Why MoneyplantFX Is The Best Platform For Forex Trading In Around The World",
    date: "July 12, 2022",
    excerpt: "Exchange of currencies has been an integral part of trading... trading takes place 24 hour a day […]",
    image: "https://moneyplantfx.com/wp-content/uploads/2022/07/Why-MoneyplantFX-Is-The-Best-Platform-For-Forex-Trading-In-India-1024x576-1.jpg"
  },
  {
    title: "5 Tips to Choose The Best Trading App In India To Earn Money",
    date: "June 29, 2022",
    excerpt: "The trading market in India has its traces in the 18th century... now investors rely on the online trading apps […]",
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
            <div className="card mb-4 shadow-sm" key={index}>
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <small className="text-muted">{post.date}</small>
                <p className="card-text mt-2">{post.excerpt}</p>
                <button className="btn btn-warning">Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{ top: '80px' }}>
            {/* Search */}
            <div className="mb-4">
              <h5 className="fw-bold">Search</h5>
              <input type="text" className="form-control" placeholder="Search" />
            </div>

            {/* Recent Posts */}
            <div className="mb-4">
              <h5 className="fw-bold">Recent Posts</h5>
              <ul className="list-unstyled">
                {blogPosts.slice(0, 5).map((post, index) => (
                  <li key={index}>
                    <button className="text-decoration-none text-dark d-block mb-2 btn btn-link p-0 text-start">
                      {post.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Comments */}
            <div className="mb-4">
              <h5 className="fw-bold">Recent Comments</h5>
              <p className="text-muted">No comments to show.</p>
            </div>

            {/* Archives */}
            <div className="mb-4">
              <h5 className="fw-bold">Archives</h5>
              <ul className="list-unstyled">
                <li><button className="btn btn-link text-dark p-0 text-start">July 2022</button></li>
                <li><button className="btn btn-link text-dark p-0 text-start">June 2022</button></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <h5 className="fw-bold">Categories</h5>
              <p>Blogs</p>
            </div>

            {/* Social Profile */}
            <div>
              <h5 className="fw-bold">Social Profile</h5>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
