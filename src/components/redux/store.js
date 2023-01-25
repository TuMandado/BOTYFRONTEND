import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/userReducer';
// import userReducer from './reducers/userReducer';
// import projectReducer from './reducers/projectReducer';
// import catalogReducer from './reducers/catalogReducer';
// import generalReducer from './reducers/generalReducer';
// import competitionReducer from './reducers/competitionReducer';
// import businessReducer from './reducers/businessReducer';
// import searchParameterReducer from './reducers/searchParameterReducer';
// import cotizationReducer from './reducers/cotizationReducer';

const rootReducer = combineReducers({
  user: authReducer,
//   user: userReducer,
//   project: projectReducer,
//   catalog: catalogReducer,
//   general: generalReducer,
//   competition: competitionReducer,
//   business: businessReducer,
//   searchParameter: searchParameterReducer,
//   cotization: cotizationReducer,
});

const store = createStore(rootReducer);

export default store;
