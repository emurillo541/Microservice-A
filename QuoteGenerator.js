const express = require('express');
const app = express();
const PORT = 3001;

const hikingQuotes = [
  "The mountains are calling and I must go.",
  "In every walk with nature, one receives far more than he seeks.",
  "Hiking is not escapism; it's realism.",
  "Take only memories, leave only footprints.",
  "Do not follow where the path may lead. Go instead where there is no path and leave a trail."
];

app.get('/', (req, res) => {
  res.send('QuoteGenerator Microservice is running. Use /quote to get a hiking quote.');
});

app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * hikingQuotes.length);
  const quote = hikingQuotes[randomIndex];
  res.json({ quote });
});


app.listen(PORT, () => {
  console.log(`QuoteGenerator microservice running at http://localhost:${PORT}`);
});
