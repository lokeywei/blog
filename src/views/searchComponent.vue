<template>
    <div class="content_right right_search">
        <Input class="input" placeholder="输入关键字"></Input>
        <Button class="search" slot="append" icon="ios-search"></Button>
    </div>
</template>

<script>
    export default {
        name: "searchComponent"
    }
</script>

<style scoped>
    .right_search{
        height: 80px;
    }
    .input{
        width: 180px;
        height: 20px;
        margin-top: 15px;
        margin-left: 15px;
    }
    .search{
        margin-top: 26px;
    }
</style>