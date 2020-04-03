'use strict';

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/html.js'));
app.use(require('./routes/workout.js'));

mongoose.connect(`mongodb://localhost/workout`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
