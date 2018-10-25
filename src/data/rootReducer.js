import { combineReducers } from 'redux';

import climateControl from './reducer/climateControl';
import navigation from './reducer/navigation';

export default combineReducers({
  climateControl,
  navigation
})
