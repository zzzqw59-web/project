import WalkingListComponent from "../../components/member/openapi/WalkingListComponent"
import BasicLayout from "../../layouts/BasicLayout"

const WalkingListPage = () => {
  return (
    <BasicLayout>
        <div className="text-3xl font-bold mb-6">
            부산 도보 여행 정보
        </div>
        <WalkingListComponent />
    </BasicLayout>
  )
}
export default WalkingListPage