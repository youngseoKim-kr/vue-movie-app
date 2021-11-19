import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  // use메소드는 vue.js에 연결할 플로그인,라이브러리
  .use(router)  //$route, $router
  .use(store) //$store
  .use(loadImage) //$loadImage
  .mount('#app')