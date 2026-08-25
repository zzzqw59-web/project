import axios from "axios";
import {API_SERVER_HOST} from "./todoApi";

const prefix = `${API_SERVER_HOST}/api/member`;

// 로그인 요청
export const loginPost = async (loginParam) => {
    // email과 pw를 JSON 형식으로 POST 요청
    const response = await axios.post(`${prefix}/login`, {
        email: loginParam.email,
        pw: loginParam.pw
    });

    

    // 서버에서 반환한 응답데이터 반환
    return response.data;
}
