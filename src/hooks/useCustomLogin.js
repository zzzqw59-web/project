import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { loginPostAsync, logout } from "../slice/loginSlice";

const useCustomLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redux Store에서 로그인 상태 가져오기
    const loginState = useSelector((state => state.loginSlice));

    // 로그인 여부
    const isLogin = !!loginState.email;

    // ADMIN 권한 여부
    const isAdmin = loginState.roleNames?.includes("ADMIN") || false;

    // 로그인 처리
    const doLogin = async (loginParam) => {
        const result = await dispatch(loginPostAsync(loginParam)).unwrap();
        return result;
    };

    // 로그아웃 처리
    const doLogout = () => {
        dispatch(logout());
    };

    // 지정된 경로로 이동
    const moveToPath = (path) => {
        navigate(path, {replace: true});
    };

    // 로그인 페이지로 이동
    const moveToLogin = () => {
        navigate("/member/login", {replace: true});
    };

    // API 요청 오류 처리
    const handleError = (error) => {
        const status = error.response?.status;
        const message = error.response?.data?.msg || "요청 처리 중 오류가 발생했습니다.";

        // 인증 오류
        if (status === 401) {
            alert(message);
            doLogout();
            moveToLogin();

            return;
        }

        // 권한 부족
        if (status === 403) {
            alert(message);

            return;
        }

        // 그 외 오류
        alert(message);
    }
  return {loginState, isLogin, isAdmin, doLogin, doLogout, moveToPath, moveToLogin, handleError};
}
export default useCustomLogin