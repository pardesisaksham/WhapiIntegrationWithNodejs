const express = require('express');
const routes = require('./routes/routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Integrate routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
