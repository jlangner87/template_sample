import { HashLink } from 'react-router-hash-link'
import bp5 from './project_images/blueprint5.png'

function Project5() {
  return (
    <div className="page">
      <div className="project_content">
        <h3 className="project_title">Dormitory Project</h3>
        <img className="project_thumbnail" src={bp5} />
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
      <HashLink className="back" to="/portfolio#5">
        Back
      </HashLink>
    </div>
  )
}

export default Project5
