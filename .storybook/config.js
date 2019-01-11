import { configure } from '@storybook/vue';

import Vue from 'vue';
import MyButton from '../stories/MyButton';

// Register custom components.
Vue.component('my-button', MyButton);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
