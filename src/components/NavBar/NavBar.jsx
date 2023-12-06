import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../images/logo.png'
import UserDropDown from '../UserDropDown/UserDropDown'

export default function NavBar({ user, setUser }) {

    const [showUserMenu, setshowUserMenu] = useState(false)

    function openUserMenu() {
        setshowUserMenu((prev) => !prev)
    }

    return (
        <nav>
            <div className='left-nav'>
                <Link to="/">
                    <img src={logo} id="logo" />
                </Link>
                <Link to="/submissions">Lookbook</Link>
            </div>
            <div className="right-nav">
                {
                    user ?
                    <>
                    <button id="user-nav" onClick={openUserMenu}>{user.name}</button>
                    </>
                    :
                    <Link to="/auth">Log In</Link>
                }
            </div>
            {
                showUserMenu && <UserDropDown setUser={setUser} showUserMenu={showUserMenu}/>
            }
            
        </nav>
    )
}