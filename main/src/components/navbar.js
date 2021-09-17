import React, { useState, useEffect, useRef } from 'react'
import "./navbar.scss"
import Layout from "../components/layouts/layout"
import { Link } from "gatsby"
import useClickOutside from "../components/useClickOutside"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Modal from '@material-ui/core/Modal';
import Resume from "../assets/Resume.pdf"
import Fade from 'react-reveal/Fade';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    list: {
        width: "280px",
        display: "flex",

        backgroundColor: "white",


    },
    fullList: {
        width: '220px',
        display: "flex",
        backgroundColor: "white",
        // padding: "5px",
        marginLeft: "5px",
        marginTop: "5px"

    },
    paper: {
        background: "white",
        width: "260px",
        display: "flex",
        alignItems: "center",
        padding: "10px"
        // borderRight: "4px solid rgb(215, 46, 51)"

    },
    links: {
        marginBottom: "20px"
    },
    modal: {
        position: 'absolute',
        width: 500,
        backgroundColor: "white",
        border: '2px solid #000',
    },

});
export default function Navbar() {
    const classes = useStyles();
    const [dropdown, setDropdown] = useState(false)
    const [isMobile, conclusion] = useState(false)
    const [newPath, setNewpath] = useState("")
    const [open, setOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const ref = useRef();
    useClickOutside(ref, () => setDropdown(false));

    useEffect(() => {
        const isMobile = window.innerWidth < 700
        conclusion(isMobile)
        const fullPath = window.location.pathname;
        setNewpath(fullPath)
    }, [])

    const handleClose = () => {
        setModalOpen(false);
    };


    return (
        <Fade>
            <div className="navbar">

                <div className="nav-left">
                    {isMobile ? <MenuIcon className="hamburger" onClick={() => setOpen(true)} /> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                        <span style={{ color: "#000000bb" }}><span style={{ color: "#000000bb" }}>Hunter</span> Foulk</span>
                    </Link>}

                    <React.Fragment >

                        <Drawer classes={{ paper: classes.paper }} anchor="left" open={open} onClose={() => setOpen(false)}>

                            {newPath === "/" ? <span style={{ fontSize: "20px", marginBottom: "25px", fontSize: "20px" }} onClick={() => {
                                window.scrollTo(0, 0)
                                setOpen(false);
                            }}>Home</span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a", marginBottom: "25px", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>Home</span>
                            </Link>}



                            {newPath === "/" ? <span style={{ marginBottom: "25px", fontSize: "20px", fontSize: "20px" }} onClick={() => {
                                window.scrollTo(730, 730)
                                setOpen(false);
                            }}>Projects</span> : <Link style={{ textDecoration: "none", outline: "none", color: "black", marginBottom: "20px", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>Projects</span>
                            </Link>}

                            {newPath === "/about" ? <span style={{ marginBottom: "25px", fontSize: "20px", fontSize: "20px" }} onClick={() => {

                                setOpen(false);
                            }}>About</span> : <Link style={{ textDecoration: "none", outline: "none", color: "black", marginBottom: "25px", fontSize: "20px" }} to="/about">
                                <span style={{ marginBottom: "20px", fontSize: "20px" }}>About </span>
                            </Link>}
                            {newPath === "/" ? <span style={{ fontSize: "20px", marginBottom: "25px", fontSize: "20px" }} onClick={() => {
                                window.scrollTo(5750, 5750);
                                setOpen(false);

                            }}>Contact</span> : <Link style={{ textDecoration: "none", outline: "none", fontSize: "20px", color: "black", fontSize: "20px" }} to="/">
                                <span style={{ marginBottom: "25px", fontSize: "20px" }}>Contact</span>
                            </Link>}

                            <span style={{ marginBottom: "25px", fontSize: "20px" }} onClick={() => {
                                setOpen(false);

                                window.open(Resume)
                            }}>Resume</span>
                        </Drawer>
                    </React.Fragment>
                </div>
                <div className="nav-right">

                    {isMobile ? undefined : <><Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/about">
                        <span>About</span>
                    </Link>

                        {newPath === "/" ? <span onClick={() => {
                            window.scrollTo(740, 740);
                        }}>Projects </span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Projects </span>
                        </Link>}

                        {newPath === "/" ? <span onClick={() => {
                            window.scrollTo(5730, 5730);
                        }}>Contact </span> : <Link style={{ textDecoration: "none", outline: "none", color: "#23272a" }} to="/">
                            <span>Contact </span>
                        </Link>}

                        <span onClick={() => {
                            window.open(Resume)
                            // setModalOpen(true)
                        }}>Resume</span>

                    </>

                    }



                </div>

            </div>


        </Fade>
    )
}
