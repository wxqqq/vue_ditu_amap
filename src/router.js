// src/router.js
'use strict'

export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component: require('./components/contents/hello.vue')
        },
        '/hi': {
            name: 'hi',
            // 按需加载
            component: function (resolve) {
                require(['./components/contents/hi.vue'], resolve)
            }
        }
    })
}
