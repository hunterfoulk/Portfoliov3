import React, { useState, useEffect, useContext } from "react"
import { Router as MyRouter } from "@reach/router"
import Layout from "../components/layouts/layout"
import { GlobalDispatchContext, GlobalStateContext, } from "../context/GlobalContextProvider"
import AliceCarousel from 'react-alice-carousel';
import "./projects.scss"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from "../components/navbar"
import ReactPlayer from 'react-player'
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


const Router = () => {
    return (
        <MyRouter>
            <Projects path="/projects/:id" />
        </MyRouter>
    )
}


export const Projects = ({ id }) => {
    const state = useContext(GlobalStateContext)
    const [project, setProject] = useState({})
    const [items, setItems] = useState([])
    const [stack, setStack] = useState([])
    const [isMobile, conclusion] = useState(false)


    useEffect(() => {
        const isMobile = window.innerWidth < 800
        conclusion(isMobile)
    }, [])

    useEffect(() => {
        console.log("state projects", state.projects)
        console.log("ID", id);

        const currentProject = state.projects.find(currentProject => currentProject.id === parseInt(id))

        setProject(currentProject)

        setItems(currentProject.slides)
        setStack(currentProject.stackList)

    }, [])

    console.log("PROJECT SLIDES", project)


    console.log(project.slides)
    console.log("items", items)


    return (

        <>

            <div className="project-main">
                <Navbar />
                <div className="project-main-header">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </div>

                <div className="slider">
                    <Carousel

                        className="caro" arrows
                        arrowLeft={<FaArrowLeft className="angle-double-left" />}
                        arrowLeftDisabled={<FaArrowLeft className="angle-left" />}
                        arrowRight={<FaArrowRight className="angle-double-right" />}
                        arrowRightDisabled={<FaArrowRight className="angle-right" />}
                        centered
                        infinite
                        addArrowClickHandler
                        slidesPerPage={isMobile ? 1 : 3}>

                        <img src={items[0]} style={{ borderRadius: "10px", cursor: "grab", padding: "5px" }} />
                        <img src={items[1]} style={{ borderRadius: "10px", cursor: "grab", padding: "5px" }} />
                        <img src={items[2]} style={{ borderRadius: "10px", cursor: "grab", padding: "5px" }} />

                    </Carousel>

                </div>
                <div className="project-wave-container">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                        className="waves"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g>
                            <use
                                className="p1 parallax"
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="0"
                                fill="#f6f6f6"
                            />
                        </g>
                    </svg>
                </div>
                <div className="project-about-section">
                    <div className="project-detail-header">
                        <h1>Details</h1>
                        <p>{project.summary}</p>
                    </div>
                    <div className="project-tech-section">
                        <h1>Tech Stack</h1>

                        <div className="tech-labels-container">
                            {stack.map((stack, i) => (
                                <div style={i === 0 ? { backgroundColor: "#7289da", color: "white" } : null} className="tech-label">{stack}</div>
                            ))}
                        </div>


                    </div>
                    <div className="front-end-section">
                        <h1>Front-End</h1>
                        <p>{project.frontEnd}</p>
                    </div>
                    <div className="back-end-section">
                        <h1>Back-End</h1>
                        <p>{project.backEnd}</p>
                    </div>
                    <div className="database-section">
                        <h1>Database</h1>
                        <p>{project.database}</p>
                    </div>
                    <div className="project-links-container">

                        <h1>Source Code</h1>
                        <div className="button-container">
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/hunterfoulk" style={{ color: "black" }}><FaGithub /></a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href={project.video} style={{ color: "#FF0000" }}><FaYoutube /></a>

                            {project.demolink !== "" ? <a target="_blank"
                                rel="noopener noreferrer"
                                href={project.demolink} style={{ color: "#7289da", fontSize: "15px", textDecoration: "none", fontWeight: "bold" }}>Demo</a> : null}

                        </div>

                    </div>

                    <div className="project-video-wave-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 24 150 28"
                            preserveAspectRatio="none"
                            shapeRendering="auto"
                            className="waves"
                        >
                            <defs>
                                <path
                                    id="gentle-wave"
                                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                />
                            </defs>
                            <g>
                                <use
                                    className="p1 parallax"
                                    xlinkHref="#gentle-wave"
                                    x="48"
                                    y="0"
                                    fill="#2c2f33"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="project-video-main">
                        <div className="project-video-header">
                            <h1>Demo Video</h1>
                        </div>
                        <div className="player-container">
                            <ReactPlayer width={"100%"} url={project.video} />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Router