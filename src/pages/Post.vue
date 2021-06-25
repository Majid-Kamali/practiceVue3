<template>
  <div  class="md:container mx-auto px-4" >
      <br>
       <router-link class="btn-indigo" :to="{name:'post.create'}"> ایجاد پست جدید </router-link>
       <br><br>
      <div class="flex flex-wrap -m-3" >
       <div v-if="loading"  class="flex justify-center items-center w-screen h-screen bg-blue-lightest">
            <div class="rounded-full loader ease-linear content-center border-8 border-t-8 border-gray-100 h-20 w-20"></div>
       </div>
      <PostCard v-else v-for="post in posts" :key="post.id"  :post="post" />
     </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostCard from '../components/PostCard.vue'
import axios from 'axios'
export default {
    components:{
        PostCard
    },
    setup(){
          const posts =ref([])
          const loading =ref(true)


        function getpost() {
            
         axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                loading.value = false
                posts.value = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        getpost()


         return {posts,loading}


    }


}
</script>

<style  scoped>


 .btn-indigo {
    @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ;
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