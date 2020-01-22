const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const PassportJwt = require('passport-jwt')

require('dotenv').config();

const db_Url = process.env.DB_URL || 'dms-risk-tool-0f7pd.mongodb.net';
const db_Username = process.env.DB_USERNAME || 'dbUser';
const db_Password = process.env.DB_PASSWORD || 'dbUser';
const db_Collection = process.env.DB_COLLECTION || 'test';
const db_port = process.env.DB_PORT;
const port = process.env.PORT || 4000;

app.use(passport.initialize());

mongoose.connect(`mongodb://${db_Username}:${db_Password}@${db_Url}:${db_port}/${db_Collection}`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then((req, res)=> {
            console.log('Mongo DB connect succesful.');
        })
        .catch(err => {
            console.log('Mongo DB connect error,', err);
        });
        
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome',
    });
});

app.listen(`${port}`, () => console.log('Server is listening on port:', `${port}` ))
// mongodb+srv://dbUser:dbUser@dms-risk-tool-0f7pd.mongodb.net/test?retryWrites=true&w=majority
