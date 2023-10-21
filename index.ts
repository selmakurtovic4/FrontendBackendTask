import express from 'express';
const app=express();
const port=process.env.PORT || 8000;
import db from './models'
import { Router } from 'express'
import userRoutes from './routes/users'

import {userData} from './seeders/users';

const createUsers = () => {
    userData.map(user=>db.User.create(user))
}
//createUsers();
db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log("App listening");
    })
})
//routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);