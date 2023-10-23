import express from 'express';
const app=express();

import db from './models'
import { Router } from 'express'
import userRoutes from './routes/users'
const cors = require('cors')
const port=process.env.PORT || 8001;
import {userData} from './seeders/users';

const createUsers = () => {
    userData.map(user=>db.User.create(user))
}
//createUsers();
db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(process.env.PORT );
        console.log("App listening");
    })
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);