/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";

import Welcome from "./Welcome";

// @ts-ignore
import MyButton from "../src/components/MyButton.vue";

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
  }))
  .add("Now with some props", () => ({
    components: { MyButton },
    template: `
 <my-button :msg="myMessage" :color="myColor"></my-button>
  `,
    data() {
      return {
        myMessage: "This is finally working",
        myColor: "blue"
      };
    }
  }));

/* eslint-enable react/react-in-jsx-scope */
