import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  return (
    <footer className='footer'>
        <div className='container'>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://hvrange.xyz:3000"> hvrange.xyz </a> 
          Developed by Khalid Walit
        </div>
    </footer>
  )
}

export default Header