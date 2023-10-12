import { Storage } from 'aws-amplify'

import { GET_SONG_URL, SET_IS_PAUSED } from './playerActionTypes'

export const getSongURL = (filePath) => async (dispatch) => {
  try {
    const fileAccessURL = await Storage.get(filePath, { expires: 60 })

    dispatch({
      type: GET_SONG_URL,
      payload: fileAccessURL
    })
  } catch (e) {
    console.log(e)
  }
}

export const setIsPaused = (payload) => ({
  type: SET_IS_PAUSED,
  payload
})
