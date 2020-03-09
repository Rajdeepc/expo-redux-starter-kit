import {
    createStore,
    applyMiddleware
} from 'redux'; // for creating store and applying middlerware like thunk
import thunk from 'redux-thunk'; // for async actions
import rootReducer from '../redux/rootReducer'



const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  
export default store;