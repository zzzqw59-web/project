import useCustomLogin from '../../hooks/useCustomLogin';
import BasicLayout from '../../layouts/BasicLayout'
import { Outlet, useNavigate } from 'react-router'

const IndexPage = () => {
    const navigate = useNavigate();
    const {isLogin, moveToLogin} = useCustomLogin();

    const moveToList = () => {
        navigate("list");
    }

    const moveToAdd = () => {
        // 로그인 하지 않은 경우
        if (!isLogin) {
            alert("로그인이 필요합니다.");
            moveToLogin();
            return;
        }
        navigate("add");
    }
  return (
    <BasicLayout>
        {/* Todo 하위 메뉴 */}
        <div className="flex gap-3 border-b border-gray-200 pb-3 mb-5">
            <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600" onClick={moveToList}>
                LIST
            </div>
            <div className="px-4 py-2 text-lg font-semibold text-center cursor-pointer hover:text-blue-600" onClick={moveToAdd}>
                ADD
            </div>
        </div>

        {/* 하위 페이지가 표시되는 영역 */}
        <div className="w-full min-h-80 p-4 bg-white rounded-lg">
            <Outlet />
        </div>
    </BasicLayout>
  )
}

export default IndexPage
