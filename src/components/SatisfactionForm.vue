<template>
  <div class="satisfaction-form">
    <label :class="{'has-text-light-grey': isDragging}">How satisfied are you?</label>
    <SatisfactionInput
      v-model="satisfaction"
      @drag-start="isDragging = true"
      @drag-end="isDragging = false"
    />
    <button @click="submit()">
      SUBMIT
    </button>
  </div>
</template>

<script>
import SatisfactionInput from '@/components/SatisfactionInput.vue'

export default {
    name: 'SatisfactionForm',
    data () {
        return {
            satisfaction: 'neutral',
            isDragging: false
        }
    },
    components: {
        SatisfactionInput
    },
    methods: {
        submit () {
            this.$emit('submit', this.satisfaction)
        }
    }
}
</script>

<style lang="scss">
@import '../sass/variables';

.satisfaction-form {
    background-color: $WHITE;
    border-radius: 10px;
    padding: 20px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    label {
        font-size: 28px;
        font-weight: bold;
        transition: color .3s ease-in;
        &.has-text-light-grey {
            color: $LIGHT_GREY;
        }
    }
    button {
        background-color:$PURPLE;
        border: none;
        color:$WHITE;
        padding: 15px 50px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        margin: 40px 2px;
        cursor: pointer;
        -moz-border-radius:28px;
        -webkit-border-radius:28px;
        border-radius:28px;
    }
}
</style>
