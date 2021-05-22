import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import tasksReducer from "./components/tasks.reducer";

const appStore = combineReducers({
  tasksList: tasksReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appStore, composeEnhancers(applyMiddleware(thunk)));

export default store;
