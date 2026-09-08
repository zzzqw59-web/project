import { Card, Flex } from "antd";
import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { useNavigate } from "react-router";
import { getWalkingList } from "../../api/openApiApi";
import PageComponent from "../common/PageComponent";


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

const {Meta} = Card;

const WalkingListComponent = () => {
  const [serverData, setServerData] = useState(initState);
  const {page, size, moveToList} = useCustomMove();
  const navigate = useNavigate();

  useEffect(() => {
    getWalkingList({page, size})
    .then((data) => {
      setServerData(data);
    });
  }, [page, size]);

  const moveToRead = (walking) => {
    navigate(`/walking/read/${walking.seq}`, {
      state: walking,
    });
  };
  return (
    <div>
      <Flex wrap="wrap" gap="large">
        {serverData.dtoList.map((walking) => (
          <Card key={walking.seq} hoverable style={{width: 240}} cover={
            <img draggable={false} alt={walking.mainTitle} src={walking.thumbnailImage} style={{height: 185, objectFit: "cover"}} />
          }
          onClick={() => moveToRead(walking)}
          >
            <Meta title={walking.mainTitle} description={walking.place} />
          </Card>
        ))}
      </Flex>

      <div className="mt-10">
        <PageComponent serverData={serverData} movePage={moveToList} />
      </div>
    </div>
  )
}
export default WalkingListComponent