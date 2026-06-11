function Resume() {

  return (

    <section>

      <h2 className="section-title">
        Resume
      </h2>

      <div className="card" style={{textAlign:"center"}}>

        <p style={{marginBottom:"25px"}}>

          ATS-Friendly Resume for Software Engineering Roles.

        </p>

        <a
          href="https://drive.google.com/file/d/1Ltrg5szbz5j1pTLEGU6tj2vlspTbmiES/view?usp=drive_link"
          target="_blank"
        >
          <button className="btn primary-btn">
            Download Resume
          </button>
        </a>

      </div>

    </section>
  );
}

export default Resume;