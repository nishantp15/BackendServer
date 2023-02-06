const express = require('express');
const cors = require('cors');
const router = require('./Router/ProductsRouter');
const Cartrouter = require('./Router/CartRouter')
const ConnectToDB = require('./Database/ConnectToDB');
const app = express();

console.log(8)
app.use(express.json());
app.use(logRequest);
app.use(cors());
app.use('/products',router);
app.use('/cart',Cartrouter);

async function logRequest(req,res,next){
    console.log(new Date, req.method, req.url);
    next();
}
let port = process.env.PORT || 3008
ConnectToDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on ${port}`)
    })
}).catch();
