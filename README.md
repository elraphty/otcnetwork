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
