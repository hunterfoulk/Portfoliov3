import React, { useState, useEffect, useRef } from 'react'
import "./navbar.scss"
import Layout from "../components/layouts/layout"
import { Link } from "gatsby"
import useClickOutside from "../components/useClickOutside"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { MdKeyboardArrowDown } from 'react-icons/md';


const useStyles = makeStyles({
    list: {
        width: "220px",
        display: "flex",

        backgroundColor: "rgb(248, 248, 248)",


    },
    fullList: {
        width: '220px',
        display: "flex",
        backgroundColor: "rgb(248, 248, 248)",
        background: "rgb(248, 248, 248)",
        // padding: "5px",
        marginLeft: "5px",
        marginTop: "5px"

    },
    paper: {
        background: "rgb(248, 248, 248)",
        width: "200px",
        display: "flex",
        alignItems: "center",
        padding: "10px"
        // borderRight: "4px solid rgb(215, 46, 51)"

    },
    links: {
        marginBottom: "10px"
    }

});
export default function Navbar() {
    const classes = useStyles();
    const [dropdown, setDropdown] = useState(false)
    const [isMobile, conclusion] = useState(false)
    const [newPath, setNewpath] = useState("")
    const [open, setOpen] = useState(false)
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

            <div className="nav-left">
                {isMobile ? <span style={{ fontSize: "32px" }} className="hamburger" onClick={() => setOpen(true)}>☰</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                    <span style={{ color: "#000000bb" }}><span style={{ color: "black" }}>Hunter</span> Foulk</span>
                </Link>}

                <React.Fragment >

                    <Drawer classes={{ paper: classes.paper }} anchor="left" open={open} onClose={() => setOpen(false)}>

                        {newPath === "/" ? <span style={{ marginBottom: "20px", fontSize: "20px", marginBottom: "20px", fontSize: "20px" }} onClick={() => {
                            window.scrollTo(0, 0)
                            setOpen(false);
                        }}>Home</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a", marginBottom: "20px", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>Home</span>
                            </Link>}



                        {newPath === "/" ? <span style={{ marginBottom: "20px", fontSize: "20px", marginBottom: "20px", fontSize: "20px" }} onClick={() => {
                            window.scrollTo(730, 730)
                            setOpen(false);
                        }}>Projects</span> : <Link style={{ textDecoration: "none", outline: "none", color: "black", marginBottom: "20px", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>Projects</span>
                            </Link>}

                        {newPath === "/about" ? <span style={{ marginBottom: "20px", fontSize: "20px", marginBottom: "20px", fontSize: "20px" }} onClick={() => {

                            setOpen(false);
                        }}>About</span> : <Link style={{ textDecoration: "none", outline: "none", color: "black", marginBottom: "20px", fontSize: "20px" }} to="/about">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>About </span>
                            </Link>}
                        {newPath === "/" ? <span style={{ marginBottom: "20px", fontSize: "20px", marginBottom: "20px", fontSize: "20px" }} onClick={() => {
                            window.scrollTo(5750, 5750);
                            setOpen(false);

                        }}>Contact</span> : <Link style={{ textDecoration: "none", outline: "none", fontSize: "20px", color: "black", marginBottom: "20px", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>Contact</span>
                            </Link>}

                        <span style={{ marginBottom: "15px", fontSize: "20px" }} onClick={() => {
                            setOpen(false);

                            window.open('https://airbnbbucket.s3.us-east-2.amazonaws.com/Resume.pdf')
                        }}>Resume</span>
                    </Drawer>
                </React.Fragment>
            </div>
            <div className="nav-right">

                {isMobile ? undefined : <><Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/about">
                    <span>About<MdKeyboardArrowDown className="nav-icons" /></span>
                </Link>

                    {newPath === "/" ? <span onClick={() => {
                        window.scrollTo(740, 740);
                    }}>Projects <MdKeyboardArrowDown className="nav-icons" /></span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Projects <MdKeyboardArrowDown className="nav-icons" /></span>
                        </Link>}

                    {newPath === "/" ? <span onClick={() => {
                        window.scrollTo(3330, 3330);
                    }}>Contact <MdKeyboardArrowDown className="nav-icons" /></span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Contact <MdKeyboardArrowDown className="nav-icons" /></span>
                        </Link>}

                    <span onClick={() => {
                        window.open('https://airbnbbucket.s3.us-east-2.amazonaws.com/Resume.pdf')
                    }}>Resume <MdKeyboardArrowDown className="nav-icons" /></span>

                </>

                }



            </div>
        </div>



    )
}
