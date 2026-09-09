import { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getStoreList } from "../../api/openApiApi";
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

const StoreListComponent = () => {

    const [serverData, setServerData] = useState(initState);

    const {
        page,
        size,
        moveToList,
        moveToRead
    } = useCustomMove();

    useEffect(() => {
        getStoreList({ page, size })
            .then((data) => {
                setServerData(data);
            });
    }, [page, size]);

    return (
        <div className="mx-2 mt-10 border-2 border-blue-100">

            <div className="mx-auto flex flex-wrap justify-center p-6">

                {serverData.dtoList.map((store) => (

                    <div
                        key={store.bizesId}
                        onClick={() => moveToRead(store)}
                        className="m-2 w-full min-w-[400px] cursor-pointer rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                    >

                        <div className="flex items-center">
                            <div className="w-8/12 p-2 text-lg font-semibold">
                                {store.bizesNm}
                            </div>
                        </div>

                        <div className="px-2 py-1 text-gray-600">
                            {store.rdnmAdr}
                        </div>

                        <div className="px-2 py-1 text-gray-500">
                            {store.signguNm} · {store.lnoAdr}
                        </div>

                    </div>

                ))}

            </div>

            <PageComponent
                serverData={serverData}
                movePage={moveToList}
            />

        </div>
    );
};

export default StoreListComponent;