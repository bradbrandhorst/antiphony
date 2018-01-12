import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentuser");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const grabToken = (token) => async dispatch => {
  const res = await axios.post("/api/stripepayments", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
