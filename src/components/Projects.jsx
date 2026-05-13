import projects from "../data/projects";

function Projects() {

  return (

    <section id="projects">

      <h2 className="section-title">
        Projects
      </h2>

      <div
        className="grid"
        style={{
          gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))"
        }}
      >

        {
          projects.map((project,index)=>(

            <div className="card" key={index}>

              <h3>{project.title}</h3>

              <p
                style={{
                  margin:"20px 0",
                  color:"#94a3b8",
                  lineHeight:"1.7"
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display:"flex",
                  flexWrap:"wrap",
                  gap:"10px"
                }}
              >

                {
                  project.tech.map((tech,index)=>(

                    <span
                      key={index}
                      style={{
                        background:"#1e293b",
                        padding:"8px 12px",
                        borderRadius:"8px"
                      }}
                    >
                      {tech}
                    </span>

                  ))
                }

              </div>

              <div
                style={{
                  display:"flex",
                  gap:"15px",
                  marginTop:"25px"
                }}
              >

                <a href={project.github}>
                  <button className="btn secondary-btn">
                    GitHub
                  </button>
                </a>

                <a href={project.live}>
                  <button className="btn primary-btn">
                    Live Demo
                  </button>
                </a>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Projects;