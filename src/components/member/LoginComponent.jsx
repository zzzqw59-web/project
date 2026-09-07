import { useState } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
    email: "",
    pw: "",
};


const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState(initState);

    // Redux Store에 액션을 전달하기 위한 dispatch 함수
    // const dispatch = useDispatch();

    // const navigate = useNavigate();

    const {doLogin, moveToPath} = useCustomLogin();

    // 입력값 변경 처리
    const handleChange = (e) => {
        const {name, value} = e.target;

        setLoginParam((prevLoginParam) => ({
            ...prevLoginParam, [name]: value,
        }));
    };

    // 로그인 버튼 클릭 처리
    const handleClickLogin = () => {
        // login 액션을 Redux Store에 전달
        // dispatch(login(loginParam));

        doLogin(loginParam).then(data => {
            console.log(data);
            alert("로그인 성공");

            moveToPath("/");
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        }); // loginSlice의 비동기 호출
    };

    // 입력 영역을 생성하는 함수
    const makeInput = (title, name, type, value) => (
        <div className="mb-5">
            <label htmlFor={name} className="mb-2 block text-sm font-semibold text-gray-700">{title}</label>
            <input type={type} name={name} value={value} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-2 5 text-sm outline-none transaction focus:border-blue-500 focus:ring-blue-100" id={name} />
        </div>
    )
  return (
    <div className="mx-auto mt-16 w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 shadow-md">
        <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>

            <p className="mt-2 text-sm text-gray-500">이메일과 비밀번호를 입력하세요.</p>
        </div>
        {makeInput("Email", "email", "email", loginParam.email)}
        {makeInput("Password", "pw", "password", loginParam.pw)}

        <button type="button" className="mt-3 w-full rounded-lg bg-blue-500 py-3 text-base font-semibold text-white transition hover:bg-blue-600" onClick={handleClickLogin}>Login</button>
    </div>
  )
}

export default LoginComponent