import { useCallback, useEffect, useState } from 'react'
import MyHeader from './components/Header'
import AddInput from './components/AddInput'
import TodoItem from './components/TodoItem'
import CheckModal from './components/Modal/CheckModal'
import EditModal from './components/Modal/EditModal'

import { v4 as uuidv4 } from 'uuid'

function App() {
  const [inputShow, setInputShow] = useState(false),
    [showCheckModal, setShowCheckModal] = useState(false),
    [showEditModal, setEditModal] = useState(false),
    [todoList, setTodoList] = useState(() => {
      const listData = localStorage.getItem('todoListData')
      return listData ? JSON.parse(listData) : []
    }),
    [curData, setCurData] = useState(null)

  const openCheckModal = useCallback(
    (id) => {
      setCurData(todoList.find((el) => el.id === id))
      setShowCheckModal(true)
    },
    [todoList]
  )

  const openUpdateModal = useCallback(
    (id) => {
      setCurData(todoList.find((el) => el.id === id))
      setEditModal(true)
    },
    [todoList]
  )

  const updateData = useCallback(
    (newData) => {
      console.log(newData.completed)
      setTodoList(
        todoList.map((el, index) => {
          if (el.uuid === newData.uuid) {
            el = { ...el, ...newData }
          }
          return el
        })
      )
      setEditModal(false)
    },
    [todoList]
  )

  useEffect(() => {
    const listData = localStorage.getItem('todoListData')
    listData && setTodoList(JSON.parse(listData))
  }, [])

  useEffect(() => {
    localStorage.setItem('todoListData', JSON.stringify(todoList))
  }, [todoList])
  const addItem = useCallback((val) => {
    const todoItem = {
      uuid: uuidv4(),
      id: new Date().getTime(),
      content: val,
      completed: false,
    }
    setTodoList((todoList) => todoList.concat(todoItem))
    setInputShow(false)
  }, [])

  const deleteItem = useCallback(
    (item) => {
      setTodoList(todoList.filter((el) => el.uuid !== item.uuid))
    },
    [todoList]
  )
  return (
    <div className="App">
      <MyHeader openInput={() => setInputShow(!inputShow)} />
      {inputShow && <AddInput addItem={addItem} />}
      {showCheckModal && (
        <CheckModal
          modalData={curData}
          closeModal={() => setShowCheckModal(false)}
        />
      )}
      {showEditModal && (
        <EditModal
          modalData={curData}
          updateData={updateData}
          closeModal={() => setEditModal(false)}></EditModal>
      )}
      <div className="todo-list">
        {todoList.map((item, index) => (
          <TodoItem
            item={item}
            key={item.uuid}
            openCheckModal={openCheckModal}
            openUpdateModal={openUpdateModal}
            updateData={updateData}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  )
}

export default App
