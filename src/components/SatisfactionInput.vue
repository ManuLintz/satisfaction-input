<template>
  <div class="satisfaction-slider">
    <UnhappySmiley class="indicator-smiley" />
    <vue-slider
      :value="value"
      :data="options"
      :process="startFromCenter"
      :dot-size="30"
      :contained="true"
      :tooltip="'focus'"
      @drag-start="$emit('drag-start')"
      @drag-end="$emit('drag-end')"
      @change="newValue => $emit('input', newValue)"
    >
      <template v-slot:tooltip>
        <SatisfactionInputTooltip :satisfaction-level="value" />
      </template>
    </vue-slider>
    <HappySmiley class="indicator-smiley" />
  </div>
</template>

<script>
import UnhappySmiley from '@/assets/svg/smiley-unhappy.svg'
import HappySmiley from '@/assets/svg/smiley-happy.svg'
import SatisfactionInputTooltip from '@/components/SatisfactionInputTooltip'
import VueSlider from 'vue-slider-component'

export default {
    name: 'SatisfactionInput',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    components: {
        VueSlider,
        SatisfactionInputTooltip,
        UnhappySmiley,
        HappySmiley
    },
    data () {
        return {
            options: ['unhappy', 'fairly-unhappy', 'neutral', 'fairly-happy', 'happy'],
            startFromCenter: dotsPos => [[50, dotsPos[0]]] // Passed as a prop to vue-slider-component to start the color bar from the middle
        }
    }
}
</script>

<style lang="scss">
@import '../../node_modules/vue-slider-component/theme/antd.css';
@import '../sass/variables';

.satisfaction-slider {
    display: flex;
    flex-direction: row;
    .vue-slider {
      flex-grow: 1;
    }
    padding-top: 50px;
    .indicator-smiley {
        height: 25px;
        padding-left: 10px;
        padding-right: 10px;
        path {
            fill: #989898;
        }
    }
    .tooltip-smiley {
        padding: 5px;
        height: 50px;
        path {
           fill: $PURPLE;
           stroke: $PURPLE;
           stroke-width: 0;
        }
    }
    /* Overrides vue-slider-component default style */
    .vue-slider-dot-handle {
        border: none;
        box-shadow: 0 3px 4px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    }
    .vue-slider-dot:hover .vue-slider-dot-tooltip {
        opacity: 0;
        visibility: hidden;
    }
    .vue-slider-dot:hover .vue-slider-dot-tooltip-show, .vue-slider-dot-tooltip-show {
        opacity: 1;
        visibility: visible;
    }
    .vue-slider-process {
        height: 150%!important;
        top: -25%!important;
        background: linear-gradient(0.25turn, $SLIDER_LEFT_COLOR, $SLIDER_RIGHT_COLOR);
    }
}
</style>
