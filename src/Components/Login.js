import React, { useState,useEffect } from 'react';
import axios from "axios";
import { TweenLite, Circ } from "gsap";
import './Login.css';
export default function Login({ onNextStep }) {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmitSignUp(event) {
    event.preventDefault();

    axios.post('http://localhost:3000/submitSignUp', {
      username: username,
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      alert('Successfully SignUP');
    })
    .catch(function (error) {
      console.log(error);
      alert('Error posting data');
    });
  }

  function handleSubmitLogin(event) {
    event.preventDefault();

    axios.post('http://localhost:3000/submitLogin', {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      alert('Successfully Login as UserFound');
        onNextStep();
    })
    .catch(function (error) {
      console.log(error);
      alert('User Not Found');
    });
  }

  

  


  useEffect(() => {
    (function () {
      var width,
        height,
        largeHeader,
        canvas,
        ctx,
        points,
        target,
        animateHeader = true;
    
      // Main
      initHeader();
      initAnimation();
      addListeners();
    
      function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = { x: width / 2, y: height / 2 };
    
        largeHeader = document.getElementById("lrgeHeaderr");
        largeHeader.style.height = height + "px";
    
        canvas = document.getElementById("demo-canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        const appBarWrapper = document.getElementById("lrgeHeaderr");
        appBarWrapper.style.backgroundImage = "url('https://images.hdqwalls.com/download/artistic-cube-abstract-5k-rw-1920x1080.jpg')";


        
    
        // create points
        points = [];
        for (var x = 0; x < width; x = x + width / 20) {
          for (var y = 0; y < height; y = y + height / 20) {
            var px = x + (Math.random() * width) / 20;
            var py = y + (Math.random() * height) / 20;
            var p = { x: px, originX: px, y: py, originY: py };
            points.push(p);
          }
        }
    
        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
          var closest = [];
          var p1 = points[i];
          for (var j = 0; j < points.length; j++) {
            var p2 = points[j];
            if (!(p1 == p2)) {
              var placed = false;
              for (var k = 0; k < 5; k++) {
                if (!placed) {
                  if (closest[k] == undefined) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
    
              for (var k = 0; k < 5; k++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
            }
          }
          p1.closest = closest;
        }
    
        // assign a circle to each point
        for (var i in points) {
          var c = new Circle(
            points[i],
            2 + Math.random() * 2,
            "rgba(255,255,255,0.3)"
          );
          points[i].circle = c;
        }
      }
    
      // Event handling
      function addListeners() {
        if (!("ontouchstart" in window)) {
          window.addEventListener("mousemove", mouseMove);
        }
        window.addEventListener("scroll", scrollCheck);
        window.addEventListener("resize", resize);
      }
    
      function mouseMove(e) {
        var posy = 0;
        var posx = 0;
        if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY - 100;
        } else if (e.clientX || e.clientY) {
          posx =
            e.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
          posy =
            e.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
      }
    
      function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
      }
    
      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + "px";
        canvas.width = width;
        canvas.height = height;
      }
    
      // animation
      function initAnimation() {
        animate();
        for (var i in points) {
          shiftPoint(points[i]);
        }
      }
    
      function animate() {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height);
          for (var i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 4000) {
              points[i].active = 0.3;
              points[i].circle.active = 0.6;
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
              points[i].active = 0.1;
              points[i].circle.active = 0.3;
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
              points[i].active = 0.02;
              points[i].circle.active = 0.1;
            } else {
              points[i].active = 0;
              points[i].circle.active = 0;
            }
    
            drawLines(points[i]);
            points[i].circle.draw();
          }
        }
        requestAnimationFrame(animate);
      }
    
      function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          ease: Circ.easeInOut,
          onComplete: function () {
            shiftPoint(p);
          }
        });
      }
    
      // Canvas manipulation
      function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.closest[i].x, p.closest[i].y);
          ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
          ctx.stroke();
        }
      }
    
      function Circle(pos, rad, color) {
        var _this = this;
    
        // constructor
        (function () {
          _this.pos = pos || null;
          _this.radius = rad || null;
          _this.color = color || null;
        })();
    
        this.draw = function () {
          if (!_this.active) return;
          ctx.beginPath();
          ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
          ctx.fill();
        };
      }
    
      // Util
      function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
      }
    })();
    // code from the script goes here
  }, []);


    const styles = {
      largeHeader: {
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'Jost, sans-serif',
        background: 'url("https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80") no-repeat center / cover',
      },
      main: {
        position: 'absolute',
        width: '350px',
        height: '500px',
        overflow: 'hidden',
        backgroundColor: '#000',
        background: 'linear-gradient(to bottom, #ca1717, #aa2121, #332286)',
        boxShadow: '5px 20px 50px #000',
        margin: 0,
        padding: 0,
        color: '#f9f1e9',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
      },
      chk: {
        display: 'none',
      },
      signup: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
      label: {
        color: '#fff',
        fontSize: '2.3em',
        justifyContent: 'center',
        display: 'flex',
        margin: '60px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '0.5s ease-in-out',
      },
      input: {
        width: '60%',
        height: '20px',
        background: '#e0dede',
        justifyContent: 'center',
        display: 'flex',
        margin: '20px auto',
        padding: '10px',
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
      },
      button: {
        width: '60%',
        height: '40px',
        margin: '10px auto',
        justifyContent: 'center',
        display: 'block',
        color: '#fff',
        fontSize: '1em',
        background: '#ca1717',
        fontWeight: 'bold',
        marginTop: '20px',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        transition: '0.2s ease-in',
        cursor: 'pointer',
      },
      buttonHover: {
        background: '#332286',
      },
      login: {
        height: '460px',
        background: '#eee',
        borderRadius: '60% / 10%',
        transform: 'translateY(-180px)',
        transition: '0.8s ease-in-out',
      },
      loginLabel: {
        color: '#ca1717',
        transform: 'scale(0.6)',
      },
      chkChecked: {
        transform: 'translateY(-500px)',
      },
      loginLabelChecked: {
        transform: 'scale(1)',
      },
      signupLabelChecked: {
        transform: 'scale(0.6)',
      },
    };
  
  


  return (
        
      <div id="lrgeHeaderr">
        <canvas id="demo-canvas"></canvas>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input
                type="text"
                name="txt"
                placeholder="Username"
                required=""
                value={username}
                onChange={handleUsername}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={email}
                onChange={handleEmail}
              />
              <input
                type="Password"
                name="pswd"
                placeholder="Password"
                required=""
                value={password}
                onChange={handlePassword}
              />
              <button onClick={handleSubmitSignUp}>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form action="">
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={email}
                onChange={handleEmail}
              />
              <input
                type="Password"
                name="pswd"
                placeholder="Password"
                required=""
                value={password}
                onChange={handlePassword}
              />
              <button onClick={handleSubmitLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
  );
}
