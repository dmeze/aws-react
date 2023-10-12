import { createSelector } from 'reselect'

const selectSearch = store => store.songs

export const selectSongsList = createSelector(
  selectSearch, state => state.songsList
)

export const selectPlayedSong = createSelector(
  selectSearch, state => state.playedSong
)
