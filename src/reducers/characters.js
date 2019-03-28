import { RECEIVE_CHARACTERS } from "../constants";
const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}
