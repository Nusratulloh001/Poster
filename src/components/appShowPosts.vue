<template>
    <tr>
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
        <td class="text-end">
            <router-link
                :to="{ name: 'edit', params: { id: post.id } }"
                class="btn btn-success me-2"
            >Edit</router-link>
            <button 
                class="btn btn-danger"
                @click="deletePost(post.id)"
            >Delete</button>
        </td>
    </tr>  
</template>

<script>
export default {
    props: {
        post: Object,
        deletePost: Function,
    }
}
</script>