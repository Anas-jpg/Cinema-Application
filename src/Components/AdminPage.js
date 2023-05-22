import React, { useEffect, useState } from 'react';
import './AdmicCSS.css';
import Table from 'react-bootstrap/Table';

export default function AdminPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/get-all-admin")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='Admin'>
      <div className='AdminContainer'>
      <h1>Admin Page</h1>

        {blogs.length > 0 ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Month-Year</th>
                <th>Cvv-Code</th>
                <th>Card Number</th>
               
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={index}>

                  <td>{index + 1}</td>
                  <td>{blog.Name}</td>
                <td>{blog.MonthYear}</td>
                <td>{blog.CVVCode}</td>
                <td>{blog.cardNumber}</td>

                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
