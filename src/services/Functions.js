import PostService from "./PostService";
export default {
    gPost(id){
        PostService.getPost(id)
        .then(res => {
            return res.data
        })
        .catch(error => {
            return error
        })
    }
}