import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    const navigate = useNavigate()
    const { state, logout } = useContext(AuthContext)

    let username = state.user?.name

    const handleLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }
    return (
        <nav className="w-screen h-[100px] bg-black flex items-center gap-3 px-5">

            <Link
                className="text-xl text-white font-bold"
                to="/"
            >
                HeroesApp
            </Link>

            <div className="w-auto h-full flex items-center gap-2">

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/dc"
                >
                    DC
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    to="/search"
                >
                    Search
                </NavLink>
            </div>

            <div className="navbar-collapse w-full flex justify-end">
                <ul className="w-full h-full flex justify-end gap-6 items-center">
                    <span className='text-xl text-white font-bold'>
                        {username}
                    </span>
                    <button onClick={handleLogout} className='h-full text-white font-bold bg-salmon rounded-md px-3'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}