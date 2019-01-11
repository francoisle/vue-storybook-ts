<template>
  <div class="component-container">
    <my-button
        :msg="'This is working'"
        :color="'blue'"
    ></my-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "./components/MyButton.vue";

@Component({
  components: {
    "my-button": MyButton
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.component-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
