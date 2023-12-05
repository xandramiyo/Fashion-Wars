import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../images/logo.png'

import * as userService from '../../utilities/users-service' 
import UserDropDown from '../UserDropDown/UserDropDown'

export default function NavBar({ user, setUser }) {

    const [showUserMenu, setshowUserMenu] = useState(false)

    function openUserMenu() {
        setshowUserMenu((prev) => !prev)
    }

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
            <div className="right-nav" style={{ margin:'.3rem' }}>
                {
                    user ?
                    <>
                    <button className="user-nav" onClick={openUserMenu}>{user.name}</button>
                    {/* <Link to="" onClick={handleLogOut}>Log Out</Link> */}
                    </>
                    :
                    <Link to="/auth">Log In</Link>
                }
            </div>
            {
                showUserMenu && <UserDropDown user={user} setUser={setUser} />
            }
            
        </nav>
    )
}