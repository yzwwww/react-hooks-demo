import React from 'react'
import Modal from '../../Modal'
import { formatTimestamp } from '../../../libs/utils'

export default function CheckModal({ modalData, closeModal }) {
  return (
    <Modal modalTitle="タスクの内容を確認する">
      <p className="topic">時間：{formatTimestamp(modalData.id)}</p>
      <p className="topic">内容：{modalData.content}</p>
      <p className="topic">状態: {modalData.completed ? '完成' : '未完成'}</p>
      <button className="check-modal-btn" onClick={closeModal}>
        確認
      </button>
    </Modal>
  )
}
