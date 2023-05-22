import { useState } from "react";
import SeatsMap from "./SeatsMap";
import Food from "./Food.js";
import './Mainseat.css';


function Mainseat({ onNextStep }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSeatClick = (seatNumber, isReserved) => {
    if (isReserved) {
      console.log('Is Reserved Chal raha hai?: '+ isReserved);
      if (selectedSeats) {
        setSelectedSeats([...selectedSeats, seatNumber]);
        setTotalPrice(totalPrice + 650);
      }
    } else {
      setSelectedSeats(
        selectedSeats.filter((seat) => seat !== seatNumber)
      );
      setTotalPrice(totalPrice - 650);
    }
  };

  const handleNextStep = () => {
    onNextStep(totalPrice,selectedSeats);
  };


  return (
    <div className="MainDivOfSeat">
      <div className="container">
        <div className="screen"></div>
      </div>
      <SeatsMap rowsCount={5} seatsCount={9} onSeatClick={handleSeatClick} />
      <br />
      <div className="Seatpice">
        <h3>Price per seat: $650</h3>
      </div>
      <Food  onNextStep={handleNextStep} price={totalPrice} seats={selectedSeats} />
    </div>
  );
}

export default Mainseat;
