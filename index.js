require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

// Now you can use the `apiKey` variable in your code
// to access the OpenAI API using the provided API key
console.log(apiKey);

//import { Configuration, OpenAIApi } from 'openai'
//const apiKey = process.env.OPENAI_API_KEY