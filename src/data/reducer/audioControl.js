import updateIn from 'simple-update-in';

import { PLAY_MUSIC } from '../action/playMusic';
import { TUNE_RADIO } from '../action/tuneRadio';


const DEFAULT_STATE = {
  nowPlaying: "Don't Stop Believing by Journey",
  radioStation: "106.9 FM"
}

export default function (state = DEFAULT_STATE, { meta, payload, type }) {
  switch (type) {
    case PLAY_MUSIC:
      state = updateIn(state, ['nowPlaying'], () => payload.targetSong);
      state = updateIn(state, ['radioStation'], () => "");
      break;

      case TUNE_RADIO:
      state = updateIn(state, ['nowPlaying'], () => state.nowPlaying );
      state = updateIn(state, ['radioStation'], () => payload.targetRadioStation);
      break;

    default: break;
  }

  return state;
}
