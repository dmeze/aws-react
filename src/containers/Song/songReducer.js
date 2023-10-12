import { FETCH_SONGS, GET_SONG_IMAGE, LIKE_SONG, SET_PLAYED_SONG } from './songActionTypes'

const initialState = {
  songsList: [],
  playedSong: {}
}

const songReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_SONGS:
    return {
      ...state,
      songsList: payload
    }
  case LIKE_SONG:
    return {
      ...state,
      songsList: state.songsList.map(
        song => song.id === payload.id ? { ...song, like: ++song.like } : song
      )
    }
  case SET_PLAYED_SONG:
    return {
      ...state,
      playedSong: payload
    }
  case GET_SONG_IMAGE:
    return {
      ...state,
      songsList: state.songsList.map(
        song => song.id === payload.id ? payload : song
      )
    }
  default:
    return state
  }
}

export default songReducer
