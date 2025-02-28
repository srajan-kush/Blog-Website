const path = require("path");
const express = require('express');
const userRoute = require('./routes/user');

const cookieParser = require('cookie-parser');

const mongoose = require("mongoose");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

app = express();
const PORT = 8000;


mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e) => console.log("MongoDB Connected"));

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.urlencoded({extended: false}));

app.use('/user',userRoute);

app.get('/', (req, res) => {
    return res.render("home",{
        user: req.user,
    });
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));