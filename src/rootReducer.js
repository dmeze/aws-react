import { combineReducers } from 'redux'

import songReducer from './containers/Song/songReducer'
import playerReducer from './containers/Player/playerReducer'

const rootReducer = combineReducers({
  songs: songReducer,
  player: playerReducer
})

export default rootReducer
