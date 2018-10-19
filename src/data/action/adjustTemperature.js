export const ADJUST_TEMPERATURE = 'CLIMATE_CONTROL/ADJUST_TEMPERATURE';

export default function (targetTemperature) {
  return {
    type: ADJUST_TEMPERATURE,
    payload: {
      targetTemperature
    }
  };
}
