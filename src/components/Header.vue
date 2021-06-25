<template>
<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="#">
          <span class="sr-only">Workflow</span>
          <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
        </a>
      </div>
    
      <nav class="hidden md:flex space-x-10">

          <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
             Go to Home
          </router-link>
          <router-link to="/users" class="text-base font-medium text-gray-500 hover:text-gray-900">
            User
          </router-link>
          <router-link to="/posts" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Post
          </router-link>

      </nav>

      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name:'Header',
  setup() {
    
  },
}
</script>

<style scoped>
.router-link-active{
  color:rgba(0, 0, 0, 0.9) !important;
  border-bottom:2px solid rgba(0, 0, 0, 0.9)!important;
}
</style>