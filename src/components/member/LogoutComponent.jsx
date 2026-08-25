import { useDispatch } from "react-redux"
import { logout } from "../../slice/loginSlice";

const LogoutComponent = () => {
  const dispatch = useDispatch();

  // 로그아웃 버튼 클릭 처리
  const handleClickLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="mx-auto mt-16 w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 shadow-md">
      {/* 제목 */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Logout</h2>
        <p className="mt-2 text-sm text-gray-500">로그아웃 하시겠습니까?</p>
      </div>

      {/* 로그아웃 버튼 */}
      <button type="button" className="mt-3 w-full rounded-lg bg-red-500 py-3 text-base font-semibold text-white transition hover:bg-red-600" onClick={handleClickLogout}>LOGOUT</button>
    </div>
  )
}
export default LogoutComponent