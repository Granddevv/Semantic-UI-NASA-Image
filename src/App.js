import React, { Component } from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import DataPicker from './components/DatePicker';
import DisplayItem from './components/DisplayItem';

import fbmApp from './store/reducers';
import fbmSaga from './store/sagas';
import 'semantic-ui-css/semantic.min.css';

const fbmMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Redux browser plugin
const store = createStore(fbmApp, composeEnhancers(
    applyMiddleware(fbmMiddleware)
));
fbmMiddleware.run(fbmSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
              <DataPicker />
              <DisplayItem />
          </div>
      </Provider>
    );
  }
}

export default App;
