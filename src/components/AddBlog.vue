<template>
    <div id="addBlog">
        <div>
            <span v-text="title"></span>
            <input type="text" v-model="blog.title">
            <div class="checkbox">
            <span v-text="title_type"></span>
                <li v-for="t in title_type_checkbox" :key="t.id">
                    {{t.value}}
                    <input type="checkbox" :value="t.value"
                        v-model="blog.title_type">
                </li>
            </div>

            <span v-text="author"></span>
            <input type="text" v-model="blog.author">

            <span v-text="time"></span>
            <input type="date" v-model="blog.time">

            <div class="radio">
                <span v-text="sex"></span>
                <li v-for="s in sex_radio" :key="s.id">
                    <span>{{s.value}}</span>
                    <input :name="sex" type="radio"
                    :value="s.value" v-model="blog.sex">
                </li>
            </div>
            
            <span v-text="content"></span>
            <textarea v-model="blog.content"></textarea>

            <span v-text="content_type"></span>
            <select v-model="blog.content_type">
                <option v-for="t in content_type_select" :key="t.id">
                    {{t.value}}
                </option>
            </select>
            <button  @click.prevent="clk">按钮</button>
        </div>    
        <hr>
        <div id="preview">
            <P>
                {{title}}:{{blog.title}}
            </P>
            <p>
                {{time}}:{{blog.time}}
            </p>
            <p>
                {{sex}}:{{blog.sex}}
            </p>
            <p>
                {{title_type}}:{{blog.title_type}}
            </p>
            <p>
                {{content_type}}:{{blog.content_type}}
            </p>
            <p>
                {{author}}:{{blog.author}}    
            </p>

            </div>
        </div>
            
</template>

<script>

export default {
    name:"addBlog",
    data:function(){
        return{
            title:"标题",
            author:"作者",
            time:"时间",
            sex:"性别",
            content:"内容",
            blog:{
                title:"",
                author:"",
                time:"",
                sex:"",
                title_type:[],
                content_type:"",
                content:"",
            },
            sex_radio:[
                {value:"男"},
                {value:"女"},
                {value:"不公布"},        
            ],
            title_type:"标题类型",
            title_type_checkbox:[
                {value:"Nodejs"},
                {value:"Angular"},
                {value:"Vuejs"},
                {value:"Reackjs"},
                {value:"bootstrapjs"},
                {value:"ES6"},
            ],
            content_type:"内容分类",
            content_type_select:[
                {value:"前端"},
                {value:"后端"},
                {value:"全栈"},
                {value:"练练"},
            ]
        }
    },
    methods:{
        clk(){
            // this.$http.post("http://jsonplaceholder.typicode.com/posts",{
            this.$http.post("https://blog-23a08.firebaseio.com/post.json",this.blog)
            .then(function(data){
                console.log("---");
                console.log(data);
            })
        }
    }
}        
</script>

<style scoped>
#addBlog{
    max-width: 60%;
    margin:0 auto;
}

#content *{
    box-sizing: border-box;

    /* padding:20px; */
}
#content{
    max-width: 600px;
    margin:6px auto;
}

span{
    display: block;
    margin:20px 0 0px;
}

li{
    margin:0;
    padding: 0;
}
input[type="text"],textarea,select,input[type="date"]{
    width:100%;
    display: block;
    padding:8px;
    border: 1px solid lightgrey;
}

select{
    border-radius: 4px;
    border: 1px solid lightgrey;
}

input[type="radio"]{
    display: inline-block;
}
/* --------------- */
.radio>span:first-child{
    margin-right: 20px;
    /* display:block; */
    /* background-color:red;  */
}

.radio li span{
    margin-top: 0;
}

.radio span{
    display: inline-block;
}

.radio li{
    display: inline;
}

.radio li input{
    margin-right:10px;
    /* display: inline-; */
}
.radio li {
    margin-right:50px;
}
.checkbox{
    margin-top: 0;
}

.checkbox span{
    display: inline-block;
    margin-top: 0;
}

.checkbox li{
    display: inline-block;
}

.checkbox input{
    display: inline-block;
    margin-right:10px;
}

button{
    display: block;
    background:greenyellow;
    border: 0;
    margin: 20px 0;
    padding:6px;
    border-radius:4px;
    cursor: pointer;   
}
</style>