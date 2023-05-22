import React from "react";
import "./Styles.css";

export default function NowShowing(props) {
  return (
    <div>
      <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={props.mov1} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>{props.mtitle1}</h6>
                      <p>
                        An Indian spy battles against the leader of a gang of
                        mercenaries who have a heinous plot for his homeland.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={props.mov2} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>{props.mtitle2}</h6>
                      <p>
                        Amidst a post-apocalyptic America, Joel and Ellie face
                        brutal challenges and killers on a journey together.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={props.mov3} alt="" />
                    </div>

                    <div class="text-container">
                      <h6>{props.mtitle3}</h6>
                      <p>
                        Fighting for survival, John Wick takes on the
                        underworld's top assassins worldwide to end the bounty
                        on his life. .
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <a href="">
                <div class="card-flyer">
                  <div class="text-box">
                    <div class="image-box">
                      <img src={props.mov4} alt="" />
                    </div>
                    <div class="text-container">
                      <h6>{props.mtitle4}</h6>
                      <p>
                        Spider-Man enlists Doctor Strange to erase his identity,
                        but a failed spell unleashes unwelcome.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

