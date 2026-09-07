import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";

const API_SERVER_HOST = "http://localhost:8080";

// JWT가 필요한 API 호출에 사용할 Axios 인스턴스
const jwtAxios = axios.create();

// Access Token 갱신 요청
const refreshJWT = async (accessToken, refreshToken) => {
    const response = await axios.post(
        `${API_SERVER_HOST}/api/member/refresh`,
        {
            accessToken, refreshToken
        }
    );

    return response.data;
};

// Axios 요청 전에 실행할 함수
export const beforeRequest = (config) => {
    console.log("beforeRequest 실행");

    // member 쿠키에서 로그인 정보 조회
    const memberCookie = getCookie("member");

    console.log("memberCookie 타입:", typeof memberCookie);
    console.log("memberCookie 값:", memberCookie);

    // Access Token이 있는 경우 Authorization 헤더에 추가
    if (memberCookie && memberCookie.accessToken) {
        config.headers.Authorization = `Bearer ${memberCookie.accessToken}`;
    }

    return config;
};

// Axios 응답 성공 시 실행할 함수
export const responseSuccess = (response) => {
    console.log("responseSuccess 실행");

    return response;
};

// Axios 응답 실패 시 실행할 함수
export const responseFail = async (error) => {
    console.log("responseFail 실행");

    // 서버 응답이 401인 경우
    if (error.response?.status === 401) {
        const memberCookie = getCookie("member");
    
        if (memberCookie) {
            // Access Token 갱신 요청
            const result = await refreshJWT(memberCookie.accessToken, memberCookie.refreshToken);
            // 기존 로그인 정보에 새로운 토큰 정보 저장
            const newMemberCookie = {
                ...memberCookie, accessToken: result.accessToken, refreshToken: result.refreshToken
            };
        
            // 변경된 로그인 정보를 쿠키에 다시 저장
            setCookie("member", newMemberCookie, 1)
    
            // 실패했던 기존 요청을 다시 실행
            return jwtAxios(error.config);
        }
    }
    // 오류를 처리하지 않고 호출한 코드의 catch()로 전달
    return Promise.reject(error);
};

// JwtAxios에 요청 인터셉터 등록
jwtAxios.interceptors.request.use(beforeRequest);

// JwtAxios에 응답 인터셉터 등록
jwtAxios.interceptors.response.use(responseSuccess, responseFail);

export default jwtAxios;