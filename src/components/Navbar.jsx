import React from 'react'

const Navbar = ({setAboutIsOpen, setProjectsIsOpen, setResumeIsOpen}) => {
    return (
        <div className="nav-container mt-5 select-none">
            <div onClick = {e => setAboutIsOpen(prev => !prev)} className="tab border-r border-gray-100 hover:bg-white hover:bg-opacity-25 transition-all duration-200">About</div>
            <div onClick = {e => setProjectsIsOpen(prev => !prev)} className="tab border-r border-gray-100 hover:bg-white hover:bg-opacity-25 transition-all duration-200">Projects</div>
            <div onClick = {e => setResumeIsOpen(prev => !prev)} className="tab hover:bg-white hover:bg-opacity-25 transition-all duration-200">Resume</div>
        </div>
    )
}

export default Navbar
