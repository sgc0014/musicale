import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {songReducer,musicPlayerReducer} from './reducers/songReducer'


const reducer = combineReducers({
songList: songReducer,
musicPlayer: musicPlayerReducer
});



const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
