<template>
    <div class="container">
        <app-create-form 
            :addNewPost="addNewPost"
            :title="title"
            :content="content"
            ></app-create-form>
        <div class="row mt-5 mb-3">
            <h1 class="text-center fs-1 fw-bold">{{ msg }}</h1>
        </div>
        <div v-if="posts" class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col" class="text-end">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <app-show-posts-vue 
                            v-for="post in posts" 
                            :key="post.id"
                            :post ="post"
                            :deletePost="deletePost"
                        ></app-show-posts-vue>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import appShowPostsVue from '../components/appShowPosts.vue';
import appCreateForm from '../components/appCreateForm.vue'

import PostService from '../services/PostService';
export default {
    components:{
        appShowPostsVue,
        appCreateForm
    },
    data(){
        return {
            msg: 'Show all posts',
            posts: [],
            title: null,
            content: null
        }
    },
    methods: {
        
        showAllPosts(){
            PostService.getPosts()
            .then(response => {
                this.posts = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        
        addNewPost(title, content){
            PostService.addPost({
                'title': title,
                'content': content
            })
            .then(res => {
                if(res.status == 200){
                    this.showAllPosts();
                }
            })
            .catch(error => {
                console.log(error)
            })
        },

        deletePost(id){
            PostService.destroyPost(id)
            .then(res => {
                if(res.status == 204){
                    this.showAllPosts();
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created() {
        this.showAllPosts();
    }
}
</script>