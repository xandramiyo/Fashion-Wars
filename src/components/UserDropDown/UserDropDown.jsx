import './UserDropDown.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function UserDropDown({user, setUser}) {
	
	function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

	return (
		<div className="user-dd">
			<ul className="user-dd-options">
				<li>Profile</li>
				<li>Liked Looks</li>
				<li>Settings</li>
				<li>
					<Link to="" onClick={handleLogOut}>Log Out</Link>
				</li>
			</ul>
		</div>
	)
}