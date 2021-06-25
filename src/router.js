import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import User from './pages/User.vue'
import ShowUser from './pages/ShowUser.vue'

import templatePost from './pages/templatePost.vue'
import Post from './pages/Post.vue'
import ShowPost from './pages/ShowPost.vue'
import CreatePost from './pages/CreatePost.vue'
import EditPost from './pages/EditPost.vue'


const routes = [

    { path: '/',name:'home', component: Home },
    { path: '/users',name:'user', component: User},
    { path: '/users/:id',name:'userId', component: ShowUser },

    { path: '/posts',name:'postTemplate', component: templatePost ,children:[
      
      { path: '',name:'post', component: Post},
      { path: ':id',name:'postId', component: ShowPost},
      { path: 'create',name:'post.create', component: CreatePost},
      { path: 'edit/:id',name:'post.edit', component: EditPost},

    ]},

  ]

  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router 