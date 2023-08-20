import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayaout = lazy(() => import("../01-lazyload/layout/LazyLayaout"));

export const routes: Route[] = [
    {
        to: "/lazyload",
        path: "/lazyload/*",
        Component: LazyLayaout,
        name: "LazyPage - Dash",
    },

    {
        to: "no-lazy",
        path: "/no-lazyu",
        Component: NoLazy,
        name: "No Lazy",
    },
];
