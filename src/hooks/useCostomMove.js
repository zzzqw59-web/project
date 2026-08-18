import { createSearchParams, useNavigate, useSearchParams } from "react-router";

// 쿼리 파라미터의 값을 숫자로 변환
const getQueryNumber = (param, defaultValue) => {
    if (!param) {
        return defaultValue;
    }

    return parseInt(param);
};

const useCustomMove = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    const page = parseInt(queryParams.get("page")) || 1;
    const size = parseInt(queryParams.get("size")) || 10;

    const queryDefault = createSearchParams({
        page: String(page),
        size: String(size)
    }).toString();

    const moveToList = (pageParam) => {
        let queryStr = queryDefault;

        if (pageParam) { 
            const targetPage = getQueryNumber(pageParam.page, page);
            const targetSize = getQueryNumber(pageParam.size, size);

            queryStr = createSearchParams({
                page: String(targetPage),
                size: String(targetSize),
            }).toString();
        }

        navigate({
            pathname: "../list",
            search: `?${queryStr}`
        });
    };

    const moveToRead = (no) => {
        navigate({
            pathname: `../read/${no}`,
            search: `?${queryDefault}`
        });
    };

    const moveToModify = (no) => {
        navigate({
            pathname: `../modify/${no}`,
            search: `?${queryDefault}`
        });
    };

    return {moveToList, moveToRead, moveToModify, page, size};
}

export default useCustomMove;