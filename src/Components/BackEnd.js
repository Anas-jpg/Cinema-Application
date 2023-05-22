const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Stripe = require('stripe')(process.env.SECRET_KEY);

const Blog = require('./model/blog');
const ComingSoon = require('./model/comingsoon');
const Carousel = require('./model/carouselDB');
const PaymentPost = require('./model/paymentDB');
const LoginSignUp = require('./model/loginDB');

const Action = require('./model/ActionSchema');

const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const comedyList = require('./Model/ComedyListSchema');
const horrorList = require('./Model/HorrorListSchema');
const romanceList = require('./Model/RomanceListSchema');
const actionList= require('./model/ActionListSchema');




const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// connect to DB
const dbURL = 'mongodb+srv://anas:test1234@cluster0.nfi2uok.mongodb.net/ProjectSizzle?retryWrites=true&w=majority';
mongoose.connect(dbURL)
  .then(() => app.listen(port, () => {
    console.log("Server is running on port 3000");
  }))
  .catch((err) => console.log(err));

// define a route to handle the post request for Payment
app.post('/submitPayment', (req, res) => {
    const { cardNumber, MonthYear, CVVCode, Name } = req.body;
  
    // create a new instance of the model with the received data
    const myData = new PaymentPost({ cardNumber, MonthYear, CVVCode, Name });
  
    // save the data to MongoDB
    myData.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
  });

  // define a route to handle the post request to handle SignUp
app.post('/submitSignUp', (req, res) => {
    const { username, email, password } = req.body;
  
    // create a new instance of the model with the received data
    const myData = new LoginSignUp({ username, email, password });
  
    // save the data to MongoDB
    myData.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
  });

// define a route to handle the post request to handle Login
app.post('/submitLogin', (req, res) => {
    const { email, password } = req.body;
  
    LoginSignUp.findOne({ email, password })
      .then((user) => {
        if (user) {
          console.log('User found');
          res.sendStatus(200);
        } else {
          console.log('User not found');
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
  
  
    


  
  
  
  
    

app.get('/add-carousel',(req,res)=>{
        const car0 = new Carousel({
        title:'Money Back Gaurantee',
        snippet:'Pakistans First Thriller Film',
        picture:'https://cinestar.pk/IT-CDN/Themes/_default/Images/Banner27.jpg'
    });

    car0.save()
    .then((result)=>{
        res.send(result)

    })
    .catch((err)=>console.log(err))

    const car1 = new Carousel({
        title:'The John Wick',
        snippet:'Making Sure no crime in the street',
        picture:'https://cinestar.pk/IT-CDN/Themes/_default/Images/Banner25.jpg'
    });

    car1.save()
    .then((result)=>{
        res.send(result)

    })
    .catch((err)=>console.log(err))

    const car2 = new Carousel({
        title:'Huey Tum',
        snippet:'A Tregic romantic flick',
        picture:'https://cinestar.pk/IT-CDN/Themes/_default/Images/Banner28.jpg'
    });

    car2.save()
    .then((result)=>{
        res.send(result)

    })
    .catch((err)=>console.log(err))

})


app.get('/add-comingSoon',(req,res)=>{

    // const cs = new CmingSoon({
    //     title:'Tron',
    //     snippet:'Sam misses his father, a virtual world designer, and enters a virtual space. Now, both father and son embark upon a life-and-death journey',
    //     picture:'https://www.myconfinedspace.com/wp-content/uploads/2011/01/tron-legacy-vertical-movie-poster.jpg'
    // });

    // cs.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const cs1 = new CmingSoon({
    //     title:'The Forgiven',
    //     snippet:'While driving to a party at a grand villa, a wealthy couple on the verge of divorce accidentally hit and kill a young Moroccan man',
    //     picture:'https://cinematicslant.files.wordpress.com/2022/06/the-forgiven-poster.jpg'
    // });

    // cs1.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))


    // const cs2 = new CmingSoon({
    //     title:'Ready Player One',
    //     snippet:'James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death.',
    //     picture:'https://qph.cf2.quoracdn.net/main-qimg-44c1cb4c89ca83925d8266a7f6c78de7-lq'
    // });

    // cs2.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))


    // const cs3 = new CmingSoon({
    //     title:'Godzilla',
    //     snippet:'A legendary monster named King Ghidorah awakens Rodan, as well as other titans, to destroy the world',
    //     picture:'https://rare-gallery.com/thumbs/1208629-Godzilla-movies-movie-poster-Godzilla-King-of-the-Monsters.jpg'
    // });

    // cs3.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))


    // const cs4 = new CmingSoon({
    //     title:'100 days of Love',
    //     snippet:'Days of Love is a gentle and heartwarming tale of love narrated refreshingly by director Kamals son,débutant Jenuse Mohammed',
    //     picture:'https://i.pinimg.com/736x/9e/81/72/9e817220fa873dabfd540841a14f20cb--love-movie-movie-posters.jpg'
    // });

    // cs4.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const cs5 = new CmingSoon({
    //     title:'John Wick 3',
    //     snippet:'John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord',
    //     picture:'https://rare-gallery.com/thumbs/1204676-John-Wick-John-Wick-Chapter-3-Keanu-Reeves-movie-poster.png'
    // });

    // cs5.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))




})


app.get('/add-blog',(req,res)=>{

    const blog = new Blog({
        title:'Jesus Revolution',
        snippet:'In the 1970s, Greg Laurie and a sea of young people descend on sunny Southern California to redefine truth through all means of liberation',
        picture:'https://i.ebayimg.com/images/g/ySwAAOSwfupjUtj2/s-l500.jpg'
    });

    blog.save()
    .then((result)=>{
        res.send(result)

    })
    .catch((err)=>console.log(err))

    // const blog1 = new Blog({
    //     title:'Inside',
    //     snippet:'A high-end art thief becomes trapped inside a luxury, high-tech penthouse in New Yorks Times Square after his heist doesnt go as planned',
    //     picture:'https://i.ebayimg.com/images/g/b6EAAOSwkcJkDu~T/s-l500.png'
    // });

    // blog1.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const blog2 = new Blog({
    //     title:'Children of the Corn',
    //     snippet:'Possessed by a spirit in a dying cornfield, a 12-year-old girl in Nebraska recruits other children in her small town to go on a bloody rampage',
    //     picture:'https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:371/u:https://cdn.flickeringmyth.com/wp-content/uploads/2023/02/children-of-the-corn-1-600x889.jpg'
    // });

    // blog2.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const blog3 = new Blog({
    //     title:'All the world is sleeping',
    //     snippet:'A young mother in New Mexico sinks deeper into addiction while struggling to care for her daughter',
    //     picture:'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226665/AllTheWorldIsSleeping_Vertical_Poster.jpg'
    // });

    // blog3.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const blog4 = new Blog({
    //     title:'The Old Way',
    //     snippet:'Retired gunslinger Colton Briggs faces the consequences of his past when the son of a man he murdered arrives to take his revenge',
    //     picture:'https://m.media-amazon.com/images/M/MV5BYmY4MGM4NDUtYjFiZi00M2Q3LThkYzgtOTM2NmIzYTUzZWE5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg'
    // });

    // blog4.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))

    // const blog5 = new Blog({
    //     title:'Vengence is Mine',
    //     snippet:'Harry is a broken man who struggling to come to terms with the murder of his wife and daughter five years earlier',
    //     picture:'https://1.bp.blogspot.com/-s6hYLB5hHOo/YUoRHZrOHFI/AAAAAAAAWFE/L9tRw44U6tES6-PiQqa9LL3otik1sAl7QCLcBGAsYHQ/s1088/unnamed%2B%252857%2529.jpg'
    // });

    // blog5.save()
    // .then((result)=>{
    //     res.send(result)

    // })
    // .catch((err)=>console.log(err))


    
    

})

// For Carousel
app.get('/get-all-Car', (req, res) => {
    Carousel.find()
      .then((result) => {
       // res.render('index', { blogs: result });
        res.send(result)
      })
      .catch((err) => console.log(err));
  });

  // For Payment Hostory
app.get('/get-all-admin', (req, res) => {
  PaymentPost.find()
    .then((result) => {
     // res.render('index', { blogs: result });
      res.send(result)
    })
    .catch((err) => console.log(err));
});



// For Coming Soon Movies
app.get('/get-all-CS', (req, res) => {
    ComingSoon.find()
      .then((result) => {
       // res.render('index', { blogs: result });
        res.send(result)
      })
      .catch((err) => console.log(err));
  });
  


// for Now Showing
app.get('/get-all', (req, res) => {
  Blog.find()
    .then((result) => {
     // res.render('index', { blogs: result });
      res.send(result)
    })
    .catch((err) => console.log(err));
});

// for Now Showing
app.get('/get-all-action', (req, res) => {
  actionList.find()
    .then((result) => {
     // res.render('index', { blogs: result });
    //  console.log(result);
      res.send(result)
    })
    .catch((err) => console.log(err));
});

app.get('/get-single',(req,res)=>{

    Blog.findById("644e78564b03666ed7fee2e5")
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>console.log(err))

})


//-----------------------------for Handling Mail-----------------------------------------

// define route to handle POST request from form
app.post('/send-email', (req, res) => {
  // get form data from request body
  const { name, email, subject, message } = req.body;

  // create nodemailer transport object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'muhammad.anas159@gmail.com', // replace with your Gmail email address
      pass: 'plxpgqjgualjkbyc' // replace with your Gmail password
    }
  });

  // define email options
  const mailOptions = {
    from: 'muhammad.anas159@gmail.com', // replace with your Gmail email address
    to: email, // replace with your email address
    subject: subject,
    html: `
       <h1>Thank You for Ordering on ScreenSizzle</h1>
       <h1>Account Details</h1>
       <table style="border-collapse: collapse; width: 100%; border: 1px solid #fff; background: linear-gradient(to right, #16222a, #3a6073); color: #00a67d; font-family: Arial, sans-serif;">
         <tr>
           <th style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">Field</th>
           <th style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">Value</th>
         </tr>
         <tr>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">Account Holder Name:</td>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">${name}</td>
         </tr>
         <tr>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">Email:</td>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">${email}</td>
         </tr>
         <tr>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">Message:</td>
           <td style="border-bottom: 1px solid #000; padding: 12px; text-align: left;">${message}</td>
         </tr>
       </table>
       
    `
  };
  
  

  // send email using nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Could not send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email Sent');
    }
  });
});


// -------------------------------------------- for Payment---------------------------


app.post('/payment', async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});


//---------------------------------------------------------------------

// For getting action List movies
app.get('/get-all-actionList', (req, res) => {
  actionList.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
});

// For getting comedy List movies
app.get('/get-all-comedyList', (req, res) => {
  comedyList.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
});

// For getting horror List movies
app.get('/get-all-horrorList', (req, res) => {
  horrorList.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
});

// For getting romance List movies
app.get('/get-all-romanceList', (req, res) => {
  romanceList.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err));
});


