import {applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {carReducer} from './reducers/carReducer';
import { alertsReducer} from './reducers/alertsReducer';
const composeEnhancers = composeWithDevTools({
});
const rootReducer = combineReducers({
  carReducer,
  alertsReducer,
})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store