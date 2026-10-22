import {NavLink} from 'react-router';
function NavBar () {
    return (
        <nav className="navbar">
            <h1>PlaneSpotter NZ</h1>
          <NavLink className="brand" to="/">PlaneSpotter NZ</NavLink>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add Sighting</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </nav>
    );
}

export default NavBar;