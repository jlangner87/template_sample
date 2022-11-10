import { Link } from 'react-router-dom'
import bp1 from '../elements/blueprint1.png'
import bp2 from '../elements/blueprint2.png'
import bp3 from '../elements/blueprint3.png'
import bp4 from '../elements/blueprint4.png'
import bp5 from '../elements/blueprint5.png'

function Portfolio() {
  return (
    <div className="page">
      <h2 className="page_title">Portfolio</h2>
      <Link to="/portfolio/1">
        <div className="project_preview">
          <h3 className="project_title">
            <a id="1"></a>Dormitory Project
          </h3>
          <img className="project_thumbnail" src={bp1} />
          <h4 className="project_detail">Baltimore, MD</h4>
          <h4 className="project_detail">2018</h4>
        </div>
      </Link>
      <Link to="/portfolio/2">
        <div className="project_preview">
          <h3 className="project_title">
            <a id="2"></a>Victorian Project
          </h3>
          <img className="project_thumbnail" src={bp2} />
          <h4 className="project_detail">Baltimore, MD</h4>
          <h4 className="project_detail">2018</h4>
        </div>
      </Link>
      <Link to="/portfolio/3">
        <div className="project_preview">
          <h3 className="project_title">
            <a id="3"></a>Edina Addition
          </h3>
          <img className="project_thumbnail" src={bp3} />
          <h4 className="project_detail">Edina, MN</h4>
          <h4 className="project_detail">2019</h4>
        </div>
      </Link>
      <Link to="/portfolio/4">
        <div className="project_preview">
          <h3 className="project_title">
            <a id="4"></a>New Wave Townhouse
          </h3>
          <img className="project_thumbnail" src={bp4} />
          <h4 className="project_detail">London, UK</h4>
          <h4 className="project_detail">2020</h4>
        </div>
      </Link>
      <Link to="/portfolio/5">
        <div className="project_preview">
          <h3 className="project_title">
            <a id="5"></a>Lakehome
          </h3>
          <img className="project_thumbnail" src={bp5} />
          <h4 className="project_detail">Spirit Lake, IA</h4>
          <h4 className="project_detail">2021</h4>
        </div>
      </Link>
    </div>
  )
}

export default Portfolio
