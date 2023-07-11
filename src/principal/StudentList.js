import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Authcontext/Authcontext'

function StudentList() {
  const { auth } = useContext(AuthContext)
  const [array, setArray] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const params = useParams()

  useEffect(() => {
    list()
  }, [])

  let handelDelete = async (id) => {
    setLoading(true)
    try {
      const confirmdate = window.confirm(
        'Are You Sure You Want To Delete Data ?',
      )
      if (confirmdate) {
        await axios.delete(
          `http://localhost:4000/api/student/deleteStudent/${id}`,
          {
            headers: {
              token: auth.token,
            },
          },
        )
        list()
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  let list = async () => {
    setLoading(true)
    try {
      const student = await axios.get(
        'http://localhost:4000/api/student/getAllStudent',
        {
          headers: {
            token: auth.token,
          },
        },
      )
      setArray(student.data)
      setCount(student.data.message.length)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="row">
        <h3 className="text-danger">Total Number Of Students {count}</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Rollno</th>
              <th scope="col">Department</th>
              <th scope="col">course</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {array &&
              array.message.map((d) => {
                return (
                  <tr>
                    <td>{d.name}</td>
                    <td>{d.rollno}</td>

                    <td>{d.dept}</td>
                    <td>{d.course}</td>
                    <Link
                      onClick={() => handelDelete(d._id)}
                      className="btn btn-danger mr-1 mt-2"
                    >
                      Delete
                    </Link>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StudentList
