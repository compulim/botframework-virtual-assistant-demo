export const SET_DESTINATION = 'NAVIGATION/SET_DESTINATION';

export default function (fullAddress, estimatedTimeOfArrival) {
  return {
    type: SET_DESTINATION,
    payload: {
      estimatedTimeOfArrival,
      fullAddress
    }
  }
}
