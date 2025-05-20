const axios = require('axios');

async function getQuote() {
  try {
    const response = await axios.get('http://localhost:3001/quote');
    console.log('Received Quote:');
    console.log(response.data.quote);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
}

getQuote();