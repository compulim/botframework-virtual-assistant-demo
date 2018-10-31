import updateIn from 'simple-update-in';

import { ADJUST_TEMPERATURE } from '../action/adjustTemperature';

const DEFAULT_STATE = {
  driverSideTemperature: 22,
  outsideTemperature: 20,
  passengerSideTemperature: 21
}

export default function (state = DEFAULT_STATE, { meta, payload, type }) {
  switch (type) {
    case ADJUST_TEMPERATURE:
      state = updateIn(state, ['driverSideTemperature'], () => payload.targetTemperature);
      state = updateIn(state, ['passengerSideTemperature'], () => payload.targetTemperature);
      break;

    default: break;
  }

  return state;
}
