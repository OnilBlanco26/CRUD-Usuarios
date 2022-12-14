import userCar from './styles/userCard.css'


const UserCard = ({user, deleteUserById, setUpdateInfo, setCloseForm}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setCloseForm(false)
  }

  return (
    <article className='card'>
        <h3 className='card__title'>{`${user.first_name} ${user.last_name}`}</h3>
        <ul className='card__body'>
            <li className='card__item'><span className='card__span'>Email</span>{user.email}</li>
            <li className='card__item'><span className='card__span'>Birthday</span>{user.birthday}</li>
        </ul>
        <footer className='card__footer'>
            <button className='card__btn btn-trush' onClick={() => deleteUserById(user.id)}><i className='bx bx-trash-alt'></i></button>
            <button className='card__btn btn-edit' onClick={handleEdit}><i className='bx bx-edit' ></i></button>
        </footer>
    </article>
  )
}

export default UserCard