/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";

import Welcome from "./Welcome";

import MyButton from "./MyButton";

storiesOf("Welcome", module).add("to Storybook", () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo("Button") }
}));

storiesOf("Button", module)
  .add("My first button story", () => ({
  components: { MyButton },
  template: `
 <my-button></my-button>
  `
}));

/* eslint-enable react/react-in-jsx-scope */
