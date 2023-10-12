import { createSelector } from 'reselect'

const selectPlayer = store => store.player

export const selectPlayedSongURL = createSelector(
  selectPlayer, state => state.playedSongURL
)

export const selectIsPaused = createSelector(
  selectPlayer, state => state.isPaused
)
