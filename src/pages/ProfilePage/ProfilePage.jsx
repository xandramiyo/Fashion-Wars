import "./ProfilePage.css"

import { useParams } from "react-router-dom"

export default function ProfilePage({user}) {

	const { username } = useParams()

	return (
		<>
			<h1>Profile</h1>
		</>
	)
}