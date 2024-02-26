import {  useState } from "react"
import { getAuth } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"





const Profile = () => {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
 
  const { name, email } = formData

  const navigate = useNavigate()

  const onLoguut = () => {
    auth.signOut()
    navigate('/')
  }



  return (
    <>
     <div className="profile">
      <header className="profilerHeader">
         <p className="pageHeader">
          My Profile
         </p>
         <button type="button" className="logOut" onClick={onLoguut}>Log out</button>
      </header>
     </div>
    </>
  )
}

export default Profile