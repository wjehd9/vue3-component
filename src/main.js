import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';

import Test0A from './components/Test0A.vue';

const AsyncComponent = defineAsyncComponent(() => import('./components/Test10A.vue'));

const StandaloneComponent = defineAsyncComponent({
    loader: () => import("./components/Test10B.vue"),
    delay: 200, // default: 200
    timeout: 3000, // default: Infinity
    suspensible: false, // default: true
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        retry();
      } else {
        fail();
      }
    }
  });

const app = createApp(App);

app.use(router);

app.component("Test0A", Test0A);
app.component("Test10A", AsyncComponent);
app.component("Test10B", StandaloneComponent);

app.mount('#app');
