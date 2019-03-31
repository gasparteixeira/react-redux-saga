import axios from "axios";
import { API_ENDPOINT, RECEIVE_CHARACTERS } from "../constants";
import { call, put, select } from "redux-saga/effects";

export const getCharacters = () => {
  return axios.get(API_ENDPOINT);
};

function* fetchCharacteres() {
  try {
    const response = yield call(getCharacters);
    yield put({ type: RECEIVE_CHARACTERS, payload: response.data.results });
  } catch (error) {
    console.log(error);
  }
}

export { fetchCharacteres };
