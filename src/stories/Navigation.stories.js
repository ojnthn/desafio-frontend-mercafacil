import MyNavigation from "../components/Navigation.vue";

export default {
  title: 'Example/Navigation',
  component: MyNavigation,
};

const Template = (args) => ({
  components: { MyNavigation },
  template: '<my-navigation />',
});

export const Navigation = Template.bind({});