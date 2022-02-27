import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import App from './App.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,  
  uri: 'https://rickandmortyapi.com/graphql',
});

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}); 

app.use(VueSweetalert2);
app.mount('#app');