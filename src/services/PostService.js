import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getPosts(){
        return apiClient.get('/posts')
    },
    getPost(id){
        return apiClient.get('/posts/' + id)
    },
    addPost(data){
        return apiClient.post('/posts', data)
    },
    updatePost(id, data){
        return apiClient.put('/posts/' + id, data)
    },
    destroyPost(id){
        return apiClient.delete('/posts/' + id)
    }
}
