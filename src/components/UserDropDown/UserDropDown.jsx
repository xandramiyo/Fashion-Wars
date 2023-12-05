import './UserDropDown.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function UserDropDown({setUser, showUserMenu}) {
	
	function handleLogOut() {
        userService.logOut()
        setUser(null)
		showUserMenu()
    }

	return (
		<div className="user-dd">
			<ul className="user-dd-options">
				<li>Profile</li>
				<li>
					<Link to="/liked" onClick={showUserMenu}>Liked Looks</Link>
				</li>
				<li>
					<Link to="/settings" onClick={showUserMenu}>Settings</Link>
				</li>
				<li>
					<Link to="" onClick={handleLogOut}>Log Out</Link>
				</li>
			</ul>
		</div>
	)
}