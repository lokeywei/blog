<style scoped>
    .background{
        background-color: gainsboro;
        height: 2000px;
    }
</style>
<template>
    <div class="background">
        <headerComponent></headerComponent>
        <!--左边内容部分-->
         <router-view></router-view>
        <!--右侧内容部分-->
        <searchComponent></searchComponent>
        <newsComponent></newsComponent>
        <tagComponent></tagComponent>
        <hotComponent></hotComponent>
        <contactComponent></contactComponent>
    </div>
</template>
<script>
    import contactComponent from './contactComponent.vue'
    import searchComponent from './searchComponent.vue'
    import hotComponent from './hotComponent.vue'
    import tagComponent from './tagComponent.vue'
    import newsComponent from './newsComponent.vue'
    import headerComponent from './headerComponent.vue'
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        mounted() {
             this.$router.push("/myArticle")
            // alert("start!")
        },
        components: {
            contactComponent,searchComponent,hotComponent,tagComponent,newsComponent,headerComponent},
        methods: {

        }
    };
</script>
