import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios.get('../data/data.json');
        return response.data
    }
    catch (error) {
        throw new Error(error)
    }
}