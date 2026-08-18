import axios from "axios";

// 서버 주소
export const API_SERVER_HOST = "http://localhost:8080";

// Todo API 기본 경로
const prefix = `${API_SERVER_HOST}/api/todos`;

// Todo 한 건 조회
export const getOne = async (no) => {
    // HTTP GET 요청을 보내고 응답을 기다림
    const response = await axios.get(`${prefix}/${no}`);
    // 응답 데이터 반환
    return response.data;
};

// Todo 목록 조회
export const getList = async (pageParam) => {
    const {page, size} = pageParam;
    // page와 size를 쿼리 스트링으로 전달
    const response = await axios.get(prefix, {
        params: {page, size},
    });

    // 응답 데이터 반환
    return response.data;
};