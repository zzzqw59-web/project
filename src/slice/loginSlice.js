import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = () =>  {
    const memberCookie = getCookie("member");

    if (memberCookie) {
        return memberCookie;
    }

    return {email: ""};
};

export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
    return loginPost(param);
})

const loginSlice = createSlice({
    name: "LoginSlice",
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log("로그인...");

            // action.payload는 {email, pw} 형태의 객체
            const data = action.payload;
            // email 값을 새로운 로그인 형태로 변환
            return {
                email: data.email,
            }
        },
        logout: (state, action) => {
            console.log("로그아웃...");

            // 로그인 정보를 저장한 쿠키 삭제
            removeCookie("member");

            // 로그인 상태를 초기 상태로 변경
            return {email: ""};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled : 완료");

            const payload = action.payload;

            // 로그인 정보를 문자열로 변환하여 쿠키에 저장
            setCookie("member", JSON.stringify(payload), 1);
            return payload;
        })
        .addCase(loginPostAsync.pending, (state, action) => {
            console.log("pending: 처리중");
        })
        .addCase(loginPostAsync.rejected, (state, action) => {
            console.log("reject: 오류");
        });
    }
});

export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;