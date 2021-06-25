<template>
  <div>
     
       <div v-if="loading"  class="flex justify-center items-center w-screen h-screen bg-blue-lightest">
            <div class="rounded-full loader ease-linear content-center border-8 border-t-8 border-gray-100 h-20 w-20"></div>
       </div>
      <PostCard v-else :post="post"/>
      <div class="card-body p-4">
                    <div class="btn-group">
                      <button @click="deletePost" class="btn-delete" >Delete </button>
                      <router-link class="btn-edit" :to="{name:'post.edit',props:[]}">Edit </router-link>
                    </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostCard from '../components/PostCard.vue'
import axios from 'axios'
import {useRoute} from 'vue-router';
export default {
    components:{
        PostCard
    },
    setup(){
          const post =ref([])
          const loading =ref(true)
          const route = useRoute()

        function getpost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
                // handle success
                loading.value = false
                post.value = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        getpost()

        function deletePost() {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
                // handle success
                loading.value = false

                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        deletePost()

         return {post,loading,deletePost}


    }


}
</script>

<style lang="scss" scoped>

  .btn-edit {
    @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ;
  }
  .btn-delete {
    @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-indigo-700 ;
  }

.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>