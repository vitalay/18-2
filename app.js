Vue.createApp({
    data() {
        return {
            myHtml:  '<h1>Vue 3 APP</h1>',
            titel: 'Hello Vue!',
            person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        items: [1, 2, 3, 4, 5]
        }
    }
}).mount('#app')