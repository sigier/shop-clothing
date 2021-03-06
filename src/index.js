import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { resolvers, typeDefs } from './graphql/resolvers';


import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';


const httpLink = createHttpLink({

  uri: ''
});


const cache = new InMemoryCache();


const client = new ApolloClient({

  link: httpLink,
  cache,
  resolvers,
  typeDefs
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemsCount: 0
  }
});


ReactDOM.render(

  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
