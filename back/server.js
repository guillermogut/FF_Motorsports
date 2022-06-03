const pool = require('./db');
const express = require("express");
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios')
//const basicAuth = require('express-basic-auth')
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
//app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'));
// const auth = basicAuth({
//   users: {
//     BigBoss1964: 'MamaeAmaU3',
//     user: '456',
//   },
// });


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'build')))

// uncomment above and add 'auth' below to args

// app.get('/authenticate',auth,(req, res) => {
//     console.log("awesome sauce")

//     const options = {
//     httpOnly: true,
//     signed: true,
//     };

//     if (req.auth.user === 'BigBoss1964') {
//     res.cookie('name', 'admin', options).send({ user: 'Alda' });
//   } else if (req.auth.user === 'user') {
//     res.cookie('name', 'user', options).send({ user: 'user' });
//   }
// });

app.post('/get-notes', (req, result) => {
  

  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }


  let date = new Date();
  console.log(' g rendered at '+ date.toLocaleTimeString('en-US'))

  const {orderid} = req.body;///////////////////////////////////////////////////////////////////////
   
    pool.query('select * from test.notes where orderid = $1',
      [orderid], (req, res) => {
        console.log('------------------------get notes n stuff--------------------------')
       
        console.log(res.rows)
        result.send(res.rows)
        return;
        })
        
   
})

app.post('/make-note', (req, result) => {
  
  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }
  console.log('beep boop, note made')
  const {note_type,note,orderid} = req.body;///////////////////////////////////////////////////////////////////////
  console.log(note)
  console.log(note_type)
  console.log(orderid)
    pool.query('insert into test.notes(note,note_type,orderid,date) values($1,$2,$3,NOW())',
      [note,note_type,orderid], (req, res) => {
        console.log('------------------------ make notes n stuff--------------------------')
        //console.log(res.rows)
        //result.send(res.rows)
        return;
        })
        
   
})

app.post('/del-note', (req, result) => {
  
  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }
  console.log('beep boop, note deleted')
  let date = new Date();
  console.log('rendered at '+ date.toLocaleTimeString('en-US'))
  const {id} = req.body;///////////////////////////////////////////////////////////////////////
   
    pool.query('delete from test.notes where id = $1',
      [id], (req, res) => {
        console.log('------------------------delete notes n stuff--------------------------')
        //console.log(res.rows)
        //result.send(res.rows)
        return;
        })
        
   
})

app.post('/edit-note', (req, result) => {
  
  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }

  console.log("beep boop, note edited")
  
  const {id, note, note_type} = req.body;///////////////////////////////////////////////////////////////////////
  console.log(id)
  console.log(note)
  console.log(note_type)
    pool.query('update test.notes set note = $1, note_type = $2 where id = $3',
      [note,note_type,id], (req, res) => {
        console.log('------------------------editing notes n stuff--------------------------')
        
        return;
        })
        
   
})

app.get('/read-cookie', (req, res) => {
  if (req.signedCookies.name === 'admin') {
    res.send({ user: 'Alda' });
  } else if (req.signedCookies.name === 'user') {
    res.send({ user: 'user' });
  } else {
    res.send({ user: 'auth' });
  }
});

app.get('/clear-cookie', (req, res) => {
  
  res.clearCookie('name').end();
});



app.get('/', (req, res) => {
    
    //res.send({message: "reeeee"})
    console.log('omg reee')
    //console.log(__dirname)
    res.sendFile(path.join('index.html'))
})


app.post('/customer-add', (req, res) => {

  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }
    console.log(req.body);
   //insert into test.customers( first_name,last_name,email) VALUES($1, $2, $3)
    const { first, last, email,phone,address } = req.body;
    //console.log(first);
    pool.query('insert into test.customers( first_name,last_name,email,phone,address) VALUES($1, $2, $3,$4,$5)',
        [first, last, email,phone,address])
        .catch(error => {
            console.error(error);
            console.log(res);
    })
})

app.post('/customer-get', (req, res) => {
  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }  
  let customers = []
    console.log(" received from customer get");
    //console.log(req.first);
    const { first_name, last_name, email, customerid,id} = req.body;
    console.log(id)
    const test = 'select * from test.customers';
    //'select * from test.customers where first_name = $1 AND last_name $2 AND email = $3'
    let query = 'select * from test.customers where first_name = $1';
    let values = [];
    if (customerid) {//have to clean these up, not sure why I made customerid and id
        console.log('getting by customerid')

        query = 'select * from test.customers where id = $1';
        values = [customerid];
    }
    else if (Number.isInteger(id) )
    {
    console.log('getting customer by id')

        query = 'select * from test.customers where id = $1';
        values = [id];
    }
    else {
        console.log('getting customer by first name')
        query = 'select * from test.customers where first_name = $1 OR last_name = $2 OR email = $3';
        values = [first_name,last_name,email];
    }
    
    pool.query(query,values,
        (req, result) => {
            console.log('it be working')
            console.log(result.rows);
            res.send(result.rows);


    })
    

})

app.post('/orders', (req, res) => {


  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }
    console.log("IN THE ORDERS")
    
    const { first_name, last_name, email,id, orderId } = req.body;
    console.log(req.body)
    console.log(id)
    
    let query =''
    let values = [];
    if (orderId) {
        query = 'select * from test.orders where orderid = $1'
        values = [orderId]
        
        pool.query(query,
        values,
        (req, result) => {
            //console.log(result.rows);
          
            res.send(result.rows);
        })
    }
    else  {
        query = 'select * from test.orders where customerid = $1';
        values = [id];
        pool.query(query,
        values,
          (req, result) => {
          console.log('look at the results below REEEEEEEE')
            //console.log(result.rows);
            res.send(result.rows);
        })
    }
    
    
})

app.post('/order-add', (req, res) => {

  if (req.signedCookies.name !== 'admin') {
    res.send({ message: "nope" })
    console.log("nope")
    return
  }
    console.log("IN THE ADD ORDERS")
    //console.log(req.body)
    const {make, model, year, vin, plate, mileage, engine,id} = req.body;
  //console.log(id)
  const customerid = id;
    //const test = 'select * from test.orders';
    //'select * from test.customers where first_name = $1 AND last_name $2 AND email = $3'
    //const query = 'select * from test.orders where first_name = $1';
    const values = [make, model,mileage,parseInt(year) , vin, plate, customerid,engine];
  console.log(values)
   pool.query('insert into test.orders(make,model,mileage,year,vin,plate,customerid,engine,date) VALUES($1, $2, $3, $4, $5, $6,$7,$8,NOW())',
        values)
        .catch(error => {
            console.error(error);
            console.log(res.body);
    })
})





app.get('/test', (req, res) => {
    
   //  pool.query('select * from test.orders', (req, result) => {
        
   //      res.send(result.rows);


   //  })
  // if (req.signedCookies.name !== 'admin') {
  //   res.send({ message: "nope" })
  //   console.log("nope")
  //   return
  // } 
  const { first_name, last_name, email,id, orderId } = req.params;
    
    let query =''
    let values = [16];
    query = 'select * from test.customers';
    //     values = [id];
        pool.query(query,
          (req, result) => {
          console.log('look at the results below REEEEEEEE')
            console.log(result.rows);
            res.send(result.rows);
          })
    
})


//-------------------------------------------------------------------------------------


app.get('*', (req, res) => {
  
    //res.sendFile(path.join('index.html'))
   //res.sendFile(path.join(publicPath, 'index.html'));
});
