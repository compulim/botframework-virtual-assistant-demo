export const TUNE_RADIO = 'AUDIO/TUNE_RADIO';

export default function (targetStation) {
  return {
    type: TUNE_RADIO,
    payload: {
      targetStation
    }
  };
}