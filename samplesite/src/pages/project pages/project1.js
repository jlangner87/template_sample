import { Link } from 'react-router-dom'
import bp1 from './project_images/blueprint1.png'

function Project1() {
  return (
    <div className="page">
      <div className="project_content">
        <h3 className="project_title">Dormitory Project</h3>
        <img className="project_thumbnail" src={bp1} />
        <h4 className="project_detail">Baltimore, MD</h4>
        <h4 className="project_detail">2018</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla
          urna porttitor rhoncus dolor purus non enim. Adipiscing diam donec
          adipiscing tristique. Tellus rutrum tellus pellentesque eu tincidunt.
          Faucibus in ornare quam viverra.
        </p>
      </div>
      <Link className="back" to="/portfolio">
        Back
      </Link>
    </div>
  )
}

export default Project1
