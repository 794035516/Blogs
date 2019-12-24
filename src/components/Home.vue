<template>
    <div id="home">
        <div>
            <ul class="title">
                <li v-for = "title in blog_title" :key = title.id>
                    <!-- <button class="btn" @click="$goRoute('addBlog')">
                         {{title}}
                    </button> -->
                    <router-link  :to="{name:title.blog_path.name}">
                        {{title.blog_name}}
                        {{title.blog_path.name}}
                    </router-link>
                </li>
                <button @click.prevent="clk">登陆</button>
                <button @click.prevent="clk2">注册</button>
                <!-- <button @click.prevent="seeBlog">查看</button> -->
            </ul>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name:"Home",
    data:function(){
        return{
            blog_title:[{
                blog_name:"博客",
                blog_path:{name:"blogs"},
            },
              {
                blog_name:"写博客",
                blog_path:{name:"addBlog"},
              },
            ],
            see:-1,
            
        }
    },
    methods:{
        clk:function(){
            // this.$goRoute('/addBlog');
            Bmob.User.login("bmob2015","bmob2015").then(data => {
                console.log(data);
            }).catch(err =>{
                console.log(err);
            })
        },
        // 添加用户
        clk2:function(){
            let params = {
                username: 'bmob2015',
                password: 'bmob2015',
                email: 'bmob2015@bmob.cn',
                phone: '',
            }   
            Bmob.User.register(params).then(res => {
            console.log(res)
            }).catch(err => {
            console.log(err)
            });
        },

        queryAll:function(){
            // let query = Bmob.Query("first_table");
            // query.find().then(data =>{
            //     console.log(data);
            // }).catch(err => {
            //     console.log(err);
            // })
            // console.log(this.query)
            // i
            
        },
        addOne:function(){
            let table = Bmob.Query("first_table");
            table.set("ObjectId","3");
            table.set("sex","女");
            table.set("name","你好");
            table.save().then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
        },

        seeBlog:function(){
            let user = Bmob.User.current();
            let query = Bmob.Query("_User")
            query.get(user.objectId).then(res => {
                res.increment('test2');
                res.save();
            }).catch(err => {
                console.log(err);
            })
            
        }
    },
    
}
</script>

 <style scoped>
body{
    padding:0;
    margin:0;
}

#home{
    width: 100%;
    box-sizing: border-box;
}


.title > li{
    display: inline-block;
    padding-right:60px;
    text-align: center ;
     
 } 
ul.title {
    background-color: red;
    padding-right: 30px;
    font: 18px arial;
    text-align: center;
    color: white;
}

.btn:focus{
    background-color: blue;
}

</style>