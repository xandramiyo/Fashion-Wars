import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../images/logo.png'

import * as userService from '../../utilities/users-service' 

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <div className='left-nav'>
                <Link to="/">
                    <img src={logo} className="logo" />
                </Link>
                <Link to="/submissions">Lookbook</Link>
            </div>
            <div className="right-nav">
                {
                    user ?
                    <>
                    <button>{user.name}</button>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                    </>
                    :
                    <Link to="/auth">Log In</Link>
                }
            </div>
        </nav>
    )
}