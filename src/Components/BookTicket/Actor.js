import React from 'react'
import image from "./Actor1.jpg";
import image1 from "./Actor2.jpg";
import image2 from "./Actor3.jpg";
import './Actor.css';

function Actors() {
    return (
        <div className="Main-Div-Actor-Details">
            <div className="card">
                <div className="imgBx">
                    <img src={image} alt="images" />
                </div>
                <div className="details">
                    <h2>Benedict Cumberbatch<br /> <span>Actor</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={image1} alt="images" />
                </div>
                <div className="details">
                    <h2>Elizabeth Olsen<br /> <span>Actress</span></h2>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={image2} alt="images" />
                </div>
                <div className="details">
                    <h2>John Krasinski<br /> <span>Actor</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Actors