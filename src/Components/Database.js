import React, { useState, useEffect } from 'react';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/get-all')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {blogs.length > 0 && (
        <div key={blogs[0]._id}>
          <h2>{blogs[0].title}</h2>
          <p>{blogs[0].snippet}</p>
          <img src={blogs[0].picture} />
        </div>
      )}
      {blogs.length > 1 && (
        <div key={blogs[1]._id}>
          <h2>{blogs[1].title}</h2>
          <p>{blogs[1].snippet}</p>
          <img src={blogs[1].picture} />
        </div>
      )}
      {blogs.length > 2 && (
        <div key={blogs[2]._id}>
          <h2>{blogs[2].title}</h2>
          <p>{blogs[2].snippet}</p>
          <img src={blogs[2].picture} />
        </div>
      )}
      {/* Repeat the above pattern for each blog in the array */}
    </div>
  );
  
}

export default BlogList;
