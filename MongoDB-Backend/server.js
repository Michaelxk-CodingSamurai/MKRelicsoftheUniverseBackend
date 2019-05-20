const express       = require('express')
const blogsRoutes   = require('./routes/blogs')

const app = express();
const port = 5000;

require('dotenv').config() 
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', blogsRoutes)

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app; 