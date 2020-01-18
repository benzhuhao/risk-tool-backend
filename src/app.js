const express = require('express');
const jwt = require('jsonwebtoken');


const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome',
    });
});

app.listen(3000, () => console.log('Server is listening on port 3000'))
//
