import { PLAY_SAMPLE, PAUSE_SAMPLE, DISPLAY_SAMPLE } from '../actions/types';

const initialState = {
  pads: {
    Q: "paused",
    W: "paused",
    E: "paused",
    A: "paused",
    S: "paused",
    D: "paused",
    Z: "paused",
    X: "paused",
    C: "paused"
  },
  display: '-'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PLAY_SAMPLE:
      return {
        ...state,
        pads: {
          ...state.pads,  
          [action.sample] : "to play"
        }
      };
    case PAUSE_SAMPLE:
      return {
        ...state,
        pads: {
          ...state.pads,
          [action.sample] : "paused"
        }
      };
    case DISPLAY_SAMPLE:
      return {
        ...state,
       display: action.sample
      };
    default:
      return state;
  }
}