import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키 저장
export const setCookie = (name, value, day = 1) => {
    const expires = new Date();

    expires.setDate(expires.getDate() + day);
    cookies.set(name, value, {
        path: "/", // 모든 경로에서 쿠키 사용 가능
        expires: expires, // 쿠키 만료일
    });
};

// 쿠키 조회
export const getCookie = (name) => {
    return cookies.get(name);
};

// 쿠키 삭제
export const removeCookie = (name, path = "/") => {
    cookies.remove(name, {
        path: path,
    });
};