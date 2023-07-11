import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import AuthContext from '../Authcontext/Authcontext'
function ExamInfo() {
  const { auth } = useContext(AuthContext)
  const [sem, setSem] = useState('')
  const [exam, setExam] = useState(null)
  //semester option
  const options = [
    { value: 'sem1', label: 'semester 1' },
    { value: 'sem2', label: 'semester 2' },
    { value: 'sem3', label: 'semester 3' },
    { value: 'sem4', label: 'semester 4' },
    { value: 'sem5', label: 'semester 5' },
    { value: 'sem6', label: 'semester 6' },
    { value: 'sem7', label: 'semester 7' },
    { value: 'sem8', label: 'semester 8' },
  ]

  //get data form backend
  const Submit = async (e) => {
    e.preventDefault()
    try {
      //get student exam marks
      const info = await axios.get(
        `https://college-protal.onrender.com/api/examiner/StudentExam/${auth.id}/${sem.label}`,
        {
          headers: {
            token: auth.token,
            role: auth.role,
          },
        },
      )
      setExam(info.data.message[0])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="d-flex" style={{ width: '20em' }}>
        <Select
          options={options}
          defaultValue={sem}
          onChange={setSem}
          placeholder="select Semester"
        />

        <button className="btn btn-primary  ml-2" onClick={Submit}>
          Click
        </button>
      </div>

      <table className="table col-6 mt-5 table-bordered ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Subject Name</th>
            <th scope="col">Marks</th>
          </tr>
        </thead>
        {exam?.subjects.map((e) => {
          return (
            <>
              <tbody>
                <td> {e.name}</td>
                <td> {e.marks}</td>
              </tbody>
            </>
          )
        })}
      </table>
    </>
  )
}

export default ExamInfo
