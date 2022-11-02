import Nav from "./nav"
import headshot from '../elements/headshot.png'

const Header = () => {

  return (
    <div className="header">
      <img className="headshot" src={headshot}/>
      <h1 className="site_title">Gemma Yevgeniya</h1>
      <h1 className="site_subtitle">Architect</h1>
      <Nav/>
    </div>
  )
}

export default Header