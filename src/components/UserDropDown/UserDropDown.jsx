import './UserDropDown.css'

export default function UserDropDown() {
	return (
		<div className="user-dd">
			<ul className="user-dd-options">
				<li>Profile</li>
				<li>Liked Looks</li>
				<li>Settings</li>
				<li>Log Out</li>
			</ul>
		</div>
	)
}