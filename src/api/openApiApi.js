import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";

const prefix = `${API_SERVER_HOST}/api/openapi`;

export const getWalkingList = async ({page, size}) => {
    const response = await axios.get(`${prefix}/walking`, {
        params: {
            page, size
        },
    });

    return response.data;
}