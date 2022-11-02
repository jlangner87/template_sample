import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contact'>Connect</Link>
    </div>
  )
}

export default Nav