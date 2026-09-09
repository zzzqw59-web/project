import { Card, Descriptions } from "antd";
import KakaoMapComponent from "./KakaoMapComponent";

const StoreReadComponent = ({ store }) => {

    return (
        <Card>

            {/* 상호명 */}
            <h2 className="mb-6 text-2xl font-bold">
                {store.bizesNm}
            </h2>

            {/* 지도 */}
            <div className="mb-6 rounded-lg border border-gray-300 p-4">
                <KakaoMapComponent
                    lat={store.lat}
                    lng={store.lon}
                />
            </div>

            {/* 기본 정보 */}
            <Descriptions
                column={1}
                bordered
                size="small"
                styles={{
                    label: {
                        width: 120,
                        whiteSpace: "nowrap",
                    },
                }}
            >
                <Descriptions.Item label="업종">
                    {store.indsLclsNm}
                </Descriptions.Item>

                <Descriptions.Item label="중분류">
                    {store.indsMclsNm}
                </Descriptions.Item>

                <Descriptions.Item label="소분류">
                    {store.indsSclsNm}
                </Descriptions.Item>

                <Descriptions.Item label="시·도">
                    {store.ctprvnNm}
                </Descriptions.Item>

                <Descriptions.Item label="시·군·구">
                    {store.signguNm}
                </Descriptions.Item>

                <Descriptions.Item label="도로명 주소">
                    {store.rdnmAdr}
                </Descriptions.Item>

                <Descriptions.Item label="지번 주소">
                    {store.lnoAdr}
                </Descriptions.Item>

                <Descriptions.Item label="우편번호">
                    {store.newZipcd}
                </Descriptions.Item>

            </Descriptions>

        </Card>
    );
};

export default StoreReadComponent;