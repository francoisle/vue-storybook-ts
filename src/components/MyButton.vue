<template>
  <p class="message" :style="{color: this.color}">
    Received msg prop: {{msg}}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop({
    default: "Hello"
  })
  private msg!: string;

  @Prop({
    default: "red"
  })
  private color!: string;
}
</script>

<style scoped>
.message {
  font-size: 18px;
  font-weight: bold;
}
</style>
