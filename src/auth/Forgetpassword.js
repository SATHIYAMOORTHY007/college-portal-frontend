import { React, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
function Forgetpassword() {
  const [data, setData] = useState('')

  const myformik = useFormik({
    initialValues: {
      username: '',
    },

    validate: (values) => {
      let errors = {}
      if (!values.username) {
        errors.username = 'please enter your email'
      }
    },
    onSubmit: async (values) => {
      try {
        const value = await axios.post(
          `http://localhost:4000/api/auth/forgetpassword`,
          values,
        )
        const al = value.data

        if (value.data.message) {
          return alert('email doesnot Exists....')
        }
        alert(al)
        myformik.values.username = ''
      } catch (err) {
        alert('Not Found')
        console.log(err)
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
                          className="form-control"
                          placeholder="Enter Your Email"
                          onChange={myformik.handleChange}
                          values={myformik.values.username}
                          name="username"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        id="forgot_password_button"
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

export default Forgetpassword
