import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from 'redux/store'
import history from './history'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            Hello
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App
