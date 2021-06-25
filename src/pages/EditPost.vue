<template>
    <div  class="min-h-screen min-v-screen p-8 bg-grey-lightest font-sans" >
       
            <form @submit.prevent="SubmitForm">
                
                <h3 class="mb-6 text-light-500  italic">Edit New Post</h3>
            
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>

                <input v-model.lazy="form.title" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" type="text" >
            
        
                <label class="block text-gray-700 text-sm font-bold mb-2" >
                    Description
                </label>

                <textarea v-model.lazy="form.body"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description"></textarea>
            
             
                <div class="flex items-center justify-center mt-6">

                     <button  class="btn" type="submit">subnmit form</button>

                </div>

            </form>
         
       
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios';
import { useRoute } from 'vue-router';
export default {
    setup(){

        const form = reactive({
            id:null,
            title:"",
            body:""
        });

        function SubmitForm (){
            
             axios.put('https://jsonplaceholder.typicode.com/posts',{
                
                    id: form.id,
                    title: form.title,
                    body: form.body,
                    userId: 1,
              
             })
            .then(function () {
                // handle success
                
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        }


        const route = useRoute()
        

        function getpost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
                // handle success
                form.id = route.params.id
                form.title = response.data.title
                form.body = response.data.body
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

        getpost()

        return {form,SubmitForm}



    }
}
</script>

<style>
 .btn{
    @apply ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 ;
  }
</style>