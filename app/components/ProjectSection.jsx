"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id:0,
        title:"Shadows of Eternia",
        description: "An exciting online multiplayer dungeon crawler game. Play as one of four different heroes to battle your way through different monsters in order to keep your village safe! We utilized Typescript, Firebase, Phaser 3 and React to bring this action role playing game to life on the web.",
        image: "/images/shadows.png",
        tag:["All","Games","Web"],
        gitUrl: "https://github.com/wizard-dev-gang/shadowsofeternia",
        previewUrl: "https://fir-frontend-ece3c.web.app/game"
    },
    {
        id:1,
        title:"Mass Pro Shops",
        description: "An extensive e-commerce website allowing users to select from a range of product options. Users can create a profile, save items to their cart and checkout. A fully functional backend allows admins to create, update and edit products and users. We utilized the Stripe API for a complete checkout system.",
        image:"/images/massPro.jpeg",
        tag:["All","ECommerce","Web"],
        gitUrl: "https://github.com/mass-pro-shops/grace-shopper",
        previewUrl: "https://two303-mass-pro-shops.onrender.com/home"
    },
    {
        id:2,
        title:"hyperDrive",
        description: "hyperDrive is a site we designed, built, and deployed to help users overcome planning obstacles when seeking to achieve a goal. After answering four simple prompts (role, goal, start date, and end date), hyperDrive will provide a customized action plan, within the user's timeline, to help the user accomplish their goal.",
        image:"/images/hyperDrive.png",
        tag:["All","Productivity","Web"],
        gitUrl: "https://github.com/JourneyPath/hyperDrive",
        previewUrl: "https://journeypath-17d60.web.app/"
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, {once:true})

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === 'All'} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === 'Web'} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Games" 
                    isSelected={tag === 'Games'} 
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, idx) => {
                    return (
                        <motion.li 
                            key={idx}
                            variants={cardVariants} 
                            initial="initial" 
                            animate={isInView ? "animate" : "initial"}
                            transition={{duration: 0.3, delay: idx * 0.4}}
                        >
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                tags={project}
                            />
                        </motion.li>
                    )
                } )}
            </ul>
        </section>
    )
}

export default ProjectSection