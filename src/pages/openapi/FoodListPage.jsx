import FoodListComponent from "../../components/openapi/FoodListComponent"
import BasicLayout from "../../layouts/BasicLayout"

const FoodListPage = () => {
  return (
    <BasicLayout>
        <div className="text-3xl font-bold mb-6">
            부산 맛집 정보
        </div>

        <FoodListComponent />
    </BasicLayout>
  )
}
export default FoodListPage