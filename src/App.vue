<template>
  <div id="app">
    <SatisfactionForm />
  </div>
</template>

<script>
import SatisfactionForm from './components/SatisfactionForm.vue'

export default {
    name: 'App',
    data () {
        return {
            isDragging: false
        }
    },
    components: {
        SatisfactionForm
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 8px;
  padding-top: 50px;
  color: #2c3e50;
  background-color: #3E3C3F;
  height: 100vh;
}
body {
  margin: 0;
}
</style>
