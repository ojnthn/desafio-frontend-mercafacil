import MyCard from '../components/Card.vue';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  title: 'Example/Card',
  component: MyCard,
};

const Template = (args) => ({
  components: { MyCard },
  data() {
      return {
        options: {
          name: "Rick",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          status: "Alive",
          species: "Human",
          location: {
            name: "Earth"
          },
          episode: [
            {
              episode: "S03E02",
              name: "Rickmancing the Stone"
            }
          ]
        }
      }
  },
  setup() {
    return { ...args };
  },
  template: '<my-card :character="options"/>',
});

export const Card = Template.bind();