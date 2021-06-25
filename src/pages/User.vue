<template>
     <div  class="md:container mx-auto px-4" >
      <div class="flex flex-wrap -m-3" >
        <div v-if="loading"  class="flex justify-center items-center w-screen h-screen bg-blue-lightest">
            <div class="rounded-full loader ease-linear content-center border-8 border-t-8 border-gray-100 h-20 w-20"></div>
        </div>
        <CardComponent  v-else v-for="user in users" :key="user.id"  :user="user"/>
     
      </div>


     
    </div>
  
</template>

<script>
import CardComponent from '../components/card.vue'
import { ref } from '@vue/reactivity';
import axios from 'axios';

export default {
    components:{
        CardComponent
    },
    setup(){
        const users =ref([])
        const loading =ref(true)
       
        
        function getUsers(){

           axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                loading.value = false
                users.value = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
           

        }

      

        getUsers()

        return {users,loading}
    }
}
</script>

<style lang="scss" scoped>
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