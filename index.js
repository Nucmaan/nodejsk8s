const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

 app.use(express.json());

 app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API for the Simple Express App v3.0.0' });
});

 app.get('/user', (req, res) => {
  res.json({ id: 1, name: 'John Doe' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' }
  ]);
});

 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
