import React from 'react'
import './index.css'

export default function Modal({ modalTitle, children }) {
  return (
    <>
      <div className="masking">
        <div className="modal-container">
          <div className="modal-header">{modalTitle}</div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  )
}
