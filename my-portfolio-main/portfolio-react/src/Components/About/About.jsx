import "./About.css";
import MyPic from "../../assets/MyPic.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        {/* Poza */}
        <div className="about-left">
          <img src={MyPic} alt="MyPic" />
        </div>

        {/* Descriere */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I started my career in accounting before discovering my passion for software development. 
              This journey taught me to embrace challenges, learn quickly, and bridge the gap between complex business problems and elegant technical solutions.
            </p>
            <p>
              I enjoy exploring new technologies and finding creative ways to make systems work smarter. 
              I bring curiosity, adaptability, and a knack for translating messy challenges into clean solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
