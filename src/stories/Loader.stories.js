import MyLoader from "../components/Loader.vue";

export default {
  title: 'Example/Loader',
  component: MyLoader,
};

const Template = (args) => ({
  components: { MyLoader },
  template: '<my-loader />',
});

export const Loader = Template.bind({});