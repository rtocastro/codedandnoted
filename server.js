const express = require('express');
const path = require('path');

// Import the feedback router
const api = require('./api/notes');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static(path.join (__dirname,'public')));

// Send all the requests that begin with /api
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


//run locally
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);