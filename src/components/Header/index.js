import React from 'react'
import './index.css'

function Header(props) {
  const { openInput } = props

  return (
    <div className="header-container">
      <div>タスクリスト</div>
      <span className="r-icon" onClick={openInput}>
        &#43;
      </span>
    </div>
  )
}

export default Header
