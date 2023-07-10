import { React, useState } from 'react'
import axios from 'axios'
function CreateStudent() {
  const [name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [rollno, setRollno] = useState('')
  const [section, setSection] = useState('')
  const [gender, setGender] = useState('')
  const [course, setCourse] = useState('')
  const [dept, setDept] = useState('')
  const [role, setRole] = useState('')
  const submit = async () => {
    const data = {}
    data.username = name
    data.pwd = Password
    data.roll_no = rollno
    data.sec = section
    data.gen = gender
    data.Course = course
    data.department = dept
    data.Role = role
    try {
      const a = await axios.post(
        `http://localhost:4000/api/student/create`,
        data,
      )

      alert('success')
    } catch (err) {
      alert(err)
      console.log(err)
    }
  }
  return (
    <div className="flex-column align-items-center text-center">
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="Student Name"
            className="m-2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Student Password"
            className="m-2"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Student Rollno"
            className="m-2"
            onChange={(e) => setRollno(e.target.value)}
            value={rollno}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Department"
            className="m-2"
            onChange={(e) => setDept(e.target.value)}
            value={dept}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Course"
            className="m-2"
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Section"
            className="m-2"
            onChange={(e) => setSection(e.target.value)}
            value={section}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="gender"
            className="m-2"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Role"
            className="m-2"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary mt-2 sm-3 btn-sm "
          value="Submit"
        />
      </form>
    </div>
  )
}

export default CreateStudent
