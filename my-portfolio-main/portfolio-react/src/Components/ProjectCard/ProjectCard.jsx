import { useLocation, Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = () => {
  const location = useLocation();
  const { work } = location.state;

  return (
    <div className="card">
      <div className="card-title">
        <h1>{work.title}</h1>
        </div>
        <div className="card-img">
        <img src={work.w_img} alt={work.title} />
        </div>  
        <p>{work.description}</p>
        <div className="card-link" >
          <a className="card-link-1"
            href={work.liveLink}
            target="_blank"
            rel="noopener noreferrer"
           
          >
            Live Site
          </a>
          <a className="card-link-2" href={work.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/">⬅ Back to My Work</Link>
        </div>
      
    </div>
  );
};

export default ProjectCard;
