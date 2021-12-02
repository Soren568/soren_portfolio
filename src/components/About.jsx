import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import climb from '../assets/img/climb.jpeg'
const About = ({ aboutIsOpen, setAboutIsOpen }) => {

    return (
        <Transition.Root show={aboutIsOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-10 overflow-hidden" onClose={setAboutIsOpen}>
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
                        <Dialog.Overlay className="absolute inset-0 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="-translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="-translate-x-0"
                            leaveTo="-translate-x-full"
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
                                    <div className="absolute top-0 right-1/4 pt-4 pr-14 flex sm:-mr-56 xs:-mr-32 xs:mt-3">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={() => setAboutIsOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <Icon icon="bi:x-lg" className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full w-3/4 sm:w-screen xs:w-screen flex flex-col py-6 bg-black bg-opacity-80 shadow-xl overflow-y-auto">
                                    <div className="px-4 sm:px-6">
                                        <Dialog.Title className="font-semibold text-gray-100 uppercase tracking-widest text-2xl">About Me</Dialog.Title>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                                        <div className="absolute inset-0 px-4 sm:px-6 text-gray-200 flex xs:flex-col">
                                            <img src={climb} className="w-1/3 self-start xs:hidden" />
                                            <div className="pl-5 xs:pb-10">
                                                <div className="mb-8">
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Why software engineering?</p>
                                                    <p className="pl-5 text-sm">Quickly after finishing my undergrad in Finance and Economics at Boulder I was searching for something more creative, while still being able to work with numbers. After finishing a bootcamp I can confidently say that software engineering is exactly the role I was looking for and learning the skills to materialize any creative idea is what excites me most.</p>
                                                </div>
                                                <div className="mb-8">
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Goals</p>
                                                    <p className="pl-5 text-sm">Now that I have learned MERN, Python, and Java - I'm hoping to continue expanding my expertise in those stacks and expand into more complex topics such as blockchain, natural language processing, and AI/ML. Long term, I would like to leverage my software engineering knowledge towards a neuroscience / psychology focused project that can help individuals be their best.</p>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-100 uppercase tracking-widest text-xl mb-2">Besides coding</p>
                                                    <p className="pl-5 text-sm">I am very passionate about physical/mental health and performance and enjoy reading books on neuroscience and psychology in my free time. Having been a rugby player my entire life, I love staying active and being outdoors as much as I can: whether that's snowboarding, ice/rockclimbing, cycling, or any other stereotypical Coloradan activity.</p>
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

export default About
