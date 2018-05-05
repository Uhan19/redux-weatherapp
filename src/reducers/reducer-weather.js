import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //concat returns a new array with all the old data, OR
      return [action.payload.data, ...state];
  }
  return state;
}
