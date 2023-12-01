import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../utilities/users-service'

export default function SignUpForm( {setUser} ) {

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
  })

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await signUp(credentials)
      setUser(user)
      // return home
      navigate(-1)
    } catch(error) {
        if (error.response && error.response.status === 400) {
          setError('Sign Up Failed - Email May Already Be In Use - Try Again');
      } else {
        setError('Sign Up Failed - Try Again');
      }
    }
  } 

return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
          <button type="submit" disabled={credentials.password !== credentials.confirm}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}