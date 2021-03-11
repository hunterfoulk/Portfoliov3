import React, { useContext } from 'react'
import "./about.scss"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Footer from "../components/footer"
import { GlobalDispatchContext, GlobalStateContext, } from "../context/GlobalContextProvider"




export default function About() {
    const state = useContext(GlobalStateContext)





    return (

        <div className="about-main">
            <Navbar />
            <Header />


            <div className="about-wave-container">
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
            <div className="about-content-container">
                <div className="about-section">
                    <div className="about-header">
                        <h1>About Me</h1>
                    </div>
                    <div className="about-me-paragraph">
                        <p>I'm a Software Developer with more than 2 years of programming experience currently based in Arizona. I have many passions and skills in programming,technology, and many other areas in the technical world. Since I was young I have always been around and involved in coding with a huge passion in working in team environments whether it be coding and developing new applications or brain storming new ideas for future applications I've felt are needed in todays world. Since then I've shifted my learning and focuses to the web while gaining passion and fulfillment in learning new and modern technologies of Full Stack Web Development such as modern JavaScript, HTML, CSS, and Frontend and Backend technologies with frameworks such as React with TypeScript, Gatsby, and NodeJS with Express. Some of my hobbies outside of programming are daily exercising, hanging out with my friends, and just living everyday to the fullest while always striving to grow to my highest potential as a Software Developer.</p>
                    </div>
                </div>

                <div className="technical-section">
                    <div className="technical-header">
                        <h1>Technical Experience & Skills</h1>
                    </div>
                    <div className="front-end">
                        <h1>Front-End</h1>
                        <div className="items-container">
                            {state.frontend.map((item, i) => (
                                <div style={i === 0 ? { backgroundColor: "#037ded", color: "white" } : null} className="item">
                                    {item}
                                </div>

                            ))}
                        </div>

                    </div>
                    <div className="front-end">
                        <h1>Back-End</h1>
                        <div className="items-container">
                            {state.backend.map((item, i) => (
                                <div style={i === 0 ? { backgroundColor: "#037ded", color: "white" } : null} className="item">
                                    {item}
                                </div>

                            ))}
                        </div>


                    </div>
                    <div className="front-end">
                        <h1>Databases & Other</h1>
                        <div className="items-container">
                            {state.database.map((item, i) => (
                                <div style={i === 0 ? { backgroundColor: "#037ded", color: "white" } : null} className="item">
                                    {item}
                                </div>

                            ))}
                        </div>


                    </div>
                </div>



                <div className="about-wave-container">
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
                                fill="#FFFFFF"
                            />
                        </g>
                    </svg>
                </div>

                <Footer />
            </div>


        </div>
    )
}
