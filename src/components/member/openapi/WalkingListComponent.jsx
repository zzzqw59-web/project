import { Card, Flex } from "antd";
import { useEffect, useState } from "react";
import PageComponent from "../../common/PageComponent";
import { getWalkingList } from "../../../api/openApiApi";
import useCustomMove from "../../../hooks/useCustomMove";
import { Meta } from "antd/es/list/Item";

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


const WalkingListComponent = () => {
    const [serverData, setServerData] = useState(initState);
    const {page, size, moveToList} = useCustomMove();

    useEffect(() => {
        getWalkingList({page, size})
        .then((data) => {
            setServerData(data);
        });
    }, [page, size]);
  return (
    <div>
        {/* 도보 여행 정보 목록 */}
        <Flex wrap="wrap" gap="large">
            {serverData.dtoList.map((walking) => (
                <Card key={walking.seq} hoverable style={{ width: 240 }} cover={
                    <img
                        draggable={false}
                        alt={walking.mainTitle}
                        src={walking.thumbnailImage}
                        style={{height: 185, objectFit: "cover"}}
                    />
                    }
                >
                    <Meta title={walking.mainTitle} description={walking.place} />
                </Card>
            ))}
        </Flex>

        {/* 페이징 */}
        <div className="mt-10">
            <PageComponent serverData={serverData} movePage={moveToList} />
        </div>
    </div>
  )
}
export default WalkingListComponent