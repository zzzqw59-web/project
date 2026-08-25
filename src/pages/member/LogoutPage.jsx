import LogoutComponent from "../../components/member/LogoutComponent"
import BasicMenu from "../../components/menus/BasicMenu"

const LogoutPage = () => {
  return (
    <div className="fixed inset-0 z-[1055] flex flex-col">
      <BasicMenu />

      <div className="flex h-full w-full flex-wrap items-center justify-center border-2">
        <LogoutComponent />
      </div>
    </div>
  )
}

export default LogoutPage