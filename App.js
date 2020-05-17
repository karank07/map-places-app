import React from 'react';
import PlacesNavigator from './Navigation/PlacesNavigator';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './Store/reducer';

const rootreducer = combineReducers({
  places: reducer
})
const store = createStore(rootreducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

