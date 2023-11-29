import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
      <header className="bg-[#CAC0AD] z-10">

        <div className="flex items-center justify-between h-full">

          <div> <img src="/img/logo.png" alt="logo" className="h-16 ml-7" /></div>

          <input type="checkbox" id="sommaire"/>
          <label htmlFor="sommaire"><FontAwesomeIcon icon={faBars} style={{color: '#832f25'}} size="2x" /></label>


          <nav className="w-3/5">
            <ul className="flex items-center justify-around">
              <Link to="/" className="lien-accueil">accueil</Link>
              <Link to="/a-propos" className="lien-a-propos">à-propos</Link>
              <Link to="/mes-projets">mes projets</Link>
            </ul>
          </nav>

        </div>
      </header>
    )
}

export default Header