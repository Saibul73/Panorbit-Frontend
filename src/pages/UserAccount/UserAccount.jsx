import {React} from 'react'
import './UserAccount.scss'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import RightSide from '../../components/RightSide/RightSide'
import { useSelector } from 'react-redux'

const UserAccount = () => {
  const userData = useSelector((state)=>state.userData.user)
  const navigate = useNavigate()


  return (
    <div className='useraccount__container'> 
      <div>
        <Sidebar/>
      </div>
      <div>
        <RightSide userData={userData}/>
      </div>
      <div className='chat-div'>
        <Chat/>
      </div>
    </div>
  )
}

export default UserAccount