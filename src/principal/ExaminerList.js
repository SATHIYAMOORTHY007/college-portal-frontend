import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Authcontext/Authcontext'

function ExaminerList() {
  const { auth } = useContext(AuthContext)
  const [array, setArray] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState(null)
  const params = useParams()

  useEffect(() => {
    list()
  }, [])

  let list = async () => {
    setLoading(true)
    try {
      const Examiner = await axios.get(
        'https://college-protal.onrender.com/api/admin/getAllExaminer',
        {
          headers: {
            token: auth.token,
          },
        },
      )
      setArray(Examiner.data)
      setCount(Examiner.data.message.length)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="row">
        <h3 className="text-danger">Total Number Of Examiner {count}</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {array &&
              array.message.map((d) => {
                return (
                  <tr>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExaminerList
