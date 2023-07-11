import { React, useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../Authcontext/Authcontext'
function CreateExaminer() {
  const { auth } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEamil] = useState('')
  const [Password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const data = {}
    data.username = name
    data.Email = email
    data.pwd = Password
    data.Role = role
    try {
      const a = await axios.post(
        `https://college-protal.onrender.com/api/admin/createExaminer`,
        data,
        {
          headers: {
            token: auth.token,
          },
        },
      )
      setEamil('')
      setName('')
      setRole('')
      setPassword('')
      alert('success')
    } catch (err) {
      alert('already existing..')
      console.log(err)
    }
  }
  return (
    <form
      className="form-group d-flex flex-column align-items-center text-center"
      onSubmit={submit}
    >
      <input
        type="text"
        placeholder="name"
        className="form-control m-2 col-4"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <input
        type="text"
        placeholder="Email"
        className="form-control m-2 col-4"
        onChange={(e) => setEamil(e.target.value)}
        value={email}
      />

      <input
        type="text"
        placeholder=" Password"
        className="form-control m-2 col-4"
        onChange={(e) => setPassword(e.target.value)}
        value={Password}
      />

      <input
        type="text"
        placeholder="Role"
        className="form-control m-2 col-4"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />

      <button type="submit" class="btn btn-primary mb-2 col-2">
        Submit
      </button>
    </form>
  )
}

export default CreateExaminer
