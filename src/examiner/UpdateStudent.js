import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import AuthContext from '../Authcontext/Authcontext'

function UpdateStudent() {
  const navigate = useNavigate()
  const params = useParams()
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    student()
  }, [])

  let student = async () => {
    try {
      const student = await axios.get(
        `http://localhost:4000/api/student/getParticularStudent/${params.student_id}`,
        {
          headers: {
            token: auth.token,
            role: auth.role,
          },
        },
      )

      myformik.setValues(student.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  const myformik = useFormik({
    initialValues: {
      name: '',
      email: '',
      rollno: '',
      dept: '',
      course: '',
      section: '',
      gender: '',
    },
    onSubmit: async (values) => {
      try {
        const updateTheater = await axios.put(
          `http://localhost:4000/api/student/updateStudent/${params.student_id}`,
          values,
          {
            headers: {
              token: auth.token,
              role: auth.role,
            },
          },
        )

        alert('success')
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <>
      <div className="row">
        <div className="col-2 col-lg-8">
          <form className="from-control" onSubmit={myformik.handleSubmit}>
            <div className="grid-container">
              <div className="item1">
                <label for="theater_name">Student Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  className="form-control"
                  value={myformik.values.name}
                  onChange={myformik.handleChange}
                  placeholder=" enter theater name"
                />
              </div>
              <div className="item2">
                <label for="rollno">Roll No</label>
                <input
                  type="text"
                  value={myformik.values.rollno}
                  name="rollno"
                  onChange={myformik.handleChange}
                  className="form-control"
                  placeholder="enter rollno"
                />
              </div>
              <div className="item3">
                <label for="email">email</label>
                <input
                  type="email"
                  class="form-control"
                  value={myformik.values.email}
                  name="image"
                  onChange={myformik.email}
                  placeholder="enter email address"
                  className="form-control"
                />
              </div>
              <div className="item4">
                <label for="dept">Department</label>
                <input
                  type="text"
                  value={myformik.values.dept}
                  name="dept"
                  onChange={myformik.handleChange}
                  placeholder="enter Department"
                  className="form-control"
                />
              </div>

              <div className="item7">
                <label for="course">Course</label>
                <input
                  type="text"
                  value={myformik.values.course}
                  name="course"
                  onChange={myformik.handleChange}
                  placeholder="enter course"
                  className="form-control"
                />
              </div>

              <div className="item7">
                <label for="section">Section</label>
                <input
                  type="text"
                  value={myformik.values.section}
                  name="Section"
                  onChange={myformik.handleChange}
                  placeholder="enter Section"
                  className="form-control"
                />
              </div>
              <div className="item8">
                <label for="gender">Gender</label>
                <input
                  type="text"
                  value={myformik.values.gender}
                  name="Section"
                  onChange={myformik.handleChange}
                  placeholder="enter gender"
                  className="form-control"
                />
              </div>

              <input type="submit" className="btn btn-primary mt-1" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateStudent
