Vue.createApp({
    data() {
        return {
            myHtml:  '<h1>Vue 3 APP</h1>',
            titel: 'Hello Vue!',
            person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
        }
    }
}).mount('#app')