import MyHeader from '../components/Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
};

const Template = (args) => ({
  components: { MyHeader },
  template: '<my-header />',
});

export const Header = Template.bind({});