import "./styles.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects">
        <div className="project">
          <h2>Project One</h2>
          <img src="assets/images/img1.jpg" alt="Project 1" />
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h2>Project Two</h2>
          <img src="assets/images/img2.jpg" alt="Project 2" />
          <p>Description of Project 2</p>
        </div>
        <div className="project">
          <h2>Project Three</h2>
          <img src="assets/images/img3.jpg" alt="Project 3" />
          <p>Description of Project 3</p>
        </div>
        <div className="project">
          <h2>Project Four</h2>
          <img src="assets/images/img4.jpg" alt="Project 4" />
          <p>Description of Project 4</p>
        </div>
        <div className="project">
          <h2>Project Five</h2>
          <img src="assets/images/img5.jpg" alt="Project 5" />
          <p>Description of Project 5</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
