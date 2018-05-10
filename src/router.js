const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children:[
        {
            path: '/myArticle',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/myArticle.vue'], resolve)
        }]
}];
export default routers;