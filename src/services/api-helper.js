import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-presentations-timer.herokuapp.com/"
});

export const getAllPres = async () => {
    const resp = await api.get("/pres");
    return resp.data
}

export const getPresById = async (id) => {
    const resp = await api.get(`pres/${id}`);
    return resp.data
}

export const createPres = async (body) => {
    const resp = await api.post("/pres", body);
    return resp.data
}

export const deletePres = async id => {
    const resp = await api.delete(`/pres/${id}`);
    return resp.data
};

export const updatePres = async (id, body) => {
    const resp = await api.put(`/pres/${id}`, body);
    return resp.data
}



