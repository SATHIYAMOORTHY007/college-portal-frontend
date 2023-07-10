import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import AuthContext from '../Authcontext/Authcontext'
function LeaveInfo() {
  const { auth } = useContext(AuthContext)
  const [sem, setSem] = useState('')
  const [od, setOd] = useState(null)
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
  const Submit = async () => {
    try {
      //get student exam marks
      const info = await axios.get(
        `http://localhost:4000/api/examiner/StudentLeave/${auth.id}/${sem.label}`,
      )
      setOd(info)
      console.log(od)
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
            <th className="text-center">Date</th>
          </tr>
        </thead>
        {od && od.data.length > 0 ? (
          od?.data?.map((date) => {
            return (
              <>
                <tbody>
                  <td className="text-center"> {date.slice(0, 10)}</td>
                </tbody>
              </>
            )
          })
        ) : (
          <h4 className="text-center">No data</h4>
        )}
      </table>
    </>
  )
}

export default LeaveInfo
