<template>
    <div class="container">
        <div class="row my-3">
            <h1 class="text-center fs-1 fw-bold">Update post</h1>
        </div>
        <div class="row my-3">
            <div class="col-md-2"><router-link to="/" class="btn btn-primary">Go back</router-link></div>
        </div>
        <form class="my-3" @submit.prevent>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="post.title">
                </div>
            </div>
            <div class="row mb-3">
                <label for="content" class="col-sm-2 col-form-label">Content</label>
                <div class="col-sm-10">
                    <textarea name="content" rows="2" class="form-control" v-model="post.content"> </textarea>
                </div>
            </div>
            <button 
                type="submit" 
                class="btn btn-primary w-25"
                @click="editPost(id, post.title, post.content)"
            >Save</button>
        </form>
    </div>
</template>

<script>

import PostService from "../services/PostService";
export default {
    props: {
        id: String,
    },
    data(){
        return{
            title: '',
            content: '',
            post: []
        }
    },
    methods: {
        showPost(){
            PostService.getPost(this.id)
            .then(res => {
                this.post = res.data;
            })
            .catch(error => {
                console.log(error);
            })
        },

        editPost(id, title, content){
            PostService.updatePost(id, {
                'title': title,
                'content': content
            })
            .then(res => {
                if(res.status == 201){
                    alert('This post updated. Go to posts!');
                    this.showPost();
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
    created(){
        this.showPost()
    }
}
</script>