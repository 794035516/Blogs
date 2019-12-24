<template>
  <div id="app">
    <!-- <router-link :to="{name:'home'}">home</router-link>
    <router-link :to="{name:'addBlog'}">add</router-link>
    <router-view></router-view> -->
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/components/Home'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'
import * as firebase_store from './firebase'
export default {
  name: 'App',
  components:{
    Home,AddBlog,SingleBlog,firebase_store
  }
}
</script>

<style>
*{
  margin: 0;
  padding : 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
