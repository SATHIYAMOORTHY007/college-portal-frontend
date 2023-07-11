import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AuthContext from '../Authcontext/Authcontext'
function AddExamMarks() {
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    getAllstudentId()
  }, [])
  const [students_id, setStudents_id] = useState(null)
  const [selected_id, setSelected_id] = useState('')
  const getAllstudentId = async () => {
    try {
      //get All student id
      const info = await axios.get(
        `https://college-protal.onrender.com/api/student/getAllStudent`,
        {
          headers: {
            token: auth.token,
            role: auth.role,
          },
        },
      )
      setStudents_id(info.data)
    } catch (error) {
      console.log(error)
    }
  }

  //get form datas ,so we create useState
  const [subject, setSubject] = useState('')

  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [name3, setName3] = useState('')
  const [name4, setName4] = useState('')
  const [name5, setName5] = useState('')
  const [name6, setName6] = useState('')

  const [mark1, setMark1] = useState(Number)
  const [mark2, setMark2] = useState(Number)
  const [mark3, setMark3] = useState(Number)
  const [mark4, setMark4] = useState(Number)
  const [mark5, setMark5] = useState(Number)
  const [mark6, setMark6] = useState(Number)
  const [data, setData] = useState({})
  const submit = async (e) => {
    e.preventDefault()
    const data1 = {}
    data1.studentId = selected_id
    data1.name = subject
    data1.subjects = [
      { name: name1, marks: mark1 },
      { name: name2, marks: mark2 },
      { name: name3, marks: mark3 },
      { name: name4, marks: mark4 },
      { name: name5, marks: mark5 },
      { name: name6, marks: mark6 },
    ]
    setData(data1)
    try {
      const a = await axios.post(
        `https://college-protal.onrender.com/api/examiner/createExam`,
        data1,
        {
          headers: {
            token: auth.token,
            role: auth.role,
          },
        },
      )

      alert('success')
    } catch (err) {
      alert(err)
      console.log(err)
    }
  }

  return (
    <div class="flex-column align-items-center text-center">
      <select
        onChange={(ev) => {
          setSelected_id(ev.target.value)
        }}
        className="col-4"
      >
        <option>Select Student Roll No</option>
        {students_id &&
          students_id.message.map((e) => {
            return (
              <option value={e._id} key={e._id}>
                {e.rollno}
              </option>
            )
          })}
      </select>
      <form onSubmit={submit}>
        <div className="form mt-4">
          <div className="col">
            <input
              type="text"
              placeholder="Exam name"
              className="m-2"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName1(e.target.value)}
              value={name1}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark1(e.target.value)}
              value={mark1}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName2(e.target.value)}
              value={name2}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark2(e.target.value)}
              value={mark2}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName3(e.target.value)}
              value={name3}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark3(e.target.value)}
              value={mark3}
            />
          </div>
          <div className="col ">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName4(e.target.value)}
              value={name4}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark4(e.target.value)}
              value={mark4}
            />
          </div>
          <div className="col ">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName5(e.target.value)}
              value={name5}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark5(e.target.value)}
              value={mark5}
            />
          </div>
          <div className="col ">
            <input
              type="text"
              placeholder="Subject name"
              className="m-2"
              onChange={(e) => setName6(e.target.value)}
              value={name6}
            />
            <input
              type="text"
              placeholder="Marks"
              onChange={(e) => setMark6(e.target.value)}
              value={mark6}
            />
          </div>
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

export default AddExamMarks
