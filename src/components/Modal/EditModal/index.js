import React, { useRef } from 'react'
import Modal from '../../Modal'

export default function EditModal({ modalData, updateData }) {
  const inputRef = useRef(),
    checkRef = useRef()
  const submitNewData = () => {
    const val = inputRef.current.value.trim()
    if (val && val.length) {
      const newData = {
        ...modalData,
        content: val,
        completed: !!checkRef.current.checked,
      }
      updateData(newData)
    } else inputRef.current.value = modalData.content
  }
  return (
    <Modal modalTitle="編集する">
      <p className="topic">内容：</p>
      <p className="topic">
        <textarea
          defaultValue={modalData.content}
          className="text-area"
          cols="30"
          rows="10"
          ref={inputRef}></textarea>
      </p>
      <p className="topic">
        状態:
        <input
          ref={checkRef}
          type="checkbox"
          defaultChecked={!!modalData.completed}
        />
      </p>
      <button onClick={submitNewData}>送信する</button>
    </Modal>
  )
}
