import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-presentations-timer.herokuapp.com/"
});



//delete
export const deleteTalk = async (pointId) => {
    const resp = await api.delete(`/talkpoint/${pointId}}`);
    return resp.data
}

export const getTalkById = async(id) => {
    const resp = await api.get(`/talkpoint/${id}`)
}

//create   
    export const createTalk = async (sectId, body) => {
    const resp = await api.post(`/talkpoint/${sectId}`, body);
    return resp.data
}

//update talk point
export const updateTalk = async (pointId, body) => {
    const resp = await api.put(`/talkpoint/${pointId}`, body);
    return resp.data
}