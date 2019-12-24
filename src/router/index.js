import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
import Blogs from '@/components/Blogs'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    {
      path:'/addBlog',
      name:'addBlog',
      component:AddBlog,
    },
    {
      path:'/blog',
      name:'singleBlog',
      component:SingleBlog,
    },
    {
      path:"/blogs",
      name:'blogs',
      component:Blogs,
    }
  ],
  mode:'history',
})
