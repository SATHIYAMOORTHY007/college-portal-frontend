import React, { useContext, useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import AuthContext from '../Authcontext/Authcontext'
import axios from 'axios'

function Login() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const { setAuth } = useContext(AuthContext)
  const Navigate = useNavigate()
  const myformik = useFormik({
    initialValues: {
      username: '',
      pwd: '',
    },
    validate: (values) => {
      let errors = {}
      if (!values.username) {
        errors.username = 'please enter email'
      }
      if (!values.pwd) {
        errors.pwd = 'please enter password'
      }

      return errors
    },
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const value = await axios.post(
          'https://college-protal.onrender.com/api/auth/login',
          values,
        )

        const token = value?.data?.token
        const role = value?.data?.role
        const name = value?.data?.details?.name
        const email = value?.data?.details?.email
        const id = value?.data?.details?._id
        window.localStorage.setItem('role', role)
        console.log(name)
        setAuth({ token, role, name, email, id })
        if (role == 'student') {
          Navigate('/portal/bio')
        } else if (role == 'examiner') {
          Navigate('/portal/examiner/addmarks')
        } else {
          Navigate('/portal')
        }

        setLoading(false)
      } catch (error) {
        alert('Not Valid')
        setLoading(false)
      }
    },
  })
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user" onSubmit={myformik.handleSubmit}>
                        <div class="form-group">
                          <input
                            className={`form-control ${
                              myformik.errors.username
                                ? 'is-invalid'
                                : 'is-valid'
                            }`}
                            onChange={myformik.handleChange}
                            values={myformik.values.username}
                            name="username"
                            type="text"
                            placeholder="USERNAME"
                          />
                          <span style={{ color: 'red' }}>
                            {myformik.errors.username}
                          </span>
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            placeholder="PASSWORD"
                            className={`form-control ${
                              myformik.errors.pwd ? 'is-invalid' : 'is-valid'
                            }`}
                            onChange={myformik.handleChange}
                            values={myformik.values.pwd}
                            name="pwd"
                          />
                          <span style={{ color: 'red' }}>
                            {myformik.errors.pwd}
                          </span>
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          hidden={loading}
                          className="btn mt-2 btn-primary opacity"
                        >
                          SUBMIT
                        </button>
                        <hr />
                      </form>
                      <hr />
                      <div class="text-center">
                        <Link class="small" to="/forgetpassword">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Role</th>
              <th scope="col">username</th>
              <th scope="col">password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Admin</td>
              <td>admin@gmail.com</td>
              <td>admin</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>principal</td>
              <td>123abcprincipal@gmail.com</td>
              <td>0000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Examiner</td>
              <td>examiner@gmail.com</td>
              <td>examiner</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Student</td>
              <td>123abc000</td>
              <td>0000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Login
