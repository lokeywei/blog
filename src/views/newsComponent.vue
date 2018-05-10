<template>
    <div class="content_right right_news">
        <h2 class="ab_title"><a href="#" style="color: #555555">最新文章</a></h2>
        <div class="article border">
            <img src="./img/bk.jpg" class="article_img"/>
            <p><a>夜晚仰望星空夜晚仰望星空</a></p>
            <div class="date">
                <div style="float: left">
                    <Icon type="calendar"></Icon>&nbsp;05-10
                </div>
                <div style="float: left;margin-left: 20px;">
                    <Icon type="eye"></Icon>&nbsp;(10)
                </div>
            </div>
        </div>

        <div class="article border">
            <img src="./img/bk.jpg" class="article_img"/>
            <p><a>夜晚仰望星空夜晚仰望星空</a></p>
            <div class="date">
                <div style="float: left">
                    <Icon type="calendar"></Icon>&nbsp;05-10
                </div>
                <div style="float: left;margin-left: 20px;">
                    <Icon type="eye"></Icon>&nbsp;(10)
                </div>
            </div>
        </div>

        <div class="article">
            <img src="./img/bk.jpg" class="article_img"/>
            <p><a>夜晚仰望星空夜晚仰望星空</a></p>
            <div class="date">
                <div style="float: left">
                    <Icon type="calendar"></Icon>&nbsp;05-10
                </div>
                <div style="float: left;margin-left: 20px;">
                    <Icon type="eye"></Icon>&nbsp;(10)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newsComponent"
    }
</script>

<style scoped>
    .border{
        border-bottom: 1px gainsboro dashed ;
    }
    .article{
        margin-left: 5%;
        width: 90%;
        height: 80px;
    }
    .article p{
        padding-top: 10px;
    }
    .article p a{
        font-size: 15px;
        color: #333333;
    }
    .article_img{
        margin-top: 10px;
        margin-right: 5px;
        height: 60px;
        width: 60px;
        float: left;
    }
    .date{
        margin-top: 10px;
    }
</style>