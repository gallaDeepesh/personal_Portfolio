function Github() {

  return (

    <section>

      <h2 className="section-title">
        GitHub
      </h2>

      <div className="card" style={{textAlign:"center"}}>

        <img
          src="https://github-readme-stats.vercel.app/api?username=gallaDeepesh&show_icons=true&theme=tokyonight"
          width="100%"
        />

        <br /><br />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=gallaDeepesh&theme=tokyonight"
          width="100%"
        />

        <br /><br />

        <a
          href="https://github.com/"
          target="_blank"
        >
          <button className="btn primary-btn">
            Visit GitHub
          </button>
        </a>

      </div>

      //leet code stats

        <div className="card" style={{textAlign:"center"}}>

          <h3 style={{marginBottom:"20px"}}>
            LeetCode Profile
          </h3>

          <img
            src="https://leetcard.jacoblin.cool/GB2023002583?theme=dark&font=Nunito&ext=heatmap"
            width="100%"
          />

          <br /><br />

          <a
            href="https://leetcode.com/GB2023002583/"
            target="_blank"
          >
            <button className="btn primary-btn">
              View LeetCode
            </button>
          </a>

        </div>

    </section>
  );
}

export default Github;