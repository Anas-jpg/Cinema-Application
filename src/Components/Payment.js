import React, { useState,useEffect } from "react";
import "./PaymentStyle.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import StripeCheckout from "react-stripe-checkout";

const MySwal = withReactContent(Swal);

export default function Payment(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleClose() {
    setShow(false);
  }

  function handleMail() {

    axios
      .post("http://localhost:3000/send-email", {
        name: "Hanan",
        email: email,
        subject: "Order Confirmation",
        message: "Thank you for Ordering",
      })
      .then(function (response) {
        console.log(response);
        alert("Email posted successfully");
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error posting data");
      });
  }

  function handleCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  function handleMonthYearChange(event) {
    setMonthYear(event.target.value);
  }

  function handleCvvCodeChange(event) {
    setCvvCode(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // cardNumber, MonthYear, CVVCode, Name
    // Make a POST request to the server
    axios
      .post("http://localhost:3000/submitPayment", {
        cardNumber: cardNumber,
        MonthYear: monthYear,
        CVVCode: cvvCode,
        Name: name,
      })
      .then(function (response) {
        console.log(response);
        alert("Data posted successfully");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error posting data");
      });
  }

  const publishableKey =
    "pk_test_51N8SnVJlAmrTg5xR4z7rmAmxRJPRRSydGku0oBPfrMeTUprORC2Dj2Z5yvXeMy1ChDwFVYYb5gZX80lK1vQoGU3h00CRTeJGik";
  const [product, setProduct] = useState({
    name: "Headphone",
    price: 1,
  });
  const priceForStripe = product.price * 10;

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };
  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "http://localhost:3000/payment",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };




  return (
    <div className="body">
      <div class="containerr">
        <div class="row">
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  src="https://img.icons8.com/color/144/null/visa.png"
                  alt=""
                />
              </div>
              <br></br>
              <div class="number">
                <label class="fw-bold" for="">
                  **** **** **** 1060
                </label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span> ANAS</span>
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  src="https://img.icons8.com/color/144/null/mastercard.png"
                  alt=""
                />
              </div>
              <br></br>

              <div class="number">
                <label class="fw-bold">**** **** **** 1060</label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span> HASSAN</span>
                </small>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-lg-0 mb-3">
            <div class="card p-3">
              <div class="img-box">
                <img
                  src="https://img.icons8.com/color/144/null/discover.png"
                  alt=""
                />
              </div>
              <br></br>

              <div class="number">
                <label class="fw-bold">**** **** **** 1060</label>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <small>
                  <span class="fw-bold">Expiry date:</span>
                  <span>10/16</span>
                </small>
                <small>
                  <span class="fw-bold">Name:</span>
                  <span> HANAN</span>
                </small>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="card p-3">
              <p class="mb-0 fw-bold h3">Payment Methods</p>
            </div>
          </div>
          <div class="col-12">
            <div class="card p-3">
              <div class="card-body border p-3">
                <p>
                  <a
                    class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    <span class="fw-bold">Stripe</span>

                    <span className="stripee">
                    <StripeCheckout
                      id="stripe-checkout-button"

                      stripeKey={publishableKey}
                      label="Stripe"
                      name="Pay With Credit Card"
                      billingAddress
                      shippingAddress
                      amount={priceForStripe}
                      description={`Your total is $${product.price}`}
                      token={payNow}
                      style={{ width: "100%" }} // Add this line to set the width of StripeCheckout

                    />

                    </span>
                   
                    <span class="fab fa-cc-stripe"></span> 
                  </a>
                </p>
                <div class="collapse p-3 pt-0" id="collapseExample">
                  <div class="row">
                    <div class="col-8">
                      <p class="h4 mb-0">Summary</p>
                      <p class="mb-0">
                        <span class="fw-bold">Product:</span>
                        <span class="c-green">: Name of product</span>
                      </p>
                      <p class="mb-0">
                        <span class="fw-bold">Price:</span>
                        <span class="c-green">:$452.90</span>
                      </p>
                      <p class="mb-0">
                        Thank You For Choosing ScreenSizzle. Your Seat No H22
                        has been locked for Payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body border p-3">
                <p>
                  <a
                    class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    <span class="fw-bold">Credit Card</span>
                    <span class="">
                      <span class="fab fa-cc-amex"></span>
                      <span class="fab fa-cc-mastercard"></span>
                      <span class="fab fa-cc-discover"></span>
                    </span>
                  </a>
                </p>
                <div class="collapse show p-3 pt-0" id="collapseExample">
                  <div class="row">
                    <div class="col-lg-5 mb-lg-0 mb-3">
                      <p class="h4 mb-0">Summary</p>
                      <p class="mb-0">
                        <span class="fw-bold">Price:</span>
                        <span class="c-green">: {props.price}</span>
                      </p>
                      <p class="mb-0">
                        <span class="fw-bold">Seats:</span>
                        <span class="c-green">{props.seats.join(', ')}</span>
                      </p>
                      <p class="mb-0">
                        Thank You For Choosing ScreenSizzle. Your Seat No H22
                        has been locked for Payment!
                      </p>
                    </div>
                    <div class="col-lg-7">
                      <form action="" class="form">
                        <div class="row">
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                maxlength="3"
                                minlength="3"
                                type="text"
                                class="form-control"
                                placeholder=" "
                                id="cardNumber"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                required
                              />
                              <label for="" class="form__label">
                                Card Number
                              </label>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                                id="cardDate"
                                value={monthYear}
                                onChange={handleMonthYearChange}
                              />
                              <label for="" class="form__label">
                                MM / yy
                              </label>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="form__div">
                              <input
                                type="password"
                                class="form-control"
                                placeholder=" "
                                id="cvv"
                                value={cvvCode}
                                onChange={handleCvvCodeChange}
                              />
                              <label for="" class="form__label">
                                cvv code
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form__div">
                              <input
                                type="text"
                                class="form-control"
                                placeholder=" "
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                              />
                              <label for="" class="form__label">
                                name on the card
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div
                              onClick={handleSubmit}
                              className="btn btn-primary w-100"
                            >
                              Verify
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-12"> */}
          <Button variant="primary" onClick={handleShow}>
            Confirmation
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Personal Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={handleEmail}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleMail}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
