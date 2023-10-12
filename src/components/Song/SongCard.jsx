import { Card, Flex, Text, Image } from '@aws-amplify/ui-react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getSongImage, likeSong, setPlayedSong } from '../../containers/Song/songActions'
import { getSongURL, setIsPaused } from '../../containers/Player/playerActions'
import { Like, Pause, Play } from '../Header/Icons/Icons'
import { selectPlayedSong } from '../../containers/Song/songSelectors'
import { selectIsPaused, selectPlayedSongURL } from '../../containers/Player/playerSelectors'
import { logInfo } from '../../datadog'

import styles from './SongCard.module.scss'

const SongCard = ({
  song
}) => {
  const dispatch = useDispatch()
  const playedSong = useSelector(selectPlayedSong)
  const isPaused = useSelector(selectIsPaused)
  const songUrl = useSelector(selectPlayedSongURL)

  const {
    like,
    filePath,
    title,
    description,
    updatedAt,
    id,
    imageURL
  } = song

  useEffect(() => {
    id && !imageURL && dispatch(getSongImage(song))
  }, [id]) //eslint-disable-line

  useEffect(() => {
    playedSong.id === id && dispatch(setIsPaused(false))
  }, [songUrl]) //eslint-disable-line

  const PlayIcon = (props) => playedSong.id === id && !isPaused
    ? <Pause {...props} />
    : <Play {...props} />

  const handlePlay = () => {
    dispatch(setPlayedSong(song))
    !(playedSong.id === id) && dispatch(getSongURL(filePath))
    dispatch(setIsPaused(!isPaused))
    logInfo(`${song.title} song played`, { name: song.id })
  }

  return (
    <Card className={styles.songCard}>
      <Flex
        direction="column"
        alignItems="flex-start"
        className={styles.content}
      >
        <div className={styles.title}>
          <Image
            src={imageURL}
            alt={title}
            objectFit="fill"
            className={styles.image}
          />
          {title}
        </div>
        <Text as="span" className={styles.description}>
          {description}
        </Text>
        <Text as="span" className={styles.date}>
          {new Date(updatedAt).toDateString()}
        </Text>
      </Flex>
      <PlayIcon className={styles.playIcon} onClick={handlePlay} />
      <Like className={styles.heartIcon} onClick={() => dispatch(likeSong(song))} />
      <Text className={styles.likeCount}>{like}</Text>
    </Card>
  )
}

SongCard.propTypes = {
  song: PropTypes.object
}

export default SongCard
