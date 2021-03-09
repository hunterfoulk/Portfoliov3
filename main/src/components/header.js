import React, { useEffect, useState } from 'react'
import "./header.scss"
import { Link } from "gatsby"
import Face from "../assets/face.jpeg"


export default function Header() {
    const [isMobile, conclusion] = useState(false)
    const [newPath, setNewpath] = useState("")

    useEffect(() => {
        const isMobile = window.innerWidth < 700
        conclusion(isMobile)
        const fullPath = window.location.pathname;
        setNewpath(fullPath)
    }, [])



    return (

        <div className="header-container">
            <div className="header-right">
                <div className="image-container">
                    <img src={Face} />
                </div>
            </div>
            <div className="header-left">
                <span className="title-span">Software Developer</span>
                <h1>Hunter Foulk</h1>
                <span>I'm a Software Developer specialized in front end and back end development and have a passion for developing complex scalable web apps.</span>
                <div className="header-button-container">
                    {newPath === "/" ? <span className="button-one" onClick={() => {
                        window.scrollTo(700, 700)

                    }}>My Work</span> : <Link style={{ textDecoration: "none", outline: "none", color: "black", marginBottom: "20px", fontSize: "20px" }} to="/">
                        <span className="button-one">My Work</span>
                    </Link>}

                    {newPath === "/" ? <span className="button-two" onClick={() => {
                        window.scrollTo(4600, 4600)

                    }}>Contact</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a", marginBottom: "20px", fontSize: "20px" }} to="/">
                        <span className="button-two">Contact</span>
                    </Link>}
                    {/* <button className="button-one">My Work</button> */}
                    {/* <button className="button-two">Contact</button> */}
                </div>
            </div>

        </div>

    )
}
