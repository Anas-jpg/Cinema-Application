import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './MovieSlider.css';

export default function Action() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/get-all-action")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='actionn'>
      {blogs.length > 0 ? (
        <div id="carouselExampleSlidesOnly" class="carousel slide overlay" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 backImg" src={blogs[0].picture} alt="" />
              <Carousel className='centered caro'>
                {blogs.map((blog, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={blog.picture} alt="Loading..." />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
