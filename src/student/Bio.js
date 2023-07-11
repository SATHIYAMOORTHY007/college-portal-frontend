import { React, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'
import AuthContext from '../Authcontext/Authcontext'

function Bio() {
  const { auth } = useContext(AuthContext)
  useEffect(() => {
    data()
  }, [])

  const [bio, setBio] = useState('')
  const data = async (e) => {
    try {
      //get student data
      const info = await axios.get(
        `https://college-protal.onrender.com/api/student/getParticularStudent/${auth.id}`,
        {
          headers: {
            token: auth.token,
          },
        },
      )
      setBio(info.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="d-flex flex-column align-items-center text-center ">
            <img
              className="mt-2"
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              class="rounded-circle"
              width="150"
            />
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.name}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Department</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.dept}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Course</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.course}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Section</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.section}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Gender</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.gender}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 text-bold">Rollno</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.rollno}</div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 text-bold">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">{bio.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
