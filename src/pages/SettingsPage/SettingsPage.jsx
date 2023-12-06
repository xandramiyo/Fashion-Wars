import "./SettingsPage.css"

export default function SettingsPage({user}) {
	return (
		<>
			<h1>Settings</h1>
			<div className="container">
				<div className="form-container">
					<form autoComplete="off" className="flex flex-col">
						<div className="update-user">
							<label>Username</label>
							{/* add unique id with nanoid? */}
							<input placeholder={user.name}></input>.xxxx
						</div>
						<div className="update-user">
							<label>Password</label>
							<input placeholder="current password"></input>
							<input placeholder="new password"></input>
						</div>
						<div className="update-user">
							<label>Email</label>
							<input></input>
						</div>
						<button type="submit" >Update</button>
					</form>
				</div>
					<div>Color Palette</div>
			</div>
		</>
	)
}