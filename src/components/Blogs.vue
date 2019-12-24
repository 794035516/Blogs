<template>
    <div class="msg">        
            <button @click.prevent="addOne">添加一条博客</button>
            <input v-model="query" type="text" :placeholder="placeholder">
            <ul class="msg_ul">
                
                <li class="msg_ul_li" v-for = 'msg in filteredBLogs' :key='msg.id'>
                    <router-link :to="{name:'singleBlog', query:{id:msg.id}}" >
                        <span class="font_title">{{msg.title | touppercase}}</span>
                    </router-link>
                    
                    <span class="font_body">
                        <!-- {{msg.body | snippet}}        -->
                        {{msg.content }}       
                    </span>
                </li>
            </ul>
        </div>
</template>


<script>
export default {
    name:"Blogs",
    data:function(){
        return{
            query_btn:"搜索",
            blog_msg:[],
            query:"",
            placeholder:"请输入你要搜索的信息"
        }
    },
    created :function(){
        // this.$http.get('http://jsonplaceholder.typicode.com/posts')
        this.$http.get('https://blog-23a08.firebaseio.com/post.json')
        .then(function(data){
            let val = data.json();
            return val;
            // console.log(data);
            // console.log("---");
            // console.log(val);
            // this.blog_msg = data.body;
        })
        .then(function(data){
            // i is a id,includes some Object
            let arr = [];
            for(let i in data){
                data[i].id = i;
                // console.log(data[i]);
                arr.push(data[i]);
            }
            // console.log(arr)
            this.blog_msg = arr;
        })
        
    },
    // filters:{
    //     'to-uppercase':function(filter){
    //         return filter.toUpperCase();
    //     },
    //     snippet:function(filter){
    //         return filter.slice(0,150) + "...";
    //     }
    // },
    computed:{
        filteredBLogs:function(filter){
            return this.blog_msg.filter(blog =>{
                return blog.title.match(this.query)
            });
        }
        /* see:function(){
            let user = Bmob.User.current();
            if(user.test2 == undefined ){
                user.test2 = 0;
            }
            return user.test2;
        } */
    },
}
</script>

<style scoped>

.msg{
    margin:0 auto;
    max-width:60%;
    margin-top:20px;
}

.msg_ul{
    
    display: flex;
    flex-flow: 1;
    flex-wrap: wrap;
}


.msg_ul li{
    width: 100%;
    border: 1px dotted grey;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    flex-basis:100%;
    background-color: lightgrey;
}

.font_title{
    font-size: 22px;
    font-weight:700;
    display: block;
}

.font_body{
    font-size: 16px;
    font-weight: 300;
    text-align: left;
    display: block;
}
</style>