import { Fragment, useState, createRef, useRef, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import lottie from 'lottie-web';
import bookAnimation from '../assets/animations/books.json'
import chatAnimation from '../assets/animations/chat.json'
import mapAnimation from '../assets/animations/map.json'

const Projects = ({ projectsIsOpen, setProjectsIsOpen }) => {
    const [mapHover, setMapHover] = useState(false)
    const [chatHover, setChatHover] = useState(false)
    const [bookHover, setBookHover] = useState(false);


    return (
        <Transition.Root show={projectsIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setProjectsIsOpen}>
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
                        <Dialog.Overlay />
                    </Transition.Child>
                    <div className="fixed inset-y-0 -bottom-1/4 top-20 left-0 pr-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
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
                                    <div className="absolute top-0 right-14 -mr-40 pt-4 pl-2 flex sm:-mr-10 sm:pl-4 xs:-mr-10 xs:mt-2">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setProjectsIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-screen flex flex-col py-6 bg-black bg-opacity-75 shadow-xl">
                                    <div className="px-4 sm:px-6 mb-5">
                                        <Dialog.Title className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">Projects</Dialog.Title>
                                    </div>
                                    <div className="relative flex-1 px-4 sm:px-6">
                                        <div className="absolute inset-0 px-20 flex overflow-x-auto overflow-y-hidden gap-20 items-start pb-14 sm:flex-col sm:overflow-y-auto sm:mb-80 xs:flex-col xs:overflow-y-auto xs:mb-40">
                                            <div className="flex flex-col h-full text-gray-200 w-full" onMouseEnter={e => setMapHover(true)} onMouseLeave={e => setMapHover(false)}>
                                                <div class="max-w-2xl shadow-md aspect-w-16 aspect-h-10">
                                                    <div class="w-full h-6 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-4">
                                                        <span class="w-2 h-2 rounded-2xl bg-red-400  "></span>
                                                        <span class="w-2 h-2 rounded-full bg-yellow-400 "></span>
                                                        <span class="w-2 h-2 rounded-full bg-green-400 "></span>
                                                    </div>
                                                    <div class={mapHover ? "bg-mapProject2 bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6" : "bg-mapProject bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6"}></div>
                                                </div>
                                                <div className="flex justify-between xs:mt-3">
                                                    <p className="font-medium text-lg ">Locale</p>
                                                    <a href="https://github.com/Soren568/Locale-GoogleMapsAPI" target="_blank"> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /></a>
                                                </div>
                                                <ul className={mapHover ? "hidden transition-opacity ease-linear" : "flex flex-wrap transition-opacity ease-linear"}>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">React</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">MongoDB</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Express</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Node.js</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Google Maps API</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Bcrypt</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">JWT</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">TailwindCSS</li>
                                                </ul>
                                                <p className={mapHover ? "transition-all ease-linear text-sm mt-3" : "hidden transition-all ease-linear"}>Locale is a 'nearby-locations' type app that displays recreation/outdoors activities locations pulled from a government API. This project utilizes a noSQL database to store user accounts/hashed passwords as well as any saved locations specific to that user to display when browsing.</p>
                                            </div>
                                            <div className="flex flex-col h-full text-gray-200 w-full" onMouseEnter={e => setChatHover(true)} onMouseLeave={e => setChatHover(false)}>
                                                <div class="max-w-2xl transition-colors ease-linear shadow-md h-1/3 aspect-w-16 aspect-h-10">
                                                    <div class="w-full h-6 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-4">
                                                        <span class="w-2 h-2 rounded-full bg-red-400 "></span>
                                                        <span class="w-2 h-2 rounded-full bg-yellow-400 "></span>
                                                        <span class="w-2 h-2 rounded-full bg-green-400 "></span>
                                                    </div>
                                                    <div class={chatHover ? "bg-chatProject2 bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6" : "bg-chatProject bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6"}></div>
                                                </div>
                                                <div className="flex justify-between xs:mt-3">
                                                    <p className="font-medium text-lg">Disqord</p>
                                                    <a href="https://github.com/Sal-Nunez/Disqord" target="_blank"> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /></a>
                                                </div>
                                                <ul className={chatHover ? "hidden transition-opacity ease-linear" : "flex flex-wrap transition-opacity ease-linear"}>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Java</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">SpringMVC</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Websockets</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Bcrypt</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">SQL</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Apache Tomcat</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Bootstrap</li>
                                                </ul>
                                                <p className={chatHover ? "transition-all ease-linear text-sm mt-3" : "hidden transition-all ease-linear"}>Disqord was a four person project using Java SpringBoot and Github for version control. With group/direct message and server/channel structure imitating Discord, we used Websockets to mitigate constant server requests. A user/friend search function implementing AJAX as well as all past chat messages utilized JPA and SQL for data storage.</p>
                                            </div>
                                            <div className="flex flex-col h-full text-gray-200 w-full" onMouseEnter={e => setBookHover(true)} onMouseLeave={e => setBookHover(false)}>
                                                <div class="max-w-2xl transition-colors ease-linear shadow-md h-1/3 aspect-w-16 aspect-h-10">
                                                    <div class="w-full h-6 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-4">
                                                        <span class="w-2 h-2 rounded-full bg-red-400  "></span>
                                                        <span class="w-2 h-2 rounded-full bg-yellow-400 "></span>
                                                        <span class="w-2 h-2 rounded-full bg-green-400 "></span>
                                                    </div>
                                                    <div class={bookHover ? "bg-bookProject2 bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6" : "bg-bookProject bg-cover bg-no-repeat border-t-0 w-full rounded-b-lg h-5/6 border-4 bg-gray-200 mt-6"}></div>
                                                </div>
                                                <div className="flex justify-between xs:mt-3">
                                                    <p className="font-medium text-lg">SideNotes</p>
                                                    <a href="https://github.com/Soren568/SideNotes" target="_blank"> <Icon icon="akar-icons:github-outline-fill" className="ml-1 text-3xl text-gray-400 hover:text-white hover:bg-gray-700 p-1 rounded-md cursor-pointer transition-colors ease-linear" /></a>
                                                </div>
                                                <ul className={bookHover ? "hidden transition-opacity ease-linear" : "flex flex-wrap transition-opacity ease-linear"}>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Python</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">Google Books API</li>
                                                    <li className="bg-gray-300 bg-opacity-75 text-gray-700 text-xs px-2 py-1 rounded-md mx-1 mb-2">AJAX</li>
                                                </ul>
                                                <p className={bookHover ? "transition-all ease-linear text-sm mt-3" : "hidden transition-all ease-linear"}>A simple book-browsing app using GoogleBooksAPI to pull and render all book info. Includes search by author or title functionality with AJAX response. Utilized flask for the quick deployment and conditional rendering capabilities</p>
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

export default Projects
