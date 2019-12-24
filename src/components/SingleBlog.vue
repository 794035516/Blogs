<template>
    <div>
        <!-- <p>{{blog.title | to-uppercase}}</p> -->
        <article> {{blog.title|touppercase}}</article>
        <article>  {{blog.content}}</article>
    </div>    
</template>

<script>
export default {
    name:"SingleBlog",
    data:function(){
        return{
            blog:{},
            // blog:{},
            // title:"",
            // body:"",
            id:this.$route.query.id,
        }
    },
    // computed:{
    //     id_type:function(){
    // return parseInt(this.$route.params.id);
    //     },
    // },
    beforeMount:function(){
        // this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        this.$http.get('https://blog-23a08.firebaseio.com/post/' + this.id +".json")
        .then(data =>{
            // console.log(data.body);
            // console.log(data);
            // this.blog = data.body;
            // this.title = data.body.title;
            // this.body = data.body.body;
            let val = data.json();
            return val;
        }).then(data =>{
            this.blog = data;
        })
    },
    // filters:{
    //     uppercase:function(value){
    //         let val = value;
    //         console.log("filter",val);
    //         return val.toUpperCase();
    //         // return value;
    //     },  
    // },
}
</script>

<style scoped>
div{
    max-width: 60%;
    margin: 0 auto;
    margin-top: 40px;
    background-color: lightgrey;
    padding: 20px;
    text-align: center;
    border:1px dotted black;
}
p{
    font-size: 22px;    
    font-weight: 700;
}
</style>