import { v4 as uuid } from 'uuid'
import { API, graphqlOperation, Storage } from 'aws-amplify'

import { listSongs } from '../../graphql/queries'
import {
  ADD_SONG,
  FETCH_SONGS,
  GET_SONG_IMAGE,
  LIKE_SONG,
  SET_PLAYED_SONG
} from './songActionTypes'
import { createSongs, updateSongs } from '../../graphql/mutations'
import { logError, logInfo } from '../../datadog'

export const fetchSongs = () => async (dispatch) => {
  try {
    const { data: { listSongs: { items } } } = await API.graphql(graphqlOperation(listSongs))

    dispatch({
      type: FETCH_SONGS,
      payload: items
    })
  } catch (e) {
    console.log(e)
  }
}

export const getSongImage = (song) => async (dispatch) => {
  try {
    const fileAccessURL = await Storage.get(song.imagePath)

    dispatch({
      type: GET_SONG_IMAGE,
      payload: { ...song, imageURL: fileAccessURL }
    })
  } catch (e) {
    console.log(e)
  }
}

export const addSong = (song, mp3File, imageFile, owner) => async (dispatch) => {
  logInfo('Add song action called', { name: song.title })
  try {
    const { key: imageKey } = await Storage.put(`images/${song.title}.png`, imageFile, { contentType: 'image/png' })
    const { key } = await Storage.put(`songs/${song.title}.mp3`, mp3File, { contentType: 'audio/mp3' })

    const songData = {
      ...song,
      id: uuid(),
      owner,
      filePath: key,
      imagePath: imageKey,
      like: 0
    }

    await API.graphql(graphqlOperation(createSongs, { input: songData }))

    dispatch({
      type: ADD_SONG
    })

    dispatch(fetchSongs())
  } catch (e) {
    console.log(e)
    logError('Error occurred', {}, e)
  }
}

export const likeSong = (song) => async (dispatch) => {
  try {
    const updatedSong = { ...song, like: ++song.like }
    delete(updatedSong.createdAt)
    delete(updatedSong.updatedAt)
    delete(updatedSong?.imageURL)
    delete(updatedSong.__typename)

    await API.graphql(graphqlOperation(updateSongs, { input: updatedSong }))

    dispatch({
      type: LIKE_SONG,
      payload: song.id
    })
  } catch (e) {
    console.log(e)
  }
}

export const setPlayedSong = (payload) => ({
  type: SET_PLAYED_SONG,
  payload
})
