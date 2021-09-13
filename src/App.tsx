import { ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { client } from './apollo/client';
import './App.css';

import { Routes } from './routes';

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
           <Routes />
        </Router>
    </ApolloProvider>
  );
}

export default App;
