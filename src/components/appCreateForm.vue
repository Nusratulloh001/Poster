<template>
    <div class="row my-3">
        <h1 class="text-center fs-1 fw-bold">Create post</h1>
    </div>
    <form action="/" class="my-3" @submit.prevent>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="title">
            </div>
        </div>
        <div class="row mb-3">
            <label for="content" class="col-sm-2 col-form-label">Content</label>
            <div class="col-sm-10">
                <textarea name="content" rows="2" class="form-control" v-model="content"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary w-25" @click="[ addNewPost(title, content), title = '', content = '']">Save</button>
    </form>
</template>

<script>
export default {
    props: {
        addNewPost: Function,
        title: String,
        content: String
    }
}
</script>