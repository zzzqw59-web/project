import { createBrowserRouter } from "react-router";
import todoRouter from "./todoRouter";
import MemberRouter from "./MemberRouter";
import walkingRouter from "./walkingRouter";

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
    {
        path: "/member",
        HydrateFallback: () => <div>Loading...</div>,
        // member 하위 라우팅 설정
        children: MemberRouter(),
    },
    {
        path: "/walking",
        HydrateFallback: () => <div>Loading...</div>,

        // openapi 하위 라우팅 설정
        children: walkingRouter(),
    }
]);

export default root;