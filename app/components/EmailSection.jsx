import React from "react";
import GitHubIcon from "../../public/images/github-icon.svg"
import LinkedInIcon from "../../public/images/linkedin-icon.svg"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    Thank you for taking the time to check out my portfolio! I am currently looking for
                    new opportunities and welcome any feedback on my projects. Whether you have a question
                    or just want to say hi, don't hesitate to reach out.
                </p>
                <div className="socials flex flex-row gap-2"> 
                    <Link href="https://github.com/HRM0">
                        <Image src={GitHubIcon} alt="github icon"></Image>
                    </Link>
                    <Link href="https://github.com/HRM0">
                        <Image src={LinkedInIcon} alt="linkedin icon"></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="text-white block text-sm font-medium mb-2"
                        >
                            Your Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                        ></input>
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="text-white block text-sm font-medium mb-2"
                        >
                            Subject
                        </label>
                        <input 
                            type="text"
                            id="subject"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="You're Hired!"
                        ></input>
                    </div>
                    <div className="mb-6">
                    <label 
                            htmlFor="message" 
                            className="text-white block text-sm font-medium mb-2"
                        >
                            Subject
                        </label>
                        <input 
                            type="text"
                            id="message"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        ></input>
                    </div>
                    <button
                        type='submit'
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection