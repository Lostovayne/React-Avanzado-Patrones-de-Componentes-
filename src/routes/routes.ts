import React, { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent | React.FC;
    name: string;
}

const LazyLayaout = lazy(() => import("../01-lazyload/layout/LazyLayaout"));
const ShoppingPage = lazy(() => import("../02-component-patterns/pages/ShoppingPage"));

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

    {
        to: "/Shopping",
        path: "/Shopping",
        Component: ShoppingPage,
        name: "Shopping Page",
    },
];
