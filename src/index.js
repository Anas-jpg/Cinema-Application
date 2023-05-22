import React, { useState } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import CarouselFadeExample from "./Components/CarouselFadeExample";
import NowShowingDiv from "./Components/NowShowingDiv";
import Footer from "./Components/Footer";
import Titled from "./Components/Titled";
import Titled2 from "./Components/Titled2";
import Payment from "./Components/Payment";
import Login from './Components/Login';
import AdminPage from './Components/AdminPage'
import Navbar from './Components/Navbar';
import CategoryFull from './Components/Categorization/CategoryFull';
import MovieSlider from './Components/MoviesList/MovieSlider';
import MovieClasses from './Components/MoviesList/MovieClasses.js';
import Header from './Components/Categorization/Header';
import MovieList from './Components/Categorization/Categories';
import MovieDetail from './Components/BookTicket/DetailPage';
import FoodAndMovied from './Components/SeatAndFoodSelection/Movies';
import Screen from './Components/SeatAndFoodSelection/Mainseat';

const root = document.getElementById("root");

function Index() {
  const [step, setStep] = useState(1);
  const [passStr, setPassStr] = useState([]);
  const [renderstr,setStr] = useState([]);
  const [price,setprice] = useState(0);
  const [seat,setSeats] = useState([]);



  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBlogSelect = (blog, nextStep) => {
    setPassStr(blog);
    nextStep();
  };

  const handlePriceSeat = (price,seats) => {
    setprice(price);
    console.log('yeh hai price: '+price);
    setSeats(seats);
    console.log('yeh hai seats: '+seats);

    setStep((prevStep) => prevStep + 1);

  };

  const handleAllcategory = (paramws, nextStep) => {
    setStr(paramws);
    nextStep();
  };

// Movie list category

  let componentToRender;

  if (step === 1) {
    componentToRender = (<Login onNextStep={handleNextStep} />);
  }
   if (step === 2) {
    componentToRender = (
      <>
        <Navbar onNextStep={handleNextStep} />
        <CarouselFadeExample/>
        <NowShowingDiv title = "Now Showing"/>
        <Titled/>
        <NowShowingDiv title = "Coming Soon"/>
        <Titled2/>
        <Footer/>


      </>
    );
  }
  
  
  else if (step === 3) {
    componentToRender = (
      <>
        <Header />
        <MovieList onNextStep={handleNextStep} onBlogSelect={handleAllcategory}/>
      </>
    );
  } else if (step === 4) {
    componentToRender = (
      <>
        <MovieSlider />
        <MovieClasses onNextStep={handleNextStep} onBlogSelect={handleBlogSelect} param = {renderstr}/>
      </>
    );
  }

  // MovieDetail

 else if (step === 5) {

    componentToRender = <MovieDetail onNextStep={handleNextStep} onBlogSelect={handleBlogSelect} array={passStr} />;

  }

  else if (step === 6) {

    
      componentToRender = (
        <>
          <FoodAndMovied array={passStr} />
          <Screen onNextStep={handlePriceSeat} />
        </>
      );
    

    
    
  }

  else if (step >= 7) {

    componentToRender = <Payment price={price} seats={seat} />;

  }

  return <React.StrictMode>{componentToRender}</React.StrictMode>;
}

ReactDOM.render(<Index />, root);
