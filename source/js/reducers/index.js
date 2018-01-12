import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from 'reducers/app';

export default combineReducers({
  app,
  form: formReducer,
});
