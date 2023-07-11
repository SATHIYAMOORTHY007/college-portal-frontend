import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function Resetpassword() {
  const params = useParams()
  const Navigate = useNavigate()
  const myformik = useFormik({
    initialValues: {
      pwd: '',
      conpwd: '',
    },

    validate: (values) => {
      let errors = {}
      if (!values.pwd) {
        errors.pwd = 'please enter your possword'
      }
      if (!values.conpwd) {
        errors.conpwd = 'please enter your possword'
      }
      if (values.pwd !== values.conpwd) {
        errors.conpwd = 'please enter your possword'
      }
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          `https://college-protal.onrender.com/api/auth/resetpassword/${params.id}/${params.token}`,
          values,
        )
        alert('success')
        Navigate('/')
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <div class="container">
      <div class=" row justify-content-center mt-4">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-center">
                <h3>
                  <i class="fa fa-lock fa-4x"></i>
                </h3>
                <h2 class="text-center">Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div class="panel-body">
                  <form onSubmit={myformik.handleSubmit}>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="glyphicon glyphicon-envelope color-blue"></i>
                        </span>
                        <input
                          type="text"
                          id="pwd"
                          className="form-control"
                          placeholder="password"
                          onChange={myformik.handleChange}
                          values={myformik.values.pwd}
                          name="pwd"
                        />
                        <span style={{ color: 'red' }}>
                          {myformik.errors.pwd}
                        </span>
                        <div className="col-6">
                          <input
                            type="text"
                            id="conpwd"
                            className="form-control"
                            placeholder="confirm password"
                            onChange={myformik.handleChange}
                            values={myformik.values.conpwd}
                            name="conpwd"
                          />
                        </div>
                        <span style={{ color: 'red' }}>
                          {myformik.errors.conpwd}
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        id="rest_password_button"
                        type="submit"
                        className="btn  btn-primary "
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resetpassword
