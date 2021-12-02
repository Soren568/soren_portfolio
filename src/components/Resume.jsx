import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';

const Resume = ({ resumeIsOpen, setResumeIsOpen }) => {
    return (
        <Transition.Root show={resumeIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setResumeIsOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0  transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen sm:max-w-screen">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 pt-4 pr-14 flex sm:-mr-10 sm:pl-4 xs:-mr-10 xs:mt-2">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setResumeIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-3/4 sm:w-screen xs:w-screen flex flex-col py-6 ml-auto bg-black bg-opacity-75 shadow-xl overflow-y-auto">
                                    <div className="px-4 sm:px-6 items-center flex">
                                        <Dialog.Title className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">Resume</Dialog.Title>
                                        <a href="./SorenHeitmann_Resume.pdf" title="Download Resume" download> <Icon icon="ant-design:file-pdf-outlined" className="ml-4 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear"/> </a>
                                        <a href="https://github.com/Soren568" title="GitHub" download> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear"/> </a>
                                        <a href="https://www.linkedin.com/in/soren-heitmann/" title="LinkedIn" download> <Icon icon="brandico:linkedin" className="ml-1 text-2xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear"/> </a>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6 ">
                                        <div className="absolute inset-0 pb-6 px-4 sm:px-6 text-gray-200 overflow-y-auto">
                                            <div className="h-auto border-l-4 border-white ml-11 flex flex-col items-start">
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Technologies</h1>
                                                    <div className="flex items-center xs:flex-col">
                                                        <h1 className="tracking-widest mr-3 pl-10 text-sm" >Languages</h1>
                                                        <ul className="flex flex-wrap mt-2 xs:justify-center">
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Python</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">JavaScript</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Java</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">SQL</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">HTML5</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">CSS</li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center xs:flex-col">
                                                        <h1 className="tracking-widest mr-3 pl-10 text-sm" >Frameworks</h1>
                                                        <ul className="flex flex-wrap mt-2 xs:justify-center">
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">React</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Express</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Node.js</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Spring</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Flask / Jinja2</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Bcrypt</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Bootstrap</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">TailwindCSS</li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center xs:flex-col">
                                                        <h1 className="tracking-widest mr-3 pl-10 text-sm" >Databases / Version Control</h1>
                                                        <ul className="flex flex-wrap mt-2 xs:justify-center">
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">MySQL</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">MongoDB</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">Git</li>
                                                            <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mr-2 mb-2">GitHub</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Education</h1>
                                                    <div className="pl-10 ">
                                                        <div><span className="font-semibold"> Coding Dojo</span> | <span className="font-light italic">2021</span></div>
                                                        <ul className="font-extralight text-sm list-disc pl-4 mb-3">
                                                            <li className=""> Full stack coding bootcamp focusing on MERN, Java/Spring, and Python stacks </li>
                                                            <li className=""> One of two students in my cohort of 30 to earn highest marks on all 3 end of stack exams ("triple black-belt") </li>
                                                        </ul>
                                                        <div><span className="font-semibold"> University of Colorado Boulder</span> | <span className="font-light italic">2021</span></div>
                                                        <ul className="font-extralight text-sm list-disc pl-4">
                                                            <li className=""> B.Sc. Business Administration - Finance, Economics emphasis </li>
                                                            <li className=""> Executive member and captain of CU Men’s Rugby team | Rocky Mountain D1A All-Conference Center </li>
                                                            <li className=""> International Business studies in Sydney, AU and Berlin, DE </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <Icon icon="bx:bx-radio-circle-marked" className="text-white text-4xl -ml-5" />
                                                    <h1 className="font-medium uppercase tracking-widest pl-2">Work</h1>
                                                    <div className="pl-10">
                                                        <div><span className="font-semibold"> Liminal Collective</span> | <span className="font-light italic">2019-Present</span></div>
                                                        <ul className="font-extralight text-sm list-disc pl-4 mb-3">
                                                            <li> Human performance focused start-up environment with exposure to all business teams and worked under the communications head to support the development of a performance partner and influencer/creator relations program</li>
                                                            <li className=""> Used RSS feeds/Feedly/Traackr to aggregate data on 25 partners for increased internal organization efficiency and increased public audience for partner content </li>
                                                            <li className=""> Scheduling and time-management for staff task efficiency and accountability across the organization using Google Calendar </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Resume
