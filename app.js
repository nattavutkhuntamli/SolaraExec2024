const express = require('express');
const morgan  = require('morgan');
const dotenv  = require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3031;

const { notFound, errorHandler } = require("./src/middlewares/errorHandler");


const Runserver = () => {
    app.disable('x-powered-by')
    app.use(express.urlencoded({extended:true, limit:'500MB'}))
    app.use(express.json())
    app.use(morgan('dev'));


    /**
     *  import router
     */
    const adminRoutes = require('./src/routes/admin')

    app.get('/', (req, res) => {
        return res.send({
            message: "Welcome to Mini API Jobs",
        });
    })

    app.use('/admin',adminRoutes);

    app.use(notFound);
    app.use(errorHandler);
    app.listen(PORT, () => {
        console.log(`API RUN Success on PORT ${PORT}`);
    })
}

Runserver()
