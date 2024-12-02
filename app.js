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
        items: [1, 2],
      };
    },
    computed: {
      evenItems() {
        return this.items.filter((i) => i % 2 === 0);
      },
    },
    methods: {
      addItem(event) {
        this.items.unshift(this.$refs.myInput.value);
        this.$refs.myInput.value = "";
      },
      remove(i) {
        this.items.splice(i, 1);
      },
      log(item) {
        console.log("log item" + item);
      },
    },
  }).mount("#app");