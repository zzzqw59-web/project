import { configureStore } from "@reduxjs/toolkit";
// loginSlice에서 생성한 reducer import
import loginSlice from "./slice/loginSlice"

// 어플리케이션에서 사용할 Redux Store 생성
export default configureStore({
    reducer: {
        // loginSlice라는 이름으로 로그인 상태 관리 reducer 등록
        loginSlice: loginSlice
    }
});