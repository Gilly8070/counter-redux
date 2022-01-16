import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// reducers
import countReducer from './countReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';

// redux thunk
import thunk from 'redux-thunk';

// get components
import Modal from './Modal';

const middleware = [thunk];





// setup store
const store = createStore(combineReducers({
  countState: countReducer,
  modalState: modalReducer, 
  productState: productReducer
}), composeWithDevTools(applyMiddleware(...middleware)));

// store.dispatch({ type: RESET });
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });


const App = () => {
  return (

    <Provider store={store}>
      <Counter />
      <Modal />
    </Provider>
    
  )
};

export default App;
