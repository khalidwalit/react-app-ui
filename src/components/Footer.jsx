import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  return (
    <header className='header'>
        <div className='container'>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.hvrange.com"> HvRange.com </a> 
          Developed by Khalid Walit
        </div>
    </header>
  )
}

export default Header