import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" width={150} height={150} />

                    <ul>
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/users" element={<h1>Users Page</h1>} />
                    <Route path="/home" element={<h1>Home Page</h1>} />
                    <Route path="/*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
export default Navigation;
