const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Временные массивы для хранения данных пользователей и объявлений
let users = [];
let ads = [];

// Определение типов GraphQL для пользователей, авторизации и объявлений
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Ad {
    id: ID!
    title: String!
    description: String!
    city: String!
    phone: String!
    images: [String]!
  }

  type Token {
    token: String!
  }

  type Query {
    ads: [Ad]
  }

  type Mutation {
    register(name: String!, email: String!, phone: String!, password: String!): User
    login(email: String!, password: String!): Token
    createAd(title: String!, description: String!, city: String!, phone: String!, images: [String]!): Ad
  }
`;

// Резолверы для обработки запросов
const resolvers = {
  Query: {
    ads: () => ads,
  },
  Mutation: {
    // Регистрация пользователя
    register: (parent, { name, email, phone, password }) => {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        phone,
        password, // Не храните пароли в открытом виде в реальных приложениях
      };
      users.push(newUser);
      return newUser;
    },
    
    // Авторизация пользователя
    login: (parent, { email, password }) => {
      // В реальном приложении вы должны проверять email и пароль
      const user = users.find(user => user.email === email && user.password === password);
      if (!user) {
        throw new Error('Неверные учетные данные');
      }
      // Возвращаем фиктивный токен для примера
      return { token: "dummy-token" };
    },

    // Создание объявления
    createAd: (parent, { title, description, city, phone, images }) => {
      const newAd = {
        id: ads.length + 1,
        title,
        description,
        city,
        phone,
        images
      };
      ads.push(newAd);
      return newAd;
    },
  },
};

// Инициализация сервера Apollo
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
