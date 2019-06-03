<template>
  <div class="satisfaction-form">
    <label :class="{'has-text-light-grey': isDragging}">How satisfied are you?</label>
    <SliderInput
      class="slider-input"
      @drag-start="isDragging = true"
      @drag-end="isDragging = false"
    />
    <button>
      SUBMIT
    </button>
  </div>
</template>

<script>
import SliderInput from '@/components/SliderInput.vue'

export default {
    name: 'SatisfactionForm',
    data () {
        return {
            isDragging: false
        }
    },
    components: {
        SliderInput
    }
}
</script>

<style lang="scss">
.satisfaction-form {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    label {
        font-size: 28px;
        font-weight: bold;
        transition: color .3s ease-in;
        &.has-text-light-grey {
            color: #E7E7EB;
        }
    }
    button {
        background-color:#B87BF4;
        border: none;
        color:#FFFFFF;
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
