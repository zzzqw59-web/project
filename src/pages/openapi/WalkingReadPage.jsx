import { useLocation } from "react-router"
import BasicLayout from "../../layouts/BasicLayout"
import WalkingReadComponent from "../../components/openapi/WalkingReadComponent";

const WalkingReadPage = () => {
    const location = useLocation();
    const walking = location.state;
  return (
    <BasicLayout>
        <div className="text-3xl font-bold mb-6">
            부산 도보 여행 정보
        </div>

        <WalkingReadComponent walking={walking} />
    </BasicLayout>
  )
}
export default WalkingReadPage