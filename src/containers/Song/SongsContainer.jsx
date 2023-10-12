import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSongs } from './songActions'
import SongCard from '../../components/Song/SongCard'
import { selectSongsList } from './songSelectors'

import styles from './SongsContainer.module.scss'

const SongsContainer = () => {
  const dispatch = useDispatch()
  const songs = useSelector(selectSongsList)

  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])

  return (
    <div className={styles.container}>
      {songs.map(song => (
        <Fragment key={song.id}>
          <SongCard
            song={song}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default SongsContainer
