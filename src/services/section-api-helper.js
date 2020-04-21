import axios from "axios"

const api = axios.create({
    baseURL: "https://alyssa-presentations-timer.herokuapp.com/"
});


export const getAllSect = async ()=>{
    const resp =await api.get(`sections/`)
    return resp.data
}

export const findById = async (sectId)=>{
    const resp =await api.get(`sections/${sectId}`)
    return resp.data
}

export const createSect = async (presId, body) => {
    const resp = await api.post(`/sections/${presId}`, body);
    return resp.data
}

//update
export const updateSect = async ( sectId, body) => {
    const resp = await api.put(`/sections/${sectId}`, body);
    return resp.data
}

//delete
export const deleteSect = async ( sectId) => {
    const resp = await api.delete(`/sections/${sectId}`);
    return resp.data
};

export const deleteAllSect = async (presId, sectId) => {
    const resp = await api.delete(`/sections/${presId}/${sectId}`);
    return resp.data
};

// router.get('/', sectionController.getAll)
// router.get('/:sectId', sectionController.getById)
// router.post('/:presId', sectionController.create)
// router.put('/:sectId', sectionController.update)
// router.delete('/:sectId', sectionController.remove)
// router.delete('/', sectionController.removeAll)