import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-presentations-timer.herokuapp.com/"
});



//delete
export const deleteTalk = async (presId, sectId) => {
    const resp = await api.delete(`/talkpoint/${presId}/${sectId}`);
    return resp.data
}

//create    is what is coming after the , an ouputting this onto the body? -> talkId
    export const createTalk = async (presId, sectId, talkId) => {
    const resp = await api.post(`/talkpoint/${presId}/${sectId}/${talkId}`, talkId);
    return resp.data
}