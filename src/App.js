import './App.css'
import Portal from './components/Portal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bio from './student/Bio'
import 'bootstrap/dist/css/bootstrap.css'
import './components/admin.css'
import ExamInfo from './student/ExamInfo'
import LeaveInfo from './student/LeaveInfo'
import AddExamMarks from './examiner/AddExamMarks'
import AddLeaves from './examiner/AddLeaves'
import CreateStudent from './admin/CreateStudent'
import CreateExaminer from './admin/CreateExaminer'
import Login from './auth/Login'
import Required from './Authcontext/Required'
import Private from './Private'
import CreatePrincipal from './admin/CreatePrincipal'
import StudentList from './principal/StudentList'
import Forgetpassword from './auth/Forgetpassword'
import Resetpassword from './auth/Resetpassword'
import ExaminerList from './principal/ExaminerList'
import UpdateStudent from './examiner/UpdateStudent'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
        <Route element={<Required />}>
          <Route path="/" element={<Private />}>
            <Route path="portal" element={<Portal />}>
              <Route path="bio" element={<Bio />} />
              <Route path="examinfo" element={<ExamInfo />} />
              <Route path="leaveinfo" element={<LeaveInfo />} />
              <Route path="examiner/addmarks" element={<AddExamMarks />} />
              <Route path="examiner/addLeaves" element={<AddLeaves />} />
              <Route path="admin/createstudent" element={<CreateStudent />} />
              <Route path="admin/createExaminer" element={<CreateExaminer />} />
              <Route
                path="admin/createPrincipal"
                element={<CreatePrincipal />}
              />
              <Route path="principal/getAllstudent" element={<StudentList />} />
              <Route
                path="principal/getAllexaminer"
                element={<ExaminerList />}
              />
              <Route
                path="principal/updateStudent/:id"
                element={<UpdateStudent />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
