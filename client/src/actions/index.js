import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentuser');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const grabToken = token => async dispatch => {
  const res = await axios.post('/api/stripepayments', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
