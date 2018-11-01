import { combineReducers } from 'redux';

import climateControl from './reducer/climateControl';
import audioControl from './reducer/audioControl';
import navigation from './reducer/navigation';

export default combineReducers({
  climateControl,
  navigation,
  audioControl,
})
