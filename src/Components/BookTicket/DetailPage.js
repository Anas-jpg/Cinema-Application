import React from "react";
import "./DetailPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaPlay } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import Actor from "./Actor.js";

import { useEffect } from "react";

function DetailPage({onNextStep,array}) {

  const handleClick = () => {
    const element = document.getElementById("YoutubeLink");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handlebookTicket()
  {
      onNextStep();
  }
  

  return (
    <div className="Main-Div-Detail-Page">
      <img
        className="d-block w-100"
        src={array.picture}
        alt="Loading..."
      />

<div className="Main-Div-Detail-Page">
  <div className="WholeInnerInfo mb-5" style={{ position: 'absolute', top: '150px', marginLeft: '200px', width: '40%' }}>
    <div className="heading">
      <h4 className="Filmname">{array.name}</h4>
    </div>
    <span className="CategorySection">{array.name}</span>
    <p className="FilmDescription">{array.about}</p>
    <button className="DetailPageButton" onClick={handleClick} style={{ backgroundColor: 'rgb(255, 0, 0)', borderColor: 'rgb(255, 0, 0)', padding: '15px', marginTop: '80px', marginLeft: '12px' }}>
      <FaPlay /> <b>Watch Trailer</b>
    </button>
    <button className="DetailPageButton" style={{ marginLeft: '10px' }} onClick={handlebookTicket}>
      <GiTicket /> <b>Book Ticket</b>
    </button>
  </div>
</div>

      <Actor />

      <iframe id="YoutubeLink" src={array.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
      <h1 className="AlsoLike">You May Also Like</h1>

      <div className="List">
        <div className="List2 d-flex justify-content-center gap-4 flex-md-row flex-wrap col-10 mt-5 mb-5">
          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://e1.pxfuel.com/desktop-wallpaper/884/915/desktop-wallpaper-the-longest-ride.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>The Longest Ride</Card.Title>
              <p>
                The spark between Luke and Sophia fades away owing to their
                conflicting career paths. Subsequently, an older man, Ira, tries
                to show them the rewards of resolving relationship barriers.
              </p>
            </Card.Body>
          </Card>

          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://w0.peakpx.com/wallpaper/433/102/HD-wallpaper-evil-dead-rise-movie-2023.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>Evil Dead Rise</Card.Title>
              <p>
                A twisted tale of two estranged sisters whose reunion is cut
                short by the rise of flesh-possessing demons, thrusting them
                into a primal battle for survival as they face the most
                nightmarish version of family imaginable.
              </p>
            </Card.Body>
          </Card>

          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://c4.wallpaperflare.com/wallpaper/746/84/41/puss-in-boots-dreamworks-animation-movies-wallpaper-preview.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>Puss in Boots: The Last Wish</Card.Title>
              <p>
                When Puss in Boots discovers that his passion for adventure has
                taken its toll and he has burned through eight of his nine
                lives, he launches an epic journey to restore them by finding
                the mythical Last Wish.
              </p>
            </Card.Body>
          </Card>

          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://c4.wallpaperflare.com/wallpaper/635/746/368/avatar-neytiri-na-vi-neytiri-wallpaper-thumb.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>Avatar: The Way of Water</Card.Title>
              <p>
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home.
              </p>
            </Card.Body>
          </Card>

          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://c4.wallpaperflare.com/wallpaper/277/989/81/movie-dear-john-wallpaper-preview.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>Dear John</Card.Title>
              <p>
                John is a soldier who loves Savannah, a college student. He
                re-enlists post the 9/11 attack but the two continue to be in
                touch over letters. Fate tests their love many times over the
                next few years.
              </p>
            </Card.Body>
          </Card>

          <Card className="cont" style={{ width: "22rem" }}>
            <div className="image-box">
              <Card.Img
                variant="top"
                src="https://w0.peakpx.com/wallpaper/370/955/HD-wallpaper-m3gan-2023.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>M3GAN</Card.Title>
              <p>
                Designed by Gemma, a brilliant roboticist, M3GAN can listen,
                watch and learn as it plays the role of friend and teacher,
                playmate and protector. When Gemma becomes the unexpected
                caretaker of her 8-year-old niece, she decides to give the girl
                an M3GAN prototype, a decision that leads to unimaginable
                consequences.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
