import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-presentations-timer.herokuapp.com/"
});



//delete
export const deleteTalk = async (presId, sectId) => {
    const resp = await api.delete(`/talkpoint/${presId}/${sectId}`);
    return resp.data
}

//create   
    export const createTalk = async (presId, sectId, body) => {
    const resp = await api.post(`/talkpoint/${presId}/${sectId}`, body);
    return resp.data
}