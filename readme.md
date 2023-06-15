npm init -y

npm install dotenv

create a .env file and put 
OPENAI_API_KEY=your_api_key_here

create index.js and put:
require('dotenv').config();
const apiKey = process.env.OPENAI_API_KEY;
// Now you can use the `apiKey` variable in your code
// to access the OpenAI API using the provided API key
console.log(apiKey);