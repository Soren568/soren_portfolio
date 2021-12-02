import React, { useState } from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Resume from '../components/Resume'

const MainPage = () => {
    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [projectsIsOpen, setProjectsIsOpen] = useState(false);
    const [resumeIsOpen, setResumeIsOpen] = useState(false);

    return (
        <div className="flatirons-bg min-h-screen">
            <div className="w-screen h-screen shaded-container flex flex-col justify-center items-center">
                    <div className={resumeIsOpen || projectsIsOpen || aboutIsOpen ? "opacity-0 transition-all ease-linear" : "transition-all ease-linear"}>
                        <Hero aboutIsOpen={aboutIsOpen} projectsIsOpen={projectsIsOpen} resumeIsOpen={resumeIsOpen} setAboutIsOpen={setAboutIsOpen} setProjectsIsOpen={setProjectsIsOpen} setResumeIsOpen={setResumeIsOpen} />
                        <Navbar setAboutIsOpen={setAboutIsOpen} setProjectsIsOpen={setProjectsIsOpen} setResumeIsOpen={setResumeIsOpen} />
                    </div>
                <About aboutIsOpen={aboutIsOpen} setAboutIsOpen={setAboutIsOpen} />
                <Projects projectsIsOpen={projectsIsOpen} setProjectsIsOpen={setProjectsIsOpen} />
                <Resume resumeIsOpen={resumeIsOpen} setResumeIsOpen={setResumeIsOpen} />
            </div>
        </div>
    )
}

export default MainPage
