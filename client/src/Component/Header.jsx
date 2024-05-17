import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
       <Link to="/login">Log in</Link>
       <Link to="/register">Create Account</Link>
    </header>
  )
}

export default Header