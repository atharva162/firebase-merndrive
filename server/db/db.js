const mongoose = require('mongoose');
const { MONGODB_URL } = require('../config')

mongoose.connect(MONGODB_URL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true, 
     useCreateIndex: true
    });