import React, { useState, useEffect, useRef } from 'react'
import "./navbar.scss"
import Layout from "../components/layouts/layout"
// import { Router, Link } from "@reach/router"
import { Link } from "gatsby"
import useClickOutside from "../components/useClickOutside"


export default function Navbar() {

    const [dropdown, setDropdown] = useState(false)
    const [isMobile, conclusion] = useState(false)
    const [newPath, setNewpath] = useState("")
    const ref = useRef();
    useClickOutside(ref, () => setDropdown(false));

    useEffect(() => {
        const isMobile = window.innerWidth < 700
        conclusion(isMobile)
        const fullPath = window.location.pathname;
        setNewpath(fullPath)
    }, [])




    return (

        <div className="navbar">
            {dropdown && <div className="dropdown" ref={ref}>
                <Link style={{ textDecoration: "none", outline: "none", color: "#7289da" }} to="/about">
                    <span>About</span>
                </Link>

                <Link style={{ textDecoration: "none", outline: "none", color: "#7289da" }} to="/">
                    <span>Projects</span>
                </Link>

                <Link style={{ textDecoration: "none", outline: "none", color: "#7289da" }} to="/">
                    <span>Contact</span>
                </Link>

                <span>Resume</span>
            </div>}
            <div className="nav-left">
                <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                    <span>Hunter Foulk</span>
                </Link>

            </div>
            <div className="nav-right">

                {isMobile ? <span className="hamburger" onClick={() => setDropdown(true)}>☰</span> : <><Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/about">
                    <span>About</span>
                </Link>

                    {newPath === "/" ? <span onClick={() => {
                        window.scrollTo(740, 740);
                    }}>Projects</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Projects</span>
                        </Link>}

                    {newPath === "/" ? <span onClick={() => {
                        window.scrollTo(3330, 3330);
                    }}>Contact</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Contact</span>
                        </Link>}

                    <span onClick={() => {
                        window.open('https://airbnbbucket.s3.us-east-2.amazonaws.com/Resume.pdf')
                    }}>Resume</span>

                </>

                }



            </div>
        </div>



    )
}
