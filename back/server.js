const pool = require('./db');
const express = require("express");
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios')
const bodyParser = require('body-parser');
const path = require('path');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const PORT = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


const publicPath = path.join(__dirname,  'build');


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    
    //res.send({message: "reeeee"})
    console.log('omg reee')
    res.sendFile(path.join('index.html'))
})


// app.get('/ree', (req, result) => {

//     console.log("in ree");
//     pool.query('alter table test.orders add column orderid serial primary key',
//         (req, res) => {
//         //console.log(res.status);
//             })
//             .catch(error => {
//             //console.error(error);
//         })
    
    
// })
// app.post('/', (req, res) => {
//     const query = 'insert into test.customers( first_name,last_name,email) VALUES($1, $2, $3)'
//     const query2 = 'INSERT INTO test.orders (customerid, date, description,make,model,plate,vin,year) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)'
//     pool.query(query2,
//         [1,'2022-03-01','test description','KIA','OPTIMA','123abc','123testingvinNumber',2022],
//         (req, result) => {
        
//         //res.send(result.rows);


//     })
    
    
// })
// app.post('/customer-add', (req, res) => {
//     console.log(req.body);
   
//     const { first, last, email } = req.body;
//     console.log(first);
//     pool.query('insert into test.customers( first_name,last_name,email) VALUES($1, $2, $3)',
//         [first, last, email])
//         .catch(error => {
//             console.error(error);
//             console.log(res);
//     })
// })

app.post('/customer-add', (req, res) => {
    console.log(req.body);
   //insert into test.customers( first_name,last_name,email) VALUES($1, $2, $3)
    const { first, last, email,phone } = req.body;
    console.log(first);
    pool.query('insert into test.customers( first_name,last_name,email,phone) VALUES($1, $2, $3,$4)',
        [first, last, email,phone])
        .catch(error => {
            console.error(error);
            console.log(res);
    })
})

app.post('/customer-get', (req, res) => {
    
    console.log(" received from customer get");
    //console.log(req.first);
    const { first_name, last_name, email, customerid,id} = req.body;
    console.log(customerid)
    const test = 'select * from test.customers';
    //'select * from test.customers where first_name = $1 AND last_name $2 AND email = $3'
    let query = 'select * from test.customers where first_name = $1';
    let values = [];
    if (customerid) {
        console.log('getting customer by id')

        query = 'select * from test.customers where id = $1';
        values = [customerid];
    }
    else {
        console.log('getting customer by first name')
        query = 'select * from test.customers where first_name = $1';
        values = [first_name];
    }
    
    pool.query(query,values,
        (req, result) => {
            console.log('it be working')
            console.log(result.rows);
            res.send(result.rows);


    })
    

})

app.post('/orders', (req, res) => {
    console.log("IN THE ORDERS")
    
    const { first_name, last_name, email,id, orderId } = req.body;
    console.log(req.body)
    console.log(orderId)
    let query =''
    let values = [];
    if (orderId) {
        query = 'select * from test.orders where orderid = $1'
        values = [orderId]
        
        pool.query(query,
        values,
        (req, result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
    }
    else  {
        query = 'select * from test.orders where customerid = $1';
        values = [id];
        pool.query(query,
        values,
        (req, result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
    }
    
    
})

app.post('/order-add', (req, res) => {
    console.log("IN THE ADD ORDERS")
    
    const {make, model, year, vin, plate, mileage,description,id} = req.body;
    console.log(id)
    const test = 'select * from test.orders';
    //'select * from test.customers where first_name = $1 AND last_name $2 AND email = $3'
    const query = 'select * from test.orders where first_name = $1';
    const values = [make, model, year, vin, plate, description, id];

   pool.query('insert into test.orders(make,model,year,vin,plate,description,customerid) VALUES($1, $2, $3, $4, $5, $6,$7)',
        values)
        .catch(error => {
            console.error(error);
            console.log(res);
    })
})





app.get('/', (req, res) => {
    
   //  pool.query('select * from test.orders', (req, result) => {
        
   //      res.send(result.rows);


   //  })
     
   res.send({thing: "the thing is still here"})
    
})


//-------------------------------------------------------------------------------------








app.get('*', (req, res) => {

   res.sendFile(path.join(publicPath, 'index.html'));
});
