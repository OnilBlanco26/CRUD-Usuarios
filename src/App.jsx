
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const {users,  getAllUsers, createNewUser, deleteUserById, updateUserById } = useCrud()
  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  
    useEffect(() => {
      getAllUsers()
    } , [])

    const btnClick = () => {
      setCloseForm(!closeForm)
    }


  return (
    <div className="App">
      <div id='div__app' className='message-create'>
        <span><i className='bx bx-check bx-tada bx-flip-horizontal' ></i></span>
      </div>
      <h1 className='app__title'>Users Added</h1>
      <button onClick={btnClick} className='app__btn'>Open Form</button>
      <div className={`form-container ${closeForm && 'close__form'}`}>
        <FormUser
          createNewUser = {createNewUser}
          updateInfo = {updateInfo}
          updateUserById = {updateUserById}
          setUpdateInfo = {setUpdateInfo}
          setCloseForm = {setCloseForm}
        />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user = {user}
              deleteUserById = {deleteUserById}
              setUpdateInfo = {setUpdateInfo}
              setCloseForm = {setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
