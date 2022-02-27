import MyOrder from "../components/Order.vue";

export default {
  title: 'Example/Order',
  component: MyOrder,
};

const Template = (args) => ({
  components: { MyOrder },
  template: '<my-order />',
});

export const Order = Template.bind({});