import axios from 'axios'


// app.get('/', myController.get);
// app.post('/', myController.post);
// app.put('/:id', myController.put);
// app.delete('/:id', myController.delete);

const getAll = (url) => { 
    axios.get(url)
    .then((response) => { console.log("Success!!!!!!!!",response)
    // .catch((error) => { console.log(error)})
    })
};

const getById = (url, userId) => axios.get(`${url}/${userId}`);

const addItem = (url, obj) => axios.post(url, obj);

const updateItem = (url, userId, obj) => axios.patch(`${url}/${userId}`, obj);



export const addVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


export const addUser = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const updateVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

//Get data
export const getData = async (url) => {
    axios
        .get(`${url}`)
        .then(data => console.log(data.data))
        .catch(error => console.log(error));
};


export const deleteVolunteer = async (url, user) => {
    try {
        const response = await axios.post(`${url}`, user);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}


// export const addItem = async (url, obj) => {
//     const user = await axios.post("https://jsonplaceholder.typicode.com/users", obj)
//     console.log("user", user)
// };



// export const checkDriver = async (url, driver) => {
//     try {
//         const response = await axios.post(`${url}`, driver);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }





export { addItem, getById, getAll, updateItem };

export default addVolunteer;





