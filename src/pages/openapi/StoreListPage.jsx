import StoreListComponent from "../../components/openapi/StoreListComponent"
import BasicLayout from "../../layouts/BasicLayout"

const StoreListPage = () => {
  return (
    <BasicLayout>
        <div className="text-3xl font-bold mb-6">
            시장 정보
        </div>

        <StoreListComponent />
    </BasicLayout>
  )
}
export default StoreListPage