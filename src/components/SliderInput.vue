<template>
  <div class="satisfaction-slider">
    <UnhappySmiley class="indicator-smiley" />
    <vue-slider
      class="vue-slider"
      v-model="satisfaction"
      :data="options"
      :process="startFromCenter"
      :dot-size="30"
      :contained="true"
      @drag-start="$emit('drag-start')"
      @drag-end="$emit('drag-end')"
    >
      <template v-slot:tooltip>
        <SliderInputTooltip :satisfaction-level="satisfaction" />
      </template>
    </vue-slider>
    <HappySmiley class="indicator-smiley" />
  </div>
</template>

<script>
import UnhappySmiley from '@/assets/svg/smiley-unhappy.svg'
import HappySmiley from '@/assets/svg/smiley-happy.svg'
import SliderInputTooltip from '@/components/SliderInputTooltip'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
    components: {
        VueSlider,
        SliderInputTooltip,
        UnhappySmiley,
        HappySmiley
    },
    data () {
        return {
            satisfaction: 'neutral',
            options: ['unhappy', 'fairly-unhappy', 'neutral', 'fairly-happy', 'happy'],
            startFromCenter: dotsPos => [[50, dotsPos[0]]]
        }
    }
}
</script>

<style lang="scss">
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
           fill: #B87BF4;
           stroke: #B87BF4;
           stroke-width: 0;
        }
    }
    .vue-slider-dot-handle {
        border: none;
        box-shadow: 0 3px 4px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    }
    .vue-slider-process {
        height: 150%!important;
        top: -25%!important;
        background: linear-gradient(0.25turn, #4ADDE8, #25fa9d);
    }
}
</style>
