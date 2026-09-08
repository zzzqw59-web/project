import { Card, Carousel, Flex, Tag, Typography } from "antd";
import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getFoodList } from "../../api/openApiApi";
import PageComponent from "../common/PageComponent";

const {Title, Text, Paragraph} = Typography;

const initState = {
  dtoList: [],
  pageNumberList: [],
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  currentPage: 0,
};

const FoodListComponent = () => {
    const [serverData, setServerData] = useState(initState);
    const {page, size, moveToList} = useCustomMove();

    useEffect(() => {
        getFoodList({page, size}).then((data) => {
            setServerData(data);
        });
    }, [page, size]);
  return (
    <div>
        <Carousel autoplay>
            {serverData.dtoList.slice(0, 4).map((food) => (
                <div key={food.seq}>
                    <div className="relative h-[420px]">
                        <img src={food.mainImage || "/images/no-image.png"} alt={food.mainTitle} className="w-full h-full object-cover" onError={(e) => {
                            e.currentTarget.src = "/images/no-image.png";
                        }} />
                        <div className="absoulute bottom-0 left-0 w-full bg-black/50 p-5">
                            <h3 className="m-0 text-2xl font-bold text-white">{food.mainTitle}</h3>
                            <p className="mt-2 mb-0 text-white">{food.representativeMenu}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>

        <div className="grid grid-cols 1 lg:grid-cols-2 gap-6 mt-6">
            {serverData.dtoList.map((food) => (
                <Card key={food.seq} hoverable style={{body: {
                    padding: 20,
                },
            }}>
                <Flex gap="large" align="center">
                    <img src={food.thumbnailImage || "/images/no-image.png"} alt={food.mainTitle} className="w-40 h-36 object-cover rounded-lg shrink-0" onError={(e) => {
                        e.currentTarget.src = "/images/no-image.png"
                    }} />

                    <Flex vertical gap={6} className="w-full min-w-0">
                        <Flex justify="space-between" align="center" gap="small">
                            <Title level={4} className="!m-0">{food.mainTitle}</Title>
                            <Tag>{food.gugunName}</Tag>
                        </Flex>
                        <div>
                            <Text strong>대표 메뉴</Text>
                            <Paragraph className="!mt-1 !mb-0">{food.representativeMenu}</Paragraph>
                        </div>
                        <Text type="secondary">{food.address}</Text>
                        <Text type="secondary">{food.phone}</Text>
                        <Paragraph ellipsis={{rows: 2}} className="!mb-0">{food.contents}</Paragraph>
                    </Flex>
                </Flex>
            </Card>
            ))}
        </div>

        <div className="mt-10">
            <PageComponent serverData={serverData} movePage={moveToList} />
        </div>
    </div>
  )
}
export default FoodListComponent