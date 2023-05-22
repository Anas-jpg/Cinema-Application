import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './MovieClasses.css';

export default function ActionList({ onNextStep, onBlogSelect, param }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`http://localhost:3000/get-all-${param}`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, [param]);

  function handleClick(blog) {
    onBlogSelect(blog, onNextStep);
  }

  return (
    <div className='actionList'>
      <div className='List'>
        {blogs.length > 0 ? (
          <ul className='List2 d-flex justify-content-center gap-4 flex-md-row flex-wrap col-10 mt-5 mb-5'>
            {blogs.map((blog, index) => (
              <li key={index}>
                <Card className='cont' style={{ width: '22rem' }} onClick={() => handleClick(blog)}>
                  <div className='image-box'>
                    <Card.Img variant="top" src={blog.picture} />
                  </div>
                  <Card.Body>
                    <Card.Title>{blog.name}</Card.Title>
                    <p>{blog.about}</p>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
