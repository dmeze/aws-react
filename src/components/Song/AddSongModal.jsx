import React, { useState } from 'react'
import Modal from 'react-modal'
import { Flex, Label, Input, Button, useAuthenticator } from '@aws-amplify/ui-react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { addSong } from '../../containers/Song/songActions'

import styles from './AddSongModal.module.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '8px',
    width: 400
  },
}

const AddSongModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch()
  const { user } = useAuthenticator((context) => [context.user])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [mp3File, setMp3File] = useState()
  const [imageFile, setImageFile] = useState()

  const handleSubmit = () => {
    dispatch(addSong({ title, description }, mp3File, imageFile, user.username))
    closeModal()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Song Modal"
      ariaHideApp={false}
    >
      <h2 className={styles.modalTitle}>Add Song</h2>
      <Flex direction="column" gap="small">
        <Label htmlFor="title" className={styles.label}>
          Title:
        </Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <Label htmlFor="description" className={styles.label}>
          Description:
        </Label>
        <Input
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.input}
        />
        <Label htmlFor="mp3" className={styles.label}>
          Your mp3:
        </Label>
        <Input
          id="mp3"
          name="mp3"
          type="file"
          accept="audio/mp3"
          onChange={(e) => setMp3File(e.target.files[0])}
          className={styles.input}
        />
        <Label htmlFor="cover" className={styles.label}>
          Your mp3 cover image:
        </Label>
        <Input
          id="cover"
          name="cover"
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setImageFile(e.target.files[0])}
          className={styles.input}
        />
      </Flex>
      <div className={styles.buttonContainer}>
        <Button
          onClick={closeModal}
          className={styles.button}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className={styles.button}
        >
          Submit
        </Button>
      </div>
    </Modal>
  )
}

AddSongModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func
}

export default AddSongModal
