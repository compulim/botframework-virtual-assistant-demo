import { SET_DESTINATION } from '../action/setDestination';

const DEFAULT_STATE = {
  estimatedTimeOfArrival: null,
  fullAddress: null
  // estimatedTimeOfArrival: new Date(2018, 9, 25, 12, 15),
  // fullAddress: 'Hong Kong International Airport'
};

export default function (state = DEFAULT_STATE, { payload, type }) {
  switch (type) {
    case SET_DESTINATION:
      state = { ...state, estimatedTimeOfArrival: payload.estimatedTimeOfArrival };
      state = { ...state, fullAddress: payload.fullAddress };
      break;

    default: break;
  }

  return state;
}
