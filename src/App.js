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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
