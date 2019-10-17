import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {
  // Initialize Firebase, move this config file
  const config = {
    apiKey: 'AIzaSyDA50vFm9rDuua3fTPX541XaIpr5YzsMso',
    authDomain: 'binder-box.firebaseapp.com',
    databaseURL: 'https://binder-box.firebaseio.com',
    projectId: 'binder-box',
    storageBucket: 'binder-box.appspot.com',
    messagingSenderId: '56422134923'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    //reduxthunk used as a store enhancer
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
