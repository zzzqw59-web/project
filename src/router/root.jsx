import { Children } from "react";
import { createBrowserRouter } from "react-router";
import todoRouter from "./todoRouter";

const root = createBrowserRouter([
    {
        path: "/",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/MainPage");
            return {Component};
        },
    },
    {
        path: "/about",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/AboutPage");
            return {Component};
        },
    },
    {
        path: "/todo",
        HydrateFallback: () => <div>Loading...</div>,
        lazy: async () => {
            const {default: Component} = await import("../pages/todo/IndexPage");
            return {Component};
        },

        // /todo의 하위 경로 설정
        children: todoRouter(),
    },
]);

export default root;