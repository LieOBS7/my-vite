const { createApp } = Vue

createApp({
  template: `<h1>{{ text }}</h1><button @click="count++">{{ count }}</button>`,
  data() {
    return { text: 'vite.js 在跑', count: 0 }
  }
}).mount('#app')
