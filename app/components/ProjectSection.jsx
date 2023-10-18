import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id:0,
        title:"Shadows of Eternia",
        description: "An exciting online multiplayer dungeon crawler game. Play as one of four different heroes to battle your way through different monsters in order to keep your village safe! We utilized Typescript, Firebase, Phaser 3 and React to bring this action role playing game to life on the web.",
        image: "/images/shadows.jpeg",
        tag:["Games","Web"]
    },
    {
        id:1,
        title:"Mass Pro Shops",
        description: "An extensive e-commerce website allowing users to select from a range of product options. Users can create a profile, save items to their cart and checkout. A fully functional backend allows admins to create, update and edit products and users. We utilized the Stripe API for a complete checkout system.",
        image:"/images/massPro.jpeg",
        tag:["ECommerce","Web"]
    },
    {
        id:2,
        title:"hyperDrive",
        description: "",
        image:"",
        tag:["Productivity","Web"]
    }
]

const ProjectSection = () => {
    return (
        <>
            <h2>My Projects</h2>
            <div>
                {projectsData.map((project) => {
                    return (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tags={project}
                        />
                    )
                } )}
            </div>
        </>
    )
}

export default ProjectSection