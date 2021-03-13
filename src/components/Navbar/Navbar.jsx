import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <section className="nav__links">
                <Link className="nav__link" to="/">Home</Link>
            </section>
        </nav>
    )
}

export default Navbar 