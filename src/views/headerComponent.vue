<template>
    <div class="header">
        <img class="logo" src="./img/logo.png"/>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">专栏</a></li>
            <li><a href="#">博客</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="https://github.com/lokeywei" target="_blank">gitHub</a></li>
            <li><a href="#">留言</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "headerComponent"
    }
</script>

<style scoped>
    .header{
        height: 50px;
        background-color: black;
    }
    .logo{
        float: left;
        margin-left: 15%;
        padding-top: 5px;
        height: 50px;
    }
    ul{
        margin-left: 50%;
        text-align: center;
        color: white;
    }
    li{
        list-style: none;
        float:left;
        margin-left: 25px;
        height: 50px;
        width: 60px;
        font-size: 16px;
        padding-top: 15px;
    }
    a{
        color: white;
    }
    a:hover{
        color: white;
    }
</style>