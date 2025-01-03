const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Используем body-parser для парсинга JSON данных

// Определение схемы GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
    register(name: String!, phone: String!, email: String!, password: String!): String
    login(username: String!, password: String!): String
    createAd(title: String!, description: String!, city: String!, phone: String!): String
  }
`);

// Определение резолверов для запросов и мутаций
const root = {
  hello: () => 'Hello world!',
  
  register: async ({ name, phone, email, password }) => {
    console.log(`Registering user: ${name}, ${phone}, ${email}`);
    await sendToBackend('/register', { name, phone, email, password });
    return 'Registration request sent to backend.';
  },
  
  login: async ({ username, password }) => {
    console.log(`Logging in user: ${username}`);
    await sendToBackend('/login', { username, password });
    return 'Login request sent to backend.';
  },
  
  createAd: async ({ title, description, city, phone }) => {
    console.log(`Creating ad: ${title}, ${description}, ${city}`);
    await sendToBackend('/createAd', { title, description, city, phone });
    return 'Ad creation request sent to backend.';
  }
};

// Функция для отправки данных на бэкэнд
async function sendToBackend(endpoint, data) {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(`Response from backend:`, result);
  } catch (error) {
    console.error(`Error sending data to backend:`, error);
  }
}

// Маршруты для обработки запросов
app.post('/register', (req, res) => {
  console.log('Received registration data:', req.body);
  res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
  console.log('Received login data:', req.body);
  res.json({ message: 'Login successful' });
});

app.post('/createAd', (req, res) => {
  console.log('Received ad data:', req.body);
  res.json({ message: 'Ad created successfully' });
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('GraphQL API server running at http://localhost:4000/graphql'));
