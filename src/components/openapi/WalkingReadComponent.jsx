import { Card, Descriptions, Image, Typography } from "antd"
import KakaoMapComponent from "./KakaoMapComponent";

const {Title, Paragraph} = Typography;

const WalkingReadComponent = ({walking}) => {
    
  return (
    <Card>
        <Title level={4}>
            {walking.mainTitle}
        </Title>

        <Paragraph className="border border-gray-300 rounded-lg p-4 mb-6 leading-8">
            <KakaoMapComponent lat={walking.latitude} lng={walking.longitude} />
        </Paragraph>

        <Paragraph className="border border-gray-300 rounded-lg p-4 mb-6 leading-8">
            {walking.contents}
        </Paragraph>

        <Descriptions column={1} bordered size="small" styles={{
            label: {
                width: 120,
                whiteSpace: "nowrap",
            },
        }}>
            <Descriptions.Item label="분류">
                {walking.categoryName}
            </Descriptions.Item>

            <Descriptions.Item label="간략한 설명">
                {walking.title}
            </Descriptions.Item>

            <Descriptions.Item label="장소">
                {walking.place}
            </Descriptions.Item>

            <Descriptions.Item label="교통정보">
                {walking.trafficInfo}
            </Descriptions.Item>
        </Descriptions>

        <div className="text-center mt-6">
            <Image src={walking.mainImage} alt={walking.mainTitle} className="max-w-full" />
        </div>
    </Card>
  )
}
export default WalkingReadComponent