const skills = {
  Frontend:["ReactJS","HTML","CSS","JavaScript"],
  Backend:["Java","Spring Boot","REST APIs"],
  Database:["MySQL"],
  Cloud:["Docker","Git & GitHub","AWS"],
  Core:["DSA","DBMS","Operating Systems","Computer Networks"]
};

function Skills() {

  return (
    <section id="skills">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="grid">

        {
          Object.entries(skills).map(([title,items]) => (

            <div className="card" key={title}>

              <h3>{title}</h3>

              <div
                style={{
                  display:"flex",
                  flexWrap:"wrap",
                  gap:"10px",
                  marginTop:"20px"
                }}
              >

                {
                  items.map(skill => (

                    <span
                      key={skill}
                      style={{
                        background:"#1e293b",
                        padding:"10px 15px",
                        borderRadius:"10px"
                      }}
                    >
                      {skill}
                    </span>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Skills;