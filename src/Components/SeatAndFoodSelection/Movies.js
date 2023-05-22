import React, { useEffect, useState } from 'react';
 import './Movies.css';
import Card from 'react-bootstrap/Card';
import { BsStopwatch } from "react-icons/bs";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Screen from './Mainseat.js';
import './Food.css';


function BasicExample({array }) {
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {

    document.body.style.backgroundColor = '#0b0c0f';

    const img = new Image();
    img.src = array.card_picture;

    img.onload = () => {
      setLoading(false); // Once the image is loaded, set loading state to false
    };

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, [array.card_picture]);

  // const handleNextStep = () => {

  //    onNextStep(1,1);
  // };


  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

  return (
    <div className='seatSelection'>
      {loading ? (
        // Display loading state while the image is being loaded
        <div>Loading...</div>
      ) : (
        <div className="slide" data-ride="carousel">
          <div className='overlay'>
            <img className="d-block w-100 header" src={array.picture} alt="Loading..." />
          </div>
          <div className='DivOfInnerSmallCard mb-5'>
            <Card className='cont'>
              <div className='image-box'>
                <Card.Img variant="top" src={array.picture} />
              </div>
            </Card>
          </div>

          <div className='InnerCardDescription mb-5'>
            <h1 style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>{array.name}</h1>
            <small style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Category: Thriler/Mystery</small><br /><br />
            <span className='imdb'>IMDB</span><span style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> {array.IMDB}</span><br />
            <BsStopwatch style={{ color: 'white' }} /><span style={{ color: 'white', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}> 2h 10min</span>
          </div>

          <div className='HeaderSelection hand'>
            <span className='h1'>SELECT</span>
          </div>

          <div className='Selection'>
            <div className='Date'>
              <h1>
                <span> D </span>
                <span> A </span>
                <span> T </span>
                <span> E </span>
              </h1>
              <ButtonGroup className='buttonGroup' variant="" size="large">
                <Button sx={{ backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'>
                  <p>{date[23]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'>
                  <p>{date[24]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'>
                  <p>{date[25]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
              </ButtonGroup>
              <br />
              <ButtonGroup className='buttonGroup' variant="" size="large" >
                <Button sx={{ backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'>
                  <p>{date[26]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'><p>
                  {date[27]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons'>
                  <p>{date[28]}</p> <h5>{month[3]}</h5><small>2023</small><div className="hands"></div>
                </Button>
              </ButtonGroup>
            </div>

            <div className='Time'>
              <h1>
                <span> T </span>
                <span> I </span>
                <span> M </span>
                <span> E </span>
              </h1>
              <ButtonGroup className='buttonGroup2' variant="" size="large" >
                <Button sx={{ backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>09:00</h5><small>PM</small><div className="hands2"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>10:00</h5><small>PM</small><div className="hands2"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>11:00</h5><small>PM</small><div className="hands2"></div>
                </Button>
              </ButtonGroup>
              <br />
              <ButtonGroup className='buttonGroup2' variant="" size="large" >
                <Button sx={{ backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>12:00</h5><small>AM</small><div className="hands2"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>01:00</h5><small>AM</small><div className="hands2"></div>
                </Button>
                <Button sx={{ ml: 5, backgroundColor: '#1CE783', fontFamily: 'Kenyan Coffee Font', color: 'black', fontWeight: 'bolder', "&:hover": { backgroundColor: '#30b171' } }} className='buttons2'>
                  <h5>02:00</h5><small>AM</small><div className="hands2"></div>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
           {/* <Screen onNextStep={handleNextStep}/> */}

    </div>
  );
}

export default BasicExample;
