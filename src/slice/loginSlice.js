import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";

const initState = {
    email: ""
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

            // 로그인 상태를 초기 상태로 변경
            return {... initState};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled : 완료");
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