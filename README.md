# Microservice-A
# QuoteGenerator Microservice

This repository contains the `QuoteGenerator` microservice, which provides random hiking quotes through a simple HTTP API. The microservice is implemented using **Express.js** and exposes an endpoint `/quote` to fetch a random quote.

## Communication Contract

This document outlines the communication contract for interacting with the `QuoteGenerator` microservice. 

### **Requesting Data:**

To request data (a random hiking quote) from the `QuoteGenerator` microservice, you will need to make an **HTTP GET request** to the `/quote` endpoint.

#### **Request Format:**

- **Method:** `GET`
- **URL:** `http://localhost:3001/quote`

#### **Example Request (Using `curl`):**

```bash
curl -X GET http://localhost:3001/quote

Here is an example of a post request:
const axios = require('axios');

axios.get('http://localhost:3001/quote')
  .then(response => {
    console.log('Received Quote:', response.data.quote);
})
  .catch(error => {
    console.error('Error fetching quote:', error);
});
