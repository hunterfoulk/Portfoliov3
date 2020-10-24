import React, { useContext } from "react"
import Fade from 'react-reveal/Fade';
// import { Router, Link } from "@reach/router"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import './pages.scss'
import './projects.scss'
import "../components/footer.scss"
import { GlobalDispatchContext, GlobalStateContext, } from "../context/GlobalContextProvider"



const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  if (process.env.NODE_ENV === 'production') console.log = () => { }
  return (
    <>
      <Layout>
        <SEO title="Hunter Foulk" />
        <Header />

        <div className="wave-container">
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
                fill=" #2c2f33"
              />
            </g>
          </svg>
        </div>


        <div className="projects-main">
          <div className="projects-container">
            <Fade right>
              <div className="projects-header">
                <span>My Projects</span>
              </div>
            </Fade>
            {state.projects.map((project, i) => (
              <Fade right>
                <div className="project" key={i}>
                  <div className="project-image-container">
                    <img src={project.thumbnail} />
                  </div>
                  <div className="project-content-container">
                    <div className="content-header">
                      <div className="project-name-container">
                        <span>{project.name}</span>
                      </div>
                      <div className="stack-container">
                        <div className="stack">


                          {project.stack.map((stack) => (
                            <span>{stack}</span>
                          ))}

                        </div>
                      </div>

                    </div>
                    <div className="description-container">
                      <p>{project.description}</p>
                    </div>
                    <div className="view-project-container">
                      <Link style={{ textDecoration: "none" }} to={`/projects/${project.id}/`}>
                        <span>View Project</span>

                      </Link>
                      <a target="_blank"
                        rel="noopener noreferrer"
                        href={project.sourcecode}
                      >View Sourcecode</a>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}

          </div>
          <div className="footer-wave-container">
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
                  fill="#7289da"
                />
              </g>
            </svg>
          </div>
          <Footer />

        </div>

      </Layout >
    </>
  )
}

export default IndexPage