"use client"
import React, {useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <div className="flex gap-4">
                <ul className="list-disc pl-2">
                    <li>Javascript</li>
                    <li>NextJS</li>
                    <li>Typescript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgresSQL</li>
                </ul>
                <ul className="list-disc pl-2">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Sequelize</li>
                    <li>Tailwind</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>Fullstack Academy</li>
                <li>San Jose State University</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Engineering Certificate</li>
                <li>Bachelor of Science in Accounting and Information Systems</li>
            </ul>
        )
    },
]



const AboutMe = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section 
            id="about"
            className="text-white"
        >
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 cl:px-16">
                <Image src="/images/compStock.jpg" alt="computer related picture" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg ">
                I'm a Software Engineer based out of New York City. I started my coding journey with making simple web pages and 
                games in high school. I'm happy to say old habits die hard and that I am still making games and web apps, though 
                the size and scope have grown exponentially. I strive to make interactive and clean user interfaces and love the 
                challenges each new project brings. Below, you'll find a list of technologies I'm proficient in and the training 
                I've undergone. 
                </p>
                <div>
                    <div className="flex flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab==="skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("education")} 
                            active={tab==="education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certifications")} 
                            active={tab==="certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default AboutMe