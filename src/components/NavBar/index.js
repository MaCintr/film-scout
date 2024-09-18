const NavBar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand fs-4" href="#">
                    <img src="/images/logo.png" width={50} className="me-1" />
                    FilmScout
                </a>

                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Now Playing</a>
                <a className="nav-link" href="#">Top Rated</a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search for a movie..." aria-label="Search" />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar