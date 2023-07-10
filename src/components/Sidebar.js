import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Authcontext/Authcontext'

function Sidebar() {
  const { auth } = useContext(AuthContext)
  const role = window.localStorage.getItem('role')

  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">{role} Portal</div>
        </a>

        <hr class="sidebar-divider my-0" />

        <hr class="sidebar-divider" />

        <div class="sidebar-heading"></div>
        {role && role === 'student' ? (
          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              to="/portal/bio"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Students Info</span>
            </Link>

            <Link
              class="nav-link collapsed"
              to="/portal/examinfo"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Exam Info</span>
            </Link>

            <Link
              class="nav-link collapsed"
              to="/portal/leaveinfo"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Leave Info</span>
            </Link>
          </li>
        ) : (
          ''
        )}

        {role && role === 'examiner' ? (
          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              to="examiner/addmarks"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Add Exam Marks</span>
            </Link>

            <Link
              class="nav-link collapsed"
              to="examiner/addLeaves"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Add Leave</span>
            </Link>
          </li>
        ) : (
          ''
        )}

        {auth?.role === 'admin' ? (
          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              to="admin/createstudent"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Add Student</span>
            </Link>

            <Link
              class="nav-link collapsed"
              to="admin/createExaminer"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i class="fas fa-fw fa-cog"></i>
              <span>Add Examiner</span>
            </Link>
          </li>
        ) : (
          ''
        )}
      </ul>
    </>
  )
}

export default Sidebar
