import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const BasicMenu = () => {
  // Redux Store에서 로그인 상태 가져오기
  const loginState = useSelector((state) => state.loginSlice);
  return (
    <nav id='navbar' className='flex bg-blue-300'>
      <div className="w-4/5 bg-gray-500">
        <ul className="flex p-4 text-white font-bold">
            <li className="pr-6 text-2xl">
                <Link to={"/"}>Main</Link>
            </li>
            <li className="pr-6 text-2xl">
                <Link to={"/about"}>About</Link>
            </li>

            {/* 로그인한 사용자에게만 Todo 메뉴 출력 */}
            {/* {
              loginState.email && (
                <li className="pr-6 text-2xl">
                  <Link to={"/todo/list"}>Todo</Link>
                </li>
              )
            } */}

            <li className="pr-6 text-2xl">
              <Link to="/todo/list">Todo</Link>
            </li>
            <li className="pr-6 text-2xl">
              <Link to="/walking/list">부산도보여행</Link>
            </li>
            <li className="pr-6 text-2xl">
              <Link to="/food/list">부산맛집정보</Link>
            </li>
            <li className="pr-6 text-2xl">
              <Link to="/store/list">시장정보</Link>
            </li>
        </ul>
      </div>

      <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
      {
        !loginState.email ? (
          <div className="m-1 rounded text-sm text-white">
            <Link to={"/member/login"}>Login</Link>
          </div>
        ) : (
          <div className="m-1 rounded text-sm text-white">
            <Link to={"/member/logout"}>Logout</Link>
          </div>
        )
      }
      </div>
    </nav>
  )
}

export default BasicMenu;
