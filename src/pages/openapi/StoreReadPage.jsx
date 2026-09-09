import { useLocation } from "react-router";
import BasicLayout from "../../layouts/BasicLayout";
import StoreReadComponent from "../../components/openapi/StoreReadComponent";

const StoreReadPage = () => {
    const location = useLocation();

    console.log("location:", location);
    console.log("location.state:", location.state);

    const store = location.state;

    return (
        <BasicLayout>
            <div className="mb-6 text-3xl font-bold">
                가게 정보
            </div>

            {store ? (
                <StoreReadComponent store={store} />
            ) : (
                <div>
                    가게 정보를 찾을 수 없습니다.
                </div>
            )}
        </BasicLayout>
    );
};

export default StoreReadPage;