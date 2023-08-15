import React, { useRef } from 'react'

function AddInput({ addItem }) {
  const inputRef = useRef()
  const handleSubmit = () => {
    const val = inputRef.current.value.trim()
    if (val.length > 0) {
      addItem(val)
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="button" onClick={handleSubmit} value="増加 ぞうか" />
    </div>
  )
}

export default AddInput
