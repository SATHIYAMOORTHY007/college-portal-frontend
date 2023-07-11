import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import AuthContext from '../Authcontext/Authcontext'
function AddLeaves() {
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    getAllstudentId()
  }, [])
  const [students_id, setStudents_id] = useState(null)
  const [selected_id, setSelected_id] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  console.log(startDate)
  const getAllstudentId = async () => {
    try {
      //get All student id
      const info = await axios.get(
        `https://college-protal.onrender.com/api/student/getAllStudent`,
        {
          headers: {
            token: auth.token,
          },
        },
      )
      setStudents_id(info.data)
    } catch (error) {
      console.log(error)
    }
  }

  //get form datas ,so we create useState
  const [semester, setSemester] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const data = {}
    data.date = startDate
    data.name = semester
    data.studentId = selected_id
    try {
      const a = await axios.post(
        `https://college-protal.onrender.com/api/examiner/createLeave`,
        data,
        {
          headers: {
            token: auth.token,
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
        className="col-4 ml-3"
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
          <div className="">
            <input
              type="text"
              placeholder="Standing Semester"
              className="m-2"
              onChange={(e) => setSemester(e.target.value)}
              value={semester}
            />
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-outline-primary  btn-sm mt-4"
                value="Submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddLeaves
