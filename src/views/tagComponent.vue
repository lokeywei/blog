<template>
    <div class="content_right right_nav">
        <h2 class="ab_title"><a href="#" style="color: #555555">标签云</a></h2>
        <Tag class="tag" color="blue">标签一</Tag>
        <Tag class="tag" color="green">标签二</Tag>
        <Tag class="tag" color="red">标签</Tag>
        <Tag class="tag" color="yellow">标签四</Tag>
        <Tag class="tag" color="blue">标签一</Tag>
        <Tag class="tag" color="green">标签</Tag>
        <Tag class="tag" color="red">标签三</Tag>
        <Tag class="tag" color="yellow">标签四</Tag>
        <Tag class="tag" color="blue">标签</Tag>
        <Tag class="tag" color="green">标签二</Tag>
        <Tag class="tag" color="red">标签三</Tag>
        <Tag class="tag" color="yellow">标签四</Tag>
        <div class="clear_fix"></div>
    </div>

</template>

<script>
    export default {
        name: "tagComponent"
    }
</script>

<style scoped>
    .right_nav{
        height: auto;
    }

    .tag{
        margin-left: 10px;
        margin-top: 5px;
    }
</style>