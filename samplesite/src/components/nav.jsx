import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav">
      {/* 
      
      
      */}

<input type="checkbox" id="hamburger-input" class="burger-shower" />
<label id="hamburger-menu" for="hamburger-input">
  <nav id="sidebar-menu">
    <h3>Menu</h3>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>
      <li><Link to='/contact'>Connect</Link></li>
    </ul>
  </nav>
</label>
    </div>
  )
}

export default Nav