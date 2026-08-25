import LoginComponent from "../../components/member/LoginComponent"
import BasicMenu from "../../components/menus/BasicMenu"

const LoginPage = () => {
  return (
    <div className="fixed top-0 left-0 z-[1055] flex h-full w-full flex-col">
        <BasicMenu />

        <div className="flex h-full w-full flex-wrap items-center justify-center border-2">
            <div className="text-2xl">
                <LoginComponent />
            </div>
        </div>
    </div>
  )
}

export default LoginPage