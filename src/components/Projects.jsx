import React from "react";

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projectsContainer">
                <a className="project" href="https://fir-frontend-ece3c.web.app/game">
                    <h2>Shadows of Eternia</h2>
                    <img src="shadows.jpg" />
                    <p>
                        An exciting online multiplayer dungeon crawler game. Play as one of four different heroes to battle your way through different monsters in 
                        order to keep your village safe! We utilized Typescript, Firebase, Phaser 3 and React to bring this action role playing game to life on the web.
                    </p>
                </a>
            </div>
        </section>
    )
}

export default Projects