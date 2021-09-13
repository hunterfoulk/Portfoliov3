import React, { useContext } from "react"
import Fade from 'react-reveal/Fade';
// import { Router, Link } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Stars from "../components/stars"
import Footer from "../components/footer"
import './pages.scss'
import './projects.scss'
import "../components/footer.scss"
import { GlobalDispatchContext, GlobalStateContext, } from "../context/GlobalContextProvider"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Bounce from 'react-reveal/Bounce'; // Importing Zoom effect
import Pulse from 'react-reveal/Pulse';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { AiOutlineFolder } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';


const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  if (process.env.NODE_ENV === 'production') console.log = () => { }
  return (
    <>
      <Layout>
        <SEO title="Hunter Foulk" />
        <Header />


        <Stars />
        <div className="projects-main">

          <div className="projects-container">

            <div className="projects-header">
              <span>Featured Work</span>
            </div>

            {state.projects.filter(x => x.id < 3).map((project, i) => (
              <Pulse duration={500}>
                <div className="project" key={i}>
                  <div className="project-image-container">
                    <img src={project.thumbnail} />
                  </div>
                  <div className="project-content-container">
                    <div className="feature-container">
                      <span>Featured Project</span>
                    </div>
                    <div className="content-header">
                      <div className="project-name-container">

                        <span>{project.name}</span>
                      </div>


                    </div>
                    <div className="description-container">
                      <p>{project.description}</p>
                    </div>
                    <div className="stack-container">
                      <div className="stack">


                        {project.stack.map((stack) => (
                          <span>{stack}</span>
                        ))}

                      </div>
                    </div>
                    <div className="view-project-container">

                      <a target="_blank"
                        rel="noopener noreferrer"
                        href={project.sourcecode}
                      ><FaGithub /></a>
                      <Link style={{ textDecoration: "none" }} to={`/projects/${project.id}/`}>

                        <MdOpenInNew style={{ marginLeft: "12px" }} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Pulse>
            ))}




          </div>

          <div className="bottom-collection">
            <div className="bottom-header">

              <span>Other Projects</span>
            </div>

            <Pulse duration={500}>
              <div className="bottom-projects-container">
                {state.projects.filter(x => x.id >= 3).map((project, i) => (
                  <>

                    <div className="bottom-project">
                      <div className="bottom-name-container">

                        <AiOutlineFolder style={{ fontSize: "26px" }} />
                        <span>{project.name}</span>
                      </div>
                      <div className="bottom-description-container">

                        <span>{project.summary}</span>
                      </div>
                      <div className="bottom-buttons">
                        <a target="_blank"
                          rel="noopener noreferrer"
                          href={project.sourcecode}
                        ><FaGithub /></a>
                        <Link style={{ textDecoration: "none" }} to={`/projects/${project.id}/`}>

                          <MdOpenInNew style={{ marginLeft: "12px" }} />
                        </Link>
                      </div>

                    </div>
                  </>
                ))}
              </div>
            </Pulse>

          </div>

          <Footer />

        </div>

      </Layout >
    </>
  )
}

export default IndexPage