import React, { useState } from 'react'
import "./navbar.scss"
import Layout from "../components/layouts/layout"
import { Router, Link } from "@reach/router"


export default function Navbar() {

    const [dropdown, setDropdown] = useState(false)


    const [isMobile, conclusion] = useState(false)

    useEffect(() => {
        const isMobile = window.innerWidth < 700
        conclusion(isMobile)
    }, [])

    const fullPath = window.location.pathname;
    console.log("this is the full Path", fullPath)



    return (

        <div className="navbar">
            {dropdown && <div className="dropdown">
                <Link style={{ textDecoration: "none", outline: "none", color: "#7289da" }} to="/about">
                    <span>About</span>
                </Link>

                <Link style={{ textDecoration: "none", outline: "none", color: "#7289da" }} to="/">
                    <span>Projects</span>
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

                    {fullPath === "/" ? <span onClick={() => {
                        window.scrollTo(740, 740);
                    }}>Projects</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Projects</span>
                        </Link>}

                    <span>Resume</span> </>}



            </div>
        </div>



    )
}
