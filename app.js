Vue.createApp({
  data() {
    return {
      myHtml: "<h1>Vue 3 APP</h1>",
      title: "Hello Vue!",
      person: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
      },
      items: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0);
    }
  },
  // methods: {
  //     stopPropagation(event) {
  //         event.stopPropagation(); // Исправлена опечатка
  //     }
  // }
}).mount("#app");
