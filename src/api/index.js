import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const { data: { comfirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        const modifiedData = { comfirmed, recovered, deaths, lastUpdate };

        return modifiedData;
    } catch (error) {

    }
}