const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/user');
require('./services/passport');

const app = express();



app.use(
    cookieSession({maxAge:30 * 24 * 60 * 60 *1000,
    keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());

app.use(passport.session());
require('./routes/authRoutes')(app);


mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


