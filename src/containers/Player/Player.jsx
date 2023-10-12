import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'

import { selectIsPaused, selectPlayedSongURL } from './playerSelectors'
import { setIsPaused } from './playerActions'

import styles from './Player.module.scss'

const Player = () => {
  const dispatch = useDispatch()
  const songUrl = useSelector(selectPlayedSongURL)
  const isPaused = useSelector(selectIsPaused)

  return (
    <ReactPlayer
      className={styles.player}
      url={songUrl}
      playing={!isPaused}
      controls
      onPause={() => dispatch(setIsPaused(true))}
      onPlay={() => dispatch(setIsPaused(false))}
    />
  )
}

export default Player
