import React, { useState } from "react";
import bottle from './bottle.jpg';
import burger from './burger.jpg';
import popcorn from './popcorn.jpg';
import tea from './tea.jpg';
import coffee from './coffee.jpg';
import fries from './fries.jpg';
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import './Food.css';
import Buttonn from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import Payment from '../Payment';

function Food({ onNextStep, price, seats }) {
  const [menuItems, setMenuItems] = useState([
    { name: "Burger", price: 500, quantity: 0 },
    { name: "Bottle", price: 50, quantity: 0 },
    { name: "Popcorn", price: 300, quantity: 0 },
    { name: "Tea", price: 100, quantity: 0 },
    { name: "Coffee", price: 250, quantity: 0 },
    { name: "Fries", price: 150, quantity: 0 },
  ]);

  const [showPayment, setShowPayment] = useState(false);

//   const handleNexttStep = () => {
//     setShowPayment(true);
//   };

  const handleNextStep = () => {
    onNextStep(price,seats);
  };


  function handleQuantityChange(index, delta) {
    var check = menuItems[index].quantity;
    check = check + delta;
    if (check >= 0) {
      const newMenuItems = [...menuItems];
      newMenuItems[index].quantity += delta;
      setMenuItems(newMenuItems);
    }
  }

  let foodPrice = 0;
  for (let i = 0; i < menuItems.length; i++) {
    foodPrice += menuItems[i].price * menuItems[i].quantity;
  }

  let totalPrice = price + foodPrice;

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className='FoodKiMainDiv'>
      <h1 className='itemsMenu' style={{ margin: '0' }}>Menu Items</h1>
      <div className='List'>
        <div className='List2 d-flex justify-content-center gap-4 flex-md-row flex-wrap col-10 mt-5 mb-5'>
        <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={burger} />
                        </div>
                        <Card.Body>
                            <Card.Title>Burger</Card.Title>
                            <h4>Price: ${menuItems[0].price}</h4>
                            <h5>Quantity: {menuItems[0].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(0, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(0, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={bottle} />
                        </div>
                        <Card.Body>
                            <Card.Title>Bottle</Card.Title>
                            <h4>Price: ${menuItems[1].price}</h4>
                            <h5>Quantity: {menuItems[1].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(1, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(1, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={popcorn} />
                        </div>
                        <Card.Body>
                            <Card.Title>Pop Corn</Card.Title>
                            <h4>Price: ${menuItems[2].price}</h4>
                            <h5>Quantity: {menuItems[2].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(2, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(2, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={tea} />
                        </div>
                        <Card.Body>
                            <Card.Title>Tea</Card.Title>
                            <h4>Price: ${menuItems[3].price}</h4>
                            <h5>Quantity: {menuItems[3].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(3, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(3, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={coffee} />
                        </div>
                        <Card.Body>
                            <Card.Title>Coffee</Card.Title>
                            <h4>Price: ${menuItems[4].price}</h4>
                            <h5>Quantity: {menuItems[4].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(4, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(4, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>

                    <Card className='MenuCard' style={{ width: '22rem' }}>
                        <div className='image-box'>
                            <Card.Img variant="top" src={fries} />
                        </div>
                        <Card.Body>
                            <Card.Title>Fries</Card.Title>
                            <h4>Price: ${menuItems[5].price}</h4>
                            <h5>Quantity: {menuItems[5].quantity}</h5>
                            <Button className='MenuButtonsDecrement' onClick={() => handleQuantityChange(5, -1)} variant="primary" size="sm">-</Button>{' '}
                            <Button className='MenuButtonsIncrement' onClick={() => handleQuantityChange(5, 1)} variant="primary" size="sm">+</Button>{' '}
                        </Card.Body>
                    </Card>
        </div>
      </div>
      <div className="TotalPrice">
        <button className="cartButton" onClick={handleShow}>
          <span className="glowing-txt">C A R T</span>
        </button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modalWindow" >
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Seats: {seats.length > 0 ? seats.join(", ") : "No seats selected"}
            Total Price: ${totalPrice}
          </Modal.Body>
          <Modal.Footer>
            <Buttonn variant="secondary" onClick={handleClose}>
              Close
            </Buttonn>
            <Buttonn variant="primary" onClick={handleNextStep}>
              Proceed to Checkout
            </Buttonn>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Food;
