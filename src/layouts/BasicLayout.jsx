import React from 'react'
import BasicMenu from '../components/menus/BasicMenu'

const BasicLayout = ({children}) => {
  return (
    <>
        {/* 화면 상단의 공통 헤더 영역 */}
        <BasicMenu></BasicMenu>

        {/* 본문과 사이드바를 배치하는 영역 */}
        <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {/* 각 페이지에서 전달한 내용이 출력되는 본문 영역 */}
            <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-5">
                {children}
            </main>

            {/* 공통 사이드바 영역 */}
            <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-5">
                <h1 className="text-2xl md:text-4xl">Sidebar</h1>
            </aside>
        </div>
    </>
  )
}

export default BasicLayout
