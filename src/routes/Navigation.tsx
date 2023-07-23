import { Suspense } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "./routes";

const Navigation = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" width={150} height={150} />

                        <ul>
                            {routes.map((route) => (
                                <li key={route.path}>
                                    <NavLink
                                        to={route.path}
                                        className={({ isActive }) => (isActive ? "nav-active" : "")}
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />
                        ))}

                        <Route path="/*" element={<Navigate to={routes[0].path} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
export default Navigation;
