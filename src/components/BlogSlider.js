// BlogSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Container, Row, Col } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BlogSlider({ posts }) {
  return (
    <div className="py-5 bg-light"> {/* Bootstrap background class */}
      <Container>
        <h2 className="text-center mb-4">Latest Blog Posts</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {posts && posts.map((post, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-3 rounded shadow"> {/* Bootstrap classes */}
                <h3 className="h5 fw-semibold mb-2">{post.title}</h3> {/* Bootstrap typography */}
                <p className="text-muted">{post.desc}</p> {/* Bootstrap text color */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default BlogSlider;