import React, { useState } from 'react'
import './index.css'

export default function TodoItem({
  item,
  openCheckModal,
  openUpdateModal,
  updateData,
  deleteItem,
}) {
  const todoContentStyle = `todo-content ${item.completed ? 'done' : ''}`
  const hanleCheckChange = () => {
    const newData = { ...item, completed: !item.completed }
    updateData(newData)
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={hanleCheckChange}
      />
      <div className={todoContentStyle}>
        <span>{item.content}</span>
      </div>
      <div className="todo-btns">
        <input
          type="button"
          value="チェック"
          onClick={() => openCheckModal(item.id)}
        />
        <input
          type="button"
          value="編集"
          onClick={() => openUpdateModal(item.id)}
        />
        <input onClick={() => deleteItem(item)} type="button" value="削除" />
      </div>
    </div>
  )
}
