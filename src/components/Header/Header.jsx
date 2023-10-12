import { Button, Icon, useAuthenticator } from '@aws-amplify/ui-react'
import { useState } from 'react'

import AddSongModal from '../Song/AddSongModal'

import styles from './Header.module.scss'

const Header = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const [showModal, setShowModal] = useState(false)

  return (
    <header className={styles.header}>
      <span className={styles.headerTitle}>Music Storage</span>
      <div className={styles.userTab}>
        <Button className={styles.addBtn} onClick={() => setShowModal(true)}>
          <Icon pathData="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /> Add Song
        </Button>
        <span className={styles.username}>{user.username}</span>
        <Button onClick={signOut}>
          Sign out
        </Button>
      </div>
      <AddSongModal isOpen={showModal} closeModal={() => setShowModal(false)} />
    </header>
  )
}

export default Header
