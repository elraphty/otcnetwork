# OTC P2P TRADE

### A simple P2P BTC / USD OTC trade server, it returns trades that matches and add does that don't

## Prerequisites

 - Nodejs installed
 
## Project structure

- Tests - /tests
- App - /src

## How To Run

  Clone the repository

  ```git clone https://github.com/elraphty/otcnetwork.git```

  After cloning the repository, 
  
  - cd into the *otcnetwork* directory `cd otcnetwork`
  - install dependencies ```npm install```
  - Create a .env file ```touch .env```
  - Copy the placeholders from the .env.sample file into your .env and populate with your own values
  - install grenache-grape globally ```npm i -g grenache-grape```
  - boot two grape servers 
  ```
      grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
      grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'
  ```
  
### Running the servers

  - First of all run the grape server ``` npm run grape_server ```
  - Then run the grape client ``` npm run grape_client ```
  - Run the API server lastly to make calls to the grape client ``` npm run start ```
  - Run tests with ```npm run test```

## API ROUTES

  - GET /api/v1 = Base route
  - POST /api/v1/otc = Adds an otc value to and array and returns other otcs that matches if found.

  Request Body
  
  ```
    {
      "usd": "50000",
      "btc": "1"
    }
  ```
  Response
  
  ```
    {
      "msg": "Added otc",
      "data": {
        "id": 8166,
        "usd": "40000",
        "btc": "1"
      }
    }
    
    // OR
    
    {
      "msg": "Otc match found",
      "data": [
        {
          "id": 8166,
          "usd": "40000",
          "btc": "1"
        }, 
        {
          "id": 8046,
          "usd": "40000",
          "btc": "1"
        },
      ]
    }
    
  ```
  