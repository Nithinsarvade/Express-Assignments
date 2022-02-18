const express = require('express');

const app = express();

app.get('/year', (req, res) => {
    
    const age = req.query.age;
    let currentYear = new Date().getFullYear();
    let year = currentYear - age;
    res.send(`You were born in ${year}.`);
});

app.listen(3000, () => console.log('Application started on port 3000...'));