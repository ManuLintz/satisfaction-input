<template>
  <div id="app">
    <SatisfactionForm @submit="value => submittedValue = value" />
    <p v-if="submittedValue">
      { <br>"satisfaction": "{{ submittedValue }}"  <br> }
    </p>
  </div>
</template>

<script>
import SatisfactionForm from './components/SatisfactionForm.vue'

export default {
    name: 'App',
    data () {
        return {
            submittedValue: null,
            isDragging: false
        }
    },
    components: {
        SatisfactionForm
    }
}
</script>

<style lang="scss">
@import './sass/variables';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 8px;
  padding-top: 50px;
  color: $FONT_COLOR;
  background-color: $DARK_BACKGROUND_COLOR;
  height: 100vh;
}
body {
  margin: 0;
}
p {
    margin-top: 30px;
    color: $LIGHT_GREY;
    font-size: 30px;
}
</style>
