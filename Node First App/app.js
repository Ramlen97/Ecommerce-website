// app.js
const path=require('path');
const express=require('express');

const bodyParser=require('body-parser');

const app= express();

const adminRoutes= require('./routes/admin.js');
const shopRoutes= require('./routes/shop.js');
const contactusRoutes=require('./routes/contactus');
const successRoutes=require('./routes/success');

const errorController=require('./controllers/error');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactusform',contactusRoutes);
app.use('/success',successRoutes);


app.use(errorController.error404);

app.listen(3000);