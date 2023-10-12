import { GET_SONG_URL, SET_IS_PAUSED } from './playerActionTypes'

const initialState = {
  playedSongURL: '',
  isPaused: true
}

const playerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_SONG_URL:
    return {
      ...state,
      playedSongURL: payload
    }
  case SET_IS_PAUSED:
    return {
      ...state,
      isPaused: payload
    }
  default:
    return state
  }
}

export default playerReducer
